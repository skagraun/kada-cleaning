import sgMail, { MailDataRequired } from "@sendgrid/mail";

interface sendEmailProps {
  to: string;
  templateName: "ContactSubmission";
  dynamicTemplateData: Record<string, string>;
}

export const sendEmail = async ({
  to,
  templateName,
  dynamicTemplateData,
}: sendEmailProps) => {
  sgMail.setApiKey(process.env.SENDGRID_API_KEY!);

  const msg: MailDataRequired = {
    to,
    from: {
      email: "ajanlatkeres@szlkp.hu",
      name: "KaDa Cleaning",
    },
    templateId: templates[templateName],
    dynamicTemplateData,
  };

  try {
    await sgMail.send(msg);
  } catch (error) {
    console.log(error);
    throw new Error("Failed to send email!");
  }
};

const templates = {
  ContactSubmission: "d-7f2c43084a514c28ab7bd0f0f35079bc",
};
