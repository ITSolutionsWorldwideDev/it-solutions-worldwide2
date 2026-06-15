const fs = require("fs");
const { glob } = require("glob");

const CODE_DIR = "app"; // Change this if your folder name is different

async function convertPathsToWebp() {
  console.log("🚀 Starting to convert all image paths to .webp...");

  // This finds all code files in your directory
  const files = await glob(`${CODE_DIR}/**/*.{ts,tsx,js,jsx}`);

  for (const file of files) {
    let content = fs.readFileSync(file, "utf-8");

    // Replace all old extensions with .webp (case-insensitive flag 'gi' used just in case)
    const updated = content
      .replace(/\.webp/gi, ".webp")
      .replace(/\.webp/gi, ".webp")
      .replace(/\.webp/gi, ".webp");

    // Only save the file if changes were actually made
    if (content !== updated) {
      fs.writeFileSync(file, updated, "utf-8");
      console.log(`✅ Updated paths in: ${file}`);
    }
  }

  console.log("🎉 Successfully updated all image extensions to .webp across the project!");
}

convertPathsToWebp();