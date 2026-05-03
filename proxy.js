// proxy.js – run with `node proxy.js`
const express = require('express');
const app = express();
app.use(express.json());

const APPS_SCRIPT_URL = 'https://script.google.com/macros/s/YOUR_DEPLOYED_ID/exec';

app.post('/api/google-sheets', async (req, res) => {
  try {
    const response = await fetch(APPS_SCRIPT_URL, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(req.body)
    });
    const data = await response.text();
    res.json({ ok: true, data });
  } catch (err) {
    res.status(500).json({ ok: false, error: err.message });
  }
});

app.listen(3000, () => console.log('Proxy on http://localhost:3000'));