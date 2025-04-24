import Link from "next/link";

const menuItems = [
  { name: "HOME", href: "#" },
  { name: "CASINO", href: "#" },
  { name: "FISH HUNTER", href: "#" },
  { name: "LOTTERY", href: "#" },
  { name: "PROMOTIONS", href: "#" },
  { name: "DOWNLOAD", href: "#" },
  { name: "SPORTS BOOK", href: "#" },
  { name: "LIVE CASINO", href: "#" },
  { name: "CARD GAME", href: "#" },
];

export default function Footer() {
  return (
    <footer className="bg-blue-950">
      <div className="max-w-[1200px] mx-auto grid grid-cols-2 lg:py-10">
        <div>
          <Link href="#" className="text-white">
            PH365
          </Link>
        </div>
        <div>
          <ul className="flex flex-col items-left text-sm font-medium">
            {menuItems.map((item, index) => (
              <li key={index}>
                <Link
                  href={item.href}
                  className="flex items-center space-x-2 border-b border-white/20 pb-1 hover:text-blue-300 transition-colors  text-white duration-200"
                >
                  <span className="text-lg">»</span>
                  <span>{item.name}</span>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
      <div className="py-8 bg-blue-900">
        <div className="max-w-[1200px] mx-auto text-center text-white">
          <p>Copyright ph365</p>
        </div>
      </div>
    </footer>
  );
}
