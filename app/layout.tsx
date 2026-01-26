import type { Metadata } from "next";
import { Inter, Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";
import { Toaster } from 'react-hot-toast';



const inter = Inter({ subsets: ["latin"] });

const Jakarta = Plus_Jakarta_Sans({
  variable: "--font-jakarta",
  subsets: ["latin"]
})

export const metadata: Metadata = {
  title: "Catalin Toro - Web Developer",
  description: "Personal website of Catalin Toro, a web developer with expertise in Next.js, React, Tailwind, and Framer Motion.",
  keywords: ["Catalin Toro", "dezvoltator web", "Trader", "Next.js", "React", "Tailwind", "Framer Motion", "Stripe", "Mollie", "Neon", "IDToro", "Active Boost", "Gradinita Busy Bee", "Web developer", "antreprenor", "antreprenoriat", "antreprenoriat digital", "Servicii de dezvoltare web", "dezvoltare web", "dezvoltare web digitala",],
  authors: [
    {
      name: "Catalin Toro",
      url: "https://catalin-dev.com",
    },
  ],
  openGraph: {
    title: "Catalin Toro - Web Developer",
    description: "Personal website of Catalin Toro, a web developer with expertise in Next.js, React, Tailwind, and Framer Motion.",
    type: "website",
    locale: "ro_RO",
    siteName: "Catalin Toro - Web Developer",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (

    <html lang="en" suppressHydrationWarning>

      <body className={`${inter.className} ${Jakarta.variable} bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950 text-white font-jakarta`}>

        <main className="min-h-screen">{children}</main>
        <Toaster />
      </body>

    </html>
  );
}