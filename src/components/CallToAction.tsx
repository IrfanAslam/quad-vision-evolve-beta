
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const CallToAction = () => {
  return (
    <section className="py-16 bg-quadvis-dark relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0 bg-gradient-to-r from-quadvis-blue/20 to-quadvis-orange/20 opacity-30"></div>
      
      <motion.div 
        className="container mx-auto px-4 relative z-10"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        viewport={{ once: true, margin: "-100px" }}
      >
        <div className="max-w-5xl mx-auto bg-gradient-to-b from-quadvis-dark to-black rounded-2xl p-4 md:p-10 border border-quadvis-blue/30">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
            <div>
              <motion.h2 
                className="text-3xl md:text-4xl font-bold text-white mb-4"
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                viewport={{ once: true }}
              >
                Ready to Transform Your <span className="gradient-text">Digital Experience</span>?
              </motion.h2>
              <motion.p 
                className="text-gray-300 mb-8"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.4 }}
                viewport={{ once: true }}
              >
                Let's discuss how QuadVis Technologies can help you unlock the full potential of your ideas with our cutting-edge development solutions.
              </motion.p>
              
              <motion.div 
                className="flex flex-col sm:flex-row gap-4"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.6 }}
                viewport={{ once: true }}
              >
                <Link to="/contact">
                  <Button className="quad-button">Schedule a Demo</Button>
                </Link>
                <Link to="/contact">
                  <Button variant="outline" className="quad-button-outline">Contact Us</Button>
                </Link>
              </motion.div>
            </div>
            
            <div className="relative">
              <motion.div 
                className="aspect-square max-w-xs mx-auto rounded-full bg-gradient-to-br from-quadvis-blue/30 to-quadvis-orange/30 p-1"
                initial={{ scale: 0.8, opacity: 0 }}
                whileInView={{ scale: 1, opacity: 1 }}
                transition={{ duration: 0.6, type: "spring" }}
                viewport={{ once: true }}
              >
                <div className="h-full w-full rounded-full bg-black/60 flex items-center justify-center p-8">
                  <img 
                    src="/lovable-uploads/77223987-a581-48ba-ad61-470bd73d6c7f.png" 
                    alt="QuadVis" 
                    className="max-w-full h-auto"
                  />
                </div>
              </motion.div>
              
              {/* Animated rings */}
              <div className="absolute inset-0 rounded-full border-2 border-quadvis-blue/20 animate-pulse-light"></div>
              <div className="absolute inset-[-15px] rounded-full border-2 border-quadvis-orange/10 animate-pulse-light" style={{ animationDelay: '1s' }}></div>
              <motion.div 
                className="absolute inset-[-30px] rounded-full border border-quadvis-blue/5"
                animate={{ scale: [1, 1.1, 1] }}
                transition={{ duration: 4, repeat: Infinity }}
              ></motion.div>
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default CallToAction;
