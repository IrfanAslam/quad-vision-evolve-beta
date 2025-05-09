
import { useState } from 'react';
import { motion } from 'framer-motion';
import { ChevronRight, PenTool, Code, BarChart, Database, Cloud, ShieldCheck } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';

const features = [
  {
    icon: <PenTool className="text-quadvis-orange" />,
    title: "UI/UX Design",
    description: "Create intuitive and engaging user experiences with our expert design services."
  },
  {
    icon: <Code className="text-quadvis-blue" />,
    title: "Full-Stack Development",
    description: "Build robust applications with cutting-edge front and back-end technologies."
  },
  {
    icon: <BarChart className="text-quadvis-orange" />,
    title: "Data Visualization",
    description: "Transform complex data into clear, actionable insights through powerful visual tools."
  },
  {
    icon: <Database className="text-quadvis-blue" />,
    title: "Database Solutions",
    description: "Design efficient, scalable database architectures for optimal data management."
  },
  {
    icon: <Cloud className="text-quadvis-orange" />,
    title: "Cloud Integration",
    description: "Seamlessly deploy and manage your applications with modern cloud infrastructure."
  },
  {
    icon: <ShieldCheck className="text-quadvis-blue" />,
    title: "Security Implementation",
    description: "Protect your digital assets with our comprehensive security protocols."
  }
];

const Testimonials = () => {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  
  return (
    <motion.section 
      className="py-20 bg-black relative overflow-hidden"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
    >
      {/* Background elements */}
      <div className="absolute top-1/3 right-1/4 w-64 h-64 rounded-full bg-quadvis-blue/10 blur-3xl"></div>
      <div className="absolute bottom-1/3 left-1/4 w-80 h-80 rounded-full bg-quadvis-orange/10 blur-3xl"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <motion.h2 
            className="section-title"
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            Our <span className="gradient-text">Core Services</span>
          </motion.h2>
          <motion.p 
            className="section-subtitle"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
          >
            Comprehensive solutions to power your digital transformation journey
          </motion.p>
        </div>
        
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.3 }}
          viewport={{ once: true }}
        >
          {features.map((feature, index) => (
            <motion.div
              key={index}
              className="quad-card relative overflow-hidden"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              viewport={{ once: true }}
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
              whileHover={{ y: -5, transition: { duration: 0.2 } }}
            >
              {/* Animated gradient border */}
              <div className="absolute inset-0 bg-gradient-to-r from-quadvis-blue/30 to-quadvis-orange/30 opacity-0 hover:opacity-100 transition-opacity duration-300" style={{ borderRadius: "inherit" }}></div>
              
              <div className="p-6 relative z-10">
                <div className="flex items-center justify-between mb-4">
                  <div className="p-2 rounded-lg bg-black/40">
                    {feature.icon}
                  </div>
                </div>
                
                <h3 className="text-xl font-bold text-white mb-2">{feature.title}</h3>
                <p className="text-quadvis-gray mb-4">{feature.description}</p>
                
                <motion.div 
                  className="mt-2"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: hoveredIndex === index ? 1 : 0 }}
                  transition={{ duration: 0.3 }}
                >
                  <Link to="/services">
                    <Button variant="ghost" className="text-quadvis-orange hover:text-quadvis-orange/90 p-0 flex items-center">
                      Learn more <ChevronRight className="h-4 w-4 ml-1" />
                    </Button>
                  </Link>
                </motion.div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </motion.section>
  );
};

export default Testimonials;
