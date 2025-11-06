# 🚀 Quick Start Guide - PflegeAssist MCP Server

## 3-Minuten-Installation

### 1️⃣ Abhängigkeiten installieren

```powershell
cd C:\Users\D.Göbel\Pflegeassist\mcp-pflegeassist-server
npm install
```

### 2️⃣ Claude Code konfigurieren

Öffnen Sie:
```
%APPDATA%\Claude\claude_desktop_config.json
```

Fügen Sie hinzu:
```json
{
  "mcpServers": {
    "pflegeassist-nas": {
      "command": "node",
      "args": ["C:\\Users\\D.Göbel\\Pflegeassist\\mcp-pflegeassist-server\\index.js"],
      "env": {
        "NAS_PASSWORD": "IHR_NAS_PASSWORT"
      }
    }
  }
}
```

⚠️ **Wichtig**: Ersetzen Sie `IHR_NAS_PASSWORT` mit Ihrem echten NAS-Passwort!

### 3️⃣ Claude Code neu starten

Schließen und öffnen Sie Claude Code komplett neu.

---

## ✅ Test

Fragen Sie Claude:

```
Prüfe den Status meiner PflegeAssist-Website auf dem NAS
```

Wenn Claude antwortet mit Web-Status und Dateigröße → **Erfolgreich! 🎉**

---

## 🔧 Verfügbare Befehle

Nach der Installation können Sie Claude fragen:

- ✅ **"Prüfe ob meine Website auf dem NAS läuft"**
- 📁 **"Zeige mir alle Dateien im PflegeAssist-Ordner"**
- 📄 **"Lies die index.html vom NAS"**
- 💾 **"Aktualisiere die Datei XY auf dem NAS"**
- 🖥️ **"Führe den Befehl 'df -h' auf dem NAS aus"**

Claude wird automatisch die richtigen MCP-Tools verwenden!

---

## ❓ Probleme?

Siehe ausführliche Anleitung in [README.md](./README.md)
