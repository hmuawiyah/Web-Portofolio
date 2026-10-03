
import type { Metadata } from "next"
import { Geist, Geist_Mono } from "next/font/google"
import "./globals.css"
import Navbar from "@/components/Navbar"
import { SoftGradient } from "@/components/SoftGradient"

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
})

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
})

export const metadata: Metadata = {
  title: "Husein Muawiyah | Web Developer Portfolio",
  description: "Portfolio of Husein Muawiyah, a web developer focused on accessible, responsive, and visually consistent digital products.",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {



  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <meta name="format-detection" content="telephone=no" />
      </head>

      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-[#F9FAFB]`}
      >
        <Navbar />

        <SoftGradient />

        <div className="flex min-h-screen flex-col items-center px-7 xl:px-30">

          {children}

        </div>
      </body>
    </html>
  )
}
