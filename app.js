import { Resend } from 'resend';
import * as fs from 'fs';
import * as path from 'path';
import dotenv from "dotenv";
dotenv.config();
const resend = new Resend(process.env.RESEND_API);
const email = process.env.EMAIL;

console.log("resend token api: ", resend);

(async function () {

    const templatePath = path.join("./", "email-template-large.html"); //ruta de la plantilla
    const templateContent = fs.readFileSync(templatePath, 'utf-8'); //leemos el archivo html

  const { data, error } = await resend.emails.send({
    from: 'Testing Company <onboarding@resend.dev>',
    to: [email],
    subject: 'This is a test',
    html: templateContent,
  });

  if (error) {
    return console.error({ error });
  }

  console.log({ data });
})();