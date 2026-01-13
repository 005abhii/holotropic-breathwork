import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Holotropic Breathwork India | Fr. KC Thomas SDB",
  description: "Experience transformative Holotropic Breathwork™ sessions, retreats, and workshops in Bangalore with Fr. KC Thomas SDB. Discover healing through breathwork.",
  keywords: "holotropic breathwork, breathwork India, Fr. KC Thomas SDB, healing retreats, Bangalore breathwork, consciousness exploration, workshops",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={inter.className}>
        <Header />
        <main className="min-h-screen pt-16">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
