const sharp = require('sharp');
const width = 1440;
const height = 540;

const svgOverlay = Buffer.from(`
<svg width="${width}" height="${height}" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <radialGradient id="radGlow" cx="50%" cy="20%" rx="60%" ry="45%">
      <stop offset="0%" stop-color="#ffffff" stop-opacity="1"/>
      <stop offset="50%" stop-color="#ffffff" stop-opacity="0.95"/>
      <stop offset="75%" stop-color="#ffffff" stop-opacity="0.5"/>
      <stop offset="100%" stop-color="#ffffff" stop-opacity="0"/>
    </radialGradient>
    <linearGradient id="linGrad" x1="0" y1="0" x2="0" y2="1">
      <stop offset="0%" stop-color="#ffffff" stop-opacity="1"/>
      <stop offset="30%" stop-color="#ffffff" stop-opacity="0.95"/>
      <stop offset="55%" stop-color="#ffffff" stop-opacity="0.4"/>
      <stop offset="75%" stop-color="#ffffff" stop-opacity="0"/>
    </linearGradient>
  </defs>
  <rect width="${width}" height="${height}" fill="url(#linGrad)"/>
  <rect width="${width}" height="${height}" fill="url(#radGlow)"/>
</svg>
`);

sharp('public/assets/images/portolio/section3.png')
  .resize(width, height, { fit: 'cover', position: 'bottom' })
  .composite([{ input: svgOverlay, top: 0, left: 0 }])
  .webp({ quality: 92 })
  .toFile('public/assets/images/portfolio/test_composite_result.webp')
  .then(() => console.log('Composite generated successfully!'));

