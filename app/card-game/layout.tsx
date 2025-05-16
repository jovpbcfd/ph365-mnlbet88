import { Metadata } from "next";

export const metadata: Metadata = {
  title: "PH365 Card Games – Play Poker, Pusoy & More",
  description:
    "Join the action with PH365’s card games. Play poker, Pusoy, and other Filipino favorites with real players for real cash prizes. Try your hand today!",
};

export default function CardGameLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <>{children}</>;
}
