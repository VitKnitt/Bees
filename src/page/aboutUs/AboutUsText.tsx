import { Link } from "react-scroll";

export function AboutUsText() {
  return (
    <article className="max-w-prose">
      <p>Včelí poklady</p>
      <h2 className="md:text-3xl lg:text-5xl text-tercialy pb-4 text-secondaryFont font-bold mb-3 border-b-4 border-tercialy">Objevte kouzlo přírodních produktů</h2>
      <p className="text-base md:text-xl text-secondaryFont pb-4 leading-relaxed border-b-4 border-tercialy max-w-[70%]">
        S námi zažijete sílu medu a jeho přínos pro zdraví.
      </p>
       <Link
              to="Contact"
              spy={true}
              smooth={true}
              duration={500}
              className="cursor-pointer hover:text-tercialy hover:bg-secondary bg-tercialy p-3 rounded-xl max-w-36 text-center"
            >
              Napište nám
            </Link>
    </article>
  );
}
