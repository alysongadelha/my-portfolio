import { google } from 'googleapis';
import { NextRequest, NextResponse } from 'next/server';

interface FormRequest {
  name: string;
  email: string;
  message: string;
}

export async function POST(request: NextRequest): Promise<any> {
  const { name, email, message }: FormRequest = await request.json();

  try {
    const auth = new google.auth.GoogleAuth({
      credentials: {
        client_email: process.env.GOOGLE_CLIENT_EMAIL,
        private_key: process.env.GOOGLE_PRIVATE_KEY?.replace(/\\n/g, '\n'),
      },
      scopes: [
        'https://www.googleapis.com/auth/drive',
        'https://www.googleapis.com/auth/drive.file',
        'https://www.googleapis.com/auth/spreadsheets',
      ],
    });

    const sheets = google.sheets({
      auth,
      version: 'v4',
    });

    const spreadsheetResponse = await sheets.spreadsheets.values.append({
      spreadsheetId: process.env.GOOGLE_SHEET_ID,
      range: 'A1:C1',
      valueInputOption: 'USER_ENTERED',
      requestBody: {
        values: [[name, email, message]],
      },
    });

    return NextResponse.json(spreadsheetResponse);
  } catch (error: any) {
    return NextResponse.error();
  }
}
