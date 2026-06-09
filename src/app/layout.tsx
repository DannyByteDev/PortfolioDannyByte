import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Toaster } from "@/components/ui/toaster";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "DannyByte | Full Stack Developer",
  description: "Portfolio de DannyByte - Full Stack Developer con experiencia en React, Node.js, TypeScript y más.",
  keywords: ["DannyByte", "Full Stack Developer", "React", "Node.js", "TypeScript", "Portfolio"],
  authors: [{ name: "DannyByte" }],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-background text-foreground noise-overlay`}
      >
        {children}
        <Toaster />
      </body>
    </html>
  );
}
