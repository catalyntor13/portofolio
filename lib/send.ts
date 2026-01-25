"use server"

import { Resend } from "resend"
import type { z } from "zod"
import { contactSchema } from "@/schemas/contact-schema"
import { EmailTemplate } from "@/components/ui/email-template"
import type { ReactElement } from "react"

// Initialize Resend with your API key
const resend = new Resend(process.env.RESEND_API_KEY)

export const send = async (data: z.infer<typeof contactSchema>) => {
  try {
    // Validate that we have all required data
    if (!data.name || !data.email || !data.message) {
      throw new Error("Missing required fields")
    }

    // Send the email
    const { data: emailData, error } = await resend.emails.send({
      from: "Contact Form <onboarding@resend.dev>", // Use your verified domain
      to: `${process.env.YOUR_EMAIL}`, // Your email where you want to receive inquiries
      subject: `New inquiry from ${data.name}`,
      react: EmailTemplate({
        name: data.name,
        email: data.email,
        message: data.message,
      }) as ReactElement,
  
    })

    if (error) {
      console.error("Error sending email:", error)
      throw new Error("Failed to send email")
    }

    console.log("Email sent successfully:", emailData)
    return { success: true }
  } catch (error) {
    console.error("Error in send function:", error)
    throw error
  }
}
