import React from "react";
import type { Metadata } from "next";
import "./globals.css";
import { GeistSans } from "geist/font/sans";
import Navbar from "@/components/block/navbar";

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
      <body className={`${GeistSans.className} min-h-screen w-full`}>
        <Navbar />
        {children}
      </body>
    </html>
  );
}
