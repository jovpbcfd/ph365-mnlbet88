import { Metadata } from "next";

export const metadata: Metadata = {
  title: "PH365 Online Casino Games – Play & Win Real Money",
  description:
    "Enjoy top-rated online casino games at PH365. Spin slots, hit jackpots, and win real money on a secure and licensed platform. Start playing today!",
};

export default function CasinoLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <>{children}</>;
}
