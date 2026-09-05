const sharp = require('sharp');
const fs = require('fs');
const path = require('path');

const teaDir = 'public/images/teas';

(async () => {
  const widths = {};
  const files = fs.readdirSync(teaDir).filter(f => f.endsWith('.webp') && !f.includes('.400.'));

  for (const f of files) {
    const p = path.join(teaDir, f);
    const slug = path.basename(f, '.webp');
    const src = fs.readFileSync(p);

    // 640w master at higher compression (q65)
    const m640 = await sharp(src).resize({ width: 640, withoutEnlargement: true }).webp({ quality: 65 }).toBuffer();
    fs.writeFileSync(p + '.tmp', m640);
    fs.renameSync(p + '.tmp', p);
    const meta = await sharp(m640).metadata();
    widths[slug] = { w: meta.width, h: meta.height };

    // 400w webp variant
    if (meta.width > 400) {
      const m400 = await sharp(src).resize({ width: 400, withoutEnlargement: true }).webp({ quality: 62 }).toBuffer();
      fs.writeFileSync(path.join(teaDir, `${slug}.400.webp.tmp`), m400);
      fs.renameSync(path.join(teaDir, `${slug}.400.webp.tmp`), path.join(teaDir, `${slug}.400.webp`));
    }

    // avif 640w + 400w (picture source)
    const a640 = await sharp(src).resize({ width: 640, withoutEnlargement: true }).avif({ quality: 50 }).toBuffer();
    fs.writeFileSync(path.join(teaDir, `${slug}.avif.tmp`), a640);
    fs.renameSync(path.join(teaDir, `${slug}.avif.tmp`), path.join(teaDir, `${slug}.avif`));
    if (meta.width > 400) {
      const a400 = await sharp(src).resize({ width: 400, withoutEnlargement: true }).avif({ quality: 46 }).toBuffer();
      fs.writeFileSync(path.join(teaDir, `${slug}.400.avif.tmp`), a400);
      fs.renameSync(path.join(teaDir, `${slug}.400.avif.tmp`), path.join(teaDir, `${slug}.400.avif`));
    }

    console.log(`${slug}: ${meta.width}x${meta.height} webp ${(m640.length / 1024).toFixed(0)}KB avif ${(a640.length / 1024).toFixed(0)}KB`);
  }

  fs.writeFileSync('src/data/imageWidths.json', JSON.stringify(widths, null, 2));
  console.log('imageWidths.json written:', Object.keys(widths).length, 'entries');
})();
