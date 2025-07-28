var getTemplateName = (_, templateName) => templateName;
var e={name:"blank",title:getTemplateName("templates.starter.blank","Blank Project"),thumbnail:"assets/templates/blank.svg",activeEditor:"markup",markup:{language:"html",content:""},style:{language:"css",content:""},script:{language:"javascript",content:""},stylesheets:[],scripts:[],cssPreset:"",imports:{},types:{}};var t={name:"first",title:"1. Grundlagen HTML",thumbnail:"assets/templates/blank.svg",activeEditor:"markup",markup:{language:"html",content:`
<h1>Willkommen zu HTML!</h1>
<p>Dies ist ein <strong>Paragraf</strong> mit <em>betontem Text</em>.</p>
<ul>
  <li>Erstes Listenelement</li>
  <li>Zweites Listenelement</li>
  <li>Drittes Listenelement</li>
</ul>
<a href="https://www.w3schools.com/html/" target="_blank">Mehr \xFCber HTML lernen</a>
`.trimStart()},style:{language:"css",content:`
/* F\xFCge hier dein CSS hinzu */
body {
  font-family: Arial, sans-serif;
  margin: 20px;
}
`.trimStart()},script:{language:"javascript",content:`
// F\xFCge hier dein JavaScript hinzu
console.log("HTML Grundlagen geladen!");
`.trimStart()},stylesheets:[],scripts:[],cssPreset:"",imports:{},types:{}};var n={name:"second",title:"2. Grundlagen CSS",thumbnail:"assets/templates/blank.svg",activeEditor:"style",markup:{language:"html",content:`
<div class="header">
  <h1>CSS Styling</h1>
</div>
<div class="container">
  <div class="card">
    <h2>Karte 1</h2>
    <p>Dies ist eine sch\xF6ne Karte mit CSS-Styling.</p>
  </div>
  <div class="card">
    <h2>Karte 2</h2>
    <p>Eine weitere Karte mit CSS-Styling.</p>
  </div>
</div>
`.trimStart()},style:{language:"css",content:`
body {
  font-family: 'Segoe UI', sans-serif;
  margin: 0;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  min-height: 100vh;
}

.header {
  text-align: center;
  color: white;
  padding: 20px;
}

.container {
  display: flex;
  gap: 20px;
  padding: 20px;
  justify-content: center;
}

.card {
  background: white;
  padding: 20px;
  border-radius: 10px;
  box-shadow: 0 4px 6px rgba(0,0,0,0.1);
  max-width: 300px;
}

.card:hover {
  transform: translateY(-5px);
  transition: transform 0.3s ease;
}
`.trimStart()},script:{language:"javascript",content:`
// Experimentiere mit CSS-\xC4nderungen
console.log("CSS Grundlagen geladen!");
`.trimStart()},stylesheets:[],scripts:[],cssPreset:"",imports:{},types:{}};var a={name:"third",title:"3. Click Events & Z\xE4hler",thumbnail:"assets/templates/blank.svg",activeEditor:"script",markup:{language:"html",content:`
<div class="header">
  <h1>JavaScript Grundlagen - Click Events</h1>
  <p>Lerne wie man auf Klicks reagiert! \u{1F5B1}\uFE0F</p>
</div>

<div class="lesson-section">
  <h2>\u{1F3AF} Einfacher Klick-Event</h2>
  <div class="example-container">
    <button id="click-btn" class="demo-btn">Klick mich!</button>
    <p id="click-result">Noch nicht geklickt</p>
  </div>
</div>

<div class="lesson-section">
  <h2>\u{1F522} Z\xE4hler mit Buttons</h2>
  <div class="example-container">
    <div id="counter-display" class="counter">0</div>
    <div class="button-group">
      <button id="plus-btn" class="demo-btn">+1</button>
      <button id="minus-btn" class="demo-btn">-1</button>
      <button id="reset-btn" class="demo-btn">Reset</button>
    </div>
  </div>
</div>
`.trimStart()},style:{language:"css",content:`
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
`.trimStart()},script:{language:"javascript",content:`
// \u{1F680} JavaScript Grundlagen - Click Events
console.log('Click Events Tutorial geladen!');

// ===========================================
// 1. EINFACHER KLICK-EVENT
// ===========================================

// Elemente ausw\xE4hlen
const clickButton = document.getElementById('click-btn');
const clickResult = document.getElementById('click-result');

// Z\xE4hler f\xFCr Klicks
let clickCount = 0;

// Event Listener hinzuf\xFCgen
clickButton.addEventListener('click', function() {
    clickCount = clickCount + 1; // oder: clickCount++
    clickResult.textContent = 'Button wurde ' + clickCount + ' mal geklickt!';
    
    console.log('Button geklickt! Anzahl:', clickCount);
});

// ===========================================
// 2. Z\xC4HLER MIT MEHREREN BUTTONS
// ===========================================

const counterDisplay = document.getElementById('counter-display');
const plusButton = document.getElementById('plus-btn');
const minusButton = document.getElementById('minus-btn');
const resetButton = document.getElementById('reset-btn');

// Z\xE4hler-Variable
let counter = 0;

// Funktion um Anzeige zu aktualisieren
function updateCounter() {
    counterDisplay.textContent = counter;
    
    // Farbe je nach Wert \xE4ndern
    if (counter > 0) {
        counterDisplay.style.color = '#27ae60'; // gr\xFCn
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
    console.log('Z\xE4hler erh\xF6ht auf:', counter);
});

// Minus-Button
minusButton.addEventListener('click', function() {
    counter = counter - 1;
    updateCounter();
    console.log('Z\xE4hler verringert auf:', counter);
});

// Reset-Button
resetButton.addEventListener('click', function() {
    counter = 0;
    updateCounter();
    console.log('Z\xE4hler zur\xFCckgesetzt');
});

// ===========================================
// LERNTIPPS IN DER KONSOLE
// ===========================================

setTimeout(function() {
    console.log('\u{1F393} Click Events Tipps:');
    console.log('1. document.getElementById() - Element ausw\xE4hlen');
    console.log('2. addEventListener("click", function() {}) - Auf Klicks reagieren');
    console.log('3. Variablen mit let - Werte speichern und \xE4ndern');
    console.log('4. Funktionen - Code organisieren und wiederverwenden');
    console.log('5. if/else - Entscheidungen im Code treffen');
    console.log('Probiere es aus! \u{1F680}');
}, 2000);

console.log('\u{1F5B1}\uFE0F Klicke auf die Buttons und beobachte die Konsole!');
`.trimStart()},stylesheets:[],scripts:[],cssPreset:"",imports:{},types:{}};var o={name:"fourth",title:"4. DOM Styling & Farben",thumbnail:"assets/templates/blank.svg",activeEditor:"script",markup:{language:"html",content:`
<div class="header">
  <h1>JavaScript Grundlagen - DOM Styling</h1>
  <p>Lerne wie man Stile mit JavaScript \xE4ndert! \u{1F3A8}</p>
</div>

<div class="lesson-section">
  <h2>\u{1F3A8} Farben wechseln</h2>
  <div class="example-container">
    <div id="color-box" class="color-box">Ich \xE4ndere meine Farbe!</div>
    <button id="color-btn" class="demo-btn">Farbe wechseln</button>
  </div>
</div>

<div class="lesson-section">
  <h2>\u{1F4CF} Gr\xF6\xDFe \xE4ndern</h2>
  <div class="example-container">
    <div id="size-box" class="size-box">Ver\xE4ndere meine Gr\xF6\xDFe!</div>
    <div class="button-group">
      <button id="bigger-btn" class="demo-btn">Gr\xF6\xDFer</button>
      <button id="smaller-btn" class="demo-btn">Kleiner</button>
      <button id="normal-btn" class="demo-btn">Normal</button>
    </div>
  </div>
</div>

<div class="lesson-section">
  <h2>\u{1F4AB} CSS-Klassen wechseln</h2>
  <div class="example-container">
    <div id="theme-box" class="theme-box">Ich kann verschiedene Themes haben!</div>
    <div class="button-group">
      <button id="dark-theme" class="demo-btn">Dark Theme</button>
      <button id="bright-theme" class="demo-btn">Bright Theme</button>
      <button id="rainbow-theme" class="demo-btn">Rainbow Theme</button>
    </div>
  </div>
</div>
`.trimStart()},style:{language:"css",content:`
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

.button-group {
  display: flex;
  gap: 10px;
  flex-wrap: wrap;
  justify-content: center;
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
  text-align: center;
}

.size-box {
  width: 150px;
  height: 80px;
  background: #4ecdc4;
  border-radius: 10px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  font-weight: bold;
  transition: all 0.3s ease;
  text-align: center;
}

.theme-box {
  width: 250px;
  height: 120px;
  background: #95a5a6;
  border-radius: 10px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  font-weight: bold;
  transition: all 0.4s ease;
  text-align: center;
  padding: 10px;
}

/* Theme-Klassen */
.dark-theme {
  background: #2c3e50 !important;
  color: #ecf0f1 !important;
  border: 2px solid #34495e;
}

.bright-theme {
  background: #f39c12 !important;
  color: white !important;
  border: 2px solid #e67e22;
  box-shadow: 0 0 20px rgba(243, 156, 18, 0.5);
}

.rainbow-theme {
  background: linear-gradient(45deg, #ff6b6b, #4ecdc4, #45b7d1, #96ceb4, #ffeaa7, #dda0dd) !important;
  background-size: 300% 300%;
  animation: rainbow 3s ease infinite;
  color: white !important;
  text-shadow: 1px 1px 2px rgba(0,0,0,0.5);
}

@keyframes rainbow {
  0% { background-position: 0% 50%; }
  50% { background-position: 100% 50%; }
  100% { background-position: 0% 50%; }
}
`.trimStart()},script:{language:"javascript",content:`
// \u{1F680} JavaScript Grundlagen - DOM Styling
console.log('DOM Styling Tutorial geladen!');

// ===========================================
// 1. FARBEN WECHSELN
// ===========================================

const colorButton = document.getElementById('color-btn');
const colorBox = document.getElementById('color-box');

// Array mit verschiedenen Farben
const colors = ['#ff6b6b', '#4ecdc4', '#45b7d1', '#96ceb4', '#ffeaa7', '#dda0dd', '#fd79a8', '#00b894'];
let currentColorIndex = 0;

colorButton.addEventListener('click', function() {
    // N\xE4chste Farbe ausw\xE4hlen
    currentColorIndex = currentColorIndex + 1;
    
    // Wenn am Ende angekommen, wieder von vorne beginnen
    if (currentColorIndex >= colors.length) {
        currentColorIndex = 0;
    }
    
    // Farbe \xE4ndern mit style.backgroundColor
    colorBox.style.backgroundColor = colors[currentColorIndex];
    
    console.log('Farbe ge\xE4ndert zu:', colors[currentColorIndex]);
});

// ===========================================
// 2. GR\xD6\xDFE \xC4NDERN
// ===========================================

const sizeBox = document.getElementById('size-box');
const biggerButton = document.getElementById('bigger-btn');
const smallerButton = document.getElementById('smaller-btn');
const normalButton = document.getElementById('normal-btn');

// Aktuelle Gr\xF6\xDFe tracken
let currentSize = 100; // Prozent

// Gr\xF6\xDFer machen
biggerButton.addEventListener('click', function() {
    if (currentSize < 200) {
        currentSize += 20;
        sizeBox.style.transform = 'scale(' + (currentSize / 100) + ')';
        console.log('Gr\xF6\xDFe erh\xF6ht auf:', currentSize + '%');
    }
});

// Kleiner machen
smallerButton.addEventListener('click', function() {
    if (currentSize > 40) {
        currentSize -= 20;
        sizeBox.style.transform = 'scale(' + (currentSize / 100) + ')';
        console.log('Gr\xF6\xDFe verringert auf:', currentSize + '%');
    }
});

// Normal zur\xFCcksetzen
normalButton.addEventListener('click', function() {
    currentSize = 100;
    sizeBox.style.transform = 'scale(1)';
    console.log('Gr\xF6\xDFe zur\xFCckgesetzt auf: 100%');
});

// ===========================================
// 3. CSS-KLASSEN WECHSELN
// ===========================================

const themeBox = document.getElementById('theme-box');
const darkThemeBtn = document.getElementById('dark-theme');
const brightThemeBtn = document.getElementById('bright-theme');
const rainbowThemeBtn = document.getElementById('rainbow-theme');

// Funktion um alle Theme-Klassen zu entfernen
function removeAllThemes() {
    themeBox.classList.remove('dark-theme', 'bright-theme', 'rainbow-theme');
}

// Dark Theme
darkThemeBtn.addEventListener('click', function() {
    removeAllThemes();
    themeBox.classList.add('dark-theme');
    console.log('Dark Theme aktiviert');
});

// Bright Theme
brightThemeBtn.addEventListener('click', function() {
    removeAllThemes();
    themeBox.classList.add('bright-theme');
    console.log('Bright Theme aktiviert');
});

// Rainbow Theme
rainbowThemeBtn.addEventListener('click', function() {
    removeAllThemes();
    themeBox.classList.add('rainbow-theme');
    console.log('Rainbow Theme aktiviert');
});

// ===========================================
// LERNTIPPS IN DER KONSOLE
// ===========================================

setTimeout(function() {
    console.log('\u{1F3A8} DOM Styling Tipps:');
    console.log('1. element.style.property - Direkte Stil-\xC4nderungen');
    console.log('2. element.classList.add() - CSS-Klassen hinzuf\xFCgen');
    console.log('3. element.classList.remove() - CSS-Klassen entfernen');
    console.log('4. transform: scale() - Elemente skalieren');
    console.log('5. CSS-Transitions - Sanfte \xDCberg\xE4nge');
    console.log('6. Arrays f\xFCr mehrere Werte nutzen');
    console.log('Experimentiere mit den Buttons! \u{1F3A8}');
}, 2000);

console.log('\u{1F3A8} Ver\xE4ndere das Aussehen der Elemente!');
`.trimStart()},stylesheets:[],scripts:[],cssPreset:"",imports:{},types:{}};var i={name:"fifth",title:"5. Text & Input Handling",thumbnail:"assets/templates/blank.svg",activeEditor:"script",markup:{language:"html",content:`
<div class="header">
  <h1>JavaScript Grundlagen - Text & Input</h1>
  <p>Lerne wie man mit Text und Eingaben arbeitet! \u{1F4DD}</p>
</div>

<div class="lesson-section">
  <h2>\u{1F4DD} Text dynamisch \xE4ndern</h2>
  <div class="example-container">
    <h3 id="text-display">Hallo Welt!</h3>
    <input type="text" id="text-input" placeholder="Neuen Text eingeben">
    <button id="text-btn" class="demo-btn">Text \xE4ndern</button>
  </div>
</div>

<div class="lesson-section">
  <h2>\u{1F524} Text-Transformationen</h2>
  <div class="example-container">
    <div id="transform-display" class="transform-box">Transformiere mich!</div>
    <input type="text" id="transform-input" placeholder="Text eingeben">
    <div class="button-group">
      <button id="uppercase-btn" class="demo-btn">GROSS</button>
      <button id="lowercase-btn" class="demo-btn">klein</button>
      <button id="reverse-btn" class="demo-btn">\u21BB Umkehren</button>
    </div>
  </div>
</div>

<div class="lesson-section">
  <h2>\u{1F4CA} Text-Statistiken</h2>
  <div class="example-container">
    <textarea id="stats-input" placeholder="Gib hier einen l\xE4ngeren Text ein..."></textarea>
    <div id="stats-display" class="stats-box">
      <div>Zeichen: <span id="char-count">0</span></div>
      <div>W\xF6rter: <span id="word-count">0</span></div>
      <div>S\xE4tze: <span id="sentence-count">0</span></div>
    </div>
  </div>
</div>

<div class="lesson-section">
  <h2>\u{1F3AF} Einfacher Chatbot</h2>
  <div class="example-container">
    <div id="chat-display" class="chat-box">Bot: Hallo! Schreib mir etwas!</div>
    <input type="text" id="chat-input" placeholder="Schreib eine Nachricht...">
    <button id="send-btn" class="demo-btn">Senden</button>
  </div>
</div>
`.trimStart()},style:{language:"css",content:`
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

.button-group {
  display: flex;
  gap: 10px;
  flex-wrap: wrap;
  justify-content: center;
}

input[type="text"], textarea {
  padding: 10px;
  border: 2px solid #ddd;
  border-radius: 5px;
  font-size: 16px;
  width: 250px;
  transition: border-color 0.3s ease;
}

input[type="text"]:focus, textarea:focus {
  outline: none;
  border-color: #667eea;
}

textarea {
  height: 80px;
  resize: vertical;
  font-family: inherit;
}

.transform-box {
  background: #4ecdc4;
  color: white;
  padding: 20px;
  border-radius: 10px;
  font-size: 18px;
  font-weight: bold;
  text-align: center;
  min-height: 60px;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 0.3s ease;
}

.stats-box {
  background: #f8f9fa;
  border: 2px solid #e9ecef;
  border-radius: 10px;
  padding: 20px;
  display: flex;
  gap: 30px;
  justify-content: center;
  font-size: 16px;
  color: #333;
}

.stats-box div {
  text-align: center;
}

.stats-box span {
  font-weight: bold;
  color: #667eea;
  font-size: 24px;
}

.chat-box {
  background: #f8f9fa;
  border: 2px solid #e9ecef;
  border-radius: 10px;
  padding: 15px;
  min-height: 120px;
  width: 100%;
  max-width: 400px;
  font-family: monospace;
  font-size: 14px;
  line-height: 1.5;
  overflow-y: auto;
  white-space: pre-wrap;
}

#text-display {
  color: #333;
  font-size: 24px;
  text-align: center;
  margin: 0;
}
`.trimStart()},script:{language:"javascript",content:`
// \u{1F680} JavaScript Grundlagen - Text & Input
console.log('Text & Input Tutorial geladen!');

// ===========================================
// 1. TEXT DYNAMISCH \xC4NDERN
// ===========================================

const textButton = document.getElementById('text-btn');
const textInput = document.getElementById('text-input');
const textDisplay = document.getElementById('text-display');

textButton.addEventListener('click', function() {
    // Text aus Input-Feld holen
    const newText = textInput.value;
    
    // Pr\xFCfen ob Text eingegeben wurde
    if (newText.trim() !== '') {
        textDisplay.textContent = newText;
        textInput.value = ''; // Input-Feld leeren
        
        console.log('Text ge\xE4ndert zu:', newText);
    } else {
        alert('Bitte gib einen Text ein!');
    }
});

// Enter-Taste funktioniert auch
textInput.addEventListener('keypress', function(event) {
    if (event.key === 'Enter') {
        textButton.click();
    }
});

// ===========================================
// 2. TEXT-TRANSFORMATIONEN
// ===========================================

const transformInput = document.getElementById('transform-input');
const transformDisplay = document.getElementById('transform-display');
const uppercaseBtn = document.getElementById('uppercase-btn');
const lowercaseBtn = document.getElementById('lowercase-btn');
const reverseBtn = document.getElementById('reverse-btn');

// Gro\xDFbuchstaben
uppercaseBtn.addEventListener('click', function() {
    const text = transformInput.value;
    if (text) {
        const upperText = text.toUpperCase();
        transformDisplay.textContent = upperText;
        console.log('Text in Gro\xDFbuchstaben:', upperText);
    }
});

// Kleinbuchstaben
lowercaseBtn.addEventListener('click', function() {
    const text = transformInput.value;
    if (text) {
        const lowerText = text.toLowerCase();
        transformDisplay.textContent = lowerText;
        console.log('Text in Kleinbuchstaben:', lowerText);
    }
});

// Text umkehren
reverseBtn.addEventListener('click', function() {
    const text = transformInput.value;
    if (text) {
        // Text in Array umwandeln, umkehren, wieder zu String
        const reversedText = text.split('').reverse().join('');
        transformDisplay.textContent = reversedText;
        console.log('Umgekehrter Text:', reversedText);
    }
});

// ===========================================
// 3. TEXT-STATISTIKEN
// ===========================================

const statsInput = document.getElementById('stats-input');
const charCount = document.getElementById('char-count');
const wordCount = document.getElementById('word-count');
const sentenceCount = document.getElementById('sentence-count');

// Statistiken in Echtzeit aktualisieren
statsInput.addEventListener('input', function() {
    const text = statsInput.value;
    
    // Zeichen z\xE4hlen
    const chars = text.length;
    
    // W\xF6rter z\xE4hlen
    const words = text.trim() === '' ? 0 : text.trim().split(/\\s+/).length;
    
    // S\xE4tze z\xE4hlen (grober Ansatz)
    const sentences = text.trim() === '' ? 0 : text.split(/[.!?]+/).filter(s => s.trim().length > 0).length;
    
    // Anzeige aktualisieren
    charCount.textContent = chars;
    wordCount.textContent = words;
    sentenceCount.textContent = sentences;
    
    console.log('Statistiken - Zeichen:', chars, 'W\xF6rter:', words, 'S\xE4tze:', sentences);
});

// ===========================================
// 4. EINFACHER CHATBOT
// ===========================================

const chatInput = document.getElementById('chat-input');
const chatDisplay = document.getElementById('chat-display');
const sendBtn = document.getElementById('send-btn');

// Bot-Antworten
const botResponses = {
    'hallo': 'Hallo! Wie geht es dir?',
    'wie gehts': 'Mir geht es gut, danke! Und dir?',
    'gut': 'Das freut mich zu h\xF6ren!',
    'schlecht': 'Oh nein, das tut mir leid. Wird schon wieder!',
    'hilfe': 'Ich kann einfache Fragen beantworten. Probier: hallo, wie gehts, gut, schlecht',
    'tsch\xFCss': 'Auf Wiedersehen! War sch\xF6n mit dir zu reden!',
    'danke': 'Gerne! Immer da um zu helfen.',
    'javascript': 'JavaScript ist super! Lernst du gerade programmieren?',
    'ja': 'Das ist toll!',
    'nein': 'Okay, verstehe.'
};

function sendMessage() {
    const message = chatInput.value.trim();
    if (message === '') return;
    
    // Benutzer-Nachricht hinzuf\xFCgen
    chatDisplay.textContent += '\\nDu: ' + message;
    
    // Bot-Antwort finden
    const lowerMessage = message.toLowerCase();
    let botReply = 'Interessant... erz\xE4hl mir mehr!';
    
    // Einfache Keyword-Suche
    for (let keyword in botResponses) {
        if (lowerMessage.includes(keyword)) {
            botReply = botResponses[keyword];
            break;
        }
    }
    
    // Bot-Antwort nach kurzer Verz\xF6gerung
    setTimeout(function() {
        chatDisplay.textContent += '\\nBot: ' + botReply;
        chatDisplay.scrollTop = chatDisplay.scrollHeight;
    }, 500);
    
    // Input leeren
    chatInput.value = '';
    
    console.log('Nachricht gesendet:', message);
}

// Send-Button
sendBtn.addEventListener('click', sendMessage);

// Enter-Taste im Chat
chatInput.addEventListener('keypress', function(event) {
    if (event.key === 'Enter') {
        sendMessage();
    }
});

// ===========================================
// LERNTIPPS IN DER KONSOLE
// ===========================================

setTimeout(function() {
    console.log('\u{1F4DD} Text & Input Tipps:');
    console.log('1. element.value - Input-Werte lesen');
    console.log('2. element.textContent - Text setzen/lesen');
    console.log('3. string.toUpperCase() / toLowerCase() - Gro\xDF/Klein');
    console.log('4. string.split() / join() - String teilen/verbinden');
    console.log('5. string.trim() - Leerzeichen entfernen');
    console.log('6. "keypress" Event - Tastatureingaben');
    console.log('7. setTimeout() - Verz\xF6gerungen');
    console.log('Probiere den Chatbot aus! \u{1F916}');
}, 2000);

console.log('\u{1F4DD} Arbeite mit Text und Eingaben!');
`.trimStart()},stylesheets:[],scripts:[],cssPreset:"",imports:{},types:{}};var r={name:"sixth",title:"6. Animation & Movement",thumbnail:"assets/templates/blank.svg",activeEditor:"script",markup:{language:"html",content:`
<div class="header">
  <h1>JavaScript Grundlagen - Animation</h1>
  <p>Lerne wie man Elemente bewegt und animiert! \u{1F4AB}</p>
</div>

<div class="lesson-section">
  <h2>\u{1F3AA} Einfache Bewegung</h2>
  <div class="example-container">
    <div class="animation-area">
      <div id="move-box" class="move-box">Ich bewege mich!</div>
    </div>
    <div class="button-group">
      <button id="move-right" class="demo-btn">\u2192 Rechts</button>
      <button id="move-left" class="demo-btn">\u2190 Links</button>
      <button id="move-reset" class="demo-btn">\u21BA Reset</button>
    </div>
  </div>
</div>

<div class="lesson-section">
  <h2>\u{1F3AF} Automatische Animation</h2>
  <div class="example-container">
    <div class="animation-area">
      <div id="auto-box" class="auto-box">Auto-Animation!</div>
    </div>
    <div class="button-group">
      <button id="start-btn" class="demo-btn">\u25B6 Start</button>
      <button id="stop-btn" class="demo-btn">\u23F9 Stop</button>
      <button id="speed-btn" class="demo-btn">\u26A1 Schneller</button>
    </div>
  </div>
</div>

<div class="lesson-section">
  <h2>\u{1F3AE} Tastatur-Steuerung</h2>
  <div class="example-container">
    <p>Verwende WASD oder Pfeiltasten!</p>
    <div class="game-area">
      <div id="player" class="player">\u{1F680}</div>
    </div>
    <div class="controls-info">
      <span>W/\u2191: Hoch</span>
      <span>S/\u2193: Runter</span>
      <span>A/\u2190: Links</span>
      <span>D/\u2192: Rechts</span>
    </div>
  </div>
</div>

<div class="lesson-section">
  <h2>\u{1F31F} Partikel-Effekt</h2>
  <div class="example-container">
    <div id="particle-area" class="particle-area">Klick mich f\xFCr Partikel!</div>
    <button id="clear-particles" class="demo-btn">\u{1F9F9} Aufr\xE4umen</button>
  </div>
</div>
`.trimStart()},style:{language:"css",content:`
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

.button-group {
  display: flex;
  gap: 10px;
  flex-wrap: wrap;
  justify-content: center;
}

.animation-area {
  width: 400px;
  height: 100px;
  border: 3px dashed #ddd;
  border-radius: 10px;
  position: relative;
  overflow: hidden;
  background: #f8f9fa;
}

.move-box {
  width: 80px;
  height: 60px;
  background: #4ecdc4;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  font-weight: bold;
  font-size: 12px;
  text-align: center;
  position: absolute;
  top: 20px;
  left: 20px;
  transition: all 0.5s ease;
}

.auto-box {
  width: 60px;
  height: 60px;
  background: #ff6b6b;
  border-radius: 10px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  font-weight: bold;
  font-size: 10px;
  text-align: center;
  position: absolute;
  top: 20px;
  left: 20px;
}

.game-area {
  width: 400px;
  height: 200px;
  border: 3px solid #333;
  border-radius: 10px;
  position: relative;
  background: linear-gradient(45deg, #1e3c72, #2a5298);
  overflow: hidden;
}

.player {
  width: 40px;
  height: 40px;
  position: absolute;
  top: 80px;
  left: 180px;
  font-size: 30px;
  transition: all 0.1s ease;
  text-shadow: 2px 2px 4px rgba(0,0,0,0.5);
}

.controls-info {
  display: flex;
  gap: 15px;
  font-size: 12px;
  color: #666;
  flex-wrap: wrap;
  justify-content: center;
}

.particle-area {
  width: 400px;
  height: 200px;
  border: 3px solid #667eea;
  border-radius: 10px;
  position: relative;
  background: linear-gradient(135deg, #667eea, #764ba2);
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  font-weight: bold;
  cursor: pointer;
  overflow: hidden;
}

.particle {
  position: absolute;
  width: 8px;
  height: 8px;
  border-radius: 50%;
  pointer-events: none;
}

@keyframes bounce {
  0%, 100% { transform: translateY(0); }
  50% { transform: translateY(-20px); }
}

@keyframes spin {
  from { transform: rotate(0deg); }
  to { transform: rotate(360deg); }
}

@keyframes fade-out {
  from { opacity: 1; transform: scale(1); }
  to { opacity: 0; transform: scale(0); }
}
`.trimStart()},script:{language:"javascript",content:`
// \u{1F680} JavaScript Grundlagen - Animation & Movement
console.log('Animation Tutorial geladen!');

// ===========================================
// 1. EINFACHE BEWEGUNG
// ===========================================

const moveBox = document.getElementById('move-box');
const moveRightBtn = document.getElementById('move-right');
const moveLeftBtn = document.getElementById('move-left');
const moveResetBtn = document.getElementById('move-reset');

let currentPosition = 20; // Startposition in Pixeln

// Nach rechts bewegen
moveRightBtn.addEventListener('click', function() {
    if (currentPosition < 300) { // Maximalposition
        currentPosition += 50;
        moveBox.style.left = currentPosition + 'px';
        console.log('Position:', currentPosition);
    }
});

// Nach links bewegen
moveLeftBtn.addEventListener('click', function() {
    if (currentPosition > 20) { // Minimalposition
        currentPosition -= 50;
        moveBox.style.left = currentPosition + 'px';
        console.log('Position:', currentPosition);
    }
});

// Position zur\xFCcksetzen
moveResetBtn.addEventListener('click', function() {
    currentPosition = 20;
    moveBox.style.left = currentPosition + 'px';
    console.log('Position zur\xFCckgesetzt');
});

// ===========================================
// 2. AUTOMATISCHE ANIMATION
// ===========================================

const autoBox = document.getElementById('auto-box');
const startBtn = document.getElementById('start-btn');
const stopBtn = document.getElementById('stop-btn');
const speedBtn = document.getElementById('speed-btn');

let animationId = null;
let autoPosition = 20;
let direction = 1; // 1 = rechts, -1 = links
let speed = 2;

function animateBox() {
    // Position \xE4ndern
    autoPosition += direction * speed;
    
    // Richtung wechseln wenn Rand erreicht
    if (autoPosition >= 320 || autoPosition <= 20) {
        direction *= -1;
    }
    
    // Position anwenden
    autoBox.style.left = autoPosition + 'px';
    
    // N\xE4chsten Frame anfordern
    animationId = requestAnimationFrame(animateBox);
}

// Animation starten
startBtn.addEventListener('click', function() {
    if (!animationId) {
        animateBox();
        console.log('Animation gestartet');
    }
});

// Animation stoppen
stopBtn.addEventListener('click', function() {
    if (animationId) {
        cancelAnimationFrame(animationId);
        animationId = null;
        console.log('Animation gestoppt');
    }
});

// Geschwindigkeit erh\xF6hen
speedBtn.addEventListener('click', function() {
    speed = speed < 8 ? speed + 1 : 1; // Max 8, dann wieder 1
    console.log('Geschwindigkeit:', speed);
});

// ===========================================
// 3. TASTATUR-STEUERUNG
// ===========================================

const player = document.getElementById('player');
let playerX = 180;
let playerY = 80;
const moveSpeed = 10;

// Tastatur-Events
document.addEventListener('keydown', function(event) {
    const gameArea = document.querySelector('.game-area');
    const maxX = gameArea.offsetWidth - 40; // Spieler ist 40px breit
    const maxY = gameArea.offsetHeight - 40; // Spieler ist 40px hoch
    
    switch(event.key.toLowerCase()) {
        case 'w':
        case 'arrowup':
            if (playerY > 0) {
                playerY -= moveSpeed;
            }
            break;
        case 's':
        case 'arrowdown':
            if (playerY < maxY) {
                playerY += moveSpeed;
            }
            break;
        case 'a':
        case 'arrowleft':
            if (playerX > 0) {
                playerX -= moveSpeed;
            }
            break;
        case 'd':
        case 'arrowright':
            if (playerX < maxX) {
                playerX += moveSpeed;
            }
            break;
    }
    
    // Position anwenden
    player.style.left = playerX + 'px';
    player.style.top = playerY + 'px';
    
    console.log('Spieler Position:', playerX, playerY);
});

// ===========================================
// 4. PARTIKEL-EFFEKT
// ===========================================

const particleArea = document.getElementById('particle-area');
const clearBtn = document.getElementById('clear-particles');

// Partikel erstellen
function createParticle(x, y) {
    const particle = document.createElement('div');
    particle.className = 'particle';
    
    // Zuf\xE4llige Farbe
    const colors = ['#ff6b6b', '#4ecdc4', '#45b7d1', '#ffeaa7', '#fd79a8', '#00b894'];
    const randomColor = colors[Math.floor(Math.random() * colors.length)];
    particle.style.backgroundColor = randomColor;
    
    // Position setzen
    particle.style.left = x + 'px';
    particle.style.top = y + 'px';
    
    // Zuf\xE4llige Bewegung
    const randomX = (Math.random() - 0.5) * 200;
    const randomY = (Math.random() - 0.5) * 200;
    
    // Animation
    particle.style.transform = 'translate(' + randomX + 'px, ' + randomY + 'px)';
    particle.style.animation = 'fade-out 2s ease-out forwards';
    
    particleArea.appendChild(particle);
    
    // Partikel nach Animation entfernen
    setTimeout(function() {
        if (particle.parentNode) {
            particle.parentNode.removeChild(particle);
        }
    }, 2000);
}

// Klick-Event f\xFCr Partikel
particleArea.addEventListener('click', function(event) {
    const rect = particleArea.getBoundingClientRect();
    const x = event.clientX - rect.left;
    const y = event.clientY - rect.top;
    
    // Mehrere Partikel erstellen
    for (let i = 0; i < 8; i++) {
        setTimeout(function() {
            createParticle(x, y);
        }, i * 50);
    }
    
    console.log('Partikel erstellt bei:', x, y);
});

// Alle Partikel entfernen
clearBtn.addEventListener('click', function() {
    const particles = particleArea.querySelectorAll('.particle');
    particles.forEach(function(particle) {
        particle.remove();
    });
    console.log('Alle Partikel entfernt');
});

// ===========================================
// LERNTIPPS IN DER KONSOLE
// ===========================================

setTimeout(function() {
    console.log('\u{1F4AB} Animation Tipps:');
    console.log('1. element.style.left/top - Position \xE4ndern');
    console.log('2. requestAnimationFrame() - Sanfte Animationen');
    console.log('3. cancelAnimationFrame() - Animationen stoppen');
    console.log('4. document.addEventListener("keydown") - Tastatur');
    console.log('5. Math.random() - Zufallszahlen');
    console.log('6. setTimeout() - Verz\xF6gerungen');
    console.log('7. CSS transitions - Automatische \xDCberg\xE4nge');
    console.log('Bewege den Spieler mit WASD! \u{1F3AE}');
}, 2000);

console.log('\u{1F4AB} Animiere und bewege Elemente!');
`.trimStart()},stylesheets:[],scripts:[],cssPreset:"",imports:{},types:{}};var s={name:"seventh",title:"8. Memory Spiel",thumbnail:"assets/templates/blank.svg",activeEditor:"script",markup:{language:"html",content:`
<div class="header">
  <h1>\u{1F9E0} Memory Spiel</h1>
  <p>Finde alle Kartenpaare! Trainiere dein Ged\xE4chtnis! \u{1F0CF}</p>
</div>

<div class="game-container">
  <div class="game-stats">
    <div class="stat">
      <span class="stat-label">Z\xFCge:</span>
      <span id="moves" class="stat-value">0</span>
    </div>
    <div class="stat">
      <span class="stat-label">Paare:</span>
      <span id="pairs" class="stat-value">0/8</span>
    </div>
    <div class="stat">
      <span class="stat-label">Zeit:</span>
      <span id="timer" class="stat-value">00:00</span>
    </div>
  </div>
  
  <div class="difficulty-selector">
    <button id="easy-btn" class="difficulty-btn active">Einfach (4x4)</button>
    <button id="hard-btn" class="difficulty-btn">Schwer (6x6)</button>
  </div>
  
  <div id="game-board" class="game-board"></div>
  
  <div class="game-controls">
    <button id="new-game" class="control-btn">\u{1F3AE} Neues Spiel</button>
    <button id="hint-btn" class="control-btn">\u{1F4A1} Tipp</button>
    <button id="auto-solve" class="control-btn">\u{1F916} Auto-L\xF6sen</button>
  </div>
</div>

<div id="win-modal" class="modal hidden">
  <div class="modal-content">
    <h2>\u{1F389} Gewonnen!</h2>
    <p id="win-message">Gratulation! Du hast alle Paare gefunden!</p>
    <div class="win-stats">
      <div>Z\xFCge: <span id="final-moves">0</span></div>
      <div>Zeit: <span id="final-time">00:00</span></div>
      <div>Bewertung: <span id="rating">\u2B50\u2B50\u2B50</span></div>
    </div>
    <button id="play-again" class="control-btn">\u{1F504} Nochmal spielen</button>
  </div>
</div>
`.trimStart()},style:{language:"css",content:`
* {
  box-sizing: border-box;
}

body {
  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
  margin: 0;
  padding: 20px;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
}

.header {
  text-align: center;
  color: white;
  margin-bottom: 20px;
}

.header h1 {
  font-size: 2.5rem;
  margin-bottom: 10px;
  text-shadow: 2px 2px 4px rgba(0,0,0,0.3);
}

.game-container {
  background: white;
  border-radius: 20px;
  padding: 30px;
  box-shadow: 0 10px 30px rgba(0,0,0,0.2);
  max-width: 600px;
  width: 100%;
}

.game-stats {
  display: flex;
  justify-content: space-around;
  margin-bottom: 20px;
  background: #f8f9fa;
  padding: 15px;
  border-radius: 15px;
}

.stat {
  text-align: center;
}

.stat-label {
  display: block;
  font-size: 14px;
  color: #666;
  margin-bottom: 5px;
}

.stat-value {
  font-size: 24px;
  font-weight: bold;
  color: #333;
}

.difficulty-selector {
  display: flex;
  gap: 10px;
  justify-content: center;
  margin-bottom: 20px;
}

.difficulty-btn {
  padding: 10px 20px;
  border: 2px solid #667eea;
  background: white;
  color: #667eea;
  border-radius: 25px;
  cursor: pointer;
  transition: all 0.3s ease;
  font-weight: bold;
}

.difficulty-btn.active,
.difficulty-btn:hover {
  background: #667eea;
  color: white;
  transform: translateY(-2px);
}

.game-board {
  display: grid;
  gap: 10px;
  margin: 20px 0;
  justify-content: center;
}

.game-board.easy {
  grid-template-columns: repeat(4, 1fr);
}

.game-board.hard {
  grid-template-columns: repeat(6, 1fr);
}

.card {
  width: 80px;
  height: 80px;
  background: linear-gradient(145deg, #e3e8f0, #c9d2e0);
  border-radius: 15px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 32px;
  cursor: pointer;
  transition: all 0.3s ease;
  transform-style: preserve-3d;
  position: relative;
  user-select: none;
}

.card:hover:not(.flipped):not(.matched) {
  transform: scale(1.05);
  box-shadow: 0 5px 15px rgba(0,0,0,0.2);
}

.card.flipped {
  background: linear-gradient(145deg, #fff, #f0f0f0);
  transform: rotateY(180deg);
  box-shadow: 0 8px 25px rgba(0,0,0,0.15);
}

.card.matched {
  background: linear-gradient(145deg, #4ecdc4, #44a08d);
  color: white;
  transform: scale(1.1);
  animation: pulse 0.6s ease;
}

.card.hint {
  animation: shake 0.5s ease;
  background: linear-gradient(145deg, #ffeaa7, #fdcb6e);
}

.card.wrong {
  animation: wrong-shake 0.5s ease;
  background: linear-gradient(145deg, #ff7675, #e17055);
}

.game-controls {
  display: flex;
  gap: 15px;
  justify-content: center;
  flex-wrap: wrap;
}

.control-btn {
  padding: 12px 24px;
  background: linear-gradient(145deg, #667eea, #764ba2);
  color: white;
  border: none;
  border-radius: 25px;
  cursor: pointer;
  font-size: 16px;
  font-weight: bold;
  transition: all 0.3s ease;
  box-shadow: 0 4px 15px rgba(0,0,0,0.2);
}

.control-btn:hover {
  transform: translateY(-3px);
  box-shadow: 0 6px 20px rgba(0,0,0,0.3);
}

.control-btn:active {
  transform: translateY(-1px);
}

.modal {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0,0,0,0.8);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 1000;
}

.modal.hidden {
  display: none;
}

.modal-content {
  background: white;
  padding: 40px;
  border-radius: 20px;
  text-align: center;
  max-width: 400px;
  animation: modal-appear 0.3s ease;
}

.modal-content h2 {
  color: #333;
  margin-bottom: 15px;
  font-size: 2rem;
}

.win-stats {
  background: #f8f9fa;
  padding: 20px;
  border-radius: 15px;
  margin: 20px 0;
}

.win-stats div {
  margin: 5px 0;
  font-size: 18px;
  color: #333;
}

@keyframes pulse {
  0% { transform: scale(1.1); }
  50% { transform: scale(1.2); }
  100% { transform: scale(1.1); }
}

@keyframes shake {
  0%, 100% { transform: translateX(0); }
  25% { transform: translateX(-5px); }
  75% { transform: translateX(5px); }
}

@keyframes wrong-shake {
  0%, 100% { transform: translateX(0); }
  10%, 30%, 50%, 70%, 90% { transform: translateX(-5px); }
  20%, 40%, 60%, 80% { transform: translateX(5px); }
}

@keyframes modal-appear {
  from {
    opacity: 0;
    transform: scale(0.8);
  }
  to {
    opacity: 1;
    transform: scale(1);
  }
}

@media (max-width: 600px) {
  .card {
    width: 60px;
    height: 60px;
    font-size: 24px;
  }
  
  .game-container {
    padding: 20px;
  }
  
  .header h1 {
    font-size: 2rem;
  }
}
`.trimStart()},script:{language:"javascript",content:`
// \u{1F9E0} Memory Spiel - Vollst\xE4ndige Implementierung
console.log('\u{1F3AE} Memory Spiel geladen!');

// ===========================================
// SPIEL-KONFIGURATION
// ===========================================

const SYMBOLS = ['\u{1F436}', '\u{1F431}', '\u{1F42D}', '\u{1F439}', '\u{1F430}', '\u{1F98A}', '\u{1F43B}', '\u{1F43C}', '\u{1F428}', '\u{1F42F}', '\u{1F981}', '\u{1F438}', '\u{1F435}', '\u{1F427}', '\u{1F426}', '\u{1F98B}', '\u{1F41D}', '\u{1F41B}'];

let gameState = {
    board: [],
    flippedCards: [],
    matchedPairs: 0,
    moves: 0,
    startTime: null,
    timerInterval: null,
    isEasyMode: true,
    totalPairs: 8,
    gameStarted: false,
    autoSolving: false
};

// DOM Elemente
const gameBoard = document.getElementById('game-board');
const movesElement = document.getElementById('moves');
const pairsElement = document.getElementById('pairs');
const timerElement = document.getElementById('timer');
const newGameBtn = document.getElementById('new-game');
const hintBtn = document.getElementById('hint-btn');
const autoSolveBtn = document.getElementById('auto-solve');
const easyBtn = document.getElementById('easy-btn');
const hardBtn = document.getElementById('hard-btn');
const winModal = document.getElementById('win-modal');
const playAgainBtn = document.getElementById('play-again');

// ===========================================
// SPIEL INITIALISIERUNG
// ===========================================

function initGame() {
    console.log('\u{1F3AF} Spiel wird initialisiert...');
    
    gameState.totalPairs = gameState.isEasyMode ? 8 : 18;
    gameState.board = [];
    gameState.flippedCards = [];
    gameState.matchedPairs = 0;
    gameState.moves = 0;
    gameState.gameStarted = false;
    gameState.autoSolving = false;
    
    // Timer stoppen
    if (gameState.timerInterval) {
        clearInterval(gameState.timerInterval);
        gameState.timerInterval = null;
    }
    
    // Spielfeld erstellen
    createBoard();
    updateStats();
    
    console.log('\u2705 Spiel initialisiert!');
}

function createBoard() {
    // Symbole f\xFCr das Spiel ausw\xE4hlen
    const selectedSymbols = SYMBOLS.slice(0, gameState.totalPairs);
    const gameSymbols = [...selectedSymbols, ...selectedSymbols]; // Doppelt f\xFCr Paare
    
    // Mischen
    for (let i = gameSymbols.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [gameSymbols[i], gameSymbols[j]] = [gameSymbols[j], gameSymbols[i]];
    }
    
    // Board-Array erstellen
    gameState.board = gameSymbols.map((symbol, index) => ({
        id: index,
        symbol: symbol,
        isFlipped: false,
        isMatched: false
    }));
    
    // HTML erstellen
    renderBoard();
}

function renderBoard() {
    gameBoard.innerHTML = '';
    gameBoard.className = 'game-board ' + (gameState.isEasyMode ? 'easy' : 'hard');
    
    gameState.board.forEach((card, index) => {
        const cardElement = document.createElement('div');
        cardElement.className = 'card';
        cardElement.dataset.id = index;
        
        // Symbol nur anzeigen wenn Karte aufgedeckt oder gefunden
        if (card.isFlipped || card.isMatched) {
            cardElement.textContent = card.symbol;
            cardElement.classList.add('flipped');
        }
        
        if (card.isMatched) {
            cardElement.classList.add('matched');
        }
        
        cardElement.addEventListener('click', () => handleCardClick(index));
        gameBoard.appendChild(cardElement);
    });
}

// ===========================================
// SPIEL-LOGIK
// ===========================================

function handleCardClick(cardIndex) {
    const card = gameState.board[cardIndex];
    const cardElement = document.querySelector('[data-id="' + cardIndex + '"]');
    
    // Ignorieren wenn Karte bereits aufgedeckt, gefunden oder zwei Karten offen
    if (card.isFlipped || card.isMatched || gameState.flippedCards.length === 2 || gameState.autoSolving) {
        return;
    }
    
    // Spiel starten beim ersten Klick
    if (!gameState.gameStarted) {
        startTimer();
        gameState.gameStarted = true;
    }
    
    // Karte aufdecken
    flipCard(cardIndex);
    
    // Pr\xFCfen ob zwei Karten aufgedeckt sind
    if (gameState.flippedCards.length === 2) {
        gameState.moves++;
        updateStats();
        
        setTimeout(() => {
            checkMatch();
        }, 1000);
    }
}

function flipCard(cardIndex) {
    const card = gameState.board[cardIndex];
    const cardElement = document.querySelector('[data-id="' + cardIndex + '"]');
    
    card.isFlipped = true;
    cardElement.textContent = card.symbol;
    cardElement.classList.add('flipped');
    
    gameState.flippedCards.push(cardIndex);
    
    console.log('\u{1F0CF} Karte aufgedeckt:', card.symbol);
}

function checkMatch() {
    const [firstIndex, secondIndex] = gameState.flippedCards;
    const firstCard = gameState.board[firstIndex];
    const secondCard = gameState.board[secondIndex];
    
    if (firstCard.symbol === secondCard.symbol) {
        // Match gefunden!
        handleMatch(firstIndex, secondIndex);
    } else {
        // Kein Match
        handleNoMatch(firstIndex, secondIndex);
    }
    
    gameState.flippedCards = [];
}

function handleMatch(firstIndex, secondIndex) {
    const firstCard = gameState.board[firstIndex];
    const secondCard = gameState.board[secondIndex];
    const firstElement = document.querySelector('[data-id="' + firstIndex + '"]');
    const secondElement = document.querySelector('[data-id="' + secondIndex + '"]');
    
    // Als gefunden markieren
    firstCard.isMatched = true;
    secondCard.isMatched = true;
    firstElement.classList.add('matched');
    secondElement.classList.add('matched');
    
    gameState.matchedPairs++;
    updateStats();
    
    console.log('\u2705 Match gefunden!', firstCard.symbol);
    
    // Pr\xFCfen ob Spiel gewonnen
    if (gameState.matchedPairs === gameState.totalPairs) {
        setTimeout(() => showWinModal(), 500);
    }
}

function handleNoMatch(firstIndex, secondIndex) {
    const firstCard = gameState.board[firstIndex];
    const secondCard = gameState.board[secondIndex];
    const firstElement = document.querySelector('[data-id="' + firstIndex + '"]');
    const secondElement = document.querySelector('[data-id="' + secondIndex + '"]');
    
    // Fehler-Animation
    firstElement.classList.add('wrong');
    secondElement.classList.add('wrong');
    
    setTimeout(() => {
        // Karten wieder umdrehen
        firstCard.isFlipped = false;
        secondCard.isFlipped = false;
        firstElement.textContent = '';
        secondElement.textContent = '';
        firstElement.classList.remove('flipped', 'wrong');
        secondElement.classList.remove('flipped', 'wrong');
    }, 500);
    
    console.log('\u274C Kein Match');
}

// ===========================================
// TIMER & STATISTIKEN
// ===========================================

function startTimer() {
    gameState.startTime = Date.now();
    gameState.timerInterval = setInterval(updateTimer, 1000);
}

function updateTimer() {
    if (!gameState.startTime) return;
    
    const elapsed = Math.floor((Date.now() - gameState.startTime) / 1000);
    const minutes = Math.floor(elapsed / 60);
    const seconds = elapsed % 60;
    
    timerElement.textContent = minutes.toString().padStart(2, '0') + ':' + seconds.toString().padStart(2, '0');
}

function updateStats() {
    movesElement.textContent = gameState.moves;
    pairsElement.textContent = gameState.matchedPairs + '/' + gameState.totalPairs;
}

// ===========================================
// HILFS-FUNKTIONEN
// ===========================================

function showHint() {
    if (gameState.autoSolving) return;
    
    // Finde zwei nicht gefundene Karten mit gleichem Symbol
    const unmatched = gameState.board.filter(card => !card.isMatched && !card.isFlipped);
    
    for (let i = 0; i < unmatched.length; i++) {
        for (let j = i + 1; j < unmatched.length; j++) {
            if (unmatched[i].symbol === unmatched[j].symbol) {
                // Hint-Animation
                const firstElement = document.querySelector('[data-id="' + unmatched[i].id + '"]');
                const secondElement = document.querySelector('[data-id="' + unmatched[j].id + '"]');
                
                firstElement.classList.add('hint');
                secondElement.classList.add('hint');
                
                setTimeout(() => {
                    firstElement.classList.remove('hint');
                    secondElement.classList.remove('hint');
                }, 1000);
                
                console.log('\u{1F4A1} Tipp gegeben f\xFCr:', unmatched[i].symbol);
                return;
            }
        }
    }
    
    console.log('\u{1F4A1} Keine Tipps verf\xFCgbar');
}

function autoSolve() {
    if (gameState.autoSolving) return;
    
    gameState.autoSolving = true;
    console.log('\u{1F916} Auto-Solve gestartet');
    
    const unmatched = gameState.board.filter(card => !card.isMatched);
    const pairs = [];
    
    // Finde alle Paare
    for (let i = 0; i < unmatched.length; i++) {
        for (let j = i + 1; j < unmatched.length; j++) {
            if (unmatched[i].symbol === unmatched[j].symbol) {
                pairs.push([unmatched[i].id, unmatched[j].id]);
                break;
            }
        }
    }
    
    // L\xF6se Paare nacheinander
    let pairIndex = 0;
    const solvePair = () => {
        if (pairIndex >= pairs.length) {
            gameState.autoSolving = false;
            return;
        }
        
        const [firstId, secondId] = pairs[pairIndex];
        
        // Erste Karte
        setTimeout(() => {
            handleCardClick(firstId);
        }, 500);
        
        // Zweite Karte
        setTimeout(() => {
            handleCardClick(secondId);
            pairIndex++;
            setTimeout(solvePair, 2000);
        }, 1000);
    };
    
    solvePair();
}

// ===========================================
// GEWINN-MODAL
// ===========================================

function showWinModal() {
    // Timer stoppen
    if (gameState.timerInterval) {
        clearInterval(gameState.timerInterval);
        gameState.timerInterval = null;
    }
    
    const elapsed = Math.floor((Date.now() - gameState.startTime) / 1000);
    const minutes = Math.floor(elapsed / 60);
    const seconds = elapsed % 60;
    const timeString = minutes.toString().padStart(2, '0') + ':' + seconds.toString().padStart(2, '0');
    
    // Bewertung berechnen
    const maxMoves = gameState.totalPairs * 2; // Perfekte Z\xFCge
    let rating = '\u2B50\u2B50\u2B50';
    
    if (gameState.moves <= maxMoves * 1.2) {
        rating = '\u2B50\u2B50\u2B50\u2B50\u2B50';
    } else if (gameState.moves <= maxMoves * 1.5) {
        rating = '\u2B50\u2B50\u2B50\u2B50';
    }
    
    // Modal-Content aktualisieren
    document.getElementById('final-moves').textContent = gameState.moves;
    document.getElementById('final-time').textContent = timeString;
    document.getElementById('rating').textContent = rating;
    
    // Modal anzeigen
    winModal.classList.remove('hidden');
    
    console.log('\u{1F3C6} Spiel gewonnen!');
}

// ===========================================
// EVENT LISTENERS
// ===========================================

// Schwierigkeitsgrad wechseln
easyBtn.addEventListener('click', function() {
    if (!gameState.isEasyMode) {
        gameState.isEasyMode = true;
        easyBtn.classList.add('active');
        hardBtn.classList.remove('active');
        initGame();
    }
});

hardBtn.addEventListener('click', function() {
    if (gameState.isEasyMode) {
        gameState.isEasyMode = false;
        hardBtn.classList.add('active');
        easyBtn.classList.remove('active');
        initGame();
    }
});

// Spiel-Controls
newGameBtn.addEventListener('click', initGame);
hintBtn.addEventListener('click', showHint);
autoSolveBtn.addEventListener('click', autoSolve);

// Modal schlie\xDFen
playAgainBtn.addEventListener('click', function() {
    winModal.classList.add('hidden');
    initGame();
});

// Spiel beim Laden starten
initGame();

console.log('\u{1F9E0} Memory Spiel bereit! Viel Spa\xDF beim Spielen!');
`.trimStart()},stylesheets:[],scripts:[],cssPreset:"",imports:{},types:{}};var d={name:"eighth",title:"7. Einfaches Memory",thumbnail:"assets/templates/blank.svg",activeEditor:"script",markup:{language:"html",content:`
<div class="header">
  <h1>\u{1F9E0} Memory Spiel</h1>
  <p>Finde alle Kartenpaare!</p>
</div>

<div class="game-container">
  <div class="stats">
    Z\xFCge: <span id="moves">0</span> | 
    Paare: <span id="pairs">0/8</span>
  </div>
  
  <div id="board" class="board"></div>
  
  <button id="new-game" class="btn">Neues Spiel</button>
  
  <div id="win-message" class="win-message hidden">
    \u{1F389} Gewonnen! Alle Paare gefunden!
  </div>
</div>
`.trimStart()},style:{language:"css",content:`
body {
  font-family: Arial, sans-serif;
  margin: 0;
  padding: 20px;
  background: #f0f0f0;
  display: flex;
  flex-direction: column;
  align-items: center;
  min-height: 100vh;
}

.header {
  text-align: center;
  color: #333;
  margin-bottom: 20px;
}

.header h1 {
  font-size: 2.5rem;
  margin-bottom: 10px;
}

.game-container {
  background: white;
  border-radius: 15px;
  padding: 30px;
  box-shadow: 0 5px 15px rgba(0,0,0,0.1);
  text-align: center;
}

.stats {
  margin-bottom: 20px;
  font-size: 18px;
  color: #333;
  font-weight: bold;
}

.board {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 10px;
  max-width: 400px;
  margin: 20px auto;
}

.card {
  width: 80px;
  height: 80px;
  background: #4CAF50;
  border: none;
  border-radius: 10px;
  font-size: 30px;
  cursor: pointer;
  transition: all 0.3s ease;
  color: transparent;
}

.card:hover {
  transform: scale(1.05);
  box-shadow: 0 3px 10px rgba(0,0,0,0.2);
}

.card.flipped {
  background: white;
  color: black;
  border: 2px solid #ddd;
}

.card.matched {
  background: #FFD700;
  color: black;
  transform: scale(1.1);
}

.btn {
  background: #2196F3;
  color: white;
  border: none;
  padding: 12px 24px;
  border-radius: 8px;
  cursor: pointer;
  font-size: 16px;
  margin: 20px 10px;
  transition: background 0.3s ease;
}

.btn:hover {
  background: #1976D2;
}

.win-message {
  background: #4CAF50;
  color: white;
  padding: 20px;
  border-radius: 10px;
  margin: 20px 0;
  font-size: 18px;
  font-weight: bold;
}

.hidden {
  display: none;
}

@media (max-width: 500px) {
  .card {
    width: 60px;
    height: 60px;
    font-size: 24px;
  }
  
  .board {
    max-width: 280px;
  }
  
  .header h1 {
    font-size: 2rem;
  }
}
`.trimStart()},script:{language:"javascript",content:`
// Einfaches Memory Spiel
console.log('\u{1F9E0} Einfaches Memory Spiel geladen!');

// Spielsymbole
const SYMBOLS = ['\u{1F436}', '\u{1F431}', '\u{1F42D}', '\u{1F439}', '\u{1F430}', '\u{1F98A}', '\u{1F43B}', '\u{1F43C}'];

// Spielzustand
let gameState = {
    cards: [],
    flippedCards: [],
    moves: 0,
    pairs: 0
};

// DOM Elemente
const board = document.getElementById('board');
const movesElement = document.getElementById('moves');
const pairsElement = document.getElementById('pairs');
const newGameBtn = document.getElementById('new-game');
const winMessage = document.getElementById('win-message');

// Spiel initialisieren
function initGame() {
    console.log('\u{1F3AF} Neues Spiel startet...');
    
    // Spielzustand zur\xFCcksetzen
    gameState.cards = [];
    gameState.flippedCards = [];
    gameState.moves = 0;
    gameState.pairs = 0;
    
    // UI zur\xFCcksetzen
    winMessage.classList.add('hidden');
    updateStats();
    createBoard();
}

// Spielfeld erstellen
function createBoard() {
    board.innerHTML = '';
    
    // Symbole verdoppeln und mischen
    const gameCards = [...SYMBOLS, ...SYMBOLS];
    
    // Fisher-Yates Shuffle
    for (let i = gameCards.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [gameCards[i], gameCards[j]] = [gameCards[j], gameCards[i]];
    }
    
    // Karten-Objekte erstellen
    gameState.cards = gameCards.map((symbol, index) => ({
        id: index,
        symbol: symbol,
        flipped: false,
        matched: false
    }));
    
    // HTML Karten erstellen
    gameState.cards.forEach((card, index) => {
        const cardElement = document.createElement('button');
        cardElement.className = 'card';
        cardElement.dataset.id = index;
        cardElement.addEventListener('click', () => handleCardClick(index));
        board.appendChild(cardElement);
    });
    
    console.log('\u2705 Spielfeld erstellt!');
}

// Karten-Klick behandeln
function handleCardClick(cardIndex) {
    const card = gameState.cards[cardIndex];
    const cardElement = document.querySelector('[data-id="' + cardIndex + '"]');
    
    // Ignorieren wenn Karte bereits aufgedeckt oder 2 Karten offen
    if (card.flipped || card.matched || gameState.flippedCards.length === 2) {
        return;
    }
    
    // Karte aufdecken
    flipCard(cardIndex);
    
    // Wenn 2 Karten aufgedeckt, nach kurzer Zeit pr\xFCfen
    if (gameState.flippedCards.length === 2) {
        gameState.moves++;
        updateStats();
        
        setTimeout(() => {
            checkForMatch();
        }, 1000);
    }
}

// Karte aufdecken
function flipCard(cardIndex) {
    const card = gameState.cards[cardIndex];
    const cardElement = document.querySelector('[data-id="' + cardIndex + '"]');
    
    card.flipped = true;
    cardElement.textContent = card.symbol;
    cardElement.classList.add('flipped');
    gameState.flippedCards.push(cardIndex);
    
    console.log('\u{1F0CF} Karte aufgedeckt:', card.symbol);
}

// Auf Match pr\xFCfen
function checkForMatch() {
    const [firstIndex, secondIndex] = gameState.flippedCards;
    const firstCard = gameState.cards[firstIndex];
    const secondCard = gameState.cards[secondIndex];
    const firstElement = document.querySelector('[data-id="' + firstIndex + '"]');
    const secondElement = document.querySelector('[data-id="' + secondIndex + '"]');
    
    if (firstCard.symbol === secondCard.symbol) {
        // Match gefunden!
        handleMatch(firstIndex, secondIndex);
    } else {
        // Kein Match - Karten wieder umdrehen
        handleNoMatch(firstIndex, secondIndex);
    }
    
    // Aufgedeckte Karten zur\xFCcksetzen
    gameState.flippedCards = [];
}

// Match behandeln
function handleMatch(firstIndex, secondIndex) {
    const firstCard = gameState.cards[firstIndex];
    const secondCard = gameState.cards[secondIndex];
    const firstElement = document.querySelector('[data-id="' + firstIndex + '"]');
    const secondElement = document.querySelector('[data-id="' + secondIndex + '"]');
    
    // Als gefunden markieren
    firstCard.matched = true;
    secondCard.matched = true;
    firstElement.classList.add('matched');
    secondElement.classList.add('matched');
    
    gameState.pairs++;
    updateStats();
    
    console.log('\u2705 Match gefunden!', firstCard.symbol);
    
    // Pr\xFCfen ob alle Paare gefunden
    if (gameState.pairs === 8) {
        setTimeout(() => {
            showWinMessage();
        }, 500);
    }
}

// Kein Match behandeln
function handleNoMatch(firstIndex, secondIndex) {
    const firstCard = gameState.cards[firstIndex];
    const secondCard = gameState.cards[secondIndex];
    const firstElement = document.querySelector('[data-id="' + firstIndex + '"]');
    const secondElement = document.querySelector('[data-id="' + secondIndex + '"]');
    
    // Karten wieder umdrehen
    firstCard.flipped = false;
    secondCard.flipped = false;
    firstElement.textContent = '';
    secondElement.textContent = '';
    firstElement.classList.remove('flipped');
    secondElement.classList.remove('flipped');
    
    console.log('\u274C Kein Match');
}

// Statistiken aktualisieren
function updateStats() {
    movesElement.textContent = gameState.moves;
    pairsElement.textContent = gameState.pairs + '/8';
}

// Gewinn-Nachricht anzeigen
function showWinMessage() {
    winMessage.classList.remove('hidden');
    console.log('\u{1F3C6} Spiel gewonnen in', gameState.moves, 'Z\xFCgen!');
}

// Event Listeners
newGameBtn.addEventListener('click', initGame);

// Spiel beim Laden starten
initGame();

console.log('\u{1F3AE} Memory Spiel bereit!');
`.trimStart()},stylesheets:[],scripts:[],cssPreset:"",imports:{},types:{}};var T=[e,t,n,a,o,i,r,d,s];export{T as starterTemplates};
