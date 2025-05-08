
import { useEffect } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import CaseStudiesContent from "@/components/CaseStudiesContent";
import PageTransition from "@/components/PageTransition";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";

const CaseStudiesPage = () => {
  // Scroll to top when component mounts
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <PageTransition>
      <div className="min-h-screen bg-quadvis-dark text-white">
        <Navbar />
        
        <div className="pt-24 pb-16">
          <div className="container mx-auto px-4">
            <motion.div 
              className="text-center mb-16"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <h1 className="text-4xl md:text-5xl font-bold mb-6">Our <span className="gradient-text">Case Studies</span></h1>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Explore how our solutions have delivered measurable impact and transformation for our clients across industries.
              </p>
            </motion.div>
            
            <motion.div 
              className="quad-card p-6 mb-16"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <h2 className="text-2xl font-bold mb-4">Our Approach to Projects</h2>
              <p className="text-gray-300 mb-6">
                At QuadVis Technologies, we believe in a collaborative approach to every project. We work closely with our clients to understand their unique challenges and goals, then leverage our technical expertise to deliver solutions that exceed expectations.
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
                {[
                  {
                    number: "01",
                    title: "Discovery",
                    description: "We begin with a thorough analysis of your needs and objectives."
                  },
                  {
                    number: "02",
                    title: "Design & Development",
                    description: "Our team crafts customized solutions tailored to your specific requirements."
                  },
                  {
                    number: "03",
                    title: "Deployment & Support",
                    description: "We ensure smooth implementation and provide ongoing maintenance and support."
                  }
                ].map((step, index) => (
                  <motion.div 
                    key={index} 
                    className="bg-black/40 p-6 rounded-lg border border-quadvis-blue/20 hover-scale"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.3 + (index * 0.1) }}
                  >
                    <div className="text-2xl font-bold text-quadvis-orange mb-2">{step.number}</div>
                    <h3 className="text-xl font-semibold mb-2">{step.title}</h3>
                    <p className="text-gray-400">{step.description}</p>
                  </motion.div>
                ))}
              </div>
            </motion.div>
            
            <CaseStudiesContent />
            
            <motion.div 
              className="mt-16 text-center"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.8 }}
            >
              <h3 className="text-2xl font-bold mb-4">Looking for Similar Results?</h3>
              <p className="text-gray-300 mb-6 max-w-2xl mx-auto">
                Let's discuss how we can help you achieve your business objectives with our technology solutions.
              </p>
              <Button className="quad-button">Start Your Project</Button>
            </motion.div>
          </div>
        </div>
        
        <Footer />
      </div>
    </PageTransition>
  );
};

export default CaseStudiesPage;
