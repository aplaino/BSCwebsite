import React, { useState, useEffect } from "react";
import { Link, NavLink } from "react-router-dom";
import { RxHamburgerMenu } from "react-icons/rx";
import { FaFacebook, FaInstagram } from "react-icons/fa";

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const closeMobileMenu = () => {
    setMobileMenuOpen(false);
  };

  return (
    <header
      className={`h-20 w-screen px-4
        flex justify-center items-center
        font-primary uppercase text-xl
        fixed top-0 z-100 transition-all duration-300
        ${scrolled
          ? "bg-beige-primary/85 backdrop-blur-md border-b border-beige-secondary/60 shadow-sm"
          : "bg-beige-primary border-b-2 border-beige-secondary"
        }`}
    >
      <div
        className="flex justify-between items-center h-full
      w-full max-w-300"
      >
        <Link to="/" className="flex justify-center items-center gap-3 w-60">
          <img src="/logo.svg" className="size-18" alt="site-logo" style={{ imageRendering: "optimizeQuality" as React.CSSProperties["imageRendering"] }} />
          <h1 className="">buster's sea cove</h1>
        </Link>

        {/* --- NAV BAR HIDDEN --- **/}
        <button
          type="button"
          aria-label="Open navigation menu"
          aria-expanded={mobileMenuOpen}
          className="block md:hidden cursor-pointer"
          onClick={() => setMobileMenuOpen((prev) => !prev)}
        >
          <RxHamburgerMenu className="cursor-pointer" />
        </button>

        <div
          className={`fixed inset-0 z-110 md:hidden transition-opacity duration-300 ${
            mobileMenuOpen
              ? "pointer-events-auto opacity-100"
              : "pointer-events-none opacity-0"
          }`}
        >
          <button
            type="button"
            aria-label="Close navigation menu"
            className="absolute inset-0 bg-black/25"
            onClick={closeMobileMenu}
          />
          <div
            className={`absolute top-0 right-0 h-screen w-66 bg-beige-secondary
            transform transition-transform duration-300
            flex justify-center items-center ${
              mobileMenuOpen ? "translate-x-0" : "translate-x-full"
            }`}
          >
            <nav className="h-full w-full flex flex-col gap-10 justify-center items-center text-2xl">
              <Link
                to="/menus/restaurant"
                className="hover:text-beige-primary duration-300 py-2"
                onClick={closeMobileMenu}
              >
                menu
              </Link>
              <Link
                to="/catering"
                className="hover:text-beige-primary duration-300 py-2"
                onClick={closeMobileMenu}
              >
                catering
              </Link>
              <Link
                to="/schedule"
                className="hover:text-beige-primary duration-300 py-2"
                onClick={closeMobileMenu}
              >
                schedule
              </Link>
              <a
                href="https://sites.ambassador.ai/?s=bustercommercecourt"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-beige-primary duration-300 py-2"
                onClick={closeMobileMenu}
              >
                order
              </a>
              <Link
                to="/about"
                className="hover:text-beige-primary duration-300 py-2"
                onClick={closeMobileMenu}
              >
                about
              </Link>
              <Link
                to="/contact"
                className="hover:text-beige-primary duration-300 py-2"
                onClick={closeMobileMenu}
              >
                contact
              </Link>
              <a
                href="https://www.facebook.com/bustersseacove/"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-beige-primary duration-300 py-2 flex justify-center items-center"
                onClick={closeMobileMenu}
              >
                <FaFacebook />
              </a>
              <a
                href="https://www.instagram.com/bustersseacove/?hl=en"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-beige-primary duration-300 py-2 flex justify-center items-center"
                onClick={closeMobileMenu}
              >
                <FaInstagram />
              </a>
            </nav>
          </div>
        </div>

        {/* --- NAV BAR EXTENDED --- **/}
        <nav
          className="justify-around items-center w-120
        hidden md:flex "
        >
          <NavLink
            to="/menus/restaurant"
            className={({ isActive }) =>
              isActive ? "underline text-blue-secondary" : undefined
            }
          >
            menu
          </NavLink>
          <NavLink
            to="/catering"
            className={({ isActive }) =>
              isActive ? "underline text-blue-secondary" : undefined
            }
          >
            catering
          </NavLink>
          <NavLink
            to="/schedule"
            className={({ isActive }) =>
              isActive ? "underline text-blue-secondary" : undefined
            }
          >
            schedule
          </NavLink>
          <a
            href="https://sites.ambassador.ai/?s=bustercommercecourt"
            target="_blank"
            rel="noopener noreferrer"
          >
            order
          </a>
          <NavLink
            to="/about"
            className={({ isActive }) =>
              isActive ? "underline text-blue-secondary" : undefined
            }
          >
            about
          </NavLink>
          <NavLink
            to="/contact"
            className={({ isActive }) =>
              isActive ? "underline text-blue-secondary" : undefined
            }
          >
            contact
          </NavLink>
          <a
            href="https://www.facebook.com/bustersseacove/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src="/facebook.svg" className="size-6" alt="facebook" />
          </a>
          <a
            href="https://www.instagram.com/bustersseacove/?hl=en"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src="/instagram.svg" className="size-6" alt="instagram" />
          </a>
        </nav>
      </div>
    </header>
  );
}
