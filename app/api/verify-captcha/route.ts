import { NextResponse } from 'next/server';

export async function POST(req: Request) {
  try {
    const { token } = await req.json();
    const secret = process.env.RECAPTCHA_SECRET_KEY;

    if (!token) {
      return NextResponse.json({ success: false, message: "Token is missing" }, { status: 400 });
    }

    const response = await fetch(
      `https://www.google.com/recaptcha/api/siteverify?secret=${secret}&response=${token}`,
      { method: 'POST' }
    );

    const data = await response.json();

    if (data.success) {
      return NextResponse.json({ success: true, message: "CAPTCHA verified successfully" });
    } else {
      return NextResponse.json({ success: false, message: "Invalid CAPTCHA" }, { status: 400 });
    }
  } catch (error) {
    return NextResponse.json({ success: false, message: "Internal server error" }, { status: 500 });
  }
}