"use client";
import { assets } from "@/assets/assets";
import Image from "next/image";
import Link from "next/link";

const links = [
    {label: "Home", href: "#home"},
    {label: "About", href: "#about"},
    {label: "Projects", href: "#projects"},
    {label: "Contact", href: "#contact"}
]
const Navbar = () => {
  return (
      <nav className="w-full fixed px-5 lg:px-8 xl:px-[8%] py-4 flex items-center justify-between z-50">
        <Link href="#home" className="flex items-center">
          <Image
            src={assets.logo}
            alt="Logo"
            className="w-28 cursor-pointer mr-14"
          />
        </Link>
        <ul className="hidden md:flex items-center gap-6 lg:gap-8 rounded-full px-12 py-3">
          {links.map((link) => (
            <li key={link.href}>
              <Link href={link.href}>{link.label}</Link>
            </li>
          ))}
        </ul>

        <div>
          <Link
            href="#contact"
            className="hidden lg:flex items-center gap-3 px-10 py-2.5 border border-gray-500 rounded-full ml-4"
          >
            Contact me
            <Image src={assets.arrow_icon} alt="Arrow Icon" className="w-3" />
          </Link>
        </div>
      </nav>
  );
};

export default Navbar;