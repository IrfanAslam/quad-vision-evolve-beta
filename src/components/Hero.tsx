
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { useTheme } from "@/hooks/use-theme";

const Hero = () => {
    const { theme } = useTheme();

  return (
    <section className="relative min-h-screen flex items-center pt-20 pb-16 overflow-hidden">
      {/* Gradient background effect */}
      <div className={`absolute inset-0 z-0 ${theme === 'dark' ? 'bg-gradient-to-b from-quadvis-dark to-black' : 'bg-gradient-to-b from-quadvis-light to-gray-300'}`}></div>
      
      {/* Animated circles */}
      <motion.div 
        className="absolute top-1/4 left-1/4 w-64 h-64 rounded-full bg-quadvis-orange/30 blur-3xl z-0"
        animate={{ 
          scale: [1, 1.2, 1],
          opacity: [0.5, 0.8, 0.5]
        }}
        transition={{
          duration: 8,
          ease: "easeInOut",
          times: [0, 0.5, 1],
          repeat: Infinity
        }}
      ></motion.div>
      
      <motion.div 
        className="absolute bottom-1/4 right-1/4 w-80 h-80 rounded-full bg-quadvis-blue/30 blur-3xl z-0"
        animate={{ 
          scale: [1, 1.3, 1],
          opacity: [0.3, 0.6, 0.3]
        }}
        transition={{
          duration: 10,
          ease: "easeInOut",
          times: [0, 0.5, 1],
          repeat: Infinity,
          delay: 2
        }}
      ></motion.div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center max-w-4xl mx-auto">
          <motion.h1 
            className={`text-4xl md:text-6xl font-bold mb-6 leading-tight ${theme === 'dark' ? 'text-white' : 'text-gray-800'}`}
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
          >
            Four Fold Innovation,<br />
            <span className="gradient-text">One Digital Vision</span>
          </motion.h1>
          
          <motion.p 
            className={`text-lg md:text-xl mb-10 max-w-3xl mx-auto ${theme === 'dark' ? 'text-gray-300' : 'text-gray-600'}`}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.7, delay: 0.3 }}
          >
            Pioneering the future of digital visualization technology with innovative solutions 
            that transform how businesses interpret, analyze, and present data.
          </motion.p>
          
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.6 }}
            className="flex justify-center"
          >
            <Link to="/services">
              <Button className="quad-button group">
                Explore Our Solutions
                <ArrowRight size={18} className="ml-2 group-hover:translate-x-1 transition-transform" />
              </Button>
            </Link>
          </motion.div>
          
          <div className="mt-16 md:mt-24 grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-10">
            {[
              { number: '2+', text: 'Years Experience' },
              { number: '15+', text: 'Projects Completed' },
              { number: '93%', text: 'Client Satisfaction' },
              { number: '24/7', text: 'Technical Support' }
            ].map((stat, index) => (
              <motion.div 
                key={index} 
                className="text-center"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.8 + (index * 0.1) }}
              >
                <motion.div 
                  className="text-3xl md:text-4xl font-bold text-quadvis-orange mb-2"
                  initial={{ scale: 0.8 }}
                  whileInView={{ scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ type: "spring", stiffness: 200 }}
                >
                  {stat.number}
                </motion.div>
                <div className={`text-sm ${theme === 'dark' ? 'text-gray-400' : 'text-gray-800'}`}>{stat.text}</div>
              </motion.div>
            ))}
          </div>

          {/* Animated scroll indicator */}
          <motion.div 
            className="absolute bottom-10 left-1/2 transform -translate-x-1/2"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1, y: [0, 10, 0] }}
            transition={{ 
              delay: 1.5, 
              duration: 2,
              repeat: Infinity,
              repeatType: "loop"
            }}
          >
            <div className="flex flex-col items-center">
              <span className="text-xs text-gray-400 mb-2">Scroll to explore</span>
              <div className="w-5 h-10 border-2 border-quadvis-orange/50 rounded-full flex justify-center pt-2">
                <div className="w-1 h-2 bg-quadvis-orange rounded-full animate-bounce"></div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
