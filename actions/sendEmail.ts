"use server";

import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

const validateFormData = (value: unknown) => {
  if (!value || typeof value !== "string") {
    return false;
  }
  return true;
};

export const sendEmail = async (formData: FormData) => {
  const message = formData.get("message");
  const senderEmail = formData.get("senderEmail");

  if (!validateFormData(senderEmail) || !validateFormData(message)) {
    return {
      error: "Something went wrong!",
    };
  }
  let data;
  try {
    const data = await resend.emails.send({
      from: "Contact form <contactform@resend.dev>",
      to: "guptaabhishek1886@gmail.com",
      subject: "Message from portfolio contact form",
      reply_to: senderEmail as string,
      text: `${message as string} from ${senderEmail as String}`,
    });

  } catch (err: any) {
    return {
      error: err.message as string
    };
  }

  return { data }
};
