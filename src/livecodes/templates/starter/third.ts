import type { Template } from '../../models';

export const third: Template = {
  name: 'third',
  title: "3. Click Events & Zähler",
  thumbnail: 'assets/templates/blank.svg',
  activeEditor: 'script',
  markup: {
    language: 'html',
    content: `
<div class="header">
  <h1>JavaScript Grundlagen - Click Events</h1>
  <p>Lerne wie man auf Klicks reagiert! 🖱️</p>
</div>

<div class="lesson-section">
  <h2>🎯 Einfacher Klick-Event</h2>
  <div class="example-container">
    <button id="click-btn" class="demo-btn">Klick mich!</button>
    <p id="click-result">Noch nicht geklickt</p>
  </div>
</div>

<div class="lesson-section">
  <h2>🔢 Zähler mit Buttons</h2>
  <div class="example-container">
    <div id="counter-display" class="counter">0</div>
    <div class="button-group">
      <button id="plus-btn" class="demo-btn">+1</button>
      <button id="minus-btn" class="demo-btn">-1</button>
      <button id="reset-btn" class="demo-btn">Reset</button>
    </div>
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

.counter {
  font-size: 48px;
  font-weight: bold;
  color: #667eea;
  text-align: center;
  min-width: 100px;
}

.button-group {
  display: flex;
  gap: 10px;
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
// 🚀 JavaScript Grundlagen - Click Events
console.log('Click Events Tutorial geladen!');

// ===========================================
// 1. EINFACHER KLICK-EVENT
// ===========================================

// Elemente auswählen
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
// 2. ZÄHLER MIT MEHREREN BUTTONS
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
// LERNTIPPS IN DER KONSOLE
// ===========================================

setTimeout(function() {
    console.log('🎓 Click Events Tipps:');
    console.log('1. document.getElementById() - Element auswählen');
    console.log('2. addEventListener("click", function() {}) - Auf Klicks reagieren');
    console.log('3. Variablen mit let - Werte speichern und ändern');
    console.log('4. Funktionen - Code organisieren und wiederverwenden');
    console.log('5. if/else - Entscheidungen im Code treffen');
    console.log('Probiere es aus! 🚀');
}, 2000);

console.log('🖱️ Klicke auf die Buttons und beobachte die Konsole!');
`.trimStart(),
  },
  stylesheets: [],
  scripts: [],
  cssPreset: '',
  imports: {},
  types: {},
};