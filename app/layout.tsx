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
  metadataBase: new URL('https://www.catalintorro.com'),
  title: "Catalin Toro - Web Developer",
  description: "Personal website of Catalin Toro, a web developer with expertise in Next.js, React, Tailwind, and Framer Motion.",
  keywords: ["Catalin Toro", "Web Developer", "Trader", "Next.js", "React", "Tailwind", "Framer Motion", "Stripe", "Mollie", "Neon", "IDToro", "Active Boost", "Busy Bee Kindergarten", "Entrepreneur", "Digital Entrepreneurship", "Web Development Services", "Web Development", "Digital Web Development"],
  authors: [
    {
      name: "Catalin Toro",
      url: "https://www.catalintorro.com",
    },
  ],
  openGraph: {
    title: "Catalin Toro - Web Developer",
    description: "Personal website of Catalin Toro, a web developer with expertise in Next.js, React, Tailwind, and Framer Motion.",
    url: "https://www.catalintorro.com",
    siteName: "Catalin Toro - Web Developer",
    images: [
      {
        url: "/profile.jpg",
        width: 1200,
        height: 630,
        alt: "Catalin Toro - Web Developer",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Catalin Toro - Web Developer",
    description: "Personal website of Catalin Toro, a web developer with expertise in Next.js, React, Tailwind, and Framer Motion.",
    images: ["/profile.jpg"],
  },
  alternates: {
    canonical: "https://www.catalintorro.com",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
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