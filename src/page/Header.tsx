import { useState } from "react";
import { Link } from "react-scroll";
import { Menu, X } from "lucide-react";
import logo from '../img/bees/logo1.png'

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const menuItems = [
    { to: "AboutUs", label: "O nás" },
    { to: "Products", label: "Produkty" },
    { to: "Specification", label: "Specifikace" },
    { to: "Tech", label: "Technologie" },
    { to: "Contact", label: "Kontakt" },
  ];

  return (
    <header className="fixed top-0 z-10 flex h-[70px] w-full items-center justify-between bg-primary px-6 md:px-12 shadow opacity-95">
      {/* Logo */}
      <img src={logo} alt="logo" className="w-[60px]" />

      {/* Desktop menu */}
      <ul className="hidden md:flex gap-6">
        {menuItems.map(({ to, label }) => (
          <Link
            key={to}
            activeClass="active"
            className="cursor-pointer text-secondary transition-colors duration-300 hover:bg-secondary hover:text-tercialy [&.active]:bg-secondary [&.active]:text-tercialy px-2 py-1 rounded"
            to={to}
            spy={true}
            smooth={true}
            duration={500}
          >
            {label}
          </Link>
        ))}
      </ul>

      {/* Hamburger button */}
      <button
        className="md:hidden flex items-center justify-center"
        onClick={() => setIsOpen(!isOpen)}
      >
        {isOpen ? <X size={28} /> : <Menu size={28} />}
      </button>

      {/* Mobile menu (overlay) */}
      {isOpen && (
        <div className="absolute top-[70px] left-0 w-full bg-background flex flex-col items-center gap-4 py-6 shadow-md md:hidden">
          {menuItems.map(({ to, label }) => (
            <Link
              key={to}
              activeClass="active"
              className="cursor-pointer text-primaryFont transition-colors duration-300 hover:text-primary [&.active]:bg-primary [&.active]:text-secondaryFont px-4 py-2 rounded"
              to={to}
              spy={true}
              smooth={true}
              duration={500}
              onClick={() => setIsOpen(false)}
            >
              {label}
            </Link>
          ))}
        </div>
      )}
    </header>
  );
};

export default Header;
