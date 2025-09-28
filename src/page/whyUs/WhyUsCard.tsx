import bee from "../../img/bees/icons/bee.gif";
import eco from "../../img/bees/icons/eco.gif";
import jar from "../../img/bees/icons/jar.gif";

export function WhyUsCard() {
  const card = [
  {
    title: "Med z čisté přírody",
    description:
      "Naše včely opilují v neporušené přírodě a každý med vzniká s láskou a poctivou prací. Bez chemie, bez průmyslového zpracování, vždy čerstvý.",
    path: bee,
  },
  {
    title: "Lokální kvalita",
    description:
      "Podporujete lokální včelaře a získáváte zdravou potravinu vyrobenou s péčí a respektem k přírodě. Dbáme na kvalitu, ne na kvantitu.",
    path: eco,
  },
  {
    title: "Produkty s láskou",
    description:
      "Každý náš produkt vzniká poctivě a s láskou – od medu až po další včelí produkty, které přinášejí zdraví a radost do vaší kuchyně.",
    path: jar,
  },
];


  return (
    <section
      aria-label="Features"
      className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
    >
      {/*  <article key={index} className="border-t-4 border-secondary rounded-xl overflow-hidden hover:shadow-lg hover:shadow-shadow hover:translate-y-[-10px] transition-transform duration-300" */}
      {card.map((feature, index) => (
        <article key={index} className="flex flex-col justify-center items-center align-center w-[300px] bg-primary rounded-xl shadow-2xl shadow-shadow">
          <img
            src={feature.path}
            alt="Product"
            className="w-[10rem] h-auto object-cover"
          />
          <div className="p-5">
            <h2 className="text-xl text-secondary border-b-2 border-secondary">{feature.title}</h2>
            <p className="mt-2 text-secondary">{feature.description}</p>
          </div>
        </article>
      ))}
    </section>
  );
}
