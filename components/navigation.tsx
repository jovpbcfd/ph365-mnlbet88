"use client";

import { usePathname } from "next/navigation";
import Link from "next/link";
import { cn } from "@/lib/utils";

type NavigationProps = {
  className?: string;
};

export default function Navigation({ className = "" }: NavigationProps) {
  const pathname = usePathname();
  return (
    <ul className={`${className}`}>
      {[
        { name: "HOME", href: "/" },
        { name: "CASINO", href: "/casino" },
        { name: "FISH HUNTER", href: "/fish-hunter" },
        { name: "LOTTERY", href: "/lottery" },
        { name: "PROMOTIONS", href: "/promotions" },
        { name: "DOWNLOAD", href: "/download" },
        { name: "SPORTBOOK", href: "/sports-book" },
        { name: "LIVE CASINO", href: "/live-casino" },
        { name: "CARD GAME", href: "/card-game" },
        { name: "BLOGS", href: "/blog" },
      ].map((item, idx) => (
        <li key={idx} className="hover:text-[#ff5561] transition-colors">
          <Link
            href={item.href}
            className={cn(
              "block w-full h-full",
              pathname === item.href ? "text-[#ff5561]" : ""
            )}
          >
            {item.name}
          </Link>
        </li>
      ))}
    </ul>
  );
}
