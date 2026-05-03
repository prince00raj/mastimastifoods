import { getSheetsClient, SPREADSHEET_ID } from './utils/sheets.js';

export default async function handler(req, res) {
  const authHeader = req.headers.authorization;
  const expectedPassword = process.env.ADMIN_PASSWORD || 'admin123';
  if (!authHeader || authHeader !== `Bearer ${expectedPassword}`) {
    return res.status(401).json({ error: 'Unauthorized' });
  }

  try {
    const sheets = await getSheetsClient();
    const response = await sheets.spreadsheets.values.get({
      spreadsheetId: SPREADSHEET_ID,
      range: 'Stockists!A:N',
    });
    const rows = response.data.values || [];
    if (rows.length < 2) return res.json([]);

    const headers = rows[0];
    const getCol = (name) => headers.indexOf(name) + 1;

    const applications = [];
    for (let i = 1; i < rows.length; i++) {
      const row = rows[i];
      applications.push({
        rowNumber: i + 1,
        applicationId: row[getCol('Application ID') - 1] || '',
        status: row[getCol('Approval Status') - 1] || 'Pending',
        memberPassId: row[getCol('Member Pass ID') - 1] || '',
        name: row[getCol('Name') - 1] || '',
        email: row[getCol('Email') - 1] || '',
        mobile: row[getCol('Mobile') - 1] || '',
        store: row[getCol('Store') - 1] || '',
        city: row[getCol('City') - 1] || '',
        type: row[getCol('Type') - 1] || '',
        message: row[getCol('Message') - 1] || '',
        submittedAt: row[getCol('Submitted At') - 1] || '',
        decisionNotes: row[getCol('Decision Notes') - 1] || '',
      });
    }
    res.status(200).json(applications);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: err.message });
  }
}