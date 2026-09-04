const sharp = require('sharp');
const fs = require('fs');
const path = require('path');

const teaDir = 'D:/workspaces/website/chinese-tea/public/images/teas';
const imgDir = 'D:/workspaces/website/chinese-tea/public/images';

const jobs = [
  // tea card images: cap 960px long edge, webp q78
  ...['silver-needle.png', 'white-peony.png', 'shoumei.png', 'biluochun.jpg', 'tie-guan-yin.jpg',
      'anji-bai-cha.jpg', 'phoenix-dan-cong.jpg', 'keemun.jpg', 'pu-erh-sheng.jpg',
      'taiping-houkui.jpg', 'gunpowder-green.jpg', 'jin-jun-mei.jpg', 'pu-erh-shou.jpg',
      'xinyang-maojian.jpg'].map(f => ({ in: path.join(teaDir, f), out: path.join(teaDir, f.replace(/\.(png|jpg)$/, '.webp')), w: 960, q: 78 })),
  // re-compress oversized webp cards
  ...['longjing.webp', 'liuan-guapian.webp', 'da-hong-pao.webp', 'junshan-yinzhen.webp', 'lapsang-souchong.webp'].map(f => ({ in: path.join(teaDir, f), out: path.join(teaDir, f), w: 960, q: 78, re: true })),
  // type images (used on cards + type pages): cap 1200, q78
  ...['dark-tea.webp', 'oolong-tea.webp', 'black-tea.webp', 'yellow-tea.webp', 'green-tea.webp', 'white-tea.webp'].map(f => ({ in: path.join(imgDir, f), out: path.join(imgDir, f), w: 1200, q: 78, re: true })),
  // culture/og
  { in: path.join(imgDir, 'chinese-tea-culture.webp'), out: path.join(imgDir, 'chinese-tea-culture.webp'), w: 1200, q: 78, re: true },
  { in: path.join(imgDir, 'chinese-tea-og.webp'), out: path.join(imgDir, 'chinese-tea-og.webp'), w: 1200, q: 80, re: true },
];

(async () => {
  for (const j of jobs) {
    if (!fs.existsSync(j.in)) { console.log('SKIP missing', j.in); continue; }
    const buf = fs.readFileSync(j.in);
    const meta = await sharp(buf).metadata();
    const out = await sharp(buf).resize({ width: j.w, height: j.w, fit: 'inside', withoutEnlargement: true }).webp({ quality: j.q }).toBuffer();
    const before = (buf.length / 1024).toFixed(0), after = (out.length / 1024).toFixed(0);
    fs.writeFileSync(j.out, out);
    console.log(`${path.basename(j.in)} ${meta.width}x${meta.height} ${before}KB -> ${path.basename(j.out)} ${after}KB`);
  }
})();
