import React from "react";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/block/navbar";

const inter = Inter({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  adjustFontFallback: false,
});

export const metadata: Metadata = {
  title: "rusign-ui",
  description: "reuseable component library",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="bg-primary-foreground text-foreground">
      <body className={`${inter.className} min-h-screen w-full`}>
        <Navbar />
        {children}
      </body>
    </html>
  );
}
