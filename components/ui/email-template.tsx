import type * as React from "react"

interface EmailTemplateProps {
  name: string
  email: string
  message: string
}

export const EmailTemplate: React.FC<EmailTemplateProps> = ({ name, email, message }) => (
  <div>
    <h1>New Contact Form Submission</h1>
    <p>You have received a new message from your website contact form.</p>
    <h2>Contact Details:</h2>
    <ul>
      <li>
        <strong>Name:</strong> {name}
      </li>
      <li>
        <strong>Email:</strong> {email}
      </li>
    </ul>
    <h2>Message:</h2>
    <div
      style={{
        padding: "15px",
        backgroundColor: "#f5f5f5",
        borderRadius: "4px",
        marginTop: "10px",
        marginBottom: "10px",
      }}
    >
      <p>{message}</p>
    </div>
    <p>You can reply directly to this email to respond to {name}.</p>
  </div>
)
