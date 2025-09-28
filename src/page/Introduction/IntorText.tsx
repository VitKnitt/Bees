import { Link } from "react-scroll";

export function IntroText() {
  return (
    <article
      className="
        max-w-prose p-3 sm:p-4 md:p-6 
        text-start flex flex-col justify-center self-center 
        bg-secondary bg-opacity-[80%] 
        max-h-64 sm:max-h-[100%] md:max-h-[100%]
      "
    >
      <h1 className="text-lg text-[#f4af1b] sm:text-xl md:text-5xl lg:text-7xl lg:pb-10 text-white font-bold mb-2 sm:mb-3 leading-tight md:leading-[1.2] lg:leading-[1.2] ">
        Medaři - přírodní poklady
      </h1>

      <p className="text-xs text-primary sm:text-sm md:text-base lg:text-lg text-white italic leading-relaxed">
        Objevte kouzlo našich medových produktů
      </p>
      <Link
        to="Products"
        spy={true}
        smooth={true}
        duration={500}
        className="cursor-pointer hover:text-tercialy hover:bg-secondary bg-tercialy p-3 rounded-xl max-w-36 text-center"
      >
        Produkty
      </Link>
    </article>
  );
}
