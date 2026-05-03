export default async function handler(req, res) {
  // Log request details
  console.log('Request method:', req.method);
  console.log('Request body:', req.body);

  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  // Check credentials
  if (!process.env.GOOGLE_CREDENTIALS) {
    console.error('Missing GOOGLE_CREDENTIALS');
    return res.status(500).json({ error: 'Missing GOOGLE_CREDENTIALS' });
  }
  console.log('GOOGLE_CREDENTIALS present, length:', process.env.GOOGLE_CREDENTIALS.length);

  try {
    const { google } = await import('googleapis');
    console.log('Decoding credentials...');
    const credsJson = Buffer.from(process.env.GOOGLE_CREDENTIALS, 'base64').toString();
    const creds = JSON.parse(credsJson);
    console.log('Credentials parsed, client_email:', creds.client_email);

    const auth = new google.auth.GoogleAuth({
      credentials: creds,
      scopes: ['https://www.googleapis.com/auth/spreadsheets'],
    });
    const sheets = google.sheets({ version: 'v4', auth });
    const SPREADSHEET_ID = '1hcNGsx63a1iu3oxVLDUZEtDqFjE6D6Jzzge6C3suQJ4';

    const { kind, ...data } = req.body;
    console.log('Kind:', kind);

    if (kind !== 'stockist') {
      // For now only test stockist; you can add order/review later
      return res.status(400).json({ error: 'Only stockist kind supported in this test' });
    }

    const range = 'Stockists!A:N';
    const values = [[
      new Date(),
      data.application_id || '',
      'Pending',
      '',
      data.name || '',
      data.email || '',
      data.mobile || '',
      data.store || '',
      data.city || '',
      data.type || '',
      data.message || '',
      data.submitted_at || '',
      data.source || '',
      ''
    ]];
    console.log('Appending values:', values);

    const appendResult = await sheets.spreadsheets.values.append({
      spreadsheetId: SPREADSHEET_ID,
      range,
      valueInputOption: 'USER_ENTERED',
      insertDataOption: 'INSERT_ROWS',
      resource: { values },
    });
    console.log('Append successful, updated range:', appendResult.data.updates?.updatedRange);
    return res.status(200).json({ ok: true, updatedRange: appendResult.data.updates?.updatedRange });
  } catch (err) {
    console.error('Full error:', err);
    console.error('Error message:', err.message);
    if (err.response) console.error('Response error data:', err.response.data);
    return res.status(500).json({ ok: false, error: err.message, details: err.response?.data });
  }
}