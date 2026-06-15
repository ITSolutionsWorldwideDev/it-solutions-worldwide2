const fs = require("fs");
const path = require("path");

const EXTENSIONS = [".webp", ".webp", ".webp"];

function scanDir(dir) {
  let results = [];
  const files = fs.readdirSync(dir);

  for (const file of files) {
    const fullPath = path.join(dir, file);

    if (fs.statSync(fullPath).isDirectory()) {
      results = results.concat(scanDir(fullPath));
    } else {
      const ext = path.extname(fullPath).toLowerCase();

      if (EXTENSIONS.includes(ext)) {
        results.push(fullPath);
      }
    }
  }

  return results;
}

const target = path.join(__dirname, "..", "public");
const oldImages = scanDir(target);

console.log("🚨 OLD IMAGES FOUND IN PROJECT:");
oldImages.forEach((img) => console.log(img));
console.log(`\nTotal found: ${oldImages.length}`);

// --- DELETION LOGIC STARTS HERE ---
if (oldImages.length > 0) {
  console.log("\n🗑️ Deleting images...");
  
  oldImages.forEach((img) => {
    try {
      fs.unlinkSync(img); // This line actually deletes the file
      console.log(`✅ Deleted: ${img}`);
    } catch (err) {
      console.error(`❌ Failed to delete ${img}:`, err.message);
    }
  });
  
  console.log("\n✨ Deletion process complete.");
} else {
  console.log("\n🎉 No images found to delete.");
}