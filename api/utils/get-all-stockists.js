import { getSheetsClient, SPREADSHEET_ID } from './utils/sheets.js';

export default async function handler(req, res) {
  // CORS / preflight (optional but safe)
  if (req.method === 'OPTIONS') {
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS');
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization');
    return res.status(200).end();
  }

  // only GET allowed
  if (req.method !== 'GET') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  // authenticate with Bearer token
  const authHeader = req.headers.authorization;
  const expectedPassword = process.env.ADMIN_PASSWORD || 'admin123';
  if (!authHeader || authHeader !== `Bearer ${expectedPassword}`) {
    return res.status(401).json({ error: 'Unauthorized' });
  }

  try {
    const sheets = await getSheetsClient();
    const response = await sheets.spreadsheets.values.get({
      spreadsheetId: SPREADSHEET_ID,
      range: 'Stockists!A:N',   // A to N columns
    });

    const rows = response.data.values || [];
    if (rows.length < 2) {
      return res.status(200).json([]);
    }

    const headers = rows[0];
    const getColIndex = (name) => headers.indexOf(name);
    if (getColIndex('Application ID') === -1) {
      console.error('Missing required column: Application ID');
      return res.status(500).json({ error: 'Sheet columns mismatch' });
    }

    const applications = [];
    for (let i = 1; i < rows.length; i++) {
      const row = rows[i];
      const app = {
        rowNumber: i + 1,   // sheet row number (1-indexed)
        applicationId: row[getColIndex('Application ID')] || '',
        status: row[getColIndex('Approval Status')] || 'Pending',
        memberPassId: row[getColIndex('Member Pass ID')] || '',
        name: row[getColIndex('Name')] || '',
        email: row[getColIndex('Email')] || '',
        mobile: row[getColIndex('Mobile')] || '',
        store: row[getColIndex('Store')] || '',
        city: row[getColIndex('City')] || '',
        type: row[getColIndex('Type')] || '',
        message: row[getColIndex('Message')] || '',
        submittedAt: row[getColIndex('Submitted At')] || '',
        source: row[getColIndex('Source')] || '',
        decisionNotes: row[getColIndex('Decision Notes')] || '',
      };
      applications.push(app);
    }

    // sort: Pending → Approved → Rejected, then by submittedAt desc
    const order = { 'Pending': 0, 'Approved': 1, 'Rejected': 2 };
    applications.sort((a, b) => {
      const diff = (order[a.status] || 0) - (order[b.status] || 0);
      if (diff !== 0) return diff;
      return new Date(b.submittedAt) - new Date(a.submittedAt);
    });

    return res.status(200).json(applications);
  } catch (err) {
    console.error('get-all-stockists error:', err);
    return res.status(500).json({ error: err.message });
  }
}