import Navbar from "./components/navbar/Navbar";
import Features from "./sections/features/Features";
import Hero from "./sections/hero/Hero";
import Pricing from "./sections/pricing/Pricing";
import Workflow from "./sections/workflow/Workflow";
import Testimonials from "./sections/testimonials/Testimonials";
import Footer from "./sections/footer/Footer";

function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <Features />
      <Workflow />
      <Pricing />
      <Testimonials />
      <Footer />
    </>
  );
}

export default App;
