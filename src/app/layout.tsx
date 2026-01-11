"use client"

import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import { useCallback, useState } from "react";
import { metadata } from "@/components/Metadata";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

metadata

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {

  const [activeSection, setActiveSection] = useState("home");

  const handleNavigate = useCallback((section: string) => {
    setActiveSection(section);
    const element = document.getElementById(section);
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  }, []);

  return (
    <html lang="en">
      <head>
        <meta name="format-detection" content="telephone=no" />
      </head>

      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-gray-100/50`}
      >
        <Navbar activeSection={activeSection} onNavigate={handleNavigate} />
        <div className="flex flex-col items-center min-h-screen mx-10 xl:mx-30 pt-13">

          {children}

        </div>
      </body>
    </html>
  );
}
