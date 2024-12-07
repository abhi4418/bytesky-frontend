import HeroSection from "./sections/hero/Hero";
import Header from "./components/navbar/Header";
import Navbar from "./components/navbar/Navbar";
import { FeatureSection } from "./sections/features/Feature";
import { FooterSection } from "./sections/footer/Footer";
import Testimonial from "./sections/testimonials/Testimonial";

import TeamSection from "./sections/team/TeamSection";
import FAQSection from "./sections/faq/Faq";
function App() {
  return (
    <div className="font-inter h-full w-full overflow-x-hidden">
      <Header />
      <Navbar />
      <HeroSection />
      <FeatureSection />
      <TeamSection />
      <Testimonial />
      <FAQSection />
      <FooterSection />
    </div>
  );
}

export default App;
