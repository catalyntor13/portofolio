import { ContactForm } from "@/app/components/Contact/contact-form"

export default function ContactPage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="max-w-md mx-auto">
        <h1 className="text-2xl font-bold mb-6">Contact Me</h1>
        <ContactForm />
      </div>
    </div>
  )
}
