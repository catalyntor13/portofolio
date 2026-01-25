import { z } from 'zod'

export const contactSchema = z.object({
  name: z.string().min(1, "Numele este obligatoriu"),
  email: z.string().email("Email invalid").min(1, "Emailul este obligatoriu"),
  message: z.string().min(1, "Mesajul este obligatoriu"),
})

export type ContactFormData = z.infer<typeof contactSchema>