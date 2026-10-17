// Fails when a file looks like it contains a private key or token.
// Cheap safety net; GitHub secret scanning is the main protection.
import { readdirSync, readFileSync, statSync } from 'node:fs';
import { join, extname } from 'node:path';

const SKIP_DIRS = new Set(['node_modules', 'dist', '.git', 'coverage', 'playwright-report']);
const SKIP_EXT = new Set(['.png', '.webp', '.jpg', '.svg', '.csv', '.lock']);
const PATTERNS = [
  [/-----BEGIN (?:RSA |EC |OPENSSH |)PRIVATE KEY-----/, 'private key'],
  [/sl\.[A-Za-z0-9_-]{60,}/, 'Dropbox access token'],
  [/ghp_[A-Za-z0-9]{36}/, 'GitHub personal access token'],
  [/AKIA[0-9A-Z]{16}/, 'AWS access key'],
  [/(?:storePassword|keyPassword)\s*=\s*\S+/, 'keystore password'],
];

const hits = [];
function walk(dir) {
  for (const name of readdirSync(dir)) {
    if (SKIP_DIRS.has(name)) continue;
    const path = join(dir, name);
    const st = statSync(path);
    if (st.isDirectory()) walk(path);
    else if (!SKIP_EXT.has(extname(name)) && st.size < 2_000_000 && name !== 'check-secrets.mjs') {
      const text = readFileSync(path, 'utf8');
      for (const [re, label] of PATTERNS) if (re.test(text)) hits.push(`${path}: ${label}`);
    }
  }
}
walk(process.cwd());
if (hits.length) {
  console.error('Possible secrets found:\n' + hits.join('\n'));
  process.exit(1);
}
console.log('No secrets found.');
