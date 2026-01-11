
import type { Metadata } from "next"
import { Geist, Geist_Mono } from "next/font/google"
import "./globals.css"
import Navbar from "@/components/Navbar"

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
})

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
})

export const metadata: Metadata = {
  title: "Husein's Web Portofolio",
  description: "Web Portofolio",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {



  return (
    <html lang="en">
      <head>
        <meta name="format-detection" content="telephone=no" />
      </head>

      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-gray-100/50`}
      >
        <Navbar  />
        <div className="flex flex-col items-center min-h-screen mx-10 xl:mx-30 pt-13">

          {children}

        </div>
      </body>
    </html>
  )
}
