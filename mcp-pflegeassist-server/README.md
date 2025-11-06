# 🏥 PflegeAssist MCP Server

MCP (Model Context Protocol) Server für die Verwaltung der PflegeAssist-Anwendung auf Ihrem WD My Cloud EX2 Ultra NAS.

## 🎯 Funktionen

Dieser MCP Server bietet folgende Tools für Claude Code:

### 🔧 Tools

1. **check_web_status** - Prüft den Status Ihrer Website
   - HTTP-Status-Code
   - Dateigröße (prüft ob vollständige Version deployed ist)
   - URL und Erreichbarkeit

2. **list_nas_files** - Listet Dateien auf dem NAS
   - Zeigt alle Dateien im PflegeAssist-Ordner
   - Mit Größe und Berechtigungen

3. **read_nas_file** - Liest Dateien vom NAS
   - Direkter Lesezugriff auf jede Datei
   - Für Code-Reviews und Debugging

4. **write_nas_file** - Schreibt Dateien auf das NAS
   - Direktes Deployment von Änderungen
   - Automatische Code-Updates

5. **execute_ssh_command** - Führt SSH-Befehle aus
   - Volle Shell-Zugriff auf das NAS
   - Für erweiterte Wartungsaufgaben

### 📦 Resources

- **pflegeassist://web/status** - Live Web-Status als JSON
- **pflegeassist://nas/files** - Aktuelle Dateiliste vom NAS

---

## 📥 Installation

### Schritt 1: Abhängigkeiten installieren

Öffnen Sie PowerShell im Projektordner:

```powershell
cd C:\Users\D.Göbel\Pflegeassist\mcp-pflegeassist-server
npm install
```

### Schritt 2: NAS-Passwort konfigurieren

Sie haben **zwei Optionen**:

#### Option A: Umgebungsvariable (Empfohlen)

Fügen Sie das Passwort direkt in die Claude Code Konfiguration ein (siehe Schritt 3).

#### Option B: .env Datei

1. Kopieren Sie `.env.example` zu `.env`:
   ```powershell
   copy .env.example .env
   ```

2. Bearbeiten Sie `.env` und setzen Sie Ihr Passwort:
   ```
   NAS_PASSWORD=ihr_echtes_nas_passwort
   ```

⚠️ **Wichtig**: Committen Sie die `.env` Datei NICHT in Git!

### Schritt 3: Claude Code konfigurieren

#### Für Claude Code:

1. Öffnen Sie die Claude Code Konfiguration:
   ```
   %APPDATA%\Claude\claude_desktop_config.json
   ```

2. Fügen Sie den MCP Server hinzu:
   ```json
   {
     "mcpServers": {
       "pflegeassist-nas": {
         "command": "node",
         "args": [
           "C:\\Users\\D.Göbel\\Pflegeassist\\mcp-pflegeassist-server\\index.js"
         ],
         "env": {
           "NAS_PASSWORD": "IHR_NAS_PASSWORT_HIER"
         }
       }
     }
   }
   ```

3. **Wichtig**: Ersetzen Sie `IHR_NAS_PASSWORT_HIER` mit Ihrem echten NAS-Passwort

4. **Wenn Sie bereits andere MCP Server haben**, fügen Sie nur den `pflegeassist-nas` Block hinzu:
   ```json
   {
     "mcpServers": {
       "existing-server": {
         ...
       },
       "pflegeassist-nas": {
         "command": "node",
         "args": [
           "C:\\Users\\D.Göbel\\Pflegeassist\\mcp-pflegeassist-server\\index.js"
         ],
         "env": {
           "NAS_PASSWORD": "IHR_NAS_PASSWORT_HIER"
         }
       }
     }
   }
   ```

### Schritt 4: Claude Code neu starten

1. Schließen Sie Claude Code vollständig
2. Öffnen Sie Claude Code erneut
3. Der MCP Server sollte automatisch starten

---

## 🚀 Verwendung

### Beispiel 1: Website-Status prüfen

```
Hey Claude, prüfe den Status meiner PflegeAssist-Website
```

Claude wird automatisch das Tool `check_web_status` verwenden und anzeigen:
- Ist die Website erreichbar?
- Welche Version ist deployed? (24KB = Demo, 130KB = Vollversion)
- HTTP-Status

### Beispiel 2: Dateien auf NAS anzeigen

```
Zeige mir alle Dateien im PflegeAssist-Ordner auf dem NAS
```

### Beispiel 3: Datei lesen

```
Lies die index.html vom NAS und zeige mir die ersten 50 Zeilen
```

### Beispiel 4: Code deployen

```
Aktualisiere die index.html auf dem NAS mit folgenden Änderungen: ...
```

### Beispiel 5: SSH-Befehl ausführen

```
Führe 'df -h' auf dem NAS aus, um den Speicherplatz zu prüfen
```

---

## 🔧 Manuelle Ausführung (Debugging)

Sie können den Server auch manuell starten:

```powershell
cd C:\Users\D.Göbel\Pflegeassist\mcp-pflegeassist-server
$env:NAS_PASSWORD="ihr_passwort"
node index.js
```

Der Server wartet dann auf stdio-Eingaben im MCP-Format.

---

## 📝 Konfiguration anpassen

### NAS-IP ändern

Bearbeiten Sie `index.js` Zeile 14-19:

```javascript
const NAS_CONFIG = {
  host: '192.168.2.215',    // Ihre NAS-IP
  port: 22,
  username: 'sshd',         // Ihr SSH-Benutzername
  password: process.env.NAS_PASSWORD || '',
};
```

### Web-URL ändern

Bearbeiten Sie `index.js` Zeile 21:

```javascript
const WEB_URL = 'http://192.168.2.215/pflegeassist/';
```

### NAS-Pfad ändern

Bearbeiten Sie `index.js` Zeile 22:

```javascript
const NAS_PATH = '/shares/Public/pflegeassist';
```

---

## 🛠️ Fehlerbehebung

### Fehler: "Cannot find module '@modelcontextprotocol/sdk'"

**Lösung**: Installieren Sie die Abhängigkeiten erneut:
```powershell
npm install
```

### Fehler: "ECONNREFUSED" oder "Connection timeout"

**Ursache**: NAS ist nicht erreichbar

**Lösung**:
1. Prüfen Sie, ob das NAS eingeschaltet ist
2. Pingen Sie das NAS: `ping 192.168.2.215`
3. Prüfen Sie die IP-Adresse in der Konfiguration

### Fehler: "Authentication failed"

**Ursache**: Falsches Passwort

**Lösung**:
1. Prüfen Sie das Passwort in der Claude Code Konfiguration
2. Testen Sie SSH manuell: `ssh sshd@192.168.2.215`

### MCP Server wird nicht geladen

**Lösung**:
1. Prüfen Sie die Pfade in `claude_desktop_config.json`
2. Stellen Sie sicher, dass Node.js installiert ist: `node --version`
3. Prüfen Sie die Logs in Claude Code (View → Toggle Developer Tools)

---

## 🔒 Sicherheitshinweise

⚠️ **Wichtig**:

1. **Passwort-Speicherung**: Das NAS-Passwort wird in der Claude Code Konfiguration gespeichert
   - Diese Datei ist lokal auf Ihrem Computer
   - Teilen Sie diese Datei NICHT mit anderen
   - Committen Sie sie NICHT in Git

2. **Netzwerk-Sicherheit**:
   - Der Server verbindet sich nur zu Ihrer lokalen NAS-IP (192.168.2.215)
   - Es werden keine externen Verbindungen hergestellt

3. **SSH-Zugriff**:
   - Der Server hat vollen SSH-Zugriff auf Ihr NAS
   - Claude kann theoretisch jeden SSH-Befehl ausführen
   - Verwenden Sie diesen Server nur mit vertrauenswürdigen Prompts

---

## 📊 Technische Details

- **Protokoll**: Model Context Protocol (MCP) 1.0
- **Transport**: stdio
- **Sprache**: JavaScript (ES Modules)
- **Runtime**: Node.js 18+
- **SSH-Client**: ssh2
- **Dependencies**:
  - `@modelcontextprotocol/sdk`: ^0.5.0
  - `ssh2`: ^1.15.0
  - `node-fetch`: ^3.3.2

---

## 📄 Lizenz

MIT License - Siehe Hauptprojekt

---

## 🤝 Support

Bei Problemen:
1. Prüfen Sie die Logs in Claude Code Developer Tools
2. Testen Sie die SSH-Verbindung manuell
3. Starten Sie Claude Code neu
4. Prüfen Sie die Node.js-Installation

---

## 🎉 Fertig!

Nach der Installation können Sie Claude direkt nach Informationen über Ihr NAS-Deployment fragen, und Claude wird automatisch die richtigen Tools verwenden!

**Beispiel-Prompt**:
```
Hey Claude, prüfe ob meine PflegeAssist-Website auf dem NAS läuft
und zeige mir die Dateigröße. Ist die vollständige Version deployed?
```
