import { Resend } from 'resend';
import dotenv from "dotenv";
dotenv.config();
const resend = new Resend(process.env.RESEND_API);
const email = process.env.EMAIL;

console.log("resend token api: ", resend);

(async function () {
  const { data, error } = await resend.emails.send({
    from: 'Testing Company <onboarding@resend.dev>',
    to: [email],
    subject: 'This is a test',
    html: '<strong>It works!</strong>',
  });

  if (error) {
    return console.error({ error });
  }

  console.log({ data });
})();