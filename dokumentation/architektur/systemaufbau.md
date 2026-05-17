# Systemaufbau – Livsvei

## 1. Grundprinzip
Livsvei ist ein modular aufgebautes System, das Inhalt, Gestaltung, Logik und Dramaturgie klar voneinander trennt.  
Jedes Modul besitzt eine eindeutige Verantwortung und bleibt unabhängig, um Stabilität, Erweiterbarkeit und langfristige Wartbarkeit zu gewährleisten.

---

## 2. Hauptstruktur (Ordner)
- **/inhalt** → Texte, Karten, Legesysteme, Runen, Weisheiten  
- **/assets** → Grafiken, Icons, Logos  
- **/dokumentation** → Architektur, Module, Branding, rechtliche Grundlagen  
- **/src** → technische Module, Engine, Komponenten, Layouts, Stile  
- **/public** → statische Dateien für Veröffentlichung  

Diese Struktur trennt Inhalt, Technik und Darstellung konsequent voneinander.

---

## 3. Technische Architektur
Livsvei basiert auf einer modernen, serverlosen Umgebung:

- Framework: **Astro** (statische & dynamische Seiten)  
- Hosting: **Vercel**  
- Synchronisation: **Microsoft OneDrive**  
- Sprache: **JavaScript / TypeScript**  
- Styling: **TailwindCSS** oder modulare CSS-Dateien  

Die Architektur ist leichtgewichtig, schnell und ideal für modulare Erweiterungen.

---

## 4. Core‑Module (Herz des Systems)

### **4.1 Free‑Modus (Fokus)**
Der zentrale Modus von Livsvei.  
Beinhaltet:
- Ablauf & UI‑Flow  
- Kategorien  
- Textbausteine  
- Fragefilter‑Integration  
- Kompatibilität zu Legesystemen  

### **4.2 Fragefilter‑Engine**
Die Wächterfunktion des Systems.  
Beinhaltet:
- globale Filter  
- legesystem‑spezifische Filter  
- Umformulierungslogik  
- Eskalationslogik für sensible Fragen  

### **4.3 Ampelsystem**
Schutzmechanismus für alle Eingaben.  
Beinhaltet:
- Ampelstufen (Grün/Gelb/Rot)  
- Eskalationsregeln  
- Weiterleitungen & Abbrüche  
- Verbindung zur Fragefilter‑Engine  

### **4.4 Ritual‑Module pro Legesystem**
Jedes Legesystem erhält ein eigenes Modul:
- dramaturgischer Ablauf  
- eigene Fragefilter  
- eigene Logik  
- eigene Textbausteine  

### **4.5 Tempel‑Modul**
Der Wissensort von Livsvei.  
Beinhaltet:
- Bibliothek  
- Chronik  
- Texte  
- Recht  
- Archiv  
- Systemwissen  

---

## 5. Sekundäre Module (UI & Erweiterungen)

### **5.1 Startseite (UI‑Modul)**
- Logo  
- Begrüßung  
- drei Wege (Tempel – Orakel – Vitki)  
- Header & Footer  
- Stilrichtlinien (ruhig, modern, minimalistisch)

### **5.2 Premium‑Modus** *(Baustelle)*  
### **5.3 Manueller Modus** *(Baustelle)*  

Diese Module sind vorbereitet, aber noch nicht aktiv.

---

## 6. Infrastruktur & Datenquellen

### **6.1 CSV‑Datenquellen**
- fragefilter_global.csv  
- fragefilter_legsystem.csv  
- fragefilter_umformulierung.csv  
- ritual‑spezifische CSVs  
- optionale textbausteine.csv  

### **6.2 UI‑Routing**
- Startseite  
- Tempel  
- Orakel  
- Vitki  
- Free‑Modus  
- Legesysteme  

### **6.3 Systemwissen**
Dokumentation der Regeln, Logiken, Dramaturgie und internen Abläufe.

---

## 7. Datenfluss
1. Inhalte aus `/inhalt` werden als Markdown geladen.  
2. Die Engine in `/src` interpretiert diese Inhalte.  
3. Ritual‑Module und Free‑Modus verarbeiten Eingaben.  
4. Layouts verbinden Module und Inhalte zu vollständigen Seiten.  
5. Assets liefern visuelle Elemente (Logo, Icons, Grafiken).  
6. Dokumentation beschreibt Struktur, Philosophie und rechtliche Grundlagen.

---

## 8. Erweiterbarkeit
Neue Module oder Funktionen können jederzeit hinzugefügt werden, solange sie:
- eine eigene Verantwortung haben  
- keine bestehenden Module direkt verändern  
- über definierte Schnittstellen kommunizieren  

---

## 9. Ziel
Ein stabiles, transparentes System, das Technik, Dramaturgie und Klarheit vereint.  
Livsvei soll langfristig erweiterbar bleiben – für neue Inhalte, Interaktionen und visuelle Formen.
