const fs = require("fs");
const path = require("path");
const { glob } = require("glob");
const sharp = require("sharp");

// 'app' is at the root level, so we look one folder up
const CODE_DIR = path.join(__dirname, "..", "app"); 
// 'public' is at the root level, so we look one folder up
const PUBLIC_DIR = path.join(__dirname, "..", "public"); 

const EXTENSIONS = [".png", ".jpg", ".jpeg"];

async function runAllInOne() {
  console.log("🚀 Starting All-In-One WebP Migration...");

  // =========================================================
  // STEP 1: Update Code Paths (.js, .jsx, .ts, .tsx)
  // =========================================================
  console.log("\n1️⃣ Step 1: Updating text paths in code...");
  
  try {
    const codeFiles = await glob(`${CODE_DIR}/**/*.{ts,tsx,js,jsx}`);
    let codeUpdatedCount = 0;

    for (const file of codeFiles) {
      let content = fs.readFileSync(file, "utf-8");
      const updated = content
        .replace(/\.jpg/gi, ".webp")
        .replace(/\.jpeg/gi, ".webp")
        .replace(/\.png/gi, ".webp");

      if (content !== updated) {
        fs.writeFileSync(file, updated, "utf-8");
        console.log(`  ✅ Updated text in: ${path.relative(path.join(__dirname, ".."), file)}`);
        codeUpdatedCount++;
      }
    }
    console.log(`✔ Finished updating code. (${codeUpdatedCount} files modified)`);
  } catch (err) {
    console.error("❌ Error scanning code files:", err.message);
  }

  // =========================================================
  // STEP 2: Convert Physical Images to WebP
  // =========================================================
  console.log("\n2️⃣ Step 2: Converting physical image files...");
  
  async function convertImagesRecursively(dir) {
    const files = fs.readdirSync(dir);

    for (const file of files) {
      const fullPath = path.join(dir, file);

      if (fs.statSync(fullPath).isDirectory()) {
        await convertImagesRecursively(fullPath);
      } else {
        const ext = path.extname(fullPath).toLowerCase();
        
        if (EXTENSIONS.includes(ext)) {
          const newPath = fullPath.replace(new RegExp(`${ext}$`, 'i'), ".webp");
          
          try {
            // Physically transcode the file data to genuine WebP format
            await sharp(fullPath).toFile(newPath);
            console.log(`  ✅ Converted & Created: ${path.relative(PUBLIC_DIR, newPath)}`);
            
            // Delete the old file safely
            fs.unlinkSync(fullPath);
          } catch (err) {
            console.error(`  ❌ Failed converting ${file}:`, err.message);
          }
        }
      }
    }
  }

  if (fs.existsSync(PUBLIC_DIR)) {
    await convertImagesRecursively(PUBLIC_DIR);
  } else {
    console.error(`❌ Public directory not found at: ${PUBLIC_DIR}`);
  }

  console.log("\n🎉 ALL DONE! Code paths updated and images converted successfully.");
  console.log("💡 Tip: Restart your development server (npm run dev) to see changes!");
}

runAllInOne();