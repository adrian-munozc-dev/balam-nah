import type React from "react"
import type { Metadata } from "next"
import { Montserrat } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import { Suspense } from "react"
import "./globals.css"

const montserrat = Montserrat({
  subsets: ["latin"],
  variable: "--font-sans",
  weight: ["400", "500", "600", "700"],
  display: "swap",
})

export const metadata: Metadata = {
  title: "Balam-Nah | Centro Ecoturístico",
  description:
    "Descubre la magia de la selva maya en Balam-Nah. Camping, glamping, kayak, senderismo y más experiencias únicas en armonía con la naturaleza.",
  keywords: "ecoturismo, camping, glamping, kayak, selva maya, naturaleza, aventura, Balam-Nah",
  generator: " ",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="es">
      <body className={`${montserrat.className} antialiased`}>
        <Suspense fallback={null}>{children}</Suspense>
        <Analytics />
      </body>
    </html>
  )
}
