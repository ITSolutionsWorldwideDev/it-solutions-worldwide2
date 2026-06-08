const fs = require("fs");
const path = require("path");
const { glob } = require("glob");

const CODE_DIR = path.join(__dirname, "..", "app"); 
const PUBLIC_DIR = path.join(__dirname, "..", "public");

async function fixSvgPaths() {
  console.log("🛠️ Scanning public folder to find all original SVG names...");
  
  // 1. Pehle hum public folder se saari asli SVG files ke naam nikalenge
  let svgFiles = [];
  try {
    svgFiles = await glob(`${PUBLIC_DIR}/**/*.svg`);
  } catch (err) {
    console.error("❌ Error scanning public folder:", err.message);
    return;
  }

  if (svgFiles.length === 0) {
    console.log("⚠️ Public folder mein koi SVG file nahi mili. Kuch aur masla hai.");
    return;
  }

  // Base names nikalte hain (jaise 'logo', 'iso-certified' bina extension ke)
  const svgBaseNames = svgFiles.map(file => path.basename(file, ".svg").toLowerCase());
  console.log(`🔍 Found ${svgBaseNames.length} total SVGs in public directory.`);

  // 2. Ab hum code files check karenge aur jahan galti se .webp hua hai use wapas .svg karenge
  console.log("\n📝 Checking and restoring SVG paths inside code files...");
  try {
    const codeFiles = await glob(`${CODE_DIR}/**/*.{ts,tsx,js,jsx}`);
    let fixedCount = 0;

    for (const file of codeFiles) {
      let content = fs.readFileSync(file, "utf-8");
      let initialContent = content;

      // Har dhoondi hui SVG file ke liye check karein agar code mein uska path galat hua hai
      svgBaseNames.forEach(baseName => {
        // Yeh regex dhoondega agar kisi file ke naam ke sath .webp laga ho (e.g., logo.webp)
        const faultyPattern = new RegExp(`${baseName}\\.webp`, "gi");
        content = content.replace(faultyPattern, `${baseName}.svg`);
      });

      if (content !== initialContent) {
        fs.writeFileSync(file, content, "utf-8");
        console.log(`  ⏪ Fixed SVG references in: ${path.relative(path.join(__dirname, ".."), file)}`);
        fixedCount++;
      }
    }

    console.log(`\n🎉 DONE! ${fixedCount} code files updated. All logo and badge paths restored to .svg!`);
  } catch (err) {
    console.error("❌ Error modifying code files:", err.message);
  }
}

fixSvgPaths();