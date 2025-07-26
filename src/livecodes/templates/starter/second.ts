import type { Template } from '../../models';

export const second: Template = {
  name: 'second',
  title: "2. Grundlagen CSS",
  thumbnail: 'assets/templates/blank.svg',
   activeEditor: 'style',
  markup: {
    language: 'html',
    content: `
<div class="header">
  <h1>CSS Styling</h1>
</div>
<div class="container">
  <div class="card">
    <h2>Karte 1</h2>
    <p>Dies ist eine schöne Karte mit CSS-Styling.</p>
  </div>
  <div class="card">
    <h2>Karte 2</h2>
    <p>Eine weitere Karte mit CSS-Styling.</p>
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
`.trimStart(),
  },
  script: {
    language: 'javascript',
    content: `
// Experimentiere mit CSS-Änderungen
console.log("CSS Grundlagen geladen!");
`.trimStart(),
  },
  stylesheets: [],
  scripts: [],
  cssPreset: '',
  imports: {},
  types: {},
};