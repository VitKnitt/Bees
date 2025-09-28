import GalleryPhoto from "./GalleryPhoto";

export function GallerySection() {
  //bg-fixed
  //bg-[url('/backGround/cccoil.svg')]
  return (
    <section className="bg-[url('/backGround/waveUp.svg')] bg-cover bg-center flex justify-evenly flex-wrap gap-10 p-5 pb-20"
    id="Tech">
      <GalleryPhoto />
    </section>
  );
}
