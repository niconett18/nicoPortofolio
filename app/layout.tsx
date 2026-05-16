import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Nicholas Edmund Tanaka | Portfolio",
  description: "Fullstack Software Developer & Computer Engineering Student at Universitas Indonesia.",
};

export const viewport = {
  width: "device-width",
  initialScale: 1,
  viewportFit: "cover",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="h-full antialiased" suppressHydrationWarning>
      <body className="min-h-full flex flex-col">
        {children}
      </body>
    </html>
  );
}
