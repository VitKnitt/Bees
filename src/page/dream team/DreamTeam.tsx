import josef from "../../img/bees/JC.png";
import pavel from "../../img/bees/PD.png";

export function DreamTeam() {
  //bg-fixed
  //bg-[url('/backGround/cccoil.svg')]
  return (
    <section className="bg-secondary bg-cover bg-center flex flex-wrap justify-evenly gap-10 p-5 pb-20 md:w-[80%] m-auto md:rounded-xl">
  {/* Josef Čermák */}
  <div className="flex flex-col items-center text-center max-w-xs p-4 rounded-lg shadow-lg">
    <img className="h-auto p-4" src={josef} alt="Josef Čermák" />
    <p className="font-bold text-2xl">Josef Čermák</p>
    <p className="text-sm mt-2 text-xl">
      Zakladatel firmy, vášnivý včelař s více než 10 lety zkušeností. Miluje přírodu a vždy hledá způsoby, jak zlepšit život včel a kvalitu medu.
    </p>
  </div>

  {/* Pavel Doležal */}
  <div className="flex flex-col items-center text-center max-w-xs p-4 rounded-lg shadow-lg">
    <img className="h-auto p-4" src={pavel} alt="Pavel Doležal" />
    <p className="font-bold text-2xl">Pavel Doležal</p>
    <p className="text-sm mt-2 text-xl">
      Hlavní produkční mistr, odborník na zpracování medu a ekologický přístup. Rád experimentuje s tradičními recepturami a novými nápady.
    </p>
  </div>
</section>

  );
}
