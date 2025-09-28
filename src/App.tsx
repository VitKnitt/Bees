import { AboutUs } from "./page/aboutUs/AboutUs";
import { Contact } from "./page/contact form/Contact";
import { DreamTeam } from "./page/dream team/DreamTeam";
import FadeIn from "./page/FadeIn";
import Footer from "./page/Footer";
import { GallerySection } from "./page/galery/GallerySection";
import { Goods } from "./page/goods/Goods";
import Header from "./page/Header";
import { Introduction } from "./page/Introduction/Introduction";
import { Mission } from "./page/mission/Mission";
import { Quality } from "./page/quality/Quality";
import { WhyUs } from "./page/whyUs/WhyUs";

function App() {
  return (
   <div className="bg-[url('/backGround/hexagon10.svg')] bg-repeat bg-[length:6%_auto]">
      <Header />
      <FadeIn children={<Introduction />} />
      <FadeIn children={<AboutUs />} />
      <FadeIn children={<Goods />} />
      <FadeIn children={<WhyUs />} />
      <FadeIn children={<Quality />} />
      <FadeIn children={<GallerySection />} />
      <FadeIn children={<Mission />} />
      <FadeIn children={<DreamTeam />} />
      <FadeIn children={<Contact />} />

      <Footer />
    </div>
  );
}

export default App;
