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
  title: "Web Developer & Trader - Custom Trading Tools & Web Apps",
  description: "Full-stack web developer & active trader. I build high-performance trading dashboards, analytics platforms, and web applications. Specialized in fintech, real-time data, and scalable systems.",
  keywords: ["Web Developer", "Trader", "Trading Dashboard", "Trading Platform", "Fintech", "Trading Analytics", "Web Applications", "SaaS", "Next.js", "React", "TypeScript", "Real-time Trading", "Financial Dashboard", "Trading Tools", "Day Trading", "Trading Journal", "Performance Analytics", "Crypto Trading Platform", "Web3", "API Development", "Database Design", "Neon Postgres", "Scalable Applications", "Trading Bot", "Automated Trading", "Web Development", "Full Stack Developer"],
  authors: [
    {
      name: "Web Developer & Trader",
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