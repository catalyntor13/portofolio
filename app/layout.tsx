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
  title: "Catalin Toro - Web Developer",
  description: "Catalin Toro personal website, expert web developer in Next.js, React, Tailwind, and Framer Motion. Services for creating websites, landing pages, and SEO optimization.",
  keywords: ["Catalin Toro", "Web Developer", "Website Creation", "Landing Page", "Web Applications", "SEO", "SEO Optimization", "Programmer", "Freelancer Romania", "Next.js", "React", "Web Services", "Web Consulting", "Tailwind", "Framer Motion", "Stripe", "Mollie", "Web Design", "Web Designer", "Web Designer Romania", "Web Developer Romania", "premium landing page creation",
    "custom application development", "Next.js programmer", "fast presentation website",
    "startup MVP creation", "SaaS development",
    "scalable web applications", "fullstack programmer", "React Tailwind expert",
    "web development services", "web performance optimization", "software architect",
    "Neon database development", "financial dashboard creation", "IT freelancer romania"],
  authors: [
    {
      name: "Catalin Toro",
      url: "https://www.catalintorro.com",
    },
  ],
  openGraph: {
    title: "Catalin Toro - Web Developer",
    description: "Catalin Toro personal website, expert web developer in Next.js, React, Tailwind, and Framer Motion. Services for creating websites, landing pages, and SEO optimization.",
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
    description: "Catalin Toro personal website, expert web developer in Next.js, React, Tailwind, and Framer Motion. Services for creating websites, landing pages, and SEO optimization.",
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
        <Analytics />
      </body>

    </html>
  );
}