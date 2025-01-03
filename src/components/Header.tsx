"use client";
import { useState } from "react";
import Link from "next/link";
import { AlignJustify, X } from 'lucide-react';

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="bg-gray-800 p-4">
      <div className="max-w-7xl mx-auto px-4 md:px-10 flex justify-between items-center">
        
        <Link href="/" className="text-white text-2xl font-bold">
          Blog
        </Link>

        {/* Desktop Menu */}
        <div className="hidden md:flex space-x-6">
          <Link href="/" className="text-white hover:text-gray-400">
            Home
          </Link>
          <Link href="/about" className="text-white hover:text-gray-400">
            About
          </Link>
    
          <Link href="/contact" className="text-white hover:text-gray-400">
            Contact
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-white"
          onClick={toggleMenu}
        >
          {isOpen ? <X/> : <AlignJustify />}
        </button>
      </div>

      <div
        className={`fixed inset-0 bg-gray-800 bg-opacity-80 z-10  transition-transform transform  md:hidden duration-700 ${
          isOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="flex justify-end p-4">
          <button
            onClick={toggleMenu}
            className="text-white text-2xl"
          >
            <X/>
          </button>
        </div>

        <div className="flex flex-col items-center space-y-6">
          <Link href="/" className="text-white text-xl hover:text-gray-400" onClick={toggleMenu}>
            Home
          </Link>
          <Link href="/about" className="text-white text-xl hover:text-gray-400" onClick={toggleMenu}>
            About
          </Link>
          
          <Link href="/contact" className="text-white text-xl hover:text-gray-400" onClick={toggleMenu}>
            Contact
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Header;
