import { getSheetsClient, SPREADSHEET_ID } from './utils/sheets.js';

export default async function handler(req, res) {
  const authHeader = req.headers.authorization;
  const expectedPassword = process.env.ADMIN_PASSWORD || 'admin123';
  if (!authHeader || authHeader !== `Bearer ${expectedPassword}`) {
    return res.status(401).json({ error: 'Unauthorized' });
  }

  const { rowNumber } = req.body;
  if (!rowNumber) {
    return res.status(400).json({ error: 'Missing rowNumber' });
  }

  try {
    const sheets = await getSheetsClient();
    // Update Approval Status to Rejected
    const statusRange = `Stockists!C${rowNumber}`;
    await sheets.spreadsheets.values.update({
      spreadsheetId: SPREADSHEET_ID,
      range: statusRange,
      valueInputOption: 'USER_ENTERED',
      resource: { values: [['Rejected']] },
    });
    // Add decision note
    const notesRange = `Stockists!N${rowNumber}`;
    await sheets.spreadsheets.values.update({
      spreadsheetId: SPREADSHEET_ID,
      range: notesRange,
      valueInputOption: 'USER_ENTERED',
      resource: { values: [[`Rejected on ${new Date().toLocaleString('en-IN')}`]] },
    });
    res.status(200).json({ ok: true });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: err.message });
  }
}