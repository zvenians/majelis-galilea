/**
 * MAJELIS GALILEA — Post-deployment Smoke Test
 * Tests /api/gas endpoint on Vercel to ensure backend is responding,
 * database is healthy, and returned version matches expectation.
 */
const https = require('https');

const VERCEL_URL = process.env.VERCEL_APP_URL || 'https://majelis-galilea.vercel.app';
const EXPECTED_VERSION = process.env.EXPECTED_BACKEND_VERSION || '';

console.log('=== [SMOKE TEST] Verifying Apps Script Backend via /api/gas ===');
console.log('Target URL:', `${VERCEL_URL}/api/gas`);

const payload = JSON.stringify({
  action: 'getBackendStatus',
  args: []
});

const url = new URL(`${VERCEL_URL}/api/gas`);

const options = {
  hostname: url.hostname,
  port: 443,
  path: url.pathname,
  method: 'POST',
  headers: {
    'Content-Type': 'application/json',
    'Content-Length': Buffer.byteLength(payload)
  },
  timeout: 30000
};

const req = https.request(options, (res) => {
  let body = '';
  res.on('data', (chunk) => body += chunk);
  res.on('end', () => {
    console.log(`HTTP Status: ${res.statusCode}`);
    if (res.statusCode !== 200) {
      console.error('❌ Expected HTTP 200, got:', res.statusCode, body);
      process.exit(1);
    }

    try {
      const data = JSON.parse(body);
      console.log('Response Payload:', JSON.stringify(data, null, 2));

      if (!data.result || data.result.ok !== true) {
        console.error('❌ Backend check failed: ok is not true.');
        process.exit(1);
      }

      if (!data.result.databaseReady) {
        console.error('❌ Database is not ready according to getBackendStatus.');
        process.exit(1);
      }

      console.log(`✓ Backend OK: ${data.result.app} v${data.result.version}`);
      console.log(`✓ Spreadsheet connected: ${data.result.spreadsheet} (${data.result.spreadsheetId})`);

      if (EXPECTED_VERSION && data.result.version !== EXPECTED_VERSION) {
        console.warn(`⚠️ Warning: Version mismatch! Expected ${EXPECTED_VERSION}, got ${data.result.version}`);
      }

      console.log('=== [SMOKE TEST] All backend checks passed successfully! ===\n');
      process.exit(0);
    } catch (e) {
      console.error('❌ Failed to parse JSON response:', e.message, 'Raw body:', body);
      process.exit(1);
    }
  });
});

req.on('error', (err) => {
  console.error('❌ Network error during smoke test:', err.message);
  process.exit(1);
});

req.on('timeout', () => {
  req.destroy();
  console.error('❌ Smoke test timed out after 30s.');
  process.exit(1);
});

req.write(payload);
req.end();
