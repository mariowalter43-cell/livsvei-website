# Kategorien-System des Livsvei-Orakels
Dieses Dokument beschreibt das gesamte Kategorien-System, das im Livsvei-Orakel verwendet wird.  
Es dient als **Handbuch für Entwickler, Redakteure und Systemarchitekten**, die mit den Orakelmodulen arbeiten.

Kategorien sind ein zentrales Element des Systems.  
Sie ermöglichen:

- die **Zuordnung** von Runen, Karten und Textbausteinen  
- die **Filterung** von Deutungen  
- die **Interpretation** von Fragen  
- die **Strukturierung** von Legesystemen  
- die **psychologische Einordnung** von Situationen  
- die **energetische Bewertung** von Aspekten  

Das Kategorien-System ist **modular**, **erweiterbar** und **technisch eindeutig**.

---

# 1. Zweck der Kategorien

Kategorien erfüllen drei Hauptfunktionen:

## 1.1 Inhaltliche Funktion
Sie ordnen Bedeutungen, Themen und Aspekte ein, z. B.:

- Liebe  
- Beruf  
- Gesundheit  
- Schatten  
- Licht  
- Vergangenheit  
- Zukunft  

Dadurch kann das Orakel **kontextbezogen** antworten.

## 1.2 Psychologische Funktion
Kategorien helfen, die Deutung auf einer passenden Ebene zu verorten:

- emotional  
- mental  
- spirituell  
- energetisch  
- zeitlich  

So bleibt die Deutung **kohärent**, **verständlich** und **menschlich nachvollziehbar**.

## 1.3 Technische Funktion
Kategorien dienen als:

- Filter  
- Tags  
- Zuordnungsmerkmale  
- Routing-Elemente für Textbausteine  
- Verknüpfungspunkte zwischen Runen, Karten und Deutungen  

Sie sind damit ein **zentrales Element der Orakel-Engine**.

---

## 2. Struktur der Kategorien

Jede Kategorie besteht aus:

- **Kategorie-ID** (technisch eindeutig, kurz, stabil)  
- **Kategorie-Name** (menschlich lesbar)  
- **Beschreibung** (für Entwickler und Redakteure)  

**Beispiel:**

- Kategorie-ID: `L1`  
- Kategorie-Name: `Liebe`  
- Beschreibung: `Beziehungen, Partnerschaft, Bindung, Nähe, Herzthemen.`  

In der CSV sieht das so aus:

```csv
L1;Liebe;"Beziehungen, Partnerschaft, Bindung, Nähe, Herzthemen."

---

# 3. Die Kategorien im Überblick

Das Livsvei-Orakel verwendet fünf Hauptgruppen:

1. **Lebensbereiche (L)**  
2. **Psychologische Kategorien (P)**  
3. **Zeitliche Kategorien (Z)**  
4. **Energetische Kategorien (E)**  
5. **Orakel-interne Kategorien (O)**  

Jede Gruppe ist logisch abgeschlossen und kann unabhängig erweitert werden.

---

# 4. Kategorien im Detail

## 4.1 Lebensbereiche (L)
Diese Kategorien beschreiben **Themenfelder**, auf die sich eine Frage beziehen kann.

| ID | Name | Beschreibung |
|----|------|--------------|
| L1 | Liebe | Beziehungen, Partnerschaft, Bindung, Nähe, Herzthemen. |
| L2 | Beruf | Arbeit, Berufung, Karriere, Projekte, Erfolg. |
| L3 | Gesundheit | Körperliche und seelische Balance, Heilung, Vitalität. |
| L4 | Spiritualität | Sinnsuche, Intuition, höhere Führung, Bewusstsein. |
| L5 | Familie | Herkunft, Kinder, Eltern, Zugehörigkeit, Nest. |
| L6 | Selbstentwicklung | Persönliches Wachstum, Reife, Erkenntnis. |
| L7 | Finanzen | Materielle Sicherheit, Besitz, Ressourcen. |
| L8 | Entscheidung | Wahl, Klarheit, Abwägen, Richtungsfindung. |
| L9 | Konflikt | Streit, Spannung, Abgrenzung, Verteidigung. |
| L10 | Lebensweg | Schicksal, Bestimmung, große Zyklen. |

### Zweck:
- Fragen einordnen  
- Deutungen thematisch ausrichten  
- Karten/Runen thematisch taggen  

---

## 4.2 Psychologische Kategorien (P)
Diese Kategorien beschreiben **innere Prozesse**, die in einer Deutung relevant sind.

| ID | Name | Beschreibung |
|----|------|--------------|
| P1 | Emotion | Gefühle, innere Bewegungen, emotionale Wahrheit. |
| P2 | Bedürfnis | Was gebraucht wird, innere Versorgung. |
| P3 | Schatten | Verdrängtes, Blockaden, unbewusste Muster. |
| P4 | Licht | Stärke, Klarheit, Potenzial. |
| P5 | Muster | Wiederholungen, Prägungen, Automatismen. |
| P6 | Intuition | Innere Stimme, Wahrnehmung, feine Hinweise. |
| P7 | Wille | Entschlossenheit, Handlungskraft. |
| P8 | Angst | Hemmung, Schutzmechanismus. |
| P9 | Hoffnung | Vision, Ausrichtung, Zukunftsgefühl. |

### Zweck:
- psychologische Tiefe  
- Deutungen emotional verankern  
- Schatten/Licht-Aspekte zuordnen  

---

## 4.3 Zeitliche Kategorien (Z)
Diese Kategorien strukturieren **Legesysteme und Prozesse**.

| ID | Name | Beschreibung |
|----|------|--------------|
| Z1 | Vergangenheit | Was war, Prägungen, Wurzeln. |
| Z2 | Gegenwart | Was ist, aktuelle Lage. |
| Z3 | Zukunft | Was wird, Entwicklung. |
| Z4 | Prozess | Verlauf, Übergang, Veränderung. |
| Z5 | Wendepunkt | Kritischer Moment, Entscheidung. |
| Z6 | Entwicklung | Wachstum, Reifung. |

### Zweck:
- 3‑Karten‑Legungen  
- Prozessdeutungen  
- zeitliche Einordnung  

---

## 4.4 Energetische Kategorien (E)
Diese Kategorien beschreiben die **Grundenergie** einer Karte oder Rune.

| ID | Name | Beschreibung |
|----|------|--------------|
| E1 | Aktiv | Handlung, Bewegung, Initiative. |
| E2 | Passiv | Empfangen, Ruhe, Beobachtung. |
| E3 | Öffnen | Weitung, Zulassen, Vertrauen. |
| E4 | Schließen | Schutz, Abgrenzung, Rückzug. |
| E5 | Wandlung | Transformation, Übergang. |
| E6 | Stabilität | Ruhe, Fundament, Sicherheit. |

### Zweck:
- energetische Bewertung  
- Deutungsrichtung bestimmen  
- Handlungsempfehlungen ableiten (ohne Ratschlag)  

---

## 4.5 Orakel-interne Kategorien (O)
Diese Kategorien werden **technisch** verwendet, um Textbausteine und Deutungen zu steuern.

| ID | Name | Beschreibung |
|----|------|--------------|
| O1 | Lichtaspekt | Positive, konstruktive Bedeutung. |
| O2 | Schattenaspekt | Herausforderung, Blockade, Warnung. |
| O3 | Neutral | Ausgleich, Beobachtung, Mitte. |
| O4 | Impuls | Einladung, Hinweis, kleine Handlung. |
| O5 | Warnung | Achtung, Gefahr, Vorsicht. |
| O6 | Erkenntnis | Tiefe Einsicht, Wahrheit. |
| O7 | Transformation | Wandel, Durchbruch, Entwicklung. |

### Zweck:
- Textbausteine auswählen  
- Deutungslogik steuern  
- Runen/Karten dynamisch interpretieren  

---

# 5. Wie Kategorien im System verwendet werden

## 5.1 Bei Fragen
Das Orakel erkennt anhand der Frage:

- Lebensbereich  
- psychologische Ebene  
- energetische Lage  

Beispiel:  
„Was soll ich beruflich tun?“ → L2, P6, O6

## 5.2 Bei Karten/Runen
Jede Karte/Rune kann mehrere Kategorien tragen:

- thematisch  
- psychologisch  
- energetisch  

## 5.3 Bei Textbausteinen
Textbausteine können gefiltert werden nach:

- Licht/Schatten  
- Lebensbereich  
- psychologischer Ebene  
- Legesystem‑Position  

## 5.4 Bei Legesystemen
Kategorien bestimmen:

- Positionen  
- Übergänge  
- Dramaturgie  

---

# 6. Erweiterbarkeit

Neue Kategorien können jederzeit hinzugefügt werden, wenn:

- ein neues Orakelmodul entsteht  
- ein neuer Themenbereich auftaucht  
- eine tiefere psychologische Ebene benötigt wird  

Die Struktur bleibt stabil.

---

# 7. Fazit

Dieses Kategorien-System bildet das **Rückgrat des Livsvei-Orakels**.  
Es ermöglicht:

- klare Struktur  
- intuitive Deutungen  
- technische Stabilität  
- psychologische Tiefe  
- modulare Erweiterbarkeit  

Es ist so gestaltet, dass **auch ein Entwickler ohne Orakelwissen** sofort versteht, wie das System funktioniert.

