import { FeatureSection } from "./sections/features/Feature";
import { FooterSection } from "./sections/footer/Footer";
import HeroSection from "./sections/hero/Hero";

function App() {
  return (
    <div className="h-full w-full overflow-x-hidden">
    <HeroSection />
    <FeatureSection />
    <FooterSection />
    </div>
  )
}

export default App;
