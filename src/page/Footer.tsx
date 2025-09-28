import { Link } from "react-scroll";
import logo from "../img/bees/logo1.png";

const Footer = () => {
  return (
    <footer
      id="Kontakt"
      className="scroll-mt-[70px] bg-secondary text-gray-300 py-10 border-t-4 border-tercialy text-center"
    >
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-4 gap-8">
        {/* Logo + krátký text */}
        <div>
          <img src={logo} alt="logo" className="w-16 mb-3" />
          <p className="text-sm">
            Poctivý český med přímo od včelaře. Tradice, kvalita a respekt k
            přírodě.
          </p>
        </div>

        {/* Navigace */}
        <div>
          <h3 className="text-white font-semibold mb-3">Navigace</h3>
          <ul className="space-y-2 text-sm">
            <li>
              <Link
                to="AboutUs"
                spy={true}
                smooth={true}
                duration={500}
                className="cursor-pointer hover:text-white"
              >
                O nás
              </Link>
            </li>
            <li>
              <Link
                to="Products"
                spy={true}
                smooth={true}
                duration={500}
                className="cursor-pointer hover:text-white"
              >
                Produkty
              </Link>
            </li>
            <li>
              <Link
                to="Specification"
                spy={true}
                smooth={true}
                duration={500}
                className="cursor-pointer hover:text-white"
              >
                Specifikace
              </Link>
            </li>
            <li>
              <Link
                to="Tech"
                spy={true}
                smooth={true}
                duration={500}
                className="cursor-pointer hover:text-white"
              >
                Technologie
              </Link>
            </li>
            <li>
              <Link
                to="Contact"
                spy={true}
                smooth={true}
                duration={500}
                className="cursor-pointer hover:text-white"
              >
                Kontakt
              </Link>
            </li>
          </ul>
        </div>

        {/* Kontakt */}
        <div>
          <h3 className="text-white font-semibold mb-3">Kontakt</h3>
          <ul className="space-y-2 text-sm">
            <li>Email: medar@gmail.com</li>
            <li>IČ: 115392251</li>
          </ul>
        </div>

        <div>
          <h3 className="text-white font-semibold mb-3">Adresa</h3>
          <ul className="space-y-2 text-sm">
            <li>medar s.r.o.</li>
            <li>Lidická 700/19</li>
            <li>60200 Brno</li>
          </ul>
        </div>
      </div>

      {/* spodní lišta */}
      <div className="border-t border-gray-700 mt-10 pt-4 text-center text-sm text-gray-500">
        <p>© {new Date().getFullYear()} medar Všechna práva vyhrazena.</p>
        <div className="flex flex-row justify-center items-center gap-5"></div>
      </div>
    </footer>
  );
};

export default Footer;
