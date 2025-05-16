import { Metadata } from "next";

export const metadata: Metadata = {
  title: "PH365 Casino Bonuses – Latest Promos & Free Offers",
  description:
    "Don’t miss PH365’s latest promotions! Enjoy signup bonuses, cashback, and weekly rewards for loyal players. Play more, earn more, win more.",
};

export default function PromotionLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <>{children}</>;
}
