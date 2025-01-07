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
    <nav className='bg-gray-800 p-4'>
      <div className='max-w-7xl mx-auto  md:px-14 flex justify-between items-center'>
        <Link href='/' className='text-white text-2xl font-bold'>
          AI Brainwave
        </Link>

        {/* Desktop Menu */}
        <div className='hidden md:flex space-x-6'>
          <Link href='/' className='text-white hover:text-gray-400'>
            Home
          </Link>
          <Link href='/about' className='text-white hover:text-gray-400'>
            About
          </Link>

          <Link href='/contact' className='text-white hover:text-gray-400'>
            Contact
          </Link>
        </div>

        <button
          className='md:hidden text-white'
          onClick={toggleMenu}
        >
          {isOpen ? (
            <X className='w-6 h-6 transform transition-transform duration-500' />
          ) : (
            <AlignJustify className='w-6 h-6 transform transition-transform duration-500' />
          )}
        </button>
      </div>

      {/* Collapsible Menu */}
      <div
        className={`flex flex-col bg-gray-800 overflow-hidden transition-all duration-1000 ease-in-out ${
          isOpen ? 'max-h-60' : 'max-h-0'
        }`}
      >
        <div className='text-md px-4 gap-y-2 mt-3 space-y-2'>
          <Link href='/' className='block text-white hover:text-gray-400'>
            Home
          </Link>
          <Link href='/about' className='block text-white hover:text-gray-400'>
            About
          </Link>
          <Link
            href='/contact'
            className='block text-white hover:text-gray-400'
          >
            Contact
          </Link>
        </div>
      </div>
    </nav>
  )
};

export default Header;
