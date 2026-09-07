import fs from 'node:fs';
import path from 'node:path';

console.log('--- RUNNING MAJELIS GALILEA BUILD & INTEGRITY CHECKS ---');

// 1. Check index.html
if (!fs.existsSync('index.html')) {
  console.error('FAIL: index.html not found');
  process.exit(1);
}
const html = fs.readFileSync('index.html', 'utf8');
const scriptRegex = /<script(?:\s+[^>]*)?>([\s\S]*?)<\/script>/gi;
let m, scriptCount = 0;
while ((m = scriptRegex.exec(html)) !== null) {
  scriptCount++;
  try {
    new Function(m[1]);
  } catch (err) {
    console.error(`FAIL: Syntax error in index.html script tag ${scriptCount}:`, err.message);
    process.exit(1);
  }
}
console.log(`PASS: index.html parsed (${scriptCount} script tags OK)`);

// 2. Check api/gas.js
if (!fs.existsSync('api/gas.js')) {
  console.error('FAIL: api/gas.js not found');
  process.exit(1);
}
console.log('PASS: api/gas.js exists');

// 3. Check vercel.json
try {
  const vercelCfg = JSON.parse(fs.readFileSync('vercel.json', 'utf8'));
  if (!vercelCfg.functions || !vercelCfg.rewrites) {
    throw new Error('Missing functions or rewrites');
  }
  console.log('PASS: vercel.json valid');
} catch (e) {
  console.error('FAIL: vercel.json invalid:', e.message);
  process.exit(1);
}

// 4. Check Code.gs and whitelist coverage
if (!fs.existsSync('apps-script/Code.gs')) {
  console.error('FAIL: apps-script/Code.gs not found');
  process.exit(1);
}
const code = fs.readFileSync('apps-script/Code.gs', 'utf8');
const whitelistMatch = code.match(/const ALLOWED = {([\s\S]*?)};\n/);
if (!whitelistMatch) {
  console.error('FAIL: ALLOWED whitelist not found in Code.gs');
  process.exit(1);
}

const allowedKeys = new Set();
const regex = /^\s*([a-zA-Z0-9_]+):/gm;
let wm;
while ((wm = regex.exec(whitelistMatch[1])) !== null) {
  allowedKeys.add(wm[1]);
}

const codeFns = [...code.matchAll(/function\s+([a-zA-Z0-9_]+)\s*\(/g)].map(x => x[1]);
const publicFns = codeFns.filter(f => !f.endsWith('_'));

const calledInHtml = publicFns.filter(fn => html.includes('.' + fn + '('));
const missing = calledInHtml.filter(fn => !allowedKeys.has(fn));

if (missing.length > 0) {
  console.error('FAIL: Missing from whitelist:', missing);
  process.exit(1);
}

console.log(`PASS: Whitelist coverage complete (0 missing out of ${calledInHtml.length} called functions)`);

// 5. Check 10 critical blocker functions
const targets = [
  'deleteEntity',
  'downloadSecretaryLetterV81',
  'generateFamilyIdentityPdfV82',
  'generateMemberIdentityPdfV82',
  'getCongregationViewerDataV8',
  'getFilePreviewInfoV7',
  'getFinanceRevisionDataV702',
  'getNotificationCenterV8',
  'getSettingsCenterV8',
  'runCrudAlignmentSelfTestV83'
];

for (const t of targets) {
  if (!allowedKeys.has(t)) {
    console.error(`FAIL: Target function ${t} not in whitelist`);
    process.exit(1);
  }
}
console.log('PASS: All 10 audited blocker functions present in whitelist');

console.log('=== ALL LOCAL VALIDATIONS PASSED ===');
