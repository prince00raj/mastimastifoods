import { google } from 'googleapis';

export async function getSheetsClient() {
  const base64Creds = process.env.GOOGLE_CREDENTIALS;
  if (!base64Creds) {
    throw new Error('Missing GOOGLE_CREDENTIALS environment variable');
  }
  const credsJson = Buffer.from(base64Creds, 'base64').toString();
  const credentials = JSON.parse(credsJson);
  const auth = new google.auth.GoogleAuth({
    credentials,
    scopes: ['https://www.googleapis.com/auth/spreadsheets'],
  });
  return google.sheets({ version: 'v4', auth });
}

export const SPREADSHEET_ID = '1hcNGsx63a1iu3oxVLDUZEtDqFjE6D6Jzzge6C3suQJ4';