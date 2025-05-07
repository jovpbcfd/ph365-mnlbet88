import Link from "next/link";

type NavigationProps = {
  className?: string;
};

export default function Navigation({ className = "" }: NavigationProps) {
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
      ].map((item, idx) => (
        <li key={idx} className="hover:text-[#ff5561] transition-colors">
          <Link href={item.href} className="block w-full h-full">
            {item.name}
          </Link>
        </li>
      ))}
    </ul>
  );
}
