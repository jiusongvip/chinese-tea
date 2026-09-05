const sharp = require('sharp');
const fs = require('fs');
const path = require('path');

const teaDir = 'public/images/teas';

(async () => {
  // 400w variant for mobile (cards render ~362px wide)
  for (const f of fs.readdirSync(teaDir).filter(f => f.endsWith('.webp'))) {
    const p = path.join(teaDir, f);
    const buf = fs.readFileSync(p);
    const meta = await sharp(buf).metadata();
    if (meta.width <= 400) { console.log(`${f}: keep (<=400w)`); continue; }
    const out = await sharp(buf).resize({ width: 400, withoutEnlargement: true }).webp({ quality: 70 }).toBuffer();
    const name = path.basename(f, '.webp');
    const out400 = path.join(teaDir, name + '.400.webp');
    fs.writeFileSync(out400 + '.tmp', out);
    fs.renameSync(out400 + '.tmp', out400);
    console.log(`${f} -> ${name}.400.webp ${(out.length / 1024).toFixed(0)}KB`);
  }
})();
