import HeroSection from "./sections/hero/Hero";
import Header from "./components/navbar/Header";
import Navbar from "./components/navbar/Navbar";
import { FeatureSection } from "./sections/features/Feature";
import { FooterSection } from "./sections/footer/Footer";
import Testimonial from "./sections/testimonials/Testimonial";
function App() {
  return (
    <div className="font-inter h-full w-full overflow-x-hidden">
      <Header />
      <Navbar />
      <HeroSection />
      <FeatureSection />
      <Testimonial />
      <FooterSection />
    </div>
  );
}

export default App;
