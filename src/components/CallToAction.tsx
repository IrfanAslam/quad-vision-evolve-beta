
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowRight, Rocket, Zap, Target } from "lucide-react";
import { useTheme } from "@/hooks/use-theme";

const CallToAction = () => {
  const { theme } = useTheme();

  return (
    <section className={`py-16 relative overflow-hidden ${theme === 'dark' ? 'bg-quadvis-dark' : 'bg-quadvis-light'}`}>
      {/* Background elements */}
      <div className="absolute inset-0 bg-gradient-to-r from-quadvis-blue/20 to-quadvis-orange/20 opacity-30"></div>
      
      <motion.div 
        className="container mx-auto px-4 relative z-10"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        viewport={{ once: true, margin: "-100px" }}
      >
        <div className={`max-w-5xl mx-auto rounded-2xl p-4 md:p-10 border border-quadvis-blue/30
          ${theme === 'dark' ? 'bg-gradient-to-b from-quadvis-dark to-black' : 'bg-gradient-to-b from-quadvis-light to-white shadow-lg'}`}>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
            <div>
               <motion.h2 
                className={`text-3xl md:text-4xl font-bold mb-4 ${theme === 'dark' ? 'text-white' : 'text-gray-700'}`}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                viewport={{ once: true }}
              >
                Ready to Transform Your <span className="gradient-text">Digital Experience</span>?
              </motion.h2>
              <motion.p 
                className={`mb-8 ${theme === 'dark' ? 'text-gray-300' : 'text-gray-500'}`}
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
                  <Button className="quad-button">
                    Get Started Today 
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </Link>
                <Link to="/contact">
                  <Button variant="outline" className="quad-button-outline shadow drop-shadow-md shadow-zinc-100">Contact Us</Button>
                </Link>
              </motion.div>
            </div>
            
            <div className="relative">
              <motion.div 
                className={`quad-card p-6 shadow-lg shadow-quadvis-blue/20 ${theme === 'dark' ? 'z-0' : 'z-10 relative'}`}
                initial={{ scale: 0.8, opacity: 0 }}
                whileInView={{ scale: 1, opacity: 1 }}
                transition={{ duration: 0.6, type: "spring", staggerChildren: 0.1 }}
                viewport={{ once: true }}
              >
                <h3 className={`text-xl font-bold mb-4 ${theme === 'dark' ? 'text-white' : 'text-gray-700'}`}>Why Choose QuadVis</h3>
                
                {[
                  {
                    icon: <Rocket className="text-quadvis-blue" />,
                    title: "Innovative Solutions",
                    description: "Cutting-edge technologies for modern challenges"
                  },
                  {
                    icon: <Target className="text-quadvis-orange" />,
                    title: "Focused Approach",
                    description: "Targeted strategies for your specific needs"
                  },
                  {
                    icon: <Zap className="text-quadvis-blue" />,
                    title: "Rapid Development",
                    description: "Fast turnaround without sacrificing quality"
                  }
                ].map((item, index) => (
                  <motion.div 
                    key={index}
                    className="flex items-start gap-4 mb-4 last:mb-0"
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.2 + (index * 0.1) }}
                    viewport={{ once: true }}
                  >
                    <div className="p-2 bg-black/30 rounded-lg">
                      {item.icon}
                    </div>
                    <div>
                      <h4 className={`font-medium ${theme === 'dark' ? 'text-white' : 'text-gray-600'}`}>{item.title}</h4>
                      <p className={`text-sm ${theme === 'dark' ? 'text-gray-400' : 'text-gray-500'}`}>{item.description}</p>
                    </div>
                  </motion.div>
                ))}
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
