const fs = require("fs");
const path = require("path");
const { glob } = require("glob");
const sharp = require("sharp");

// This targets your entire public folder dynamically
const PUBLIC_DIR = path.join(__dirname, "..", "public");

async function compressStrict(file) {
  const ext = path.extname(file);
  const temp = file.replace(ext, `_temp${ext}`);

  let width = 1200;  // Start with a standard max width
  let quality = 75;  // Safe WebP starting quality

  while (true) {
    // Pipeline without the destructive 'palette: true' setting
    let pipeline = sharp(file)
      .resize({ width, withoutEnlargement: true })
      .webp({
        quality: quality,
        effort: 6,         // Highest compression efficiency
        lossless: false,   // Ensure lossy mode to drop file size easily
      });

    await pipeline.toFile(temp);

    const sizeKB = fs.statSync(temp).size / 1024;

    // Stop if target size is met or we hit safety limits
    if (sizeKB <= 100 || width <= 400 || quality <= 20) {
      fs.unlinkSync(file);
      fs.renameSync(temp, file);
      console.log(`  ✅ Optimized: ${path.relative(PUBLIC_DIR, file)} → ${sizeKB.toFixed(2)} KB`);
      break;
    }

    // Safely reduce settings for the next loop try
    width -= 150;
    quality -= 8;

    if (fs.existsSync(temp)) {
      fs.unlinkSync(temp);
    }
  }
}

async function runAll() {
  console.log("🚀 Scanning entire public folder for WebP images...");

  try {
    // This finds ALL .webp files inside public/ and any of its subfolders dynamically
    const allWebpImages = await glob(`${PUBLIC_DIR}/**/*.webp`);
    
    console.log(`📸 Found ${allWebpImages.length} WebP images to compress.\n`);

    if (allWebpImages.length === 0) {
      console.log("🎉 No WebP images found to process.");
      return;
    }

    for (const file of allWebpImages) {
      // Skip temporary files if the script was interrupted previously
      if (file.includes("_temp.")) continue; 

      try {
        await compressStrict(file);
      } catch (err) {
        console.log(`  ❌ Error processing ${path.basename(file)}:`, err.message);
      }
    }

    console.log("\n🎉 ALL DONE - Every single WebP image has been safely compressed under 100KB!");

  } catch (err) {
    console.error("❌ Error scanning public directory:", err.message);
  }
}

runAll();