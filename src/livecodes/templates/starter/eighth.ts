import type { Template } from '../../models';

export const eighth: Template = {
  name: 'eighth',
  title: "7. Einfaches Memory",
  thumbnail: 'assets/templates/blank.svg',
  activeEditor: 'script',
  markup: {
    language: 'html',
    content: `
<div class="header">
  <h1>🧠 Memory Spiel</h1>
  <p>Finde alle Kartenpaare!</p>
</div>

<div class="game-container">
  <div class="stats">
    Züge: <span id="moves">0</span> | 
    Paare: <span id="pairs">0/8</span>
  </div>
  
  <div id="board" class="board"></div>
  
  <button id="new-game" class="btn">Neues Spiel</button>
  
  <div id="win-message" class="win-message hidden">
    🎉 Gewonnen! Alle Paare gefunden!
  </div>
</div>
`.trimStart(),
  },
  style: {
    language: 'css',
    content: `
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
`.trimStart(),
  },
  script: {
    language: 'javascript',
    content: `
// Einfaches Memory Spiel
console.log('🧠 Einfaches Memory Spiel geladen!');

// Spielsymbole
const SYMBOLS = ['🐶', '🐱', '🐭', '🐹', '🐰', '🦊', '🐻', '🐼'];

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
    console.log('🎯 Neues Spiel startet...');
    
    // Spielzustand zurücksetzen
    gameState.cards = [];
    gameState.flippedCards = [];
    gameState.moves = 0;
    gameState.pairs = 0;
    
    // UI zurücksetzen
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
    
    console.log('✅ Spielfeld erstellt!');
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
    
    // Wenn 2 Karten aufgedeckt, nach kurzer Zeit prüfen
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
    
    console.log('🃏 Karte aufgedeckt:', card.symbol);
}

// Auf Match prüfen
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
    
    // Aufgedeckte Karten zurücksetzen
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
    
    console.log('✅ Match gefunden!', firstCard.symbol);
    
    // Prüfen ob alle Paare gefunden
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
    
    console.log('❌ Kein Match');
}

// Statistiken aktualisieren
function updateStats() {
    movesElement.textContent = gameState.moves;
    pairsElement.textContent = gameState.pairs + '/8';
}

// Gewinn-Nachricht anzeigen
function showWinMessage() {
    winMessage.classList.remove('hidden');
    console.log('🏆 Spiel gewonnen in', gameState.moves, 'Zügen!');
}

// Event Listeners
newGameBtn.addEventListener('click', initGame);

// Spiel beim Laden starten
initGame();

console.log('🎮 Memory Spiel bereit!');
`.trimStart(),
  },
  stylesheets: [],
  scripts: [],
  cssPreset: '',
  imports: {},
  types: {},
};