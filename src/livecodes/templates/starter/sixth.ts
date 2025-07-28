import type { Template } from '../../models';

export const sixth: Template = {
  name: 'sixth',
  title: "6. Animation & Movement",
  thumbnail: 'assets/templates/blank.svg',
  activeEditor: 'script',
  markup: {
    language: 'html',
    content: `
<div class="header">
  <h1>JavaScript Grundlagen - Animation</h1>
  <p>Lerne wie man Elemente bewegt und animiert! 💫</p>
</div>

<div class="lesson-section">
  <h2>🎪 Einfache Bewegung</h2>
  <div class="example-container">
    <div class="animation-area">
      <div id="move-box" class="move-box">Ich bewege mich!</div>
    </div>
    <div class="button-group">
      <button id="move-right" class="demo-btn">→ Rechts</button>
      <button id="move-left" class="demo-btn">← Links</button>
      <button id="move-reset" class="demo-btn">↺ Reset</button>
    </div>
  </div>
</div>

<div class="lesson-section">
  <h2>🎯 Automatische Animation</h2>
  <div class="example-container">
    <div class="animation-area">
      <div id="auto-box" class="auto-box">Auto-Animation!</div>
    </div>
    <div class="button-group">
      <button id="start-btn" class="demo-btn">▶ Start</button>
      <button id="stop-btn" class="demo-btn">⏹ Stop</button>
      <button id="speed-btn" class="demo-btn">⚡ Schneller</button>
    </div>
  </div>
</div>

<div class="lesson-section">
  <h2>🎮 Tastatur-Steuerung</h2>
  <div class="example-container">
    <p>Verwende WASD oder Pfeiltasten!</p>
    <div class="game-area">
      <div id="player" class="player">🚀</div>
    </div>
    <div class="controls-info">
      <span>W/↑: Hoch</span>
      <span>S/↓: Runter</span>
      <span>A/←: Links</span>
      <span>D/→: Rechts</span>
    </div>
  </div>
</div>

<div class="lesson-section">
  <h2>🌟 Partikel-Effekt</h2>
  <div class="example-container">
    <div id="particle-area" class="particle-area">Klick mich für Partikel!</div>
    <button id="clear-particles" class="demo-btn">🧹 Aufräumen</button>
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
`.trimStart(),
  },
  script: {
    language: 'javascript',
    content: `
// 🚀 JavaScript Grundlagen - Animation & Movement
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

// Position zurücksetzen
moveResetBtn.addEventListener('click', function() {
    currentPosition = 20;
    moveBox.style.left = currentPosition + 'px';
    console.log('Position zurückgesetzt');
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
    // Position ändern
    autoPosition += direction * speed;
    
    // Richtung wechseln wenn Rand erreicht
    if (autoPosition >= 320 || autoPosition <= 20) {
        direction *= -1;
    }
    
    // Position anwenden
    autoBox.style.left = autoPosition + 'px';
    
    // Nächsten Frame anfordern
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

// Geschwindigkeit erhöhen
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
    
    // Zufällige Farbe
    const colors = ['#ff6b6b', '#4ecdc4', '#45b7d1', '#ffeaa7', '#fd79a8', '#00b894'];
    const randomColor = colors[Math.floor(Math.random() * colors.length)];
    particle.style.backgroundColor = randomColor;
    
    // Position setzen
    particle.style.left = x + 'px';
    particle.style.top = y + 'px';
    
    // Zufällige Bewegung
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

// Klick-Event für Partikel
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
    console.log('💫 Animation Tipps:');
    console.log('1. element.style.left/top - Position ändern');
    console.log('2. requestAnimationFrame() - Sanfte Animationen');
    console.log('3. cancelAnimationFrame() - Animationen stoppen');
    console.log('4. document.addEventListener("keydown") - Tastatur');
    console.log('5. Math.random() - Zufallszahlen');
    console.log('6. setTimeout() - Verzögerungen');
    console.log('7. CSS transitions - Automatische Übergänge');
    console.log('Bewege den Spieler mit WASD! 🎮');
}, 2000);

console.log('💫 Animiere und bewege Elemente!');
`.trimStart(),
  },
  stylesheets: [],
  scripts: [],
  cssPreset: '',
  imports: {},
  types: {},
};