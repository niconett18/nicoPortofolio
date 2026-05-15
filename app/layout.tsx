import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });

export const metadata: Metadata = {
  title: "Nicholas Edmund Tanaka | Portfolio",
  description: "Fullstack Software Developer & Computer Engineering Student at Universitas Indonesia.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} h-full antialiased`} suppressHydrationWarning>
      <body className="min-h-full flex flex-col font-sans bg-[#050508] text-white selection:bg-blue-500/30 selection:text-white">
        {children}
      </body>
    </html>
  );
}
