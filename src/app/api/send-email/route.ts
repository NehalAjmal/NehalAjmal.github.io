import nodemailer from 'nodemailer'
import { NextRequest, NextResponse } from 'next/server'


export async function POST(req: NextRequest) {
  try {
    const { name, email, message } = await req.json()

    const transporter = nodemailer.createTransport({
      host: process.env.EMAIL_HOST,
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    })

    await transporter.sendMail({
      from: `"${name}" <${process.env.EMAIL_USER}>`,
      to: process.env.EMAIL_USER,
      subject: 'Portfolio Message',
      text: `Message from: <${email}>\n\n${message}`,
    })

    return NextResponse.json({ message: 'Email sent successfully!' }, { status: 200 })
  } catch (error) {
    console.error(error)
    return NextResponse.json({ message: 'Something went wrong.' }, { status: 500 })
  }
}
