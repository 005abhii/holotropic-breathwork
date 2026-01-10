import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Holotropic Breathwork India | Father KC Thomas",
  description: "Experience transformative Holotropic Breathwork sessions, retreats, and facilitator training in Bangalore with Father KC Thomas. Discover healing through breathwork.",
  keywords: "holotropic breathwork, breathwork India, Father KC Thomas, facilitator training, healing retreats, Bangalore breathwork, consciousness exploration",
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
