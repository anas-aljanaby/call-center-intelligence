import { Navbar } from "@/components/Navbar"
import { Footer } from "@/components/Footer"
import "./globals.css";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className="min-h-screen bg-white flex flex-col">
        <Navbar />
        <main className="pt-16 flex-1">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  )
}
