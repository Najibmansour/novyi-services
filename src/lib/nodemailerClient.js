import nodemailer from "nodemailer";
import * as handlebars from "handlebars";
import { feedbackTemplate } from "./templates/templ";

const email = process.env.NEXT_PUBLIC_NODEMAILER_MAIL;
const pass = process.env.NEXT_PUBLIC_NODEMAILER_PASS;

export const tpt = nodemailer.createTransport({
  host: process.env.NEXT_PUBLIC_NODEMAILER_HOST,
  port: process.env.NEXT_PUBLIC_NODEMAILER_PORT,
  secure: true,
  auth: {
    user: email,
    pass: pass,
  },
});

try {
  const res = await tpt.verify();
  console.log("Nodemailer transpot working:", res);
} catch (err) {
  console.log("Nodemailer transpot working:", err);
}

export const mailOptions = {
  from: email,
  to: email,
};

export function compileFeedbackTemplate(from_name, from_phone, from_message) {
  const template = handlebars.compile(feedbackTemplate);
  const htmlBody = template({
    from_name: from_name,
    from_phone: from_phone,
    message: from_message,
  });
  return htmlBody;
}
