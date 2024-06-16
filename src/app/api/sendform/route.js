import {
  tpt,
  mailOptions,
  compileFeedbackTemplate,
} from "@/lib/nodemailerClient";
import { NextResponse } from "next/server";

export async function POST(req, res) {
  const data = await req.json();
  const { from_name, from_phone, message } = data;

  try {
    const mail = await tpt.sendMail({
      from: from_phone,
      to: process.env.NEXT_PUBLIC_NODEMAILER_MAIL,
      replyTo: from_phone,
      subject: `Edenmen FeedBack from Website ${from_phone}`,
      html: compileFeedbackTemplate(from_name, from_phone, message),
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
