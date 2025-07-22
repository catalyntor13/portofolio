import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";



const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Catalin Toro - Dezvoltator Web",
  description: "Website personal de prezentare profesională",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${inter.className} bg-gradient-to-b from-black to-green-500 text-white`}>
         
       <main className="min-h-screen">{children}</main>
        
      </body>
    </html>
  );
}