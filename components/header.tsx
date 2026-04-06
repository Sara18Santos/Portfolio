"use client";

import Link from "next/link";
import { useState } from "react";
import ThemeToggle from "@/components/theme-toggle";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { href: "/about", label: "About" },
    { href: "/projects", label: "Projects" },
    { href: "/contact", label: "Contact" },
  ];

  return (
    <header className="fixed inset-x-0 top-0 z-50 bg-background/75 py-4 md:py-6 backdrop-blur-sm">
      <nav className="container mx-auto max-w-3xl px-4 md:px-6">
        <div className="flex w-full items-center justify-between">
          <Link href="/" className="font-serif text-xl md:text-2xl font-bold truncate">
            Sara Santos
          </Link>

          {/* Desktop Navigation */}
          <ul className="hidden md:flex items-center gap-6 md:gap-10 text-sm font-light text-muted-foreground">
            {navLinks.map((link) => (
              <li key={link.href} className="transition-colors hover:text-foreground">
                <Link href={link.href}>{link.label}</Link>
              </li>
            ))}
          </ul>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden flex flex-col gap-1.5 focus:outline-none"
            aria-label="Toggle menu"
            aria-expanded={isOpen}
          >
            <span
              className={`block h-0.5 w-6 bg-foreground transition-transform ${
                isOpen ? "rotate-45 translate-y-2" : ""
              }`}
            />
            <span
              className={`block h-0.5 w-6 bg-foreground transition-opacity ${
                isOpen ? "opacity-0" : ""
              }`}
            />
            <span
              className={`block h-0.5 w-6 bg-foreground transition-transform ${
                isOpen ? "-rotate-45 -translate-y-2" : ""
              }`}
            />
          </button>

          <div className="hidden md:block">
            <ThemeToggle />
          </div>
        </div>

        {/* Mobile Navigation Menu */}
        {isOpen && (
          <ul className="md:hidden flex flex-col gap-4 mt-4 pt-4 border-t border-muted">
            {navLinks.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className="block text-sm font-light text-muted-foreground hover:text-foreground transition-colors"
                  onClick={() => setIsOpen(false)}
                >
                  {link.label}
                </Link>
              </li>
            ))}
            <li className="pt-2 border-t border-muted">
              <ThemeToggle />
            </li>
          </ul>
        )}
      </nav>
    </header>
  );
}
