import { Metadata } from "next";

export const metadata: Metadata = {
  title: "PH365 Sports Betting – Bet on Football, NBA & More",
  description:
    "Wager on top sports with PH365’s sportsbook! Bet on basketball, football, boxing, and more. Real-time odds, secure bets, and fast payouts await.",
};

export default function SportBookLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <>{children}</>;
}
