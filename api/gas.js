/**
 * MAJELIS GALILEA — Vercel Serverless API Proxy
 * 
 * Proxies frontend requests to Google Apps Script backend.
 * All google.script.run calls are replaced with fetch('/api/gas')
 * which forwards to the Apps Script Web App via HTTP POST.
 * 
 * Google Apps Script returns a 302 redirect on POST requests.
 * We follow the redirect manually to get the actual JSON response.
 */

const APPS_SCRIPT_URL = process.env.APPS_SCRIPT_URL || '';

export default async function handler(req, res) {
  // CORS headers
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'POST, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');
  res.setHeader('Cache-Control', 'no-store');

  if (req.method === 'OPTIONS') {
    return res.status(200).end();
  }

  if (req.method !== 'POST') {
    return res.status(405).json({ __error__: 'Method not allowed' });
  }

  if (!APPS_SCRIPT_URL) {
    return res.status(500).json({ __error__: 'APPS_SCRIPT_URL not configured' });
  }

  try {
    const { action, args } = req.body || {};

    if (!action) {
      return res.status(400).json({ __error__: 'Missing action parameter' });
    }

    // Forward to Google Apps Script
    // GAS returns 302 redirect on POST; fetch follows it by default
    const response = await fetch(APPS_SCRIPT_URL, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json'
      },
      body: JSON.stringify({
        action,
        args: args || [],
        source: 'vercel-proxy'
      }),
      redirect: 'follow'
    });

    const text = await response.text();
    
    let data;
    try {
      data = JSON.parse(text);
    } catch {
      // If GAS returns HTML error page
      console.error('Non-JSON response from GAS:', text.substring(0, 300));
      return res.status(502).json({
        __error__: 'Backend returned non-JSON response. Is the Apps Script Web App deployed correctly?'
      });
    }

    return res.status(200).json(data);

  } catch (error) {
    console.error('Gas proxy error:', error);
    return res.status(500).json({
      __error__: 'Proxy error: ' + (error.message || String(error))
    });
  }
}
