import { NAV_LINKS } from "@/data";
import Link from "next/link";
import React from "react";

const Header = () => {
  return (
    <header className="bg-white sticky top-0 z-50 border-b-2 border-solid border-gray-100">
      <div className="max-w-7xl mx-auto flex items-center justify-between px-6 py-4">
        <div className="text-teal-500 font-bold text-lg">Satu Momen</div>
        <nav className="hidden md:flex space-x-6 text-gray-600">
          {NAV_LINKS.map((menu) => (
            <Link
              href={menu.href}
              key={menu.key}
              className="font-medium flexCenter cursor-pointer transition-all hover:font-bold hover:text-primary"
            >
              {menu.label}
            </Link>
          ))}
        </nav>
        <button className="btn-primary-sm">Portal Pelanggan</button>
      </div>
    </header>
  );
};

export default Header;
