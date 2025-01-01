import * as z from "zod";

export const ContactMeSchema = z.object({
  lastName: z.string().min(1, { message: "Vezetéknév megadása kötelező!" }),
  firstName: z.string().min(1, { message: "Keresztnév megadása kötelező!" }),
  phone: z.string().min(1, { message: "Telefonszám megadása kötelező!" }),
  email: z
    .string()
    .email({ message: "Érvényes e-mail cím megadása kötelező!" }),
  message: z
    .string()
    .min(10, { message: "Üzenet megadása kötelező! (legalább 10 karakter)" }),
});
