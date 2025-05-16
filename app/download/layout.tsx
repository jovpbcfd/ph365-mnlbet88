import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Download PH365 App – Play Anytime, Anywhere",
  description:
    "Get the PH365 app for seamless mobile gaming! Play slots, sabong, sports betting, and more. Safe, fast, and optimized for all devices—download now!",
};

export default function DownloadLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <>{children}</>;
}
