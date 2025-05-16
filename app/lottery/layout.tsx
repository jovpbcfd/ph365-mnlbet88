import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Online Lottery at PH365 – Bet & Win Instantly",
  description:
    "Try your luck with PH365’s online lottery! Bet on daily draws and win real money. Fast payouts, secure betting, and official results you can trust.",
};

export default function LotteryLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <>{children}</>;
}
