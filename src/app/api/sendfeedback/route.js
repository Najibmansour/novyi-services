import {
  tpt,
  mailOptions,
  compileFeedbackTemplate,
} from "@/lib/nodemailerClient";
import { NextResponse } from "next/server";

export async function POST(req, res) {
  const data = await req.json();
  const { first_name, last_name, from_mail, rating, feedback } = data;
  console.log(data);

  try {
    const mail = await tpt.sendMail({
      from: from_mail,
      to: process.env.NEXT_PUBLIC_NODEMAILER_MAIL,
      replyTo: from_mail,
      subject: `Novo FeedBack from Website ${first_name} ${last_name}`,
      html: compileFeedbackTemplate(
        first_name,
        last_name,
        from_mail,
        rating,
        feedback,
      ),
    });

    return NextResponse.json(
      { message: "Success: email was sent" },
      { status: 200 },
    );
  } catch (error) {
    console.log(error);
    NextResponse.status(500).json(
      { message: "COULD NOT SEND MESSAGE" },
      { status: 500 },
    );
  }
}

export async function GET() {
  // const data = await req.json();
  return NextResponse.json({
    asd: "hello",
  });
}
