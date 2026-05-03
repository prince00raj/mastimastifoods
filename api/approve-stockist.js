import { getSheetsClient, SPREADSHEET_ID } from './utils/sheets.js';

function generateMemberPassId(name, city, store) {
  const cityCode = (city || 'IND').replace(/[^a-z0-9]/gi, '').slice(0, 3).toUpperCase();
  const storeCode = (store || 'SHOP').replace(/[^a-z0-9]/gi, '').slice(0, 4).toUpperCase();
  const unique = Math.random().toString(36).slice(-5).toUpperCase();
  return `MM-STK-${cityCode}-${storeCode}-${unique}`;
}

export default async function handler(req, res) {
  const authHeader = req.headers.authorization;
  const expectedPassword = process.env.ADMIN_PASSWORD || 'admin123';
  if (!authHeader || authHeader !== `Bearer ${expectedPassword}`) {
    return res.status(401).json({ error: 'Unauthorized' });
  }

  const { rowNumber, name, email, city, store } = req.body;
  if (!rowNumber) {
    return res.status(400).json({ error: 'Missing rowNumber' });
  }

  try {
    const sheets = await getSheetsClient();
    const memberPassId = generateMemberPassId(name, city, store);

    // Update status and member pass ID
    const statusRange = `Stockists!C${rowNumber}:D${rowNumber}`; // Columns C (Approval Status) and D (Member Pass ID)
    await sheets.spreadsheets.values.update({
      spreadsheetId: SPREADSHEET_ID,
      range: statusRange,
      valueInputOption: 'USER_ENTERED',
      resource: { values: [['Approved', memberPassId]] },
    });

    // Also update Decision Notes column (column N)
    const notesRange = `Stockists!N${rowNumber}`;
    await sheets.spreadsheets.values.update({
      spreadsheetId: SPREADSHEET_ID,
      range: notesRange,
      valueInputOption: 'USER_ENTERED',
      resource: { values: [[`Approved on ${new Date().toLocaleString('en-IN')}`]] },
    });

    // Send email
    if (email) {
      const subject = 'Your Masti Masti Stockist Member Pass Approved';
      const body = `Dear ${name || 'Stockist'},

Your Masti Masti stockist application has been approved.

Your Member Pass ID: ${memberPassId}

Use this ID for COD checkout on the Masti Masti website.

- Masti Masti Team`;
      // You can use a simple fetch to an email service, or Vercel's built-in `send`? For now, we can use a third-party like Resend or just log it.
      // Because MailApp is not available in Node.js, you need an external email provider. For simplicity, we'll console.log and you can later add Resend/SendGrid.
      console.log(`Email would be sent to ${email}: ${subject}`);
      // TODO: integrate Resend or nodemailer
    }

    res.status(200).json({ ok: true, memberPassId });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: err.message });
  }
}