#!/usr/bin/env node

import { Server } from '@modelcontextprotocol/sdk/server/index.js';
import { StdioServerTransport } from '@modelcontextprotocol/sdk/server/stdio.js';
import {
  CallToolRequestSchema,
  ListToolsRequestSchema,
  ListResourcesRequestSchema,
  ReadResourceRequestSchema,
} from '@modelcontextprotocol/sdk/types.js';
import { Client } from 'ssh2';
import fetch from 'node-fetch';

// NAS Konfiguration
const NAS_CONFIG = {
  host: '192.168.2.215',
  port: 22,
  username: 'sshd',
  // Passwort wird über Umgebungsvariable geladen
  password: process.env.NAS_PASSWORD || '',
};

const WEB_URL = 'http://192.168.2.215/pflegeassist/';
const NAS_PATH = '/shares/Public/pflegeassist';

/**
 * SSH-Befehl auf dem NAS ausführen
 */
async function executeSSHCommand(command) {
  return new Promise((resolve, reject) => {
    const conn = new Client();
    let output = '';
    let errorOutput = '';

    conn.on('ready', () => {
      conn.exec(command, (err, stream) => {
        if (err) {
          conn.end();
          return reject(err);
        }

        stream.on('close', (code) => {
          conn.end();
          if (code !== 0) {
            reject(new Error(`Command failed with code ${code}: ${errorOutput}`));
          } else {
            resolve(output);
          }
        });

        stream.on('data', (data) => {
          output += data.toString();
        });

        stream.stderr.on('data', (data) => {
          errorOutput += data.toString();
        });
      });
    });

    conn.on('error', (err) => {
      reject(err);
    });

    conn.connect(NAS_CONFIG);
  });
}

/**
 * Datei vom NAS lesen
 */
async function readNASFile(filePath) {
  const command = `cat ${filePath}`;
  return await executeSSHCommand(command);
}

/**
 * Datei auf NAS schreiben
 */
async function writeNASFile(filePath, content) {
  // Escape single quotes in content
  const escapedContent = content.replace(/'/g, "'\\''");
  const command = `echo '${escapedContent}' > ${filePath}`;
  return await executeSSHCommand(command);
}

/**
 * Web-Status prüfen
 */
async function checkWebStatus() {
  try {
    const response = await fetch(WEB_URL);
    const html = await response.text();
    const size = Buffer.byteLength(html, 'utf8');

    return {
      status: response.status,
      statusText: response.statusText,
      size: size,
      sizeKB: (size / 1024).toFixed(2),
      isFullVersion: size > 100000, // > 100KB = vollständige Version
      url: WEB_URL,
    };
  } catch (error) {
    return {
      status: 'error',
      error: error.message,
      url: WEB_URL,
    };
  }
}

/**
 * NAS-Dateien auflisten
 */
async function listNASFiles(path = NAS_PATH) {
  const command = `ls -lh ${path}`;
  return await executeSSHCommand(command);
}

/**
 * MCP Server erstellen
 */
const server = new Server(
  {
    name: 'pflegeassist-nas-server',
    version: '1.0.0',
  },
  {
    capabilities: {
      tools: {},
      resources: {},
    },
  }
);

/**
 * Tools registrieren
 */
server.setRequestHandler(ListToolsRequestSchema, async () => {
  return {
    tools: [
      {
        name: 'check_web_status',
        description: 'Prüft den Status der PflegeAssist-Website auf dem NAS',
        inputSchema: {
          type: 'object',
          properties: {},
        },
      },
      {
        name: 'list_nas_files',
        description: 'Listet Dateien im PflegeAssist-Ordner auf dem NAS',
        inputSchema: {
          type: 'object',
          properties: {
            path: {
              type: 'string',
              description: 'Pfad auf dem NAS (optional, Standard: /shares/Public/pflegeassist)',
            },
          },
        },
      },
      {
        name: 'read_nas_file',
        description: 'Liest eine Datei vom NAS',
        inputSchema: {
          type: 'object',
          properties: {
            file_path: {
              type: 'string',
              description: 'Vollständiger Pfad zur Datei auf dem NAS',
            },
          },
          required: ['file_path'],
        },
      },
      {
        name: 'write_nas_file',
        description: 'Schreibt eine Datei auf das NAS',
        inputSchema: {
          type: 'object',
          properties: {
            file_path: {
              type: 'string',
              description: 'Vollständiger Pfad zur Datei auf dem NAS',
            },
            content: {
              type: 'string',
              description: 'Inhalt der Datei',
            },
          },
          required: ['file_path', 'content'],
        },
      },
      {
        name: 'execute_ssh_command',
        description: 'Führt einen SSH-Befehl auf dem NAS aus',
        inputSchema: {
          type: 'object',
          properties: {
            command: {
              type: 'string',
              description: 'Der auszuführende SSH-Befehl',
            },
          },
          required: ['command'],
        },
      },
    ],
  };
});

/**
 * Tool-Aufrufe verarbeiten
 */
server.setRequestHandler(CallToolRequestSchema, async (request) => {
  const { name, arguments: args } = request.params;

  try {
    switch (name) {
      case 'check_web_status': {
        const status = await checkWebStatus();
        return {
          content: [
            {
              type: 'text',
              text: JSON.stringify(status, null, 2),
            },
          ],
        };
      }

      case 'list_nas_files': {
        const path = args.path || NAS_PATH;
        const files = await listNASFiles(path);
        return {
          content: [
            {
              type: 'text',
              text: files,
            },
          ],
        };
      }

      case 'read_nas_file': {
        const content = await readNASFile(args.file_path);
        return {
          content: [
            {
              type: 'text',
              text: content,
            },
          ],
        };
      }

      case 'write_nas_file': {
        await writeNASFile(args.file_path, args.content);
        return {
          content: [
            {
              type: 'text',
              text: `Datei erfolgreich geschrieben: ${args.file_path}`,
            },
          ],
        };
      }

      case 'execute_ssh_command': {
        const output = await executeSSHCommand(args.command);
        return {
          content: [
            {
              type: 'text',
              text: output,
            },
          ],
        };
      }

      default:
        throw new Error(`Unbekanntes Tool: ${name}`);
    }
  } catch (error) {
    return {
      content: [
        {
          type: 'text',
          text: `Fehler: ${error.message}`,
        },
      ],
      isError: true,
    };
  }
});

/**
 * Resources registrieren
 */
server.setRequestHandler(ListResourcesRequestSchema, async () => {
  return {
    resources: [
      {
        uri: 'pflegeassist://web/status',
        name: 'Web Status',
        description: 'Aktueller Status der PflegeAssist-Website',
        mimeType: 'application/json',
      },
      {
        uri: 'pflegeassist://nas/files',
        name: 'NAS Dateien',
        description: 'Liste der Dateien auf dem NAS',
        mimeType: 'text/plain',
      },
    ],
  };
});

/**
 * Resource-Lesezugriffe verarbeiten
 */
server.setRequestHandler(ReadResourceRequestSchema, async (request) => {
  const { uri } = request.params;

  switch (uri) {
    case 'pflegeassist://web/status': {
      const status = await checkWebStatus();
      return {
        contents: [
          {
            uri,
            mimeType: 'application/json',
            text: JSON.stringify(status, null, 2),
          },
        ],
      };
    }

    case 'pflegeassist://nas/files': {
      const files = await listNASFiles();
      return {
        contents: [
          {
            uri,
            mimeType: 'text/plain',
            text: files,
          },
        ],
      };
    }

    default:
      throw new Error(`Unbekannte Resource: ${uri}`);
  }
});

/**
 * Server starten
 */
async function main() {
  const transport = new StdioServerTransport();
  await server.connect(transport);
  console.error('PflegeAssist MCP Server läuft...');
}

main().catch((error) => {
  console.error('Server-Fehler:', error);
  process.exit(1);
});
