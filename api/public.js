import {callAppsScript, errorPayload} from './_gas.js';

export default async function handler(req, res) {
  if (req.method !== 'GET') return res.status(405).json({__error__: 'Method not allowed'});
  const year = Number(req.query.year);
  if (!Number.isInteger(year) || year < 2000 || year > 2100) {
    return res.status(400).json({__error__: 'Tahun tidak valid.'});
  }
  try {
    const data = await callAppsScript('getPublicViewerDataV84', [{year}]);
    if (data && data.__error__) return res.status(502).json(data);
    res.setHeader('Cache-Control', 'public, s-maxage=300, stale-while-revalidate=86400');
    res.setHeader('CDN-Cache-Control', 'public, s-maxage=300, stale-while-revalidate=86400');
    res.setHeader('Vercel-CDN-Cache-Control', 'public, s-maxage=300, stale-while-revalidate=86400');
    return res.status(200).json(data);
  } catch (error) {
    res.setHeader('Cache-Control', 'no-store');
    return res.status(502).json(errorPayload(error));
  }
}
