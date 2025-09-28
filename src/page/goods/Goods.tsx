import { GoodsCard } from "./GoodsCard";

export function Goods() {
  //bg-fixed
  //bg-[url('/backGround/cccoil.svg')]
  return (
    <section
      id="Products"
      className="scroll-mt-[0px] bg-[url('/backGround/blob.svg')] bg-cover bg-center flex justify-evenly flex-wrap gap-10 p-5 pt-[100px] pb-30"
    >
      <article className="max-w-prose p-4 bg-secondary rounded-[20%]">
        <h2 className="text-2xl font-bold mb-3 md:text-5xl border-b-4 border-tercialy">Naše lahodné medy</h2>
        <p className="text-base text-primary text-xl leading-relaxed">
          Nabízíme přírodní med přímo od včelaře. V naší nabídce najdete
          květový, lipový i lesní med. Kromě medu vyrábíme také medovinu,
          propolisovou tinkturu a voskové svíčky. Vše vyrábíme tradičním
          způsobem a s důrazem na kvalitu.
        </p>
      </article>
      <GoodsCard />
    </section>
  );
}
