import About from "./components/About";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import Pricing from "./components/Pricing";
import Services from "./components/Services";
import TestimonialCarousel from "./components/Testimonials";

export default function Home() {
  return (
    <div className="grid items-center justify-items-center mt-16">
      <Hero />
      <About />
      <Services />
      <TestimonialCarousel />
      <Pricing />
      <Contact />
      <Footer />
    </div>
  );
}
