const sharp = require('sharp');
const fs = require('fs');

(async () => {
  const b1 = await sharp('public/images/teas/pu-erh-sheng.jpg').webp({ quality: 62 }).toBuffer();
  fs.writeFileSync('public/images/teas/pu-erh-sheng.tmp.webp', b1);
  fs.renameSync('public/images/teas/pu-erh-sheng.tmp.webp', 'public/images/teas/pu-erh-sheng.webp');
  console.log('pu-erh-sheng:', Math.round(b1.length / 1024) + 'KB');
  const b2 = await sharp('public/images/chinese-tea-hero.avif').resize({ height: 1440 }).avif({ quality: 60 }).toBuffer();
  fs.writeFileSync('public/images/chinese-tea-hero.tmp.avif', b2);
  fs.renameSync('public/images/chinese-tea-hero.tmp.avif', 'public/images/chinese-tea-hero.avif');
  console.log('hero.avif:', Math.round(b2.length / 1024) + 'KB');
})();
