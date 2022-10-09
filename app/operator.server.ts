import path from "path";
import fs from "fs";
import { bundleMDX } from "mdx-bundler";

const operatorPath = path.join(__dirname, "../", "app", "/operators");

export async function getOperator(slug) {
  const filepath = path.join(operatorPath, slug + ".md");
  const file = await fs.readFileSync(filepath, "utf-8");

  const { code, frontmatter } = await bundleMDX({
    source: file,
    cwd: operatorPath,
  });

  return { slug, frontmatter, code };
}
