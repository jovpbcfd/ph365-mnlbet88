import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Fish Hunter Games at PH365 – Aim, Shoot & Win",
  description:
    "Dive into PH365’s exciting fish hunter games. Easy to play and thrilling to win—shoot your way to big rewards in this action-packed arcade favorite!",
};

export default function FishHunterLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <>{children}</>;
}
