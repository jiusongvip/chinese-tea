const sharp = require('sharp');
const fs = require('fs');
const path = require('path');

const teaDir = 'public/images/teas';

(async () => {
  const files = fs.readdirSync(teaDir).filter(f => f.endsWith('.webp'));
  for (const f of files) {
    const p = path.join(teaDir, f);
    const buf = fs.readFileSync(p);
    const meta = await sharp(buf).metadata();
    if (meta.width <= 640) { console.log(`${f} ${meta.width}x${meta.height} keep`); continue; }
    const out = await sharp(buf).resize({ width: 640, withoutEnlargement: true }).webp({ quality: 72 }).toBuffer();
    const tmp = p + '.tmp';
    fs.writeFileSync(tmp, out);
    fs.renameSync(tmp, p);
    console.log(`${f} ${meta.width}x${meta.height} ${(buf.length / 1024).toFixed(0)}KB -> 640w ${(out.length / 1024).toFixed(0)}KB`);
  }
  const hb = fs.readFileSync('public/images/chinese-tea-hero.avif');
  const hm = await sharp(hb).metadata();
  const ho = await sharp(hb).resize({ height: 1100, withoutEnlargement: true }).avif({ quality: 60 }).toBuffer();
  const ht = 'public/images/chinese-tea-hero.avif.tmp';
  fs.writeFileSync(ht, ho);
  fs.renameSync(ht, 'public/images/chinese-tea-hero.avif');
  console.log(`hero.avif ${hm.width}x${hm.height} ${(hb.length / 1024).toFixed(0)}KB -> ${(ho.length / 1024).toFixed(0)}KB`);
})();
