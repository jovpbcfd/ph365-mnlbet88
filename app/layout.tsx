import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import Header from "@/components/header";
import Footer from "@/components/footer";
import ScrollToTop from "@/components/scroll-to-top";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "PH365 Online Casino – Trusted Gaming in the Philippines",
  description:
    "Join PH365 for a secure and exciting online casino experience. Enjoy slots, sports betting, live casino, and more—licensed by PAGCOR and trusted by Filipinos.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <ScrollToTop />
        <Header />
        <main className="bg-[#241D56]">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
