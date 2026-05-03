import { getSheetsClient, SPREADSHEET_ID } from './utils/sheets.js';

export default async function handler(req, res) {
  // Simple password protection (you can change the password)
  const authHeader = req.headers.authorization;
  const expectedPassword = process.env.ADMIN_PASSWORD || 'admin123';
  if (!authHeader || authHeader !== `Bearer ${expectedPassword}`) {
    return res.status(401).json({ error: 'Unauthorized' });
  }

  try {
    const sheets = await getSheetsClient();
    const response = await sheets.spreadsheets.values.get({
      spreadsheetId: SPREADSHEET_ID,
      range: 'Stockists!A:N', // all rows
    });
    const rows = response.data.values || [];
    if (rows.length < 2) return res.json([]);

    const headers = rows[0];
    const applicationIdCol = headers.indexOf('Application ID') + 1;
    const statusCol = headers.indexOf('Approval Status') + 1;
    const nameCol = headers.indexOf('Name') + 1;
    const emailCol = headers.indexOf('Email') + 1;
    const mobileCol = headers.indexOf('Mobile') + 1;
    const storeCol = headers.indexOf('Store') + 1;
    const cityCol = headers.indexOf('City') + 1;
    const typeCol = headers.indexOf('Type') + 1;
    const messageCol = headers.indexOf('Message') + 1;
    const submittedAtCol = headers.indexOf('Submitted At') + 1;

    const pending = [];
    for (let i = 1; i < rows.length; i++) {
      const row = rows[i];
      const status = row[statusCol - 1] || 'Pending';
      if (status === 'Pending') {
        pending.push({
          rowNumber: i + 1, // Sheets API rows are 1-indexed; header is row 1, data starts at row 2
          applicationId: row[applicationIdCol - 1] || '',
          name: row[nameCol - 1] || '',
          email: row[emailCol - 1] || '',
          mobile: row[mobileCol - 1] || '',
          store: row[storeCol - 1] || '',
          city: row[cityCol - 1] || '',
          type: row[typeCol - 1] || '',
          message: row[messageCol - 1] || '',
          submittedAt: row[submittedAtCol - 1] || '',
        });
      }
    }
    res.status(200).json(pending);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: err.message });
  }
}