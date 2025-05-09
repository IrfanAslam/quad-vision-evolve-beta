
import { useState } from 'react';
import { motion } from 'framer-motion';
import { ChevronDown, CheckCircle, Shield, Zap, Users, Lightbulb, LineChart } from 'lucide-react';

const features = [
  {
    icon: <Lightbulb className="text-quadvis-orange" />,
    title: "Innovative Approaches",
    description: "We combine creativity with technical expertise to deliver solutions that stand out from the competition."
  },
  {
    icon: <LineChart className="text-quadvis-blue" />,
    title: "Data-Driven Insights",
    description: "Our visualization tools transform complex data into actionable intelligence for your business."
  },
  {
    icon: <Zap className="text-quadvis-orange" />,
    title: "Performance Optimized",
    description: "Every solution we build is engineered for speed, scalability, and optimal user experience."
  },
  {
    icon: <Shield className="text-quadvis-blue" />,
    title: "Enterprise Security",
    description: "We implement robust security measures to protect your data and maintain compliance."
  },
  {
    icon: <CheckCircle className="text-quadvis-orange" />,
    title: "Quality Assurance",
    description: "Rigorous testing procedures ensure our deliverables meet the highest quality standards."
  },
  {
    icon: <Users className="text-quadvis-blue" />,
    title: "Client Collaboration",
    description: "We work closely with you throughout the development process to ensure your vision becomes reality."
  }
];

const Testimonials = () => {
  const [expandedFeature, setExpandedFeature] = useState<number | null>(null);
  
  const toggleFeature = (index: number) => {
    setExpandedFeature(expandedFeature === index ? null : index);
  };
  
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
            Why Choose <span className="gradient-text">QuadVis</span>
          </motion.h2>
          <motion.p 
            className="section-subtitle"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
          >
            Discover the core strengths that set our solutions apart and drive exceptional results.
          </motion.p>
        </div>
        
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.3, staggerChildren: 0.1 }}
          viewport={{ once: true }}
        >
          {features.map((feature, index) => (
            <motion.div
              key={index}
              className="quad-card bg-gradient-to-b from-quadvis-dark to-black/90 border border-quadvis-blue/20 hover:border-quadvis-orange/30"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -5 }}
            >
              <div className="p-6">
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-3">
                    <div className="p-2 rounded-lg bg-black/40">
                      {feature.icon}
                    </div>
                    <h3 className="text-xl font-bold text-white">{feature.title}</h3>
                  </div>
                  <button 
                    onClick={() => toggleFeature(index)}
                    className="text-quadvis-gray hover:text-white transition-colors"
                  >
                    <ChevronDown 
                      className={`transition-transform duration-300 ${expandedFeature === index ? 'rotate-180' : ''}`} 
                    />
                  </button>
                </div>
                
                <div 
                  className={`overflow-hidden transition-all duration-300 ${
                    expandedFeature === index ? 'max-h-40' : 'max-h-0'
                  }`}
                >
                  <p className="text-quadvis-gray">{feature.description}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
        
        <motion.div 
          className="mt-16 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.8 }}
          viewport={{ once: true }}
        >
          <p className="text-xl text-quadvis-gray">
            <span className="text-white">Four-fold approach</span> to visualization excellence: 
            <span className="gradient-text"> Insight. Innovation. Implementation. Impact.</span>
          </p>
        </motion.div>
      </div>
    </motion.section>
  );
};

export default Testimonials;
