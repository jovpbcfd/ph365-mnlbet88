import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Live Casino at PH365 – Real Dealers, Real Action",
  description:
    "Experience the thrill of real-time gaming at PH365 Live Casino. Play baccarat, roulette, blackjack, and more with live dealers on any device.",
};

export default function LiveCasinoLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <>{children}</>;
}
