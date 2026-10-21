const APPS_SCRIPT_URL = process.env.APPS_SCRIPT_URL || '';

export async function callAppsScript(action, args = [], authToken = '') {
  if (!APPS_SCRIPT_URL) throw new Error('APPS_SCRIPT_URL not configured');
  const response = await fetch(APPS_SCRIPT_URL, {
    method: 'POST',
    headers: {'Content-Type': 'application/json', Accept: 'application/json'},
    body: JSON.stringify({action, args, authToken, source: 'vercel-proxy'}),
    redirect: 'follow',
    signal: AbortSignal.timeout(55000)
  });
  const text = await response.text();
  try { return JSON.parse(text); }
  catch (_) { throw new Error('Backend returned a non-JSON response'); }
}

export function errorPayload(error) {
  console.error('Apps Script proxy error:', error);
  return {__error__: 'Layanan data sedang tidak tersedia. Silakan coba lagi.'};
}
