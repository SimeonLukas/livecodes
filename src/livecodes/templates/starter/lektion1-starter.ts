import type { Template } from '../../models';

export const lektion1Starter: Template = {
  name: 'lektion1-starter',
  title: window.deps.translateString('templates.starter.lektion1-starter', '1. HTML Grundlagen'),
  thumbnail: 'assets/templates/blank.svg',
  activeEditor: 'markup',
  markup: {
    language: 'html',
    content: `
<h1>Willkommen zu HTML!</h1>
<p>Dies ist ein <strong>Paragraf</strong> mit <em>betontem Text</em>.</p>
<ul>
  <li>Erstes Listenelement</li>
  <li>Zweites Listenelement</li>
  <li>Drittes Listenelement</li>
</ul>
<a href="https://www.w3schools.com/html/" target="_blank">Mehr über HTML lernen</a>
`.trimStart(),
  },
  style: {
    language: 'css',
    content: `
/* Füge hier dein CSS hinzu */
body {
  font-family: Arial, sans-serif;
  margin: 20px;
}
`.trimStart(),
  },
  script: {
    language: 'javascript',
    content: `
// Füge hier dein JavaScript hinzu
console.log("HTML Grundlagen geladen!");
`.trimStart(),
  },
  stylesheets: [],
  scripts: [],
  cssPreset: '',
  imports: {},
  types: {},
};