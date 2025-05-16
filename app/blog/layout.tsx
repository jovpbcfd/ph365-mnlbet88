import { Metadata } from "next";

export const metadata: Metadata = {
  title: "PH365 Blog – Tips, News & Casino Game Guides",
  description:
    "Explore the PH365 blog for expert casino tips, latest game updates, and responsible gaming advice. Stay informed and boost your online gaming experience.",
};

export default function BlogLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <>{children}</>;
}
