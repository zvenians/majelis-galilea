/**
 * MAJELIS GALILEA — Apps Script Syntax & Integrity Validator
 * Runs in CI before clasp push to fail-fast if syntax or config is broken.
 */
const fs = require('fs');
const path = require('path');
const vm = require('vm');

console.log('=== [VALIDATE] Apps Script Pre-deployment Validation ===');

// 1. Validate appsscript.json
const manifestPath = path.join(__dirname, '..', 'apps-script', 'appsscript.json');
if (!fs.existsSync(manifestPath)) {
  console.error('❌ Missing appsscript.json at:', manifestPath);
  process.exit(1);
}

try {
  const manifest = JSON.parse(fs.readFileSync(manifestPath, 'utf8'));
  if (!manifest.timeZone || !manifest.runtimeVersion) {
    throw new Error('Manifest missing required fields (timeZone, runtimeVersion)');
  }
  console.log('✓ appsscript.json is valid JSON with runtime:', manifest.runtimeVersion);
} catch (err) {
  console.error('❌ appsscript.json validation failed:', err.message);
  process.exit(1);
}

// 2. Validate Code.gs syntax
const codePath = path.join(__dirname, '..', 'apps-script', 'Code.gs');
if (!fs.existsSync(codePath)) {
  console.error('❌ Missing Code.gs at:', codePath);
  process.exit(1);
}

try {
  const code = fs.readFileSync(codePath, 'utf8');
  new vm.Script(code, { filename: 'Code.gs' });
  console.log('✓ Code.gs syntax is valid (' + code.split('\n').length + ' lines)');
} catch (err) {
  console.error('❌ Code.gs syntax error:', err.message);
  process.exit(1);
}

// 3. Validate .clasp.json
const claspPath = path.join(__dirname, '..', '.clasp.json');
if (!fs.existsSync(claspPath)) {
  console.error('❌ Missing .clasp.json at:', claspPath);
  process.exit(1);
}

try {
  const claspConfig = JSON.parse(fs.readFileSync(claspPath, 'utf8'));
  if (!claspConfig.scriptId) {
    throw new Error('Missing scriptId in .clasp.json');
  }
  console.log('✓ .clasp.json is valid (scriptId: ' + claspConfig.scriptId + ')');
} catch (err) {
  console.error('❌ .clasp.json validation failed:', err.message);
  process.exit(1);
}

console.log('=== [VALIDATE] All Apps Script pre-checks passed! ===\n');
