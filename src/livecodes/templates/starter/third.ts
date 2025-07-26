import type { Template } from '../../models';

export const third: Template = {
  name: 'third',
  title: "3. Grundlagen JavaScript",
  thumbnail: 'assets/templates/blank.svg',
  activeEditor: 'script',
  markup: {
    language: 'html',
    content: `
<div class="header">
  <h1>JavaScript Grundlagen</h1>
  <p>Lerne JavaScript Schritt für Schritt! 📚</p>
</div>

<div class="lesson-section">
  <h2>🎯 Klick-Events</h2>
  <div class="example-container">
    <button id="click-btn" class="demo-btn">Klick mich!</button>
    <p id="click-result">Noch nicht geklickt</p>
  </div>
</div>

<div class="lesson-section">
  <h2>🎨 Stil ändern</h2>
  <div class="example-container">
    <div id="color-box" class="color-box">Ich ändere meine Farbe!</div>
    <button id="color-btn" class="demo-btn">Farbe wechseln</button>
  </div>
</div>

<div class="lesson-section">
  <h2>📝 Text ändern</h2>
  <div class="example-container">
    <h3 id="text-display">Hallo Welt!</h3>
    <input type="text" id="text-input" placeholder="Neuen Text eingeben">
    <button id="text-btn" class="demo-btn">Text ändern</button>
  </div>
</div>

<div class="lesson-section">
  <h2>🔢 Zähler</h2>
  <div class="example-container">
    <div id="counter-display" class="counter">0</div>
    <button id="plus-btn" class="demo-btn">+1</button>
    <button id="minus-btn" class="demo-btn">-1</button>
    <button id="reset-btn" class="demo-btn">Reset</button>
  </div>
</div>

<div class="lesson-section">
  <h2>🎪 Einfache Animation</h2>
  <div class="example-container">
    <div id="move-box" class="move-box">Ich bewege mich!</div>
    <button id="move-btn" class="demo-btn">Bewegen</button>
  </div>
</div>
`.trimStart(),
  },
  style: {
    language: 'css',
    content: `
body {
  font-family: 'Segoe UI', sans-serif;
  margin: 0;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  min-height: 100vh;
  padding: 20px;
}

.header {
  text-align: center;
  color: white;
  margin-bottom: 30px;
}

.lesson-section {
  background: white;
  margin: 20px auto;
  padding: 25px;
  border-radius: 15px;
  box-shadow: 0 4px 15px rgba(0,0,0,0.1);
  max-width: 600px;
}

.lesson-section h2 {
  color: #333;
  border-bottom: 2px solid #667eea;
  padding-bottom: 10px;
}

.example-container {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 15px;
}

.demo-btn {
  background: #667eea;
  color: white;
  border: none;
  padding: 12px 24px;
  border-radius: 8px;
  cursor: pointer;
  font-size: 16px;
  transition: all 0.3s ease;
}

.demo-btn:hover {
  background: #5a6fd8;
  transform: translateY(-2px);
}

.color-box {
  width: 200px;
  height: 100px;
  background: #ff6b6b;
  border-radius: 10px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  font-weight: bold;
  transition: all 0.5s ease;
}

.counter {
  font-size: 48px;
  font-weight: bold;
  color: #667eea;
  text-align: center;
  min-width: 100px;
}

#text-input {
  padding: 10px;
  border: 2px solid #ddd;
  border-radius: 5px;
  font-size: 16px;
  width: 250px;
}

.move-box {
  width: 100px;
  height: 100px;
  background: #4ecdc4;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  font-weight: bold;
  transition: all 0.5s ease;
  text-align: center;
  font-size: 14px;
}

#click-result {
  font-size: 18px;
  color: #333;
  font-weight: bold;
}
`.trimStart(),
  },
  script: {
    language: 'javascript',
    content: `
// 🚀 JavaScript Grundlagen - Einfache Version
console.log("JavaScript geladen! Schau in die Konsole für Erklärungen.");

// ===========================================
// 1. KLICK-EVENTS - Auf Buttons reagieren
// ===========================================

// Button-Element auswählen
const clickButton = document.getElementById('click-btn');
const clickResult = document.getElementById('click-result');

// Zähler für Klicks
let clickCount = 0;

// Event Listener hinzufügen
clickButton.addEventListener('click', function() {
    clickCount = clickCount + 1; // oder: clickCount++
    clickResult.textContent = 'Button wurde ' + clickCount + ' mal geklickt!';
    
    console.log('Button geklickt! Anzahl:', clickCount);
});

// ===========================================
// 2. STIL ÄNDERN - CSS mit JavaScript
// ===========================================

const colorButton = document.getElementById('color-btn');
const colorBox = document.getElementById('color-box');

// Array mit verschiedenen Farben
const colors = ['#ff6b6b', '#4ecdc4', '#45b7d1', '#96ceb4', '#ffeaa7', '#dda0dd'];
let currentColorIndex = 0;

colorButton.addEventListener('click', function() {
    // Nächste Farbe auswählen
    currentColorIndex = currentColorIndex + 1;
    
    // Wenn am Ende angekommen, wieder von vorne beginnen
    if (currentColorIndex >= colors.length) {
        currentColorIndex = 0;
    }
    
    // Farbe ändern
    colorBox.style.backgroundColor = colors[currentColorIndex];
    
    console.log('Farbe geändert zu:', colors[currentColorIndex]);
});

// ===========================================
// 3. TEXT ÄNDERN - Inhalte dynamisch ändern
// ===========================================

const textButton = document.getElementById('text-btn');
const textInput = document.getElementById('text-input');
const textDisplay = document.getElementById('text-display');

textButton.addEventListener('click', function() {
    // Text aus Input-Feld holen
    const newText = textInput.value;
    
    // Prüfen ob Text eingegeben wurde
    if (newText.trim() !== '') {
        textDisplay.textContent = newText;
        textInput.value = ''; // Input-Feld leeren
        
        console.log('Text geändert zu:', newText);
    } else {
        alert('Bitte gib einen Text ein!');
    }
});

// Bonus: Enter-Taste funktioniert auch
textInput.addEventListener('keypress', function(event) {
    if (event.key === 'Enter') {
        textButton.click(); // Button-Klick simulieren
    }
});

// ===========================================
// 4. ZÄHLER - Variablen verwenden
// ===========================================

const counterDisplay = document.getElementById('counter-display');
const plusButton = document.getElementById('plus-btn');
const minusButton = document.getElementById('minus-btn');
const resetButton = document.getElementById('reset-btn');

// Zähler-Variable
let counter = 0;

// Funktion um Anzeige zu aktualisieren
function updateCounter() {
    counterDisplay.textContent = counter;
    
    // Farbe je nach Wert ändern
    if (counter > 0) {
        counterDisplay.style.color = '#27ae60'; // grün
    } else if (counter < 0) {
        counterDisplay.style.color = '#e74c3c'; // rot
    } else {
        counterDisplay.style.color = '#667eea'; // blau
    }
}

// Plus-Button
plusButton.addEventListener('click', function() {
    counter = counter + 1;
    updateCounter();
    console.log('Zähler erhöht auf:', counter);
});

// Minus-Button
minusButton.addEventListener('click', function() {
    counter = counter - 1;
    updateCounter();
    console.log('Zähler verringert auf:', counter);
});

// Reset-Button
resetButton.addEventListener('click', function() {
    counter = 0;
    updateCounter();
    console.log('Zähler zurückgesetzt');
});

// ===========================================
// 5. EINFACHE ANIMATION - CSS-Transforms
// ===========================================

const moveButton = document.getElementById('move-btn');
const moveBox = document.getElementById('move-box');

let isMovedRight = false;

moveButton.addEventListener('click', function() {
    if (isMovedRight === false) {
        // Nach rechts bewegen
        moveBox.style.transform = 'translateX(100px) rotate(180deg)';
        moveBox.style.backgroundColor = '#e17055';
        moveButton.textContent = 'Zurück';
        isMovedRight = true;
        
        console.log('Box nach rechts bewegt');
    } else {
        // Zurück zur ursprünglichen Position
        moveBox.style.transform = 'translateX(0px) rotate(0deg)';
        moveBox.style.backgroundColor = '#4ecdc4';
        moveButton.textContent = 'Bewegen';
        isMovedRight = false;
        
        console.log('Box zurück bewegt');
    }
});

// ===========================================
// 6. HILFREICHE TIPPS IN DER KONSOLE
// ===========================================

// Nach 2 Sekunden Tipps anzeigen
setTimeout(function() {
    console.log('🎓 JavaScript Grundlagen Tipps:');
    console.log('1. document.getElementById() - Element auswählen');
    console.log('2. addEventListener() - Auf Events reagieren');
    console.log('3. element.textContent - Text ändern');
    console.log('4. element.style - CSS-Eigenschaften ändern');
    console.log('5. Variablen mit let/const - Werte speichern');
    console.log('6. Funktionen - Code wiederverwenden');
    console.log('7. if/else - Entscheidungen treffen');
    console.log('Experimentiere mit dem Code! 🚀');
}, 2000);

// Willkommensnachricht
console.log('📚 Lerne JavaScript Schritt für Schritt!');
console.log('Jeder Abschnitt erklärt ein wichtiges Konzept.');
`.trimStart(),
  },
  stylesheets: [],
  scripts: [],
  cssPreset: '',
  imports: {},
  types: {},
};