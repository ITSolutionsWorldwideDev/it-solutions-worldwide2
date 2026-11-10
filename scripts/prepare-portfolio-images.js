const fs = require('fs');
const path = require('path');
const https = require('https');
const sharp = require('sharp');

const targetDir = path.join(__dirname, '../public/assets/images/portfolio');
if (!fs.existsSync(targetDir)) {
  fs.mkdirSync(targetDir, { recursive: true });
}

function downloadImage(url) {
  return new Promise((resolve, reject) => {
    https.get(url, (res) => {
      if (res.statusCode >= 300 && res.statusCode < 400 && res.headers.location) {
        return downloadImage(res.headers.location).then(resolve).catch(reject);
      }
      if (res.statusCode !== 200) {
        return reject(new Error(`Failed to download ${url}: ${res.statusCode}`));
      }
      const data = [];
      res.on('data', chunk => data.push(chunk));
      res.on('end', () => resolve(Buffer.concat(data)));
    }).on('error', reject);
  });
}

async function processLocalOrRemote(source, targetPath) {
  try {
    let inputBuffer;
    if (source.startsWith('http')) {
      console.log(`Downloading ${source}...`);
      inputBuffer = await downloadImage(source);
    } else {
      const localPath = path.resolve(__dirname, '..', source);
      console.log(`Reading local file ${localPath}...`);
      inputBuffer = fs.readFileSync(localPath);
    }

    await sharp(inputBuffer)
      .resize(800, 600, { fit: 'cover', position: 'center' })
      .webp({ quality: 85 })
      .toFile(targetPath);

    console.log(`✓ Saved ${targetPath}`);
  } catch (err) {
    console.error(`Error processing ${source}:`, err.message);
  }
}

async function main() {
  const images = [
    {
      target: 'taxinet.webp',
      source: 'https://images.unsplash.com/photo-1549317661-bd32c8ce0db2?auto=format&fit=crop&w=1200&q=85',
    },
    {
      target: 'rifas.webp',
      source: 'public/assets/images/rifasopleidingsinstituut.webp',
    },
    {
      target: 'hassaan-travel.webp',
      source: 'https://images.unsplash.com/photo-1488646953014-85cb44e25828?auto=format&fit=crop&w=1200&q=85',
    },
    {
      target: 'dd-group.webp',
      source: 'https://images.unsplash.com/photo-1629909613654-28e377c37b09?auto=format&fit=crop&w=1200&q=85',
    },
    {
      target: 'babylon-logistics.webp',
      source: 'public/assets/images/babylonlogisticsinternational.webp',
    },
    {
      target: 'dinel.webp',
      source: 'https://images.unsplash.com/photo-1600880292203-757bb62b4baf?auto=format&fit=crop&w=1200&q=85',
    },
    {
      target: 'xtreme-tuning.webp',
      source: 'https://images.unsplash.com/photo-1617814076367-b759c7d7e738?auto=format&fit=crop&w=1200&q=85',
    },
    {
      target: 'g-rollz.webp',
      source: 'https://images.unsplash.com/photo-1513151233558-d860c5398176?auto=format&fit=crop&w=1200&q=85',
    },
    {
      target: 'allseas.webp',
      source: 'https://images.unsplash.com/photo-1544476915-ed1370594142?auto=format&fit=crop&w=1200&q=85',
    },
    {
      target: 'hitachi-cm.webp',
      source: 'public/assets/images/hitachikenki.webp',
    },
    {
      target: 'hbc.webp',
      source: 'https://images.unsplash.com/photo-1581092160607-ee22621dd758?auto=format&fit=crop&w=1200&q=85',
    },
    {
      target: 'jumbo-sports.webp',
      source: 'https://images.unsplash.com/photo-1535131749006-b7f58c99034b?auto=format&fit=crop&w=1200&q=85',
    },
  ];

  for (const item of images) {
    const outPath = path.join(targetDir, item.target);
    await processLocalOrRemote(item.source, outPath);
  }

  console.log('All portfolio card images ready!');
}

main();

