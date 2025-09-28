import kvet from "../../img/bees/medkvet.jpg";
import les from "../../img/bees/medLes.png";
import lipa from "../../img/bees/medlipa.jpg";


export function GoodsCard() {
  const card = [
    {
      title: "Květový med",
      description1: "Jemný a výživný med.",
      path: kvet,
    },
    {
      title: "Lesní med",
      description1: "Intenzivní chuť přírody.",
      path: les,
    },
    {
      title: "Lipový med",
      description1: "svěží chuť, pomáhá při nachlazení.",
      path: lipa,
    },
  ];

  return (
    <section
      aria-label="Features"
      className="flex flex-wrap gap-6 justify-evenly"
    >
      {/*  <article key={index} className="border-t-4 border-secondary rounded-xl overflow-hidden hover:shadow-lg hover:shadow-shadow hover:translate-y-[-10px] transition-transform duration-300" */}
      {card.map((feature, index) => (
        <article
          key={index}
          className="border-8 border-tercialy bg-secondary bg-opacity-[90%] 
          shadow-md shadow-shadow rounded-xl overflow-hidden 
          hover:shadow-lg hover:shadow-shadow hover:translate-y-[-10px] 
          transition-transform duration-300 sm:w-[300px] w-[250px]"
        >
          <img
            src={feature.path}
            alt="Product"
            className="w-full h-40 object-cover"
          />
          <div className="p-5">
            <h2 className="text-2xl">{feature.title}</h2>
            <ul>
              <li className="mt-2 text-xl">{feature.description1}</li>
            </ul>
          </div>
        </article>
      ))}
    </section>
  );
}
