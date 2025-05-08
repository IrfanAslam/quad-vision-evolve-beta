
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Services from "@/components/Services";
import About from "@/components/About";
import CaseStudies from "@/components/CaseStudies";
import Testimonials from "@/components/Testimonials";
import CallToAction from "@/components/CallToAction";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-quadvis-dark text-white">
      <Navbar />
      <Hero />
      <Services />
      <About />
      <CaseStudies />
      <Testimonials />
      <CallToAction />
      <Footer />
    </div>
  );
};

export default Index;
