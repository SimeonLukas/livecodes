import type { Template } from '../../models';

export const fifth: Template = {
  name: 'fifth',
  title: "5. Text & Input Handling",
  thumbnail: 'assets/templates/blank.svg',
  activeEditor: 'script',
  markup: {
    language: 'html',
    content: `
<div class="header">
  <h1>JavaScript Grundlagen - Text & Input</h1>
  <p>Lerne wie man mit Text und Eingaben arbeitet! 📝</p>
</div>

<div class="lesson-section">
  <h2>📝 Text dynamisch ändern</h2>
  <div class="example-container">
    <h3 id="text-display">Hallo Welt!</h3>
    <input type="text" id="text-input" placeholder="Neuen Text eingeben">
    <button id="text-btn" class="demo-btn">Text ändern</button>
  </div>
</div>

<div class="lesson-section">
  <h2>🔤 Text-Transformationen</h2>
  <div class="example-container">
    <div id="transform-display" class="transform-box">Transformiere mich!</div>
    <input type="text" id="transform-input" placeholder="Text eingeben">
    <div class="button-group">
      <button id="uppercase-btn" class="demo-btn">GROSS</button>
      <button id="lowercase-btn" class="demo-btn">klein</button>
      <button id="reverse-btn" class="demo-btn">↻ Umkehren</button>
    </div>
  </div>
</div>

<div class="lesson-section">
  <h2>📊 Text-Statistiken</h2>
  <div class="example-container">
    <textarea id="stats-input" placeholder="Gib hier einen längeren Text ein..."></textarea>
    <div id="stats-display" class="stats-box">
      <div>Zeichen: <span id="char-count">0</span></div>
      <div>Wörter: <span id="word-count">0</span></div>
      <div>Sätze: <span id="sentence-count">0</span></div>
    </div>
  </div>
</div>

<div class="lesson-section">
  <h2>🎯 Einfacher Chatbot</h2>
  <div class="example-container">
    <div id="chat-display" class="chat-box">Bot: Hallo! Schreib mir etwas!</div>
    <input type="text" id="chat-input" placeholder="Schreib eine Nachricht...">
    <button id="send-btn" class="demo-btn">Senden</button>
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
`.trimStart(),
  },
  script: {
    language: 'javascript',
    content: `
// 🚀 JavaScript Grundlagen - Text & Input
console.log('Text & Input Tutorial geladen!');

// ===========================================
// 1. TEXT DYNAMISCH ÄNDERN
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

// Großbuchstaben
uppercaseBtn.addEventListener('click', function() {
    const text = transformInput.value;
    if (text) {
        const upperText = text.toUpperCase();
        transformDisplay.textContent = upperText;
        console.log('Text in Großbuchstaben:', upperText);
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
    
    // Zeichen zählen
    const chars = text.length;
    
    // Wörter zählen
    const words = text.trim() === '' ? 0 : text.trim().split(/\\s+/).length;
    
    // Sätze zählen (grober Ansatz)
    const sentences = text.trim() === '' ? 0 : text.split(/[.!?]+/).filter(s => s.trim().length > 0).length;
    
    // Anzeige aktualisieren
    charCount.textContent = chars;
    wordCount.textContent = words;
    sentenceCount.textContent = sentences;
    
    console.log('Statistiken - Zeichen:', chars, 'Wörter:', words, 'Sätze:', sentences);
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
    'gut': 'Das freut mich zu hören!',
    'schlecht': 'Oh nein, das tut mir leid. Wird schon wieder!',
    'hilfe': 'Ich kann einfache Fragen beantworten. Probier: hallo, wie gehts, gut, schlecht',
    'tschüss': 'Auf Wiedersehen! War schön mit dir zu reden!',
    'danke': 'Gerne! Immer da um zu helfen.',
    'javascript': 'JavaScript ist super! Lernst du gerade programmieren?',
    'ja': 'Das ist toll!',
    'nein': 'Okay, verstehe.'
};

function sendMessage() {
    const message = chatInput.value.trim();
    if (message === '') return;
    
    // Benutzer-Nachricht hinzufügen
    chatDisplay.textContent += '\\nDu: ' + message;
    
    // Bot-Antwort finden
    const lowerMessage = message.toLowerCase();
    let botReply = 'Interessant... erzähl mir mehr!';
    
    // Einfache Keyword-Suche
    for (let keyword in botResponses) {
        if (lowerMessage.includes(keyword)) {
            botReply = botResponses[keyword];
            break;
        }
    }
    
    // Bot-Antwort nach kurzer Verzögerung
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
    console.log('📝 Text & Input Tipps:');
    console.log('1. element.value - Input-Werte lesen');
    console.log('2. element.textContent - Text setzen/lesen');
    console.log('3. string.toUpperCase() / toLowerCase() - Groß/Klein');
    console.log('4. string.split() / join() - String teilen/verbinden');
    console.log('5. string.trim() - Leerzeichen entfernen');
    console.log('6. "keypress" Event - Tastatureingaben');
    console.log('7. setTimeout() - Verzögerungen');
    console.log('Probiere den Chatbot aus! 🤖');
}, 2000);

console.log('📝 Arbeite mit Text und Eingaben!');
`.trimStart(),
  },
  stylesheets: [],
  scripts: [],
  cssPreset: '',
  imports: {},
  types: {},
};

    