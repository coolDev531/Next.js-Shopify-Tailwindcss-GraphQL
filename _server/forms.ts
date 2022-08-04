import { createRouter } from "_server/settings/create-router";
import { createTransport } from "nodemailer";
import * as yup from "yup";

export const formRouter = createRouter().mutation("contact", {
  input: yup.object({
    email: yup.string().nullable(),
    body: yup.string().required(),
  }),
  resolve: async ({ input }) => {
    try {
      console.log({ input });
      const transporter = createTransport({
        host: "smtp.tellmann.co.za",
        port: 587,
        auth: {
          user: process.env.MAIL_USERNAME,
          pass: process.env.MAIL_PASSWORD,
        },
        tls: {
          rejectUnauthorized: false,
        },
      });

      const mailer = (input) => {
        const message = {
          from: `TELLMANN.co.za --- CONTACT FORM - <contact-form@lunalemon.dev>`,
          to: `${process.env.MAIL_CONTACT_FORM_RECEIVER}`,
          subject: `CONTACT-FORM --- Lunalemon.dev`,
          text: input.body,
          replyTo: input.email ?? undefined,
        };

        return new Promise((resolve, reject) => {
          transporter.sendMail(message, (error, info) => (error ? reject(error) : resolve(info)));
        });
      };

      console.log({ transporter });
      await mailer(input);
      return "success";
    } catch (err) {
      console.log(err.message);
      return "error";
    }
  },
});
