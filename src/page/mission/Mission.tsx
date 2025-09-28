export function Mission() {
  //bg-fixed
  //bg-[url('/backGround/cccoil.svg')]
  return (
    <section className="relative bg-[url('/backGround/polygon.svg')] bg-cover bg-center p-5 pt-[100px] pb-20 flex flex-col items-center gap-10">

  <p className="text-secondary text-lg md:text-3xl max-w-3xl text-center leading-relaxed">
    „Naší misí je přinášet na stůl poctivý český med, který chutná stejně dobře jako za dob našich dědečků. Věříme, že spojení tradice a lásky k přírodě dává našemu medu jedinečný charakter.“
  </p>

  <ul className="text-secondary list-disc list-inside space-y-2 text-center md:text-left max-w-2xl text-lg">
    <li><span className="font-semibold">Poctivost:</span> žádný cukr, jen čistý med.</li>
    <li><span className="font-semibold">Tradice:</span> rodinná včelařská zkušenost.</li>
    <li><span className="font-semibold">Příroda:</span> respekt ke včelám a okolí.</li>
    <li><span className="font-semibold">Péče:</span> každý zákazník je pro nás důležitý.</li>
  </ul>
</section>

  );
}
