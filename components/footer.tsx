import Link from "next/link";

const menuItems = [
  { name: "HOME", href: "/" },
  { name: "CASINO", href: "/casino" },
  { name: "FISH HUNTER", href: "/fish-hunter" },
  { name: "LOTTERY", href: "/lottery" },
  { name: "PROMOTIONS", href: "/promotion" },
  { name: "DOWNLOAD", href: "/download" },
  { name: "SPORTS BOOK", href: "/sports-book" },
  { name: "LIVE CASINO", href: "/live-casino" },
  { name: "CARD GAME", href: "/card-game" },
];

export default function Footer() {
  return (
    <footer className="bg-[#4b47fd] text-white">
      <div className="max-w-6xl mx-auto px-4 py-12 grid grid-cols-1 lg:grid-cols-2 gap-8">
        <div className="space-y-3">
          <Link
            href="/"
            className="text-2xl font-bold tracking-wide bg-gradient-to-r from-cyan-400 to-sky-500 bg-clip-text text-transparent"
          >
            PH365
          </Link>
          <p className="text-white text-sm max-w-md">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum
            maxime assumenda quidem error molestiae a.
          </p>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 gap-y-4 text-sm">
          {menuItems.map((item, index) => (
            <Link
              key={index}
              href={item.href}
              className="flex items-center space-x-2 hover:text-[#FF5561] transition-colors duration-200"
            >
              <span className="text-base">»</span>
              <span>{item.name}</span>
            </Link>
          ))}
        </div>
      </div>

      <div className="border-t border-white/10 py-6 text-center text-white text-sm">
        © {new Date().getFullYear()} PH365. All rights reserved.
      </div>
    </footer>
  );
}
