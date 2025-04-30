"use client";

import Link from "next/link";
import { useState } from "react";
import { CloseMenu, OpenMenu } from "./icons";
import Navigation from "./navigation";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="bg-gradient-to-r from-blue-900 to-blue-700 text-white">
      <div className="max-w-6xl mx-auto px-4 py-3 flex items-center justify-between">
        <Link
          href="/"
          className="text-2xl font-bold tracking-wide bg-gradient-to-r from-cyan-400 to-sky-500 bg-clip-text text-transparent"
        >
          PH365
        </Link>

        <div className="hidden md:flex space-x-3">
          <Link
            href="#"
            className="bg-[#FE3265] hover:bg-[#FE3265]/90 w-[100px] text-center text-white px-4 py-2 rounded-full text-sm font-semibold transition"
          >
            Log In
          </Link>
          <Link
            href="#"
            className="bg-[#FCD000] hover:bg-[#FCD000]/90 w-[100px] text-center text-white px-4 py-2 rounded-full text-sm font-semibold transition"
          >
            Sign Up
          </Link>
        </div>

        <div className="md:hidden">
          <button onClick={() => setIsOpen(!isOpen)} className="text-white">
            {isOpen ? <CloseMenu /> : <OpenMenu />}
          </button>
        </div>
      </div>

      <nav className="hidden md:block bg-blue-950 border-t border-white/10">
        <div className="max-w-6xl mx-auto px-4">
          <Navigation className="flex items-center justify-center space-x-6 py-3 text-sm font-medium" />
        </div>
      </nav>

      <div
        className={`fixed top-0 left-0 h-full w-64 bg-blue-950/90 backdrop-blur-md shadow-lg text-white text-sm font-semibold p-6 z-50 transform transition-transform duration-300 ease-in-out ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <button
          onClick={() => setIsOpen(false)}
          className="absolute top-4 right-4 text-white"
        >
          <CloseMenu />
        </button>
        <Navigation className="space-y-5 pt-16" />
      </div>
    </header>
  );
}
