import { readdir } from 'node:fs/promises';
import { join } from 'node:path';

async function collectJavaScriptFiles(root) {
  const entries = await readdir(root, { withFileTypes: true });
  const files = [];

  for (const entry of entries) {
    const fullPath = join(root, entry.name);

    if (entry.isDirectory()) {
      files.push(...await collectJavaScriptFiles(fullPath));
      continue;
    }

    if (entry.isFile() && fullPath.endsWith('.js')) {
      files.push(fullPath);
    }
  }

  return files;
}

async function main() {
  const roots = ['src'];

  for (const root of roots) {
    const files = await collectJavaScriptFiles(root);

    for (const file of files) {
      await import(`../${file.replaceAll('\\', '/')}`);
    }
  }
}

await main();
