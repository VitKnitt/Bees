import bee1 from "../../img/bees/bee1.jpg";
import bee2 from "../../img/bees/bee2.jpg";

export function Quality() {
  return (
   <section
  className="bg-secondary bg-cover bg-center p-5 pb-20 flex flex-col lg:flex-row pt-[200px] lg:justify-center gap-10"
  id="Tech"
>
  <div className="-mt-20 flex-1 flex flex-col gap-5 lg:max-w-lg">
    <p className="text-2xl leading-relaxed">
      „Náš med je 100% přírodní, bez přidaného cukru a chemických látek.
      Každá šarže je pravidelně testována a splňuje české i evropské normy
      kvality. Včely se staráme s respektem k přírodě – bez zbytečné chemie
      a s důrazem na jejich zdraví.“
    </p>
    <p className="text-lg leading-relaxed text-primary">
      Včely chováme s respektem k přírodě – bez chemie a s důrazem na jejich zdraví.
    </p>
  </div>

  <div className="-mt-20">
    <img
      className="rounded-lg shadow-lg lg:w-[30rem] object-cover border-4 border-tercialy"
      src={bee2}
      alt="bee on flower close"
    />
  </div>
</section>

  );
}
