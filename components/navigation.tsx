import Link from "next/link";

type NavigationProps = {
  className?: string;
};

export default function Navigation({ className = "" }: NavigationProps) {
  return (
    <ul className={`${className}`}>
      <li className="pb-3 border-b border-white/20 md:border-none md:pb-0">
        <Link href="#" className="block w-full h-full">
          HOME
        </Link>
      </li>
      <li className="pb-3 border-b border-white/20 md:border-none md:pb-0">
        <Link href="#">CASINO</Link>
      </li>
      <li className="pb-3 border-b border-white/20 md:border-none md:pb-0">
        <Link href="#" className="block w-full h-full">
          FISH HUNTER
        </Link>
      </li>
      <li className="pb-3 border-b border-white/20 md:border-none md:pb-0">
        <Link href="#" className="block w-full h-full">
          LOTTERY
        </Link>
      </li>
      <li className="pb-3 border-b border-white/20 md:border-none md:pb-0">
        <Link href="#" className="block w-full h-full">
          PROMOTIONS
        </Link>
      </li>
      <li className="pb-3 border-b border-white/20 md:border-none md:pb-0">
        <Link href="#" className="block w-full h-full">
          DOWNLOAD
        </Link>
      </li>
      <li className="pb-3 border-b border-white/20 md:border-none md:pb-0">
        <Link href="#" className="block w-full h-full">
          SPORTBOOK
        </Link>
      </li>
      <li className="pb-3 border-b border-white/20 md:border-none md:pb-0">
        <Link href="#" className="block w-full h-full">
          LIVE CASINO
        </Link>
      </li>
      <li className="pb-3 border-b border-white/20 md:border-none md:pb-0">
        <Link href="#" className="block w-full h-full">
          CARD GAME
        </Link>
      </li>
    </ul>
  );
}
