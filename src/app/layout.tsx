
import type { Metadata } from "next"
import { Allura, Geist, Geist_Mono } from "next/font/google"
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

const allura = Allura({
  variable: "--font-allura",
  subsets: ["latin"],
  weight: "400",
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
        className={`${geistSans.variable} ${geistMono.variable} ${allura.variable} antialiased bg-background`}
      >
        <Navbar />

        <SoftGradient />

        <div className="flex min-h-screen w-full md:max-w-6xl xl:max-w-5xl mx-auto flex-col items-center overflow-x-clip px-4 sm:px-6 lg:px-8">

          {children}

        </div>
      </body>
    </html>
  )
}
