# Modul-Übersicht – Livsvei

## 1. Ziel
Diese Übersicht beschreibt alle technischen, dramaturgischen und UI‑Module von Livsvei.  
Jedes Modul besitzt eine klar definierte Aufgabe und bleibt unabhängig, um Stabilität, Erweiterbarkeit und langfristige Wartbarkeit zu gewährleisten.

---

## 2. Core‑Module (Ordner: /src)

| Modulname | Funktion | Status | Beschreibung |
|-----------|----------|--------|--------------|
| **free** | zentraler Modus | aktiv | Hauptmodus von Livsvei: Ablauf, UI‑Flow, Kategorien, Textbausteine, Fragefilter‑Integration |
| **fragefilter** | Wächterfunktion | aktiv | Globale Filter, legesystem‑spezifische Filter, Umformulierungen, sensible Inhalte |
| **ampel** | Schutzlogik | aktiv | Ampelstufen (Grün/Gelb/Rot), Eskalation, Weiterleitungen, Verbindung zur Fragefilter‑Engine |
| **ritual‑module** | Legesystem‑Dramaturgie | aktiv | Jedes Legesystem erhält eigenes Ritual, eigene Filter, eigene Logik, eigene Textbausteine |
| **tempel** | Wissensmodul | aktiv | Bibliothek, Chronik, Texte, Recht, Archiv, Systemwissen |
| **shared** | Utilities | aktiv | Wiederverwendbare Helferfunktionen (Formatierung, Zufall, Filter, Parser) |
| **layouts** | Seitenstruktur | aktiv | Visuelle und dramaturgische Anordnung aller Module |
| **komponenten** | UI‑Elemente | aktiv | Buttons, Panels, Karten, Navigation, Interaktion |
| **stile** | Design | aktiv | TailwindCSS, Farbdefinitionen, Typografie, Themes |

---

## 3. UI‑Module (Ordner: /src/ui)

| Modulname | Funktion | Status | Beschreibung |
|-----------|----------|--------|--------------|
| **startseite** | Einstiegspunkt | aktiv | Logo, Begrüßung, drei Wege (Tempel – Orakel – Vitki), Header, Footer, Stilrichtlinien |
| **vitki** | Runen‑UI | geplant | UI für Runen‑Orakel, später angebunden an nordrun |
| **orakel** | Karten‑UI | aktiv | UI für Free‑Modus und Legesysteme |

---

## 4. Inhaltliche Module (Ordner: /inhalt)

| Bereich | Funktion | Status | Beschreibung |
|---------|----------|--------|--------------|
| **karten** | Bedeutungen & Symbolik | aktiv | Textblöcke für Innerer/Äußerer/Schatten‑Aspekt |
| **legesysteme** | Orakel‑Strukturen | aktiv | Spiralschlüssel, Auge der Erkenntnis, Pfad des Trägers, Pfad der Dualität |
| **runen** | Nordrun‑System | geplant | Symbolische Erweiterung mit Runen und Archetypen |
| **texte** | Allgemeine Inhalte | aktiv | Einleitungen, Erklärungen, dramaturgische Texte |
| **weisheiten** | Kurze Sinnsprüche | aktiv | Poetische oder humorvolle Erkenntnisse |

---

## 5. Dokumentationsmodule (Ordner: /dokumentation)

| Bereich | Funktion | Status | Beschreibung |
|---------|----------|--------|--------------|
| **architektur** | Systemaufbau | aktiv | Technische Struktur, Datenfluss, Modulübersicht |
| **module** | Modul‑Dokumentation | aktiv | Ritual‑Module, Fragefilter, Ampelsystem, Free‑Modus |
| **branding** | Design & Symbolik | aktiv | Logo, Farben, Typografie, Stilrichtlinien |
| **rechtliches** | Recht & Datenschutz | aktiv | Urheberrecht, Haftung, Datenschutz |

---

## 6. Erweiterbarkeit
Neue Module können jederzeit hinzugefügt werden, solange sie:
- eine eigene Verantwortung besitzen  
- über definierte Schnittstellen kommunizieren  
- keine bestehenden Module direkt verändern  

---

## 7. Ziel
Diese Übersicht dient als Referenz für Entwickler, Autoren und Designer.  
Sie zeigt, wie Technik, Dramaturgie und UI in Livsvei zusammenwirken  
und bildet die Grundlage für zukünftige Erweiterungen (z. B. Premium, Manuell, FAQ, Besucherinteraktion).
