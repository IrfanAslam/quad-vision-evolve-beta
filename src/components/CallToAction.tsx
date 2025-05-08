
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const CallToAction = () => {
  return (
    <section className="py-16 bg-quadvis-dark relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0 bg-gradient-to-r from-quadvis-blue/20 to-quadvis-orange/20 opacity-30"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-5xl mx-auto bg-gradient-to-b from-quadvis-dark to-black rounded-2xl p-4 md:p-10 border border-quadvis-blue/30">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Ready to Transform Your <span className="gradient-text">Digital Experience</span>?
              </h2>
              <p className="text-gray-300 mb-8">
                Let's discuss how QuadVis Technologies can help you unlock the full potential of your ideas with our cutting-edge development solutions.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4">
                <Link to="/contact">
                  <Button className="quad-button">Schedule a Demo</Button>
                </Link>
                <Link to="/contact">
                  <Button variant="outline" className="quad-button-outline">Contact Us</Button>
                </Link>
              </div>
            </div>
            
            <div className="relative">
              <div className="aspect-square max-w-xs mx-auto rounded-full bg-gradient-to-br from-quadvis-blue/30 to-quadvis-orange/30 p-1">
                <div className="h-full w-full rounded-full bg-black/60 flex items-center justify-center p-8">
                  <img 
                    src="/lovable-uploads/77223987-a581-48ba-ad61-470bd73d6c7f.png" 
                    alt="QuadVis" 
                    className="max-w-full h-auto"
                  />
                </div>
              </div>
              
              {/* Animated rings */}
              <div className="absolute inset-0 rounded-full border-2 border-quadvis-blue/20 animate-pulse-light"></div>
              <div className="absolute inset-[-15px] rounded-full border-2 border-quadvis-orange/10 animate-pulse-light" style={{ animationDelay: '1s' }}></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CallToAction;
