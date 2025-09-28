import beeKeeper from "../../img/bees/beeKeeper.jpg"
import food2 from "../../img/bees/food2.jpg"
import { AboutUsText } from "./AboutUsText";

export function AboutUs() {
  return (
   <section
  id="AboutUs"
  className="scroll-mt-[70px] bg-secondary bg-cover bg-center bg-opacity-[90%] 
  grid grid-cols-1 md:grid-cols-2 md:grid-rows-2
  md:w-[80%] m-auto md:rounded-xl gap-10 px-5 pt-32 lg:pl-20 pb-32"
>
  <AboutUsText />
  
  <img
    src={food2}
    alt="honey flask"
    className="max-w-[470px] w-full h-auto rounded-lg shadow-md md:row-span-2"
  />
  
  <img
    src={beeKeeper}
    alt="honey flask"
    className="max-w-[500px] w-full h-auto rounded-lg shadow-md"
  />
</section>

  );
}
