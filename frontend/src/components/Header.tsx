import { Link, NavLink } from "react-router-dom";
import { RxHamburgerMenu } from "react-icons/rx";
import { FaFacebook, FaInstagram } from "react-icons/fa";

export default function Header() {
  return (
    <header
      className="h-20 w-screen p-4
        bg-beige-primary border-b-2 border-beige-secondary
        flex justify-center items-center
        font-primary uppercase text-xl
        fixed top-0 z-100
        "
    >
      <div
        className="flex justify-between items-center h-full
      w-full max-w-300"
      >
        <Link to="/" className="flex justify-center items-center gap-3 w-60">
          <img src="./logo.svg" className="size-18" alt="site-logo" />
          <h1 className="">buster's sea cove</h1>
        </Link>

        {/* --- NAV BAR HIDDEN --- **/}
        <button className="block md:hidden group">
          <RxHamburgerMenu className="cursor-pointer" />

          <div
            className="absolute top-0 -right-full opacity-0 h-screen w-66 bg-beige-secondary
          transform transition-all duration-300
          group-focus-within:right-0 group-focus-within:opacity-100
          flex justify-center items-center"
          >
            <nav className="h-full w-full flex flex-col gap-10 justify-center items-center text-2xl">
              <Link to="/menus/catering" className="hover:text-beige-primary duration-300 py-2">
                menus
              </Link>
              <Link
                to="/catering"
                className="hover:text-beige-primary duration-300 py-2"
              >
                catering
              </Link>
              <a
                href="https://sites.ambassador.ai/?s=busterscommissary"
                target="_blank"
                className="hover:text-beige-primary duration-300 py-2"
              >
                order
              </a>
              <Link
                to="/aboutus"
                className="hover:text-beige-primary duration-300 py-2"
              >
                about
              </Link>
              <Link
                to="/contact"
                className="hover:text-beige-primary duration-300 py-2"
              >
                contact
              </Link>
              <a
                href="https://www.facebook.com/bustersseacove/"
                target="_blank"
                className="hover:text-beige-primary duration-300 py-2 flex justify-center items-center"
              >
                <FaFacebook />
              </a>
              <a
                href="https://www.facebook.com/bustersseacove/"
                target="_blank"
                className="hover:text-beige-primary duration-300 py-2 flex justify-center items-center"
              >
                <FaInstagram/>
              </a>
            </nav>
          </div>
        </button>

        {/* --- NAV BAR EXTENDED --- **/}
        <nav
          className="justify-around items-center w-100 
        hidden md:flex "
        >
          <NavLink
            to="menus/catering"
            className={({ isActive }) =>
              isActive ? "underline text-blue-secondary" : undefined
            }
          >
            menus
          </NavLink>
          <NavLink
            to="catering"
            className={({ isActive }) =>
              isActive ? "underline text-blue-secondary" : undefined
            }
          >
            catering
          </NavLink>
          <a
            href="https://sites.ambassador.ai/?s=busterscommissary"
            target="_blank"
          >
            order
          </a>
          <NavLink
            to="about"
            className={({ isActive }) =>
              isActive ? "underline text-blue-secondary" : undefined
            }
          >
            about
          </NavLink>
          <NavLink
            to="contact"
            className={({ isActive }) =>
              isActive ? "underline text-blue-secondary" : undefined
            }
          >
            contact
          </NavLink>
          <a href="https://www.facebook.com/bustersseacove/" target="_blank">
            <img src="./facebook.svg" className="size-6" alt="facebook" />
          </a>
          <a
            href="https://www.instagram.com/bustersseacove/?hl=en"
            target="_blank"
          >
            <img src="./instagram.svg" className="size-6" alt="instagram" />
          </a>
        </nav>
      </div>
    </header>
  );
}
