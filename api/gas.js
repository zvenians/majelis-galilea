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

import {callAppsScript, errorPayload} from './_gas.js';

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

  try {
    const { action, args, authToken } = req.body || {};

    if (!action) {
      return res.status(400).json({ __error__: 'Missing action parameter' });
    }

    const data = await callAppsScript(action, args || [], authToken || '');
    return res.status(200).json(data);

  } catch (error) {
    return res.status(502).json(errorPayload(error));
  }
}
