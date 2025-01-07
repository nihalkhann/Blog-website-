import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: 'AI Brainwave',
  description: 'blog website',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head />
      <body className={inter.className}>
        {/* Add a wrapper with flex layout */}
        <div className="flex flex-col min-h-screen">
          {/* Header stays at the top */}
          <Header />
          
          {/* Content takes the remaining space */}
          <main className="flex-grow">
            {children}

          </main>
          <Footer/>
        </div>
      </body>
    </html>
  );
}
