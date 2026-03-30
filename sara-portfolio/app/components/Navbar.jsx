"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import { assets } from "@/assets/assets";

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [isDark, setIsDark] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const toggleTheme = () => {
    setIsDark((d) => {
      document.documentElement.classList.toggle("dark", !d);
      return !d;
    });
  };

  const links = [
    { label: "Home", href: "#home" },
    { label: "About me", href: "#about" },
    { label: "Projects", href: "#projects" },
    { label: "Contact", href: "#contact" },
  ];

  return (
    <>
      <nav
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          right: 0,
          zIndex: 50,
          transition: "all 0.3s ease",
          backgroundColor: scrolled
            ? "rgba(255,255,255,0.85)"
            : "transparent",
          backdropFilter: scrolled ? "blur(12px)" : "none",
          borderBottom: scrolled ? "1px solid rgba(0,0,0,0.07)" : "none",
          padding: "0 2rem",
          height: "64px",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
        }}
        className="dark:bg-transparent"
      >
        {/* Logo */}
        <a href="#home" style={{ display: "flex", alignItems: "center" }}>
          <Image
            src={assets.logo}
            alt="Sara Santos"
            width={112}
            height={32}
            className="w-28 cursor-pointer dark:hidden"
          />
          <Image
            src={assets.logo_dark}
            alt="Sara Santos"
            width={112}
            height={32}
            className="w-28 cursor-pointer hidden dark:block"
          />
        </a>

        {/* Desktop links */}
        <ul
          style={{
            display: "flex",
            gap: "2rem",
            listStyle: "none",
            margin: 0,
            padding: 0,
          }}
          className="hidden md:flex"
        >
          {links.map(({ label, href }) => (
            <li key={href}>
              <a
                href={href}
                style={{
                  fontSize: "14px",
                  fontWeight: 500,
                  letterSpacing: "0.02em",
                  textDecoration: "none",
                  color: "inherit",
                  opacity: 0.75,
                  transition: "opacity 0.2s",
                  position: "relative",
                }}
                onMouseEnter={(e) => (e.currentTarget.style.opacity = 1)}
                onMouseLeave={(e) => (e.currentTarget.style.opacity = 0.75)}
              >
                {label}
              </a>
            </li>
          ))}
        </ul>

        {/* Right actions */}
        <div style={{ display: "flex", alignItems: "center", gap: "12px" }}>
          {/* Theme toggle */}
          <button
            onClick={toggleTheme}
            style={{
              background: "none",
              border: "none",
              cursor: "pointer",
              padding: "4px",
              display: "flex",
              alignItems: "center",
              opacity: 0.7,
            }}
            aria-label="Toggle theme"
          >
            <Image
              src={isDark ? assets.sun_icon : assets.moon_icon}
              alt="theme"
              width={20}
              height={20}
            />
          </button>

          {/* CTA button — desktop */}
          <a
            href="#contact"
            className="hidden md:flex"
            style={{
              display: "flex",
              alignItems: "center",
              gap: "6px",
              fontSize: "13px",
              fontWeight: 500,
              textDecoration: "none",
              padding: "8px 18px",
              borderRadius: "100px",
              border: "1px solid currentColor",
              opacity: 0.85,
              color: "inherit",
              transition: "opacity 0.2s, background 0.2s",
              whiteSpace: "nowrap",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.opacity = 1;
              e.currentTarget.style.background = "rgba(0,0,0,0.05)";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.opacity = 0.85;
              e.currentTarget.style.background = "transparent";
            }}
          >
            Contact me
            <Image
              src={assets.arrow_icon}
              alt=""
              width={12}
              height={12}
              className="dark:hidden"
            />
            <Image
              src={assets.arrow_icon_dark}
              alt=""
              width={12}
              height={12}
              className="hidden dark:block"
            />
          </a>

          {/* Hamburger — mobile */}
          <button
            className="md:hidden"
            onClick={() => setMenuOpen((o) => !o)}
            style={{
              background: "none",
              border: "none",
              cursor: "pointer",
              padding: "4px",
              display: "flex",
              alignItems: "center",
            }}
            aria-label="Menu"
          >
            <Image
              src={menuOpen ? assets.close_black : assets.menu_black}
              alt="menu"
              width={22}
              height={22}
              className="dark:hidden"
            />
            <Image
              src={menuOpen ? assets.close_white : assets.menu_white}
              alt="menu"
              width={22}
              height={22}
              className="hidden dark:block"
            />
          </button>
        </div>
      </nav>

      {/* Mobile drawer */}
      {menuOpen && (
        <div
          className="md:hidden"
          style={{
            position: "fixed",
            top: "64px",
            left: 0,
            right: 0,
            zIndex: 40,
            background: "rgba(255,255,255,0.97)",
            backdropFilter: "blur(12px)",
            borderBottom: "1px solid rgba(0,0,0,0.08)",
            padding: "1.5rem 2rem 2rem",
          }}
        >
          <ul style={{ listStyle: "none", margin: 0, padding: 0 }}>
            {links.map(({ label, href }) => (
              <li key={href} style={{ borderBottom: "1px solid rgba(0,0,0,0.06)" }}>
                <a
                  href={href}
                  onClick={() => setMenuOpen(false)}
                  style={{
                    display: "block",
                    padding: "14px 0",
                    fontSize: "15px",
                    fontWeight: 500,
                    textDecoration: "none",
                    color: "inherit",
                  }}
                >
                  {label}
                </a>
              </li>
            ))}
          </ul>
          <a
            href="#contact"
            onClick={() => setMenuOpen(false)}
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: "6px",
              marginTop: "1.25rem",
              fontSize: "14px",
              fontWeight: 500,
              textDecoration: "none",
              padding: "10px 22px",
              borderRadius: "100px",
              border: "1px solid #111",
              color: "#111",
            }}
          >
            Contact me
            <Image src={assets.arrow_icon} alt="" width={12} height={12} />
          </a>
        </div>
      )}
    </>
  );
};

export default Navbar;