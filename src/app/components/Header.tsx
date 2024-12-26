"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";

function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen((prevState) => !prevState);
  };

  const closeMenu = () => {
    setIsMenuOpen(false); 
  };

  return (
    <header className="p-4 flex items-center justify-between">
      {/* Logo Section */}
      <div className="flex items-center">
        <Image src="/image/brand-logo.jpg" width={50} height={50} alt="Logo" />
      </div>

      {/* Hamburger Menu */}
      <div className="flex items-center md:hidden">
        <Image
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b2/Hamburger_icon.svg/800px-Hamburger_icon.svg.png"
          width={30}
          height={30}
          alt="Menu"
          onClick={toggleMenu}
          className="cursor-pointer"
        />
      </div>

      {/* Navigation Menu */}
      <nav
        className={`${
          isMenuOpen ? "flex" : "hidden"
        } md:flex flex-col md:flex-row absolute md:static top-14 left-0 right-0 bg-white md:bg-transparent shadow-md md:shadow-none md:items-center z-50`}
      >
        <ul className="flex flex-col md:flex-row justify-center gap-5 text-lg p-4 md:p-0">
          <li>
            <Link href="/" onClick={closeMenu} className="hover:bg-yellow-400 transition-colors duration-300 p-2 rounded">
              Home
            </Link>
          </li>
          <li>
            <Link href="/about" onClick={closeMenu} className="hover:bg-yellow-400 transition-colors duration-300 p-2 rounded">
              About
            </Link>
          </li>
          <li>
            <Link href="/product" onClick={closeMenu} className="hover:bg-yellow-400 transition-colors duration-300 p-2 rounded">
              Category
            </Link>
          </li>
          <li>
            <Link href="/contact" onClick={closeMenu} className="hover:bg-yellow-400 transition-colors duration-300 p-2 rounded">
              Contact
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
