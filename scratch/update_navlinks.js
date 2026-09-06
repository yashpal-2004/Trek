import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const root = path.join(__dirname, '..', 'src', 'data');

function walk(dir) {
  let results = [];
  const list = fs.readdirSync(dir);
  list.forEach(file => {
    const fullPath = path.join(dir, file);
    const stat = fs.statSync(fullPath);
    if (stat && stat.isDirectory()) {
      results = results.concat(walk(fullPath));
    } else if (fullPath.endsWith('trip.js')) {
      results.push(fullPath);
    }
  });
  return results;
}

const files = walk(root);
let count = 0;

files.forEach(file => {
  let content = fs.readFileSync(file, 'utf8');
  if (content.includes('navLinks = [') && !content.includes('id: "packing"')) {
    content = content.replace(
      /\{\s*id:\s*"expenses",\s*label:\s*"Expenses"\s*\}/g,
      '{ id: "expenses", label: "Expenses" },\n  { id: "packing", label: "Packing" }'
    );
    fs.writeFileSync(file, content, 'utf8');
    console.log('Updated:', file);
    count++;
  }
});

console.log(`Total files updated: ${count}`);
