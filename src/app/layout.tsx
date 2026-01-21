import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import LenisProvider from "@/providers/lenis-provider";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Ananta Risky Susanto | Full Stack Developer",
  description: "Portfolio of Ananta Risky Susanto, a Full Stack Developer building modern web applications.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={` bg-black ${geistSans.variable} ${geistMono.variable}`}>
        <LenisProvider>{children}</LenisProvider>
      </body>
    </html>
  );
}
