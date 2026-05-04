import { google } from 'googleapis';

export async function getSheetsClient() {
  const creds = JSON.parse(Buffer.from(process.env.GOOGLE_CREDENTIALS, 'base64').toString());
  const auth = new google.auth.GoogleAuth({
    credentials: creds,
    scopes: ['https://www.googleapis.com/auth/spreadsheets'],
  });
  return google.sheets({ version: 'v4', auth });
}

export const SPREADSHEET_ID = '1hcNGsx63a1iu3oxVLDUZEtDqFjE6D6Jzzge6C3suQJ4';