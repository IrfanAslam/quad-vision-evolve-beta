
import { useState } from 'react';
import { Button } from "@/components/ui/button";
import { ChevronRight, Clock, Users, PieChart } from "lucide-react";
import { motion } from "framer-motion";

const caseStudies = [
  {
    title: 'E-Learning Platform',
    client: 'Educational Institution',
    description: 'Developed a comprehensive e-learning platform with interactive content, video courses, and real-time progress tracking for students and educators.',
    impact: ['35% increase in student engagement', 'Reduced administrative tasks by 50%', '98% user satisfaction rate'],
    tags: ['Education', 'Web Development', 'User Experience'],
    metrics: [
      { icon: <Clock className="text-quadvis-orange" />, value: "2 months", label: "Development Time" },
      { icon: <Users className="text-quadvis-blue" />, value: "5,000+", label: "Active Users" },
      { icon: <PieChart className="text-quadvis-orange" />, value: "30%", label: "Cost Reduction" }
    ]
  },
  {
    title: 'E-Commerce Mobile App',
    client: 'Retail Startup',
    description: 'Created a feature-rich mobile shopping application with personalized recommendations, AR product visualization, and seamless checkout process.',
    impact: ['42% increase in conversion rate', '27% higher average order value', '30% reduction in cart abandonment'],
    tags: ['E-Commerce', 'Mobile Development', 'AR Integration'],
    metrics: [
      { icon: <Clock className="text-quadvis-orange" />, value: "3 months", label: "Development Time" },
      { icon: <Users className="text-quadvis-blue" />, value: "10,000+", label: "Downloads" },
      { icon: <PieChart className="text-quadvis-orange" />, value: "42%", label: "Conversion Increase" }
    ]
  },
  {
    title: 'VR Training Simulation',
    client: 'Manufacturing Company',
    description: 'Designed an immersive VR training system for factory workers, simulating complex machinery operation in a risk-free virtual environment.',
    impact: ['Training time reduced by 40%', 'Workplace accidents decreased by 65%', 'ROI achieved within 6 months'],
    tags: ['VR', 'Training', 'Industrial Solutions'],
    metrics: [
      { icon: <Clock className="text-quadvis-orange" />, value: "4 months", label: "Development Time" },
      { icon: <Users className="text-quadvis-blue" />, value: "200+", label: "Trained Workers" },
      { icon: <PieChart className="text-quadvis-orange" />, value: "65%", label: "Safety Improvement" }
    ]
  },
  {
    title: 'Multiplayer Mobile Game',
    client: 'Gaming Studio',
    description: 'Developed a cross-platform multiplayer game with real-time interactions, social features, and monetization strategy that gained significant market traction.',
    impact: ['1M+ downloads in first month', 'Average session time of 45 minutes', '22% better retention than industry average'],
    tags: ['Game Development', 'Multiplayer', 'Mobile Gaming'],
    metrics: [
      { icon: <Clock className="text-quadvis-orange" />, value: "6 months", label: "Development Time" },
      { icon: <Users className="text-quadvis-blue" />, value: "1M+", label: "Downloads" },
      { icon: <PieChart className="text-quadvis-orange" />, value: "22%", label: "Retention Increase" }
    ]
  },
];

const CaseStudiesContent = () => {
  const [activeTab, setActiveTab] = useState(0);

  return (
    <>
      <motion.div 
        className="flex overflow-x-auto hide-scrollbar mb-10 pb-2"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <div className="flex gap-4 mx-auto">
          {caseStudies.map((study, index) => (
            <button
              key={index}
              className={`px-5 py-3 whitespace-nowrap rounded-full transition-all text-lg ${
                activeTab === index
                  ? 'bg-quadvis-orange text-white'
                  : 'bg-quadvis-dark border border-gray-700 text-gray-300 hover:border-gray-500'
              }`}
              onClick={() => setActiveTab(index)}
            >
              {study.title}
            </button>
          ))}
        </div>
      </motion.div>
      
      <motion.div 
        className="quad-card p-8"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.2 }}
      >
        <div className="grid grid-cols-1 gap-10">
          <div>
            <div className="inline-block px-4 py-1.5 bg-quadvis-blue/20 text-quadvis-blue rounded-full text-lg mb-4">
              {caseStudies[activeTab].client}
            </div>
            <h3 className="text-3xl md:text-4xl font-bold text-white mb-5">
              {caseStudies[activeTab].title}
            </h3>
            <p className="text-xl text-gray-300 mb-8">
              {caseStudies[activeTab].description}
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
              {caseStudies[activeTab].metrics.map((metric, idx) => (
                <div key={idx} className="bg-black/40 p-5 rounded-lg border border-quadvis-blue/20 text-center">
                  <div className="w-12 h-12 flex items-center justify-center mx-auto mb-3">
                    {metric.icon}
                  </div>
                  <div className="text-2xl font-bold text-white mb-1">{metric.value}</div>
                  <div className="text-gray-400">{metric.label}</div>
                </div>
              ))}
            </div>
            
            <h4 className="text-2xl font-semibold text-white mb-4">Key Impact</h4>
            <ul className="space-y-3 mb-8">
              {caseStudies[activeTab].impact.map((item, i) => (
                <li key={i} className="flex items-center gap-3">
                  <span className="h-7 w-7 rounded-full bg-quadvis-orange/20 flex items-center justify-center">
                    <ChevronRight className="h-5 w-5 text-quadvis-orange" />
                  </span>
                  <span className="text-xl text-gray-300">{item}</span>
                </li>
              ))}
            </ul>
            
            <div className="flex flex-wrap gap-2 mb-8">
              {caseStudies[activeTab].tags.map((tag, i) => (
                <span key={i} className="px-4 py-1.5 bg-quadvis-dark border border-gray-700 rounded-full text-lg text-gray-300">
                  {tag}
                </span>
              ))}
            </div>
            
            <Button className="quad-button text-lg">
              Read Full Case Study
            </Button>
          </div>
        </div>
      </motion.div>
      
      <div className="mt-20">
        <h3 className="text-3xl font-bold mb-10 text-center">More Success Stories</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {[
            {
              title: "AI-Powered Analytics Dashboard",
              client: "Financial Services Company",
              description: "Data visualization solution with predictive analytics capabilities"
            },
            {
              title: "Augmented Reality Shopping Experience",
              client: "Fashion Retailer",
              description: "AR technology allowing customers to virtually try products"
            },
            {
              title: "Automated QA Testing Framework",
              client: "Software Development Firm",
              description: "Comprehensive testing solution reducing development cycles"
            }
          ].map((project, index) => (
            <motion.div 
              key={index} 
              className="quad-card h-full"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 + (index * 0.1) }}
            >
              <div className="aspect-video bg-gradient-to-br from-quadvis-blue/20 to-quadvis-orange/20 rounded-md mb-4"></div>
              <div className="text-lg text-quadvis-orange mb-2">{project.client}</div>
              <h3 className="text-2xl font-bold mb-2">{project.title}</h3>
              <p className="text-lg text-gray-300 mb-4">{project.description}</p>
              <Button variant="link" className="text-quadvis-orange p-0 flex items-center hover:text-quadvis-orange/80 transition-colors text-lg">
                View details
                <ChevronRight size={18} className="ml-1" />
              </Button>
            </motion.div>
          ))}
        </div>
      </div>
    </>
  );
};

export default CaseStudiesContent;
