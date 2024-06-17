import {
  tpt,
  mailOptions,
  compileFeedbackTemplate,
  compileContactTemplate,
} from "@/lib/nodemailerClient";
import { NextResponse } from "next/server";

export async function POST(req, res) {
  const data = await req.json();
  const { full_name, phone_num, from_mail, subject } = data;
  console.log(data);

  try {
    const mail = await tpt.sendMail({
      from: from_mail,
      to: process.env.NEXT_PUBLIC_NODEMAILER_MAIL,
      replyTo: from_mail,
      subject: `Novo Contact from Website ${full_name}`,
      html: compileContactTemplate(full_name, phone_num, from_mail, subject),
    });

    return NextResponse.json({ message: "Success: email was sent" });
  } catch (error) {
    console.log(error);
    NextResponse.status(500).json({ message: "COULD NOT SEND MESSAGE" });
  }
}

export async function GET() {
  // const data = await req.json();
  return NextResponse.json({
    asd: "hello",
  });
}
