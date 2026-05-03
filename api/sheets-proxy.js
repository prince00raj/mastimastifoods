// This function forwards requests to your Apps Script Web App
const APPS_SCRIPT_URL = 'https://script.google.com/macros/s/YOUR_APPS_SCRIPT_ID/exec'; // replace with your working URL

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  try {
    const response = await fetch(APPS_SCRIPT_URL, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(req.body)
    });
    const data = await response.text();
    // Forward the response as JSON if possible
    res.status(response.status).json({ ok: true, data });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
}