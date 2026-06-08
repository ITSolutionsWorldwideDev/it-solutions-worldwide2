const fs = require("fs");
const path = require("path");
const { glob } = require("glob");

const CODE_DIR = path.join(__dirname, "..", "app");

async function fixNext15Params() {
  console.log("🚀 Scanning app directory for Next.js 15 params type issues...");

  try {
    // Sirf page aur layout files ko target karte hain jahan params aate hain
    const files = await glob(`${CODE_DIR}/**/{page,layout}.{ts,tsx}`);
    let updatedCount = 0;

    for (const file of files) {
      let content = fs.readFileSync(file, "utf-8");
      let originalContent = content;

      // Case 1: Interface/Type definitions ko `Promise` mein wrap karna
      // e.g., params: Promise<{ locale: string }> -> params: Promise<{ locale: string }>
      if (content.includes("params: {") && !content.includes("params: Promise<{")) {
        content = content.replace(
          /params:\s*\{([^}]+)\}/g,
          "params: Promise<{$1}>"
        );
      }

      // Case 2: Component function signature ko async banana agar sync params destructured hain
      // e.g., function Page({ params }) -> async function Page({ params })
      if (content.match(/export\s+default\s+function\s+\w+\s*\(\s*\{\s*params/g) && !content.includes("export default async function")) {
        content = content.replace(
          /export\s+default\s+function/g,
          "export default async function"
        );
      }

      // Case 3: Body ke andar `await params` inject karna agar pehle se nahi hai
      // e.g., const { locale } = params; -> const { locale } = await params;
      if (content.includes("async function") && content.includes("params") && !content.includes("await params")) {
        // Agar simple extraction hai jaise `const locale = params.locale` ya `const { locale } = params`
        content = content.replace(
          /const\s+(\{[\s\w,]+\}|\w+)\s*=\s*params/g,
          "const $1 = await params"
        );
      }

      // Agar file modify hui toh write karein
      if (content !== originalContent) {
        fs.writeFileSync(file, content, "utf-8");
        console.log(`  ✅ Automated fix applied to: ${path.relative(CODE_DIR, file)}`);
        updatedCount++;
      }
    }

    console.log(`\n🎉 Process finished! ${updatedCount} files updated to Next.js 15 standards.`);
  } catch (err) {
    console.error("❌ Error running script:", err.message);
  }
}

fixNext15Params();