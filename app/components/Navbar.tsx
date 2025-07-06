"use client";
import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { HiOutlineMenu, HiOutlineX } from 'react-icons/hi';
import S3SportsArenaLogo from '@/app/assets/S3SportArenalogo.png';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMobileMenu = () => setIsOpen(!isOpen);

  return (
    <>
      <div className="flex justify-between items-center bg-neutral-50 p-4 shadow-md top-0 z-50 w-full">
        <motion.div
          initial={{ filter: "blur(10px)", opacity: 0, x: -10 }}
          animate={{ filter: "blur(0px)", opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
        >
          <Image src={S3SportsArenaLogo} alt="S3 Sports Arena Logo" width={160} height={160} />
        </motion.div>

        {/* Desktop Nav */}
        <nav className="hidden md:flex gap-6 pr-6 font-medium items-center">
          <Link className="hover:text-blue-700 transition-all cursor-pointer" href="/">Home</Link>
          <Link className="hover:text-blue-700 transition-all cursor-pointer" href="/contactus">Contact Us</Link>
          <Link className="hover:text-blue-700 transition-all cursor-pointer" href="/sports">Sports</Link>
          <Link className="hover:text-blue-700 transition-all cursor-pointer" href="/book-now">Book Now</Link>
        </nav>

        {/*  Hamburger Logic */}
        <div className="md:hidden flex items-center">
          <button onClick={toggleMobileMenu} className="text-3xl">
            {isOpen ? <HiOutlineX /> : <HiOutlineMenu />}
          </button>
        </div>
      </div>

      {/* Mobile Nav  */}
      <motion.div
        initial={{ y: -40, opacity: 0 }}
        animate={isOpen ? { y: 0, opacity: 1 } : { y: -40, opacity: 0 }}
        transition={{ type: 'spring', stiffness: 300, damping: 30 }}
        className={`md:hidden bg-neutral-50 shadow-md w-full p-4 space-y-4 z-40 absolute top-[80px] left-0 ${isOpen ? 'block' : 'hidden'}`}
      >
        <Link className="block hover:text-blue-700 transition-all" href="/" onClick={toggleMobileMenu}>Home</Link>
        <Link className="block hover:text-blue-700 transition-all" href="/contactus" onClick={toggleMobileMenu}>Contact Us</Link>
        <Link className="block hover:text-blue-700 transition-all" href="/sports" onClick={toggleMobileMenu}>Sports</Link>
        <Link className="block hover:text-blue-700 transition-all" href="/book-now" onClick={toggleMobileMenu}>Book Now</Link>
      </motion.div>
    </>
  );
};

export default Navbar;

