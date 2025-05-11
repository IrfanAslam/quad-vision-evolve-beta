
import { useEffect } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import AboutContent from "@/components/AboutContent";
import PageTransition from "@/components/PageTransition";
import { Button } from "@/components/ui/button";
import { Users, BookOpen, Star, Calendar } from "lucide-react";
import { useTheme } from "@/hooks/use-theme";

const About = () => {
  const { theme } = useTheme();

  // Scroll to top when component mounts
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <PageTransition>
      <div className={`min-h-screen bg-quadvis-dark ${theme === 'dark' ? 'bg-gradient-to-b from-quadvis-dark to-black' : 'bg-gradient-to-b from-quadvis-light to-gray-300'}`}>
        <Navbar />
        
        <div className="pt-24 pb-16">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h1 className="text-4xl md:text-5xl font-bold mb-6">About <span className="gradient-text">QuadVis</span></h1>
              <p className="text-xl max-w-3xl mx-auto">
                Transforming digital landscapes through innovation, creativity, and technical excellence.
              </p>
            </div>
            
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-20">
              <div>
                <h2 className="text-3xl font-bold mb-6">Our Story</h2>
                <p className={`mb-4 ${theme === 'dark' ? 'text-gray-300' : 'text-gray-500'}`}>
                  Founded in 2023, QuadVis Technologies emerged from a shared vision to democratize advanced visualization and development technologies, making them accessible to businesses of all sizes.
                </p>
                <p className={`mb-4 ${theme === 'dark' ? 'text-gray-300' : 'text-gray-500'}`}>
                  Our founders, with over a decade of experience in software development and digital transformation, recognized a gap in the market for truly client-focused technology solutions that prioritize both innovation and usability.
                </p>
                <p className={`mb-4 ${theme === 'dark' ? 'text-gray-300' : 'text-gray-500'}`}>
                  The name "QuadVis" represents the four pillars of our approach: Visualization, Innovation, Simplification, and Integration. These core principles guide everything we do, from product development to customer service.
                </p>
              </div>
              
              <div className="relative">
                <div className="aspect-square rounded-xl overflow-hidden relative bg-gradient-to-br from-quadvis-blue/20 to-quadvis-orange/20 backdrop-blur-md p-10">
                  <div className="grid grid-cols-2 gap-6 h-full">
                    {[
                      {
                        icon: <Users className="h-8 w-8 text-quadvis-orange" />,
                        title: "Client-Focused",
                        description: "We prioritize your needs above all else"
                      },
                      {
                        icon: <Star className="h-8 w-8 text-quadvis-orange" />,
                        title: "Quality Driven",
                        description: "Excellence in every line of code we write"
                      },
                      {
                        icon: <BookOpen className="h-8 w-8 text-quadvis-orange" />,
                        title: "Always Learning",
                        description: "Constantly evolving with technology"
                      },
                      {
                        icon: <Calendar className="h-8 w-8 text-quadvis-orange" />,
                        title: "Timely Delivery",
                        description: "We respect deadlines and commitments"
                      }
                    ].map((item, index) => (
                      <div key={index} className={`flex flex-col items-center justify-center text-center p-4 rounded-xl hover-scale hover-glow
                      ${theme === 'dark' ? 'bg-black/30' : 'bg-gray-800/20'}`}>
                        <div className="mb-4">{item.icon}</div>
                        <h3 className="text-lg font-bold mb-2">{item.title}</h3>
                        <p className={`text-sm ${theme === 'dark' ? 'text-gray-400' : 'text-gray-700'}`}>{item.description}</p>
                      </div>
                    ))}
                  </div>
                </div>
                <div className="absolute -bottom-8 -right-8 h-40 w-40 border-2 border-dashed border-quadvis-orange/30 rounded-xl -z-10 animate-spin-slow"></div>
              </div>
            </div>
            
            <AboutContent />
            
            <div className="mt-20 bg-gradient-to-r from-quadvis-blue/20 to-quadvis-orange/20 rounded-xl p-8 text-center">
              <h3 className="text-2xl font-bold mb-4">Ready to work with us?</h3>
              <p className={`mb-6 max-w-2xl mx-auto ${theme === 'dark' ? 'text-gray-300' : 'text-gray-600'}`}>
                Join the growing list of clients who have transformed their digital presence with QuadVis Technologies.
              </p>
              <Button className="quad-button">Contact Our Team</Button>
            </div>
          </div>
        </div>
        
        <Footer />
      </div>
    </PageTransition>
  );
};

export default About;
