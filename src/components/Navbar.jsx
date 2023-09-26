"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import Logo from "../../public/img/logo.svg";

const Navbar = () => {
  const [isNavOpen, setIsNavOpen] = useState(false);

  return (
    <div className="bg-gradient-to-b from-black-gray py-10 absolute w-full z-[5000]">
      {/* Mobile menu */}
      <section className="MOBILE-MENU flex md:hidden z-[5000]">
        <div className="flex items-center justify-between w-full px-10">
          <Link href="/">
            <Image src={Logo} height={56} width={100} />
          </Link>
          <div
            className="HAMBURGER-ICON space-y-2 cursor-pointer"
            onClick={() => setIsNavOpen((prev) => !prev)}
          >
            <span className="block h-0.5 w-8 rounded animate-pulse bg-gold"></span>
            <span className="block h-0.5 w-8 rounded animate-pulse bg-gold"></span>
            <span className="block h-0.5 w-8 rounded animate-pulse bg-gold"></span>
          </div>
        </div>

        <div
          className={
            isNavOpen
              ? "showMenuNav transition-all duration-700 ease-in"
              : "hideMenuNav"
          }
        >
          <div
            className="absolute top-6 right-2 p-8 cursor-pointer"
            onClick={() => setIsNavOpen(false)}
          >
            <svg
              className="h-8 w-8 text-white"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <line x1="18" y1="6" x2="6" y2="18" />
              <line x1="6" y1="6" x2="18" y2="18" />
            </svg>
          </div>
          <ul className="font-inter flex flex-col items-center justify-between text-center min-h-[250px] w-full">
            <Image src={Logo} height={140} width={204} className=" mb-10" />
            <li className="text-white border-y border-gold uppercase w-full py-8">
              <Link href="/">Acceuil</Link>
            </li>
            <li className="text-white border-b border-gold uppercase w-full py-8">
              <Link target="_blank" href="#">
                Réservez
              </Link>
            </li>
            <li className="text-white border-b border-gold uppercase w-full py-8">
              <Link href="#about">à propos</Link>
            </li>
            <li className="text-white border-b border-gold uppercase w-full py-8">
              <Link href="#contact">contact</Link>
            </li>
            {/* <li className="flex items-center mt-11">
              <Link href="/">
                <Image
                  src={french}
                  className="w-9 mr-5"
                  alt="icon french flag"
                />
              </Link>
              <Link href="/">
                <Image src={german} className="w-9" alt="icon german flag" />
              </Link>
            </li> */}
          </ul>
        </div>
      </section>

      {/* Dekstop menu */}
      <ul className=" hidden text-white font-inter md:flex items-center font-medium uppercase justify-around mx-auto container max-w-7xl px-20">
        <li>
          <Link
            href="/"
            className="hover:text-gold transition-all duration-300 ease-in-out "
          >
            Acceuil
          </Link>
        </li>
        <li>
          <Link
            target="_blank"
            href="#"
            className="hover:text-gold transition-all duration-300 ease-in-out"
          >
            Réservez
          </Link>
        </li>
        <li>
          <Link href="/">
            <Image src={Logo} height={100} width={164} />
          </Link>
        </li>
        <li>
          <Link
            href="#about"
            className="hover:text-gold transition-all duration-300 ease-in-out"
          >
            à propos
          </Link>
        </li>
        <li>
          <Link
            href="#contact"
            className="hover:text-gold transition-all duration-300 ease-in-out"
          >
            Contact
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default Navbar;
