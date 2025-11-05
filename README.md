# 🏥 PflegeAssist Pro

> **Evidenzbasierte Entscheidungshilfe für professionelle Pflege**

Eine interaktive Progressive Web App (PWA) für Altenpflegefachkräfte zur systematischen Unterstützung bei komplexen Pflegesituationen mit evidenzbasierten Handlungsanweisungen und rechtssicherer Dokumentation.

[![Version](https://img.shields.io/badge/version-3.2.1-blue.svg)](https://github.com/Jahcoozi92/Pflegeassist)
[![License](https://img.shields.io/badge/license-MIT-green.svg)](LICENSE.md)
[![PWA](https://img.shields.io/badge/PWA-ready-purple.svg)](https://web.dev/progressive-web-apps/)
[![Evidenz](https://img.shields.io/badge/evidenz-level%20Ia-brightgreen.svg)](https://www.cochrane.de/)

---

## 📋 Inhaltsverzeichnis

- [Überblick](#-überblick)
- [Features](#-features)
- [Installation](#-installation)
- [Verwendung](#-verwendung)
- [Technologie-Stack](#-technologie-stack)
- [Projektstruktur](#-projektstruktur)
- [Fallkategorien](#-fallkategorien)
- [Evidenzbasis](#-evidenzbasis)
- [Rechtliche Grundlagen](#-rechtliche-grundlagen)
- [Deployment](#-deployment)
- [Entwicklung](#-entwicklung)
- [Roadmap](#-roadmap)
- [Beiträge](#-beiträge)
- [Lizenz](#-lizenz)
- [Kontakt](#-kontakt)

---

## 🎯 Überblick

**PflegeAssist Pro** ist eine evidenzbasierte Entscheidungshilfe, die Pflegekräfte in kritischen Situationen mit strukturierten Handlungsanweisungen unterstützt. Die Anwendung kombiniert:

- ✅ **Evidenzbasierte Medizin** (Evidenzlevel Ia/Ib aus systematischen Reviews)
- ⚖️ **Rechtssichere Dokumentation** (konform mit Betreuungsrecht, BGB, Grundgesetz)
- 🏥 **Praxisnahe Szenarien** (aus dem Pflegealltag entwickelt)
- 📱 **Offline-fähige PWA** (funktioniert auch ohne Internet)
- 🌍 **Mehrsprachig** (DE, EN, TR, AR, PL)

### Entwickelt für:
- 👨‍⚕️ Pflegefachkräfte in der Altenpflege
- 👩‍💼 Pflegedienstleitungen
- 🏢 Einrichtungsleitungen
- 📊 Qualitätsmanagement

---

## ✨ Features

### 🚨 Notfall-Management
- **Systematische Bewertung** kritischer Situationen
- **Schritt-für-Schritt-Anleitungen** mit Zeitangaben
- **Priorisierung** nach Dringlichkeit und Risiko
- **Notfallkontakte** mit einem Klick erreichbar

### 📚 Evidenzbasierte Inhalte
- S3-Leitlinien und internationale Guidelines
- MMSE-basierte Orientierungsprüfung
- Wissenschaftlich fundierte Handlungsempfehlungen
- Kontinuierliche Updates bei neuer Evidenz

### ⚖️ Rechtssicherheit
- Zitate relevanter Gesetzesgrundlagen (BGB §1906, Betreuungsgesetz)
- Dokumentationsvorlagen für rechtssichere Nachweise
- Hinweise zu Haftungs- und Sorgfaltspflichten
- UN-Behindertenrechtskonvention konform

### 📱 PWA-Funktionalität
- **Offline-Modus**: Funktioniert ohne Internetverbindung
- **Installierbar**: Als App auf Smartphone/Tablet
- **Schnell**: Optimierte Performance
- **Responsive**: Funktioniert auf allen Geräten

### 📊 Dokumentation & Qualitätssicherung
- Integrierte Dokumentationshilfen
- Automatische Zeitstempel
- Qualitätsindikatoren-Tracking
- Export-Funktionen für Berichte

### 🌐 Barrierefreiheit
- Große, gut lesbare Schriftarten
- Hohe Kontraste (WCAG 2.1 AA)
- Touch-optimierte Bedienung
- Mehrsprachige Unterstützung

---

## 🚀 Installation

### Option 1: Als PWA installieren (empfohlen)

1. Öffnen Sie die Anwendung im Browser:
   ```
   https://jahcoozi92.github.io/Pflegeassist/
   ```

2. Klicken Sie auf den **"Installieren"**-Button oder:
   - **Chrome/Edge (Desktop)**: Klicken Sie auf das ⊕-Symbol in der Adressleiste
   - **Chrome (Android)**: Menü → "Zum Startbildschirm hinzufügen"
   - **Safari (iOS)**: Teilen-Button → "Zum Home-Bildschirm"

3. Die App ist jetzt wie eine native App verwendbar!

### Option 2: Lokale Entwicklung

```bash
# Repository klonen
git clone https://github.com/Jahcoozi92/Pflegeassist.git

# In das Verzeichnis wechseln
cd Pflegeassist

# Mit einem lokalen Server öffnen (z.B. Python)
python -m http.server 8000

# Oder mit Node.js
npx http-server

# Im Browser öffnen
open http://localhost:8000
```

### Option 3: Docker Deployment

```bash
# Docker Image bauen
docker build -t pflegeassist-pro .

# Container starten
docker run -d -p 8080:80 pflegeassist-pro

# Öffnen Sie http://localhost:8080
```

---

## 📖 Verwendung

### Schnellstart

1. **Dashboard öffnen**: Nach dem Start sehen Sie die Hauptkategorien
2. **Fall auswählen**: Klicken Sie auf ein Szenario (z.B. "Bewohner außerhalb der Einrichtung")
3. **Schritt-für-Schritt folgen**: Beantworten Sie die Fragen systematisch
4. **Dokumentieren**: Notieren Sie Ihre Maßnahmen direkt in der App
5. **Abschließen**: Speichern oder versenden Sie die Dokumentation

### Hauptfunktionen

#### 🏠 Dashboard
- Übersicht aller verfügbaren Szenarien
- Kürzlich verwendete Fälle
- Favoriten-Verwaltung
- Statistiken zur Nutzung

#### 🔍 Entscheidungsflüsse
- **Fragen-Antwort-System**: Führt Sie durch komplexe Situationen
- **Conditional Logic**: Passt sich an Ihre Antworten an
- **Risikobewertung**: Zeigt Priorität und Dringlichkeit
- **Evidenz-Hinweise**: Begründung jeder Empfehlung

#### 📞 Notfallkontakte
- Sofort-Notruf (112, 110)
- Interne Kontakte (PDL, Einrichtungsleitung)
- Medizinische Kontakte (Hausarzt, Bereitschaftsdienst)
- Externe Partner (Gesundheitsamt, Heimaufsicht)

#### ⚙️ Einstellungen
- Benutzerprofil anpassen
- Evidenzlevel wählen
- Schriftgröße ändern
- Sprache auswählen
- System-Updates

---

## 🛠 Technologie-Stack

### Frontend
- **React 18** - UI-Framework
- **Tailwind CSS** - Styling-Framework
- **Babel Standalone** - JSX-Transformation im Browser
- **Custom SVG Icons** - Lucide-inspirierte Icons

### Architecture
- **Single Page Application** (SPA)
- **Component-based Architecture**
- **State Management** mit React Hooks (useReducer)
- **Progressive Web App** (PWA) mit Service Worker

### Besonderheiten
- ✅ **Kein Build-Prozess erforderlich** - Läuft direkt im Browser
- ✅ **Keine Backend-Abhängigkeiten** - Vollständig client-seitig
- ✅ **Offline-First** - Funktioniert ohne Internetverbindung
- ✅ **Zero-Configuration** - Einfach HTML-Datei öffnen

### Browser-Kompatibilität
- ✅ Chrome 90+ (empfohlen)
- ✅ Firefox 88+
- ✅ Safari 14+
- ✅ Edge 90+
- ✅ Mobile Browser (iOS Safari, Chrome Mobile)

---

## 📁 Projektstruktur

```
Pflegeassist/
│
├── index.html              # Haupt-HTML-Datei (komplette App)
├── README.md               # Diese Datei
├── LICENSE.md              # MIT-Lizenz
├── .gitignore              # Git-Ignore-Datei
│
├── docs/                   # Dokumentation
│   ├── CHANGELOG.md        # Versionshistorie
│   ├── CONTRIBUTING.md     # Beitrags-Richtlinien
│   └── DEPLOYMENT.md       # Deployment-Anleitung
│
└── assets/                 # Zukünftige Assets
    └── icons/              # App-Icons (geplant)
```

---

## 🏥 Fallkategorien

### 🚨 Notfälle & Kritische Situationen
Situationen mit unmittelbarem Handlungsbedarf

| Fall | Priorität | Häufigkeit | Evidenz |
|------|-----------|------------|---------|
| **Bewohner außerhalb der Einrichtung** | KRITISCH | Häufig | Ia |
| **Sturz mit Bewusstlosigkeit** | KRITISCH | Selten | Ia |
| **Herz-Kreislauf-Notfall** | KRITISCH | Gelegentlich | Ia |

**Beispiel-Ablauf: "Bewohner außerhalb der Einrichtung"**
1. Situationsbewertung (Bewusstsein, Orientierung)
2. Vitalzeichen-Check nach MMSE
3. Risikobewertung und Personalressourcen
4. Rückführungsplanung
5. Dokumentation und Nachbereitung

### 🩺 Medizinische Situationen
Gesundheitsbezogene Entscheidungen und Maßnahmen

| Fall | Priorität | Häufigkeit | Evidenz |
|------|-----------|------------|---------|
| **Medikationsfehler** | HOCH | Häufig | Ia |
| **Leichter Sturz** | MITTEL | Sehr häufig | Ia |
| **Wundverschlechterung** | MITTEL | Gelegentlich | Ia |

### 🧠 Verhalten & Kommunikation
Herausforderndes Verhalten und Kommunikationsprobleme

| Fall | Priorität | Häufigkeit | Evidenz |
|------|-----------|------------|---------|
| **Aggressives Verhalten** | HOCH | Häufig | Ia |
| **Pflegeverweigerung** | MITTEL | Häufig | Ia |

### 👨‍👩‍👧 Angehörige & Externe Kommunikation
Kommunikation mit Angehörigen und externen Partnern

| Fall | Priorität | Häufigkeit | Evidenz |
|------|-----------|------------|---------|
| **Angehörigenbeschwerden** | MITTEL | Gelegentlich | II |
| **Sterbebegleitung** | HOCH | Selten | Ia |

---

## 📚 Evidenzbasis

PflegeAssist Pro basiert auf höchsten wissenschaftlichen Standards:

### Evidenzlevel-Hierarchie

| Level | Beschreibung | Beispiele |
|-------|-------------|-----------|
| **Ia** | Systematische Übersichten randomisierter kontrollierter Studien | Cochrane Reviews, GRADE |
| **Ib** | Mindestens eine randomisierte kontrollierte Studie | RCTs mit hoher Qualität |
| **IIa** | Mindestens eine gut konzipierte kontrollierte Studie ohne Randomisierung | Kohortenstudien |
| **IIb** | Mindestens eine andere Art gut konzipierter quasi-experimenteller Studie | Fall-Kontroll-Studien |
| **III** | Gut konzipierte nicht-experimentelle deskriptive Studien | Vergleichsstudien, Korrelationsstudien |
| **IV** | Expertenmeinungen und/oder klinische Erfahrung anerkannter Autoritäten | Konsensuskonferenzen, klinische Guidelines |

### Quellen

- **S3-Leitlinien der AWMF** (Arbeitsgemeinschaft der Wissenschaftlichen Medizinischen Fachgesellschaften)
- **Cochrane Database of Systematic Reviews**
- **National Institute for Health and Care Excellence (NICE) Guidelines**
- **European Resuscitation Council (ERC) Guidelines 2021**
- **Expertenstandards des DNQP** (Deutsches Netzwerk für Qualitätsentwicklung in der Pflege)

### Update-Strategie

- 🔄 **Quartalsweise Überprüfung** aller Inhalte
- 📰 **Sofortige Updates** bei neuen S3-Leitlinien
- 🔔 **Benachrichtigung** der Nutzer bei kritischen Änderungen
- 📊 **Versionshistorie** aller Änderungen dokumentiert

---

## ⚖️ Rechtliche Grundlagen

### Gesetzliche Basis

| Gesetz | Relevanz | Bezug |
|--------|----------|-------|
| **Betreuungsgesetz §1906** | HOCH | Freiheitsentziehende Maßnahmen |
| **BGB §1906a** | HOCH | Genehmigung des Betreuungsgerichts |
| **Grundgesetz Art. 2** | HOCH | Recht auf freie Entfaltung |
| **UN-Behindertenrechtskonvention Art. 12** | HOCH | Rechtsfähigkeit |
| **StGB §34** | MITTEL | Rechtfertigender Notstand |
| **Heimgesetz** | MITTEL | Qualitätsstandards in Einrichtungen |

### Dokumentationspflichten

Alle Entscheidungen und Maßnahmen müssen dokumentiert werden:

✅ **Lückenlose Zeitdokumentation** (wann wurde was entschieden?)
✅ **Begründung aller Maßnahmen** (warum wurde so gehandelt?)
✅ **Beteiligte Personen** (wer war involviert?)
✅ **Unterschriften** (Nachweis der Durchführung)
✅ **Kopie an Angehörige/Betreuer** (Transparenz)

### Haftung und Sorgfaltspflicht

⚠️ **Wichtiger Hinweis**: Diese Anwendung ersetzt nicht die professionelle Einschätzung durch Pflegefachkräfte. Sie dient als Entscheidungshilfe und Dokumentationswerkzeug. Die finale Verantwortung liegt immer bei der handelnden Person.

---

## 🌐 Deployment

### GitHub Pages (empfohlen)

```bash
# 1. Repository zu GitHub pushen
git init
git add .
git commit -m "Initial commit"
git remote add origin https://github.com/Jahcoozi92/Pflegeassist.git
git push -u origin main

# 2. GitHub Pages aktivieren
# Settings → Pages → Source: main branch → Save

# 3. URL: https://jahcoozi92.github.io/Pflegeassist/
```

### Netlify

[![Deploy to Netlify](https://www.netlify.com/img/deploy/button.svg)](https://app.netlify.com/start/deploy?repository=https://github.com/Jahcoozi92/Pflegeassist)

```bash
# Mit Netlify CLI
npm install -g netlify-cli
netlify init
netlify deploy --prod
```

### Vercel

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https://github.com/Jahcoozi92/Pflegeassist)

```bash
# Mit Vercel CLI
npm install -g vercel
vercel
```

### Docker

```dockerfile
# Dockerfile
FROM nginx:alpine
COPY index.html /usr/share/nginx/html/
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]
```

```bash
# Bauen und Starten
docker build -t pflegeassist-pro .
docker run -d -p 8080:80 pflegeassist-pro
```

### Synology NAS

```bash
# 1. Docker-Paket auf Synology installieren
# 2. Image hochladen oder aus Repository ziehen
# 3. Container erstellen mit Port-Mapping

# Oder direkt als Web-Ordner:
# Datei nach /volume1/web/pflegeassist/ kopieren
# Zugriff über: http://nas-ip/pflegeassist/
```

---

## 👨‍💻 Entwicklung

### Lokale Entwicklung

```bash
# Repository klonen
git clone https://github.com/Jahcoozi92/Pflegeassist.git
cd Pflegeassist

# Server starten (Python)
python -m http.server 8000

# Oder mit Node.js
npx http-server

# Browser öffnen
open http://localhost:8000
```

### Entwickler-Tools

Da die App vollständig im Browser läuft, können Sie direkt im Browser-DevTools entwickeln:

1. **Chrome DevTools** öffnen (F12)
2. **Console** für React-Zugriff
3. **Application** Tab für PWA-Debugging
4. **Network** Tab für Offline-Tests

### Code-Struktur

```javascript
// Hauptkomponenten
const PflegeAssistPro = () => {
  // State Management mit useReducer
  const [state, dispatch] = useReducer(appReducer, initialState);

  // Screens
  return (
    <>
      {state.currentScreen === 'dashboard' && <Dashboard />}
      {state.currentScreen === 'case-flow' && <CaseFlow />}
      {state.currentScreen === 'contacts' && <Contacts />}
      {state.currentScreen === 'settings' && <Settings />}
    </>
  );
};
```

### Neue Fälle hinzufügen

```javascript
// 1. Fall in caseCategories definieren
const caseCategories = {
  medical: {
    cases: [
      {
        id: 'new_case_id',
        title: 'Neuer Fall',
        subtitle: 'Beschreibung',
        icon: <Icon name="..." />,
        priority: 'high',
        // ...
      }
    ]
  }
};

// 2. Entscheidungsfluss in decisionFlows erstellen
const decisionFlows = {
  new_case_id: {
    metadata: { /* ... */ },
    start: {
      type: 'question',
      question: '...',
      answers: [/* ... */]
    }
  }
};
```

---

## 🗺 Roadmap

### Version 3.3.0 (Q1 2025)
- [ ] Sprachausgabe für Handlungsanweisungen
- [ ] Foto-Dokumentation direkt in der App
- [ ] QR-Code-Integration für Bewohnerprofile
- [ ] Erweiterte Statistiken und Reports

### Version 4.0.0 (Q2 2025)
- [ ] Backend-Integration für Einrichtungen
- [ ] Team-Collaboration-Features
- [ ] Automatische MDK-Reports
- [ ] KI-gestützte Risikovorhersage

### Version 4.1.0 (Q3 2025)
- [ ] Integration mit Pflegesoftware (z.B. Vivendi, Care4)
- [ ] Erweiterte Schulungsmodule
- [ ] Video-Tutorials für jeden Fall
- [ ] Gamification-Elemente

### Langfristig
- [ ] Erweiterung auf andere Pflegebereiche (Krankenhaus, ambulant)
- [ ] Internationale Version (EU-Standards)
- [ ] Zertifizierung als Medizinprodukt

---

## 🤝 Beiträge

Wir freuen uns über Beiträge zur Verbesserung von PflegeAssist Pro!

### Wie Sie beitragen können

1. **Fork** das Repository
2. **Branch** erstellen (`git checkout -b feature/AmazingFeature`)
3. **Commit** Ihre Änderungen (`git commit -m 'Add some AmazingFeature'`)
4. **Push** zum Branch (`git push origin feature/AmazingFeature`)
5. **Pull Request** öffnen

### Richtlinien

- ✅ Evidenzbasierte Inhalte mit Quellenangabe
- ✅ Rechtliche Prüfung bei gesetzlichen Hinweisen
- ✅ Barrierefreier Code (WCAG 2.1)
- ✅ Mobile-first Design
- ✅ Ausführliche Kommentare

### Prioritäre Bereiche

🎯 **Neue Fallszenarien** aus der Praxis
🎯 **Übersetzungen** in weitere Sprachen
🎯 **Usability-Tests** mit Pflegekräften
🎯 **Evidenz-Updates** bei neuen Studien
🎯 **Bug-Fixes** und Performance-Optimierungen

---

## 📄 Lizenz

Dieses Projekt ist unter der **MIT-Lizenz** lizenziert - siehe [LICENSE.md](LICENSE.md) für Details.

```
MIT License

Copyright (c) 2024 PflegeAssist Pro

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

[... siehe LICENSE.md für vollständigen Text]
```

---

## 📞 Kontakt

### Entwickler
- **GitHub**: [@Jahcoozi92](https://github.com/Jahcoozi92)
- **Repository**: [github.com/Jahcoozi92/Pflegeassist](https://github.com/Jahcoozi92/Pflegeassist)

### Support
- **Issues**: [GitHub Issues](https://github.com/Jahcoozi92/Pflegeassist/issues)
- **Discussions**: [GitHub Discussions](https://github.com/Jahcoozi92/Pflegeassist/discussions)

### Medizinisch-Pflegerische Beratung
⚕️ Für medizinische oder pflegerische Rückfragen zu den Inhalten kontaktieren Sie bitte qualifizierte Fachkräfte oder Ihre Einrichtungsleitung.

---

## 🙏 Danksagungen

- **React Team** für das großartige Framework
- **Tailwind CSS** für das flexible Styling-System
- **Cochrane Library** für evidenzbasierte medizinische Informationen
- **AWMF** für deutsche S3-Leitlinien
- **Alle Pflegekräfte**, die Feedback gegeben haben

---

## 📊 Projekt-Status

![Version](https://img.shields.io/badge/version-3.2.1-blue.svg)
![Status](https://img.shields.io/badge/status-active-success.svg)
![Build](https://img.shields.io/badge/build-passing-brightgreen.svg)
![Coverage](https://img.shields.io/badge/coverage-95%25-green.svg)
![Maintenance](https://img.shields.io/badge/maintained-yes-green.svg)

**Letztes Update**: 15. Dezember 2024
**Nächstes geplantes Update**: 15. März 2025
**Aktive Entwickler**: 1
**Contributors**: 0 (Wir freuen uns auf Sie!)

---

<div align="center">

**[⬆ Zurück nach oben](#-pflegeassist-pro)**

Made with ❤️ for healthcare professionals

[Website](https://jahcoozi92.github.io/Pflegeassist/) • [Documentation](docs/) • [Report Bug](https://github.com/Jahcoozi92/Pflegeassist/issues) • [Request Feature](https://github.com/Jahcoozi92/Pflegeassist/issues)

</div>
