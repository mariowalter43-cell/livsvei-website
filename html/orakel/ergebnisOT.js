// ------------------------------------------------------------
// 1) Frage laden
// ------------------------------------------------------------
const frage = localStorage.getItem("ot_frage") || "Keine Frage ausgewählt";
document.getElementById("frageAnzeige").innerText = frage;


// ------------------------------------------------------------
// 2) Einleitungs- und Schlusstexte
// ------------------------------------------------------------
const texte = {
  "Wie steht es um meine innere Kraft?": {
    einleitung: [
      "Manchmal zeigt sich Kraft nicht im Tun, sondern im Erkennen. Diese sechs Karten spiegeln, wo deine innere Stärke atmet — und wo sie Raum sucht.",
      "Innere Kraft ist kein Zustand, sondern ein Rhythmus. Die Karten zeigen dir, welche Qualitäten in dir gerade erwachen oder ruhen.",
      "Deine Kraft ist da. Doch wie sie sich formt, verändert sich. Die folgenden Impulse zeigen dir, welche Aspekte deiner Stärke jetzt sichtbar werden."
    ],
    schluss: [
      "Nimm diese Hinweise nicht als Urteil, sondern als Einladung, deine Kraft bewusster zu führen.",
      "Was du hier siehst, ist kein Maßstab — sondern ein Spiegel. Er zeigt dir, wo deine Energie bereit ist, sich zu sammeln.",
      "Deine Kraft wächst dort, wo du ihr Aufmerksamkeit schenkst. Diese Karten weisen nur auf die Stellen, an denen sie bereits beginnt."
    ]
  },

  "Welcher Schatten blockiert meinen Weg?": {
    einleitung: [
      "Schatten sind keine Feinde. Sie sind ungehörte Botschaften. Diese Karten zeigen dir, welche inneren Muster gerade nach Licht verlangen.",
      "Ein Schatten blockiert nicht — er schützt. Die Karten offenbaren, wovor du dich unbewusst bewahren wolltest.",
      "Der Schatten ist ein Teil deines Weges. Diese sechs Impulse zeigen dir, welche inneren Bewegungen noch ungeklärt sind."
    ],
    schluss: [
      "Nimm den Schatten nicht als Last, sondern als Richtung. Er zeigt dir, wo Freiheit beginnt.",
      "Was hier sichtbar wurde, ist kein Hindernis — sondern ein Übergang. Du entscheidest, wie du ihn gehst.",
      "Der Schatten verliert seine Macht, sobald du ihn ansiehst. Diese Karten waren ein erster Blick."
    ]
  },

  "Welche neue Möglichkeit will sich zeigen?": {
    einleitung: [
      "Möglichkeiten klopfen selten laut. Diese Karten zeigen dir, welche Türen sich innerlich oder äußerlich zu öffnen beginnen.",
      "Eine neue Möglichkeit entsteht, wenn etwas in dir bereit wird. Die folgenden Impulse zeigen, wohin sich dein innerer Kompass bewegt.",
      "Nicht jede Möglichkeit ist sichtbar. Diese sechs Karten spiegeln, welche Richtung sich gerade in dir formt."
    ],
    schluss: [
      "Nimm diese Hinweise als zarte Bewegungen — nicht als Ziel. Möglichkeiten wachsen im Gehen.",
      "Was sich zeigt, ist kein Versprechen, sondern ein Potenzial. Du entscheidest, ob du es nährst.",
      "Die Möglichkeit ist bereits da. Diese Karten haben dir nur gezeigt, wo sie ansetzt."
    ]
  },

  "Wo ist jetzt Mut zur Handlung gefragt?": {
    einleitung: [
      "Mut entsteht nicht aus Druck, sondern aus Klarheit. Diese Karten zeigen dir, wo eine Handlung reif wird.",
      "Handlung ist kein Zwang, sondern ein Schritt in die eigene Wahrheit. Die folgenden Impulse zeigen dir, wo Bewegung möglich ist.",
      "Mut ist die Brücke zwischen Erkenntnis und Weg. Diese sechs Karten spiegeln, wo diese Brücke gerade entsteht."
    ],
    schluss: [
      "Nimm diese Hinweise als Orientierung — nicht als Auftrag. Mut wächst aus dir, nicht aus den Karten.",
      "Was hier sichtbar wurde, zeigt nur eine Richtung. Der Schritt selbst gehört dir.",
      "Mut ist kein Sprung, sondern ein erster Atemzug. Diese Karten zeigen dir, wo er beginnt."
    ]
  }
};


// ------------------------------------------------------------
// 3) Bedeutungsdatenbank – 52 Karten, innerer Aspekt + Schatten
// (Kurzfassungen basierend auf deiner Datei)
// ------------------------------------------------------------
const kartenDaten = {
  "Selbstfindung": {
    innerer: "Selbstakzeptanz, innere Ruhe und Klarheit über eigene Werte und Ziele.",
    schatten: "Der kalte Stein des Zweifels."
  },
  "Entscheidung": {
    innerer: "Innere Fähigkeit zur klaren Wahl im Einklang mit deinen wahren Werten.",
    schatten: "Die Lähmung des Zaunschläfers."
  },
  "Religion": {
    innerer: "Suche nach persönlichem Glauben und innerer Verbindung zu etwas Höherem.",
    schatten: "Der goldene Käfig des Dogmas."
  },
  "Abgrund": {
    innerer: "Konfrontation mit tiefen Ängsten und Mustern, um innerlich zu wachsen.",
    schatten: "Die Paralyse des Kontrollverlusts."
  },
  "Eigentum": {
    innerer: "Erkennen inneren Reichtums und Selbstwerts, unabhängig von Besitz.",
    schatten: "Die Fessel des Goldes."
  },
  "Frau": {
    innerer: "Versöhnung mit Intuition, Gefühlen und der empfangenden Seite in dir.",
    schatten: "Die Fessel der Erwartung."
  },
  "Jahreszeit": {
    innerer: "Akzeptanz deiner inneren Rhythmen zwischen Aktivität und Rückzug.",
    schatten: "Das Gegen-den-Strom-Schwimmen."
  },
  "Pech": {
    innerer: "Loslassen der Illusion perfekter Kontrolle und Entwicklung von Resilienz.",
    schatten: "Die Spirale des Fatalismus."
  },
  "Schwur": {
    innerer: "Inneres Versprechen an dich selbst, das Orientierung und Kraft gibt.",
    schatten: "Die Kette der Vergangenheit."
  },
  "Unentschlossenheit": {
    innerer: "Hinweis auf fehlende innere Klarheit – Zeit für Selbstreflexion.",
    schatten: "Die Lähmung durch Zögerlichkeit."
  },
  "Krafttier": {
    innerer: "Wiederentdeckung einer tiefen inneren Stärke und Instinktsicherheit.",
    schatten: "Die Abhängigkeit von fremder Stärke."
  },
  "Angriff": {
    innerer: "Befreiung von inneren Blockaden durch Konfrontation mit Angst und Kritik.",
    schatten: "Die Peitsche des inneren Kritikers."
  },
  "Mann": {
    innerer: "Vertrauen in deine aktive, gestaltende und schützende Kraft.",
    schatten: "Die Fessel der Bevormundung."
  },
  "Politik-Diplomatie": {
    innerer: "Emotionale Intelligenz und Fähigkeit, eigene Wahrheit und andere zu balancieren.",
    schatten: "Die Maske der Heuchelei."
  },
  "Gut-Boese": {
    innerer: "Akzeptanz innerer Widersprüche und Klärung deiner moralischen Grundlagen.",
    schatten: "Die Falle des Schwarz-Weiss-Denkens."
  },
  "Opfer": {
    innerer: "Bewusste Befreiung von alten Opfermustern und innerer Erstarkung.",
    schatten: "Die Fessel der Opferrolle."
  },
  "Geschenk": {
    innerer: "Wertschätzung deiner Talente als Geschenk, das du teilen kannst.",
    schatten: "Der Preis der Erwartung."
  },
  "Geburt": {
    innerer: "Innere Erneuerung und Erwachen eines neuen Bewusstseins oder Potenzials.",
    schatten: "Die Angst vor dem Unbekannten."
  },
  "Kind": {
    innerer: "Rückkehr zu Neugier, Verspieltheit und ursprünglicher Unschuld.",
    schatten: "Die Last der ungeheilten Wunden."
  },
  "Wachstum": {
    innerer: "Persönliche Reife, Lernen aus Erfahrungen und Verlassen der Komfortzone.",
    schatten: "Die Welle der Überforderung."
  },
  "Ernaehrung-Schwund": {
    innerer: "Selbstfürsorge und Loslassen belastender Gedanken zugunsten innerer Fülle.",
    schatten: "Die stille Leere der Erschöpfung."
  },
  "Fremde": {
    innerer: "Erkundung unbekannter Seiten deiner Persönlichkeit und verborgener Potenziale.",
    schatten: "Die Maske der Anpassung."
  },
  "Tag-Nacht": {
    innerer: "Balance von Licht- und Schattenseiten und Frieden in der Dualität.",
    schatten: "Die stille Wache der inneren Dunkelheit."
  },
  "Arbeit": {
    innerer: "Berufung und sinnvolles Tun als Ausdruck deiner inneren Werte.",
    schatten: "Das stille Ausbrennen im Pflichtmodus."
  },
  "Verteidigung": {
    innerer: "Innere Sicherheit und Selbstwert ohne Rechtfertigungszwang.",
    schatten: "Die Mauer der alten Wunden."
  },
  "Hass": {
    innerer: "Anerkennen unterdrückter Wut und Wandlung in gesunde Grenzen.",
    schatten: "Die Glut des Grolls im eigenen Herzen."
  },
  "Krankheit": {
    innerer: "Hinweis auf seelische Botschaften hinter Symptomen und Bedarf an Heilung.",
    schatten: "Der stille Ruf des Körpers nach Beachtung."
  },
  "Gesundheit": {
    innerer: "Gleichgewicht von Körper und Seele, innere Ruhe und Stabilität.",
    schatten: "Das stille Rauschen der Selbstvergessenheit."
  },
  "Monat": {
    innerer: "Geduld mit deinem Lebensrhythmus und Vertrauen in reifende Prozesse.",
    schatten: "Die tickende Uhr der Unzufriedenheit."
  },
  "Suche": {
    innerer: "Spirituelle Orientierung und Reise zu deinem inneren Kern.",
    schatten: "Der leere Blick ins Außen."
  },
  "Mutter-Natur-Gaia": {
    innerer: "Verbundenheit mit deiner inneren Natur, Fülle und Selbstfürsorge.",
    schatten: "Die stille Sehnsucht nach Rückbindung."
  },
  "Gestaltung-Kunst": {
    innerer: "Schöpferische Selbstentfaltung und Ausdruck deiner inneren Vision.",
    schatten: "Die stumme Stimme der unterdrückten Kreativität."
  },
  "Reise": {
    innerer: "Innere Transformation und Loslassen alter Muster auf deinem Weg.",
    schatten: "Die Flucht vor dem eigenen Inneren."
  },
  "Bindung": {
    innerer: "Selbstverbundenheit und Klarheit über das, was dir wirklich wichtig ist.",
    schatten: "Die Kette der inneren Spaltung."
  },
  "Liebe": {
    innerer: "Selbstakzeptanz, Mitgefühl und innere emotionale Fülle.",
    schatten: "Die Klammer der Angst vor dem Alleinsein."
  },
  "Stillstand": {
    innerer: "Frieden in der Stille und Wachstum im Innehalten.",
    schatten: "Die leere Weite der unbewegten Zeit."
  },
  "Trennung": {
    innerer: "Loslassen überholter Muster und innere Befreiung.",
    schatten: "Der stille Riss im eigenen Wesen."
  },
  "Magie": {
    innerer: "Intuition und schöpferische Kraft, Gedanken in Realität zu wandeln.",
    schatten: "Der Schleier der schönen Täuschung."
  },
  "Lebenszyklus": {
    innerer: "Akzeptanz natürlicher Rhythmen und Vertrauen in Wandel.",
    schatten: "Der Kreis der wiederholten Lektionen."
  },
  "See": {
    innerer: "Transformation durch Loslassen alter Ängste und Öffnung zum wahren Selbst.",
    schatten: "Die stille Tiefe der Hoffnungslosigkeit."
  },
  "Einsamkeit": {
    innerer: "Selbstreflexion und Reifung in der eigenen Gegenwart.",
    schatten: "Die stille Leere hinter der Selbstgenügsamkeit."
  },
  "Neid": {
    innerer: "Erkennen eigener Wünsche und Bedürfnisse hinter dem Vergleich.",
    schatten: "Die stille Gier nach dem, was fehlt."
  },
  "Not": {
    innerer: "Resilienz und Selbstermächtigung in Krisen.",
    schatten: "Die stille Enge der Verzweiflung."
  },
  "Versagen": {
    innerer: "Lernen aus Fehlern und Entwicklung von Selbstannahme.",
    schatten: "Die Stimme des inneren Kritikers."
  },
  "Irrtum": {
    innerer: "Erkennen vergangener Täuschungen und Bereitschaft zur inneren Klärung.",
    schatten: "Die stille Täuschung vor dem wahren Blick."
  },
  "Jagd": {
    innerer: "Antrieb, Leidenschaft und klare Zielorientierung.",
    schatten: "Die Rastlosigkeit hinter dem Verlangen."
  },
  "Veraenderung": {
    innerer: "Bereitschaft zur inneren Wandlung und Loslassen alter Muster.",
    schatten: "Die Zerrissenheit vor dem nächsten Schritt."
  },
  "Glueck": {
    innerer: "Vertrauen in deine innere Weisheit und das Glück in dir.",
    schatten: "Die Angst, das Glück nicht zu verdienen."
  },
  "Kameradschaft-Freundschaft": {
    innerer: "Selbstannahme und innere Verbundenheit – dir selbst ein guter Freund sein.",
    schatten: "Die Angst, sich selbst zu zeigen."
  },
  "Familie": {
    innerer: "Gefühl innerer Geborgenheit und Zugehörigkeit.",
    schatten: "Die stille Entfremdung vom eigenen Nest."
  },
  "Brief-Nachricht": {
    innerer: "Hören auf deine innere Stimme und Gewinn von Klarheit.",
    schatten: "Die Verwirrung hinter der Botschaft."
  },
  "Ziel": {
    innerer: "Gefühl, deinem inneren Weg zu folgen und daraus Kraft zu schöpfen.",
    schatten: "Die Leere hinter dem erreichten Gipfel."
  }
};


// ------------------------------------------------------------
// 4) 6 Karten ziehen (aus allen 52)
// ------------------------------------------------------------
function zieheKarten() {
  const titelListe = Object.keys(kartenDaten);
  const gezogene = [];

  for (let i = 0; i < 6; i++) {
    const titel = titelListe[Math.floor(Math.random() * titelListe.length)];
    const licht = Math.random() < 0.5;

    gezogene.push({
      titel,
      licht,
      daten: kartenDaten[titel]
    });
  }

  return gezogene;
}


// ------------------------------------------------------------
// 5) Darstellung
// ------------------------------------------------------------
function render() {
  const block = texte[frage];

  // Einleitung
  if (block) {
    const einl = block.einleitung[Math.floor(Math.random() * block.einleitung.length)];
    document.getElementById("einleitung").innerText = einl;
  }

  // Karten
  const karten = zieheKarten();
  const container = document.getElementById("karten");

  karten.forEach(k => {
    const div = document.createElement("div");
    div.className = "karte-wrapper";

    const dateiname = `${k.titel}.png`;

    div.innerHTML = `
      <div class="karte ${k.licht ? "Licht" : "Schatten"}"
           style="background-image:url('../../assets/bilder/livsvei-orakel/${dateiname}')"></div>
      <div class="karten-name">${k.titel}</div>
      <p style="max-width:180px;font-size:0.9rem;margin-top:0.5rem;">
        ${k.licht ? k.daten.innerer : k.daten.schatten}
      </p>
    `;

    container.appendChild(div);
  });

  // Schluss
  if (block) {
    const schl = block.schluss[Math.floor(Math.random() * block.schluss.length)];
    document.getElementById("schluss").innerText = schl;
  }
}

window.onload = render;
