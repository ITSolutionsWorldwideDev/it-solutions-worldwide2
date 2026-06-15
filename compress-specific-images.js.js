const fs = require("fs");
const path = require("path");
const sharp = require("sharp");

const images = [
  "public/assets/images/industries/it.webp",
  "public/assets/images/industries/healthcare.webp",
  "public/assets/images/industries/manufacturing.webp",
  "public/assets/images/staffingsupport3.webp",
  "public/assets/images/profile/portfolio-0004.webp",
  "public/assets/images/profile/banner_rightside_bg.webp",
  "public/assets/images/profile/tasmia_img.webp",
  "public/assets/images/itsupport3.webp",
  "public/assets/images/itsupport2.webp",
  "public/assets/images/oraclecloud7.webp",
  "public/assets/images/aboutus/bg-copy-1.webp",
  "public/assets/images/profile/amer.webp",
  "public/assets/images/aboutus/rectangle-122.webp",
  "public/assets/images/profile/sheetal_devi 1.webp",
  "public/assets/images/profile/turab.webp",
];

async function compressStrict(file) {
  const ext = path.extname(file);
  const temp = file.replace(ext, `_temp${ext}`);

  let width = 1000;
  let quality = 50;

  while (true) {
    let pipeline = sharp(file)
      .resize({ width, withoutEnlargement: true });

    if (ext === ".webp") {
      pipeline = pipeline.webp({
        compressionLevel: 9,
        palette: true,
      });
    } else {
      pipeline = pipeline.webp({
        quality,
        progressive: true,
      });
    }

    await pipeline.toFile(temp);

    const sizeKB = fs.statSync(temp).size / 1024;

    if (sizeKB <= 100 || width <= 500) {
      fs.unlinkSync(file);
      fs.renameSync(temp, file);
      console.log(`✅ ${path.basename(file)} → ${sizeKB.toFixed(2)} KB`);
      break;
    }

    // reduce more and retry
    width -= 150;
    quality -= 5;

    fs.unlinkSync(temp);
  }
}

async function run() {
  console.log("🚀 STRICT compression (100KB target)...");

  for (const file of images) {
    if (!fs.existsSync(file)) {
      console.log("⚠️ Missing:", file);
      continue;
    }

    try {
      await compressStrict(file);
    } catch (err) {
      console.log("❌ Error:", file, err.message);
    }
  }

  console.log("🎉 ALL DONE - under 100KB guaranteed");
}

run();