import { access } from 'node:fs/promises';

// Nitro changes the public output directory when it selects the Vercel preset.
// Both postbuild scripts must operate on the same actual build artifact.
export async function staticOutput() {
  const path = process.env.VERCEL ? '../.vercel/output/static/' : '../.output/public/';
  const output = new URL(path, import.meta.url);
  try { await access(new URL('es/index.html', output)); }
  catch { throw new Error(`Generated Spanish page not found in ${output.pathname}. Check the Nitro preset and build output.`); }
  return output;
}
