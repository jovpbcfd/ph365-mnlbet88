"use client";

import Link from "next/link";
import { useState } from "react";
import { CloseMenu, OpenMenu } from "./icons";
import Navigation from "./navigation";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <header className="bg-gradient-to-r from-blue-900 to-blue-700">
      <div className="max-w-[1200px] mx-auto">
        <div className="flex items-center justify-between p-2 lg:px-0 lg:py-3">
          <div className="flex items-center space-x-2">
            <Link href="#" className="text-white">
              PH365
            </Link>
          </div>
          <div className="flex items-center space-x-4">
            <div className="self-center md:hidden">
              <button onClick={() => setIsOpen(!isOpen)} className="text-white">
                {isOpen ? <CloseMenu /> : <OpenMenu />}
              </button>
            </div>
            <div className="hidden md:flex space-x-2">
              <Link
                href="#"
                className="bg-[#FE3265] hover:bg-[#FE3265]/90 w-[100px] text-center text-white px-4 py-2 rounded-full text-sm font-semibold"
              >
                Log In
              </Link>
              <Link
                href="#"
                className="bg-[#FCD000] hover:bg-[#FCD000]/90 w-[100px] text-center text-white px-4 py-2 rounded-full text-sm font-semibold"
              >
                Sign Up
              </Link>
            </div>
          </div>
        </div>
        <div
          className={`md:hidden fixed top-0 left-0 h-full w-64 bg-blue-950 text-white text-sm font-semibold p-6 z-50 transform transition-transform duration-300 ease-in-out ${
            isOpen ? "translate-x-0" : "-translate-x-full"
          }`}
        >
          <Navigation className="space-y-4 pt-12" />
        </div>
      </div>
      <div className="bg-blue-950">
        <nav className="hidden md:block max-w-[1200px] mx-auto text-white text-sm font-semibold px-6">
          <Navigation className="flex items-center justify-center space-x-6 py-4" />
        </nav>
      </div>
    </header>
  );
}
