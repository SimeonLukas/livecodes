import type { Template } from '../../models';

export const fourth: Template = {
  name: 'fourth',
  title: "4. DOM Styling & Farben",
  thumbnail: 'assets/templates/blank.svg',
  activeEditor: 'script',
  markup: {
    language: 'html',
    content: `
<div class="header">
  <h1>JavaScript Grundlagen - DOM Styling</h1>
  <p>Lerne wie man Stile mit JavaScript ändert! 🎨</p>
</div>

<div class="lesson-section">
  <h2>🎨 Farben wechseln</h2>
  <div class="example-container">
    <div id="color-box" class="color-box">Ich ändere meine Farbe!</div>
    <button id="color-btn" class="demo-btn">Farbe wechseln</button>
  </div>
</div>

<div class="lesson-section">
  <h2>📏 Größe ändern</h2>
  <div class="example-container">
    <div id="size-box" class="size-box">Verändere meine Größe!</div>
    <div class="button-group">
      <button id="bigger-btn" class="demo-btn">Größer</button>
      <button id="smaller-btn" class="demo-btn">Kleiner</button>
      <button id="normal-btn" class="demo-btn">Normal</button>
    </div>
  </div>
</div>

<div class="lesson-section">
  <h2>💫 CSS-Klassen wechseln</h2>
  <div class="example-container">
    <div id="theme-box" class="theme-box">Ich kann verschiedene Themes haben!</div>
    <div class="button-group">
      <button id="dark-theme" class="demo-btn">Dark Theme</button>
      <button id="bright-theme" class="demo-btn">Bright Theme</button>
      <button id="rainbow-theme" class="demo-btn">Rainbow Theme</button>
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
`.trimStart(),
  },
  script: {
    language: 'javascript',
    content: `
// 🚀 JavaScript Grundlagen - DOM Styling
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
    // Nächste Farbe auswählen
    currentColorIndex = currentColorIndex + 1;
    
    // Wenn am Ende angekommen, wieder von vorne beginnen
    if (currentColorIndex >= colors.length) {
        currentColorIndex = 0;
    }
    
    // Farbe ändern mit style.backgroundColor
    colorBox.style.backgroundColor = colors[currentColorIndex];
    
    console.log('Farbe geändert zu:', colors[currentColorIndex]);
});

// ===========================================
// 2. GRÖßE ÄNDERN
// ===========================================

const sizeBox = document.getElementById('size-box');
const biggerButton = document.getElementById('bigger-btn');
const smallerButton = document.getElementById('smaller-btn');
const normalButton = document.getElementById('normal-btn');

// Aktuelle Größe tracken
let currentSize = 100; // Prozent

// Größer machen
biggerButton.addEventListener('click', function() {
    if (currentSize < 200) {
        currentSize += 20;
        sizeBox.style.transform = 'scale(' + (currentSize / 100) + ')';
        console.log('Größe erhöht auf:', currentSize + '%');
    }
});

// Kleiner machen
smallerButton.addEventListener('click', function() {
    if (currentSize > 40) {
        currentSize -= 20;
        sizeBox.style.transform = 'scale(' + (currentSize / 100) + ')';
        console.log('Größe verringert auf:', currentSize + '%');
    }
});

// Normal zurücksetzen
normalButton.addEventListener('click', function() {
    currentSize = 100;
    sizeBox.style.transform = 'scale(1)';
    console.log('Größe zurückgesetzt auf: 100%');
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
    console.log('🎨 DOM Styling Tipps:');
    console.log('1. element.style.property - Direkte Stil-Änderungen');
    console.log('2. element.classList.add() - CSS-Klassen hinzufügen');
    console.log('3. element.classList.remove() - CSS-Klassen entfernen');
    console.log('4. transform: scale() - Elemente skalieren');
    console.log('5. CSS-Transitions - Sanfte Übergänge');
    console.log('6. Arrays für mehrere Werte nutzen');
    console.log('Experimentiere mit den Buttons! 🎨');
}, 2000);

console.log('🎨 Verändere das Aussehen der Elemente!');
`.trimStart(),
  },
  stylesheets: [],
  scripts: [],
  cssPreset: '',
  imports: {},
  types: {},
};