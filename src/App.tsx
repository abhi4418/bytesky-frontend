import Header from "./components/navbar/Header";
import Navbar from "./components/navbar/Navbar";
import HeroSection from "./sections/hero/Hero";
import Testimonial from "./sections/testimonials/Testimonial";

function App() {
  return (
    <div>
      <Header />
      <Navbar />
      <HeroSection />
      <Testimonial/>
    </div>
  );
}

export default App;
