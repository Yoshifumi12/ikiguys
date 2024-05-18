import AboutSection from "./components/about";
import Carousel from "./components/carousel";
import { Footer } from "./components/footer";
import { Navbar } from "./components/navbar";
import WelcomeSection from "./components/welcome";
import { carouselImages } from "./data/carouselData";

export default function Home() {
  return (
    <>
      <Navbar />
      <WelcomeSection/>
      <AboutSection/>
      <Carousel slides={carouselImages}/>
      <Footer/>
    </>
  );
}
