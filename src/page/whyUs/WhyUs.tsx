import { WhyUsCard } from "./WhyUsCard";

export function WhyUs() {
  //bg-fixed
  //bg-[url('/backGround/cccoil.svg')]
  return (
    <section className="bg-[url('/backGround/waveDown.svg')] bg-cover flex justify-center md:justify-evenly flex-wrap gap-8 p-5 pt-32 pb-[120px]"
    id="Specification">
      <article className="max-w-prose p-4">
        <h3 className="text-secondary text-xl font-bold">
          „Naše včely se opilují v čisté přírodě a každý produkt vzniká s láskou a
          poctivou prací. Dbáme na kvalitu, ne na kvantitu – nabízíme med bez
          chemie, bez průmyslového zpracování a vždy čerstvý. Podporujete
          lokální včelaře a získáváte zdravou potravinu.“
        </h3>
      </article>
      <WhyUsCard />
    </section>
  );
}
