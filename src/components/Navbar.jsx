"use client";

import Link from "next/link";
import Image from "next/image";
import { useRouter, usePathname } from "next/navigation";
import Logo from "../../public/img/logo.svg";

const Navbar = () => {
  const router = useRouter();
  const pathname = usePathname();
  return (
    <div className="bg-gradient-to-b from-black-gray py-10 absolute w-full z-[5000]">
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
