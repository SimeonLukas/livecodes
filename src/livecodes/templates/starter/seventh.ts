import type { Template } from '../../models';

export const seventh: Template = {
  name: 'seventh',
  title: "8. Memory Spiel",
  thumbnail: 'assets/templates/blank.svg',
  activeEditor: 'script',
  markup: {
    language: 'html',
    content: `
<div class="header">
  <h1>🧠 Memory Spiel</h1>
  <p>Finde alle Kartenpaare! Trainiere dein Gedächtnis! 🃏</p>
</div>

<div class="game-container">
  <div class="game-stats">
    <div class="stat">
      <span class="stat-label">Züge:</span>
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
    <button id="new-game" class="control-btn">🎮 Neues Spiel</button>
    <button id="hint-btn" class="control-btn">💡 Tipp</button>
    <button id="auto-solve" class="control-btn">🤖 Auto-Lösen</button>
  </div>
</div>

<div id="win-modal" class="modal hidden">
  <div class="modal-content">
    <h2>🎉 Gewonnen!</h2>
    <p id="win-message">Gratulation! Du hast alle Paare gefunden!</p>
    <div class="win-stats">
      <div>Züge: <span id="final-moves">0</span></div>
      <div>Zeit: <span id="final-time">00:00</span></div>
      <div>Bewertung: <span id="rating">⭐⭐⭐</span></div>
    </div>
    <button id="play-again" class="control-btn">🔄 Nochmal spielen</button>
  </div>
</div>
`.trimStart(),
  },
  style: {
    language: 'css',
    content: `
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
`.trimStart(),
  },
  script: {
    language: 'javascript',
    content: `
// 🧠 Memory Spiel - Vollständige Implementierung
console.log('🎮 Memory Spiel geladen!');

// ===========================================
// SPIEL-KONFIGURATION
// ===========================================

const SYMBOLS = ['🐶', '🐱', '🐭', '🐹', '🐰', '🦊', '🐻', '🐼', '🐨', '🐯', '🦁', '🐸', '🐵', '🐧', '🐦', '🦋', '🐝', '🐛'];

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
    console.log('🎯 Spiel wird initialisiert...');
    
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
    
    console.log('✅ Spiel initialisiert!');
}

function createBoard() {
    // Symbole für das Spiel auswählen
    const selectedSymbols = SYMBOLS.slice(0, gameState.totalPairs);
    const gameSymbols = [...selectedSymbols, ...selectedSymbols]; // Doppelt für Paare
    
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
    
    // Prüfen ob zwei Karten aufgedeckt sind
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
    
    console.log('🃏 Karte aufgedeckt:', card.symbol);
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
    
    console.log('✅ Match gefunden!', firstCard.symbol);
    
    // Prüfen ob Spiel gewonnen
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
    
    console.log('❌ Kein Match');
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
                
                console.log('💡 Tipp gegeben für:', unmatched[i].symbol);
                return;
            }
        }
    }
    
    console.log('💡 Keine Tipps verfügbar');
}

function autoSolve() {
    if (gameState.autoSolving) return;
    
    gameState.autoSolving = true;
    console.log('🤖 Auto-Solve gestartet');
    
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
    
    // Löse Paare nacheinander
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
    const maxMoves = gameState.totalPairs * 2; // Perfekte Züge
    let rating = '⭐⭐⭐';
    
    if (gameState.moves <= maxMoves * 1.2) {
        rating = '⭐⭐⭐⭐⭐';
    } else if (gameState.moves <= maxMoves * 1.5) {
        rating = '⭐⭐⭐⭐';
    }
    
    // Modal-Content aktualisieren
    document.getElementById('final-moves').textContent = gameState.moves;
    document.getElementById('final-time').textContent = timeString;
    document.getElementById('rating').textContent = rating;
    
    // Modal anzeigen
    winModal.classList.remove('hidden');
    
    console.log('🏆 Spiel gewonnen!');
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

// Modal schließen
playAgainBtn.addEventListener('click', function() {
    winModal.classList.add('hidden');
    initGame();
});

// Spiel beim Laden starten
initGame();

console.log('🧠 Memory Spiel bereit! Viel Spaß beim Spielen!');
`.trimStart(),
  },
  stylesheets: [],
  scripts: [],
  cssPreset: '',
  imports: {},
  types: {},
};