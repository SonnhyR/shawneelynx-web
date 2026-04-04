const fs = require('fs');
const path = require('path');

const books = [
  { id: 'song', name: 'Song', numeral: 'II' },
  { id: 'voyage', name: 'Voyage', numeral: 'III' },
  { id: 'game', name: 'Game', numeral: 'IV' },
  { id: 'cure', name: 'Cure', numeral: 'V' }
];

const basePath = path.join(process.cwd(), 'src', 'app', 'obras', 'litharya');
const poemTs = fs.readFileSync(path.join(basePath, 'poem', 'poem.ts'), 'utf-8');
const poemHtml = fs.readFileSync(path.join(basePath, 'poem', 'poem.html'), 'utf-8');
const poemCss = fs.readFileSync(path.join(basePath, 'poem', 'poem.css'), 'utf-8');

books.forEach(b => {
  const dir = path.join(basePath, b.id);
  if (!fs.existsSync(dir)) fs.mkdirSync(dir, { recursive: true });
  
  // TS Rewrite
  let ts = poemTs.replace(/Poem/g, b.name)
                 .replace(/poem\.html/g, `${b.id}.html`)
                 .replace(/poem\.css/g, `${b.id}.css`)
                 .replace(/app-poem/g, `app-${b.id}`)
                 .replace(/Evenny de Aeloreas/g, 'Personaje 1')
                 .replace(/\/assets\/images\/evenny\.png/g, '')
                 .replace(/Kaelan de Cyrion/g, 'Personaje 2')
                 .replace(/\/assets\/images\/lan\.png/g, '')
                 .replace(/secundarios: Character\[\] = \[[\s\S]*?\];/, `secundarios: Character[] = [
    { name: 'Personaje Secundario 1', img: '', desc: 'Descripción provisoria del personaje...', objectPos: 'center' },
    { name: 'Personaje Secundario 2', img: '', desc: 'Descripción provisoria del personaje...', objectPos: 'center' },
    { name: 'Personaje Secundario 3', img: '', desc: 'Descripción provisoria del personaje...', objectPos: 'center' },
    { name: 'Personaje Secundario 4', img: '', desc: 'Descripción provisoria del personaje...', objectPos: 'center' }
  ];`);
  
  fs.writeFileSync(path.join(dir, `${b.id}.ts`), ts);
  
  // HTML Rewrite
  let html = poemHtml.replace(/Poem/g, b.name)
                     .replace(/poem\.jpg/g, `${b.id}.jpg`)
                     .replace(/Libro I/g, `Libro ${b.numeral}`);
  fs.writeFileSync(path.join(dir, `${b.id}.html`), html);
  
  // CSS (Identical clone to empower user customization per-book later)
  fs.writeFileSync(path.join(dir, `${b.id}.css`), poemCss);
});

console.log('Book pages cloned seamlessly.');
