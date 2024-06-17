import nodemailer from "nodemailer";
import * as handlebars from "handlebars";
import { contact_template, feedback_template } from "./templates/templates";

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

export function compileContactTemplate(
  from_name,
  from_phone,
  from_mail,
  message,
) {
  const template = handlebars.compile(contact_template);
  const htmlBody = template({
    from_name: from_name,
    from_phone: from_phone,
    from_mail: from_mail,
    message: message,
  });
  console.log(htmlBody);
  return htmlBody;
}

export function compileFeedbackTemplate(
  first_name,
  last_name,
  from_mail,
  feedback,
  rating,
) {
  const template = handlebars.compile(feedback_template);
  const htmlBody = template({
    first_name: first_name,
    last_name: last_name,
    feedback: feedback,
    from_mail: from_mail,
    rating: rating,
  });
  console.log(htmlBody);
  return htmlBody;
}
