"use server";

import { sendEmail } from "@/lib/sendgrid";

export const sendRequestFormAction = async (values: any) => {
  try {
    const name = values.lastName + " " + values.firstName;
    const phone = values.phone;
    const email = values.email;
    const message = values.message;

    await sendEmail({
      to: "ajanlatkeres@szlkp.hu",
      templateName: "ContactSubmission",
      dynamicTemplateData: {
        name,
        email,
        phone,
        message,
      },
    });

    return { errorMessage: null };
  } catch (error) {
    console.log(error);
    return { errorMessage: "Valami hiba történt..." };
  }
};
