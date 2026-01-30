import type { Metadata } from "next";
import { Inter, Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";
import { Toaster } from 'react-hot-toast';
import { Analytics } from "@vercel/analytics/next"



const inter = Inter({ subsets: ["latin"] });

const Jakarta = Plus_Jakarta_Sans({
  variable: "--font-jakarta",
  subsets: ["latin"]
})

export const metadata: Metadata = {
  metadataBase: new URL('https://www.catalintorro.com'),
  title: "Catalin Toro - Dezvoltator Web",
  description: "Site personal Catalin Toro, dezvoltator web expert în Next.js, React, Tailwind și Framer Motion. Servicii de creare site-uri, landing page-uri și optimizare SEO.",
  keywords: ["Catalin Toro", "Dezvoltator Web", "Creare Site", "Landing Page", "Aplicatii Web", "SEO", "Optimizare SEO", "Programator", "Freelancer Romania", "Next.js", "React", "Servicii Web", "Consultanta Web", "Tailwind", "Framer Motion", "Stripe", "Mollie"],
  authors: [
    {
      name: "Catalin Toro",
      url: "https://www.catalintorro.com",
    },
  ],
  openGraph: {
    title: "Catalin Toro - Dezvoltator Web",
    description: "Site personal Catalin Toro, dezvoltator web expert în Next.js, React, Tailwind și Framer Motion. Servicii de creare site-uri, landing page-uri și optimizare SEO.",
    url: "https://www.catalintorro.com",
    siteName: "Catalin Toro - Dezvoltator Web",
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
    title: "Catalin Toro - Dezvoltator Web",
    description: "Site personal Catalin Toro, dezvoltator web expert în Next.js, React, Tailwind și Framer Motion. Servicii de creare site-uri, landing page-uri și optimizare SEO.",
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

    <html lang="ro" suppressHydrationWarning>

      <body className={`${inter.className} ${Jakarta.variable} bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950 text-white font-jakarta`}>

        <main className="min-h-screen">{children}</main>
        <Toaster />
        <Analytics />
      </body>

    </html>
  );
}