
import { useState } from 'react';
import { Button } from "@/components/ui/button";
import { ChevronRight, Play } from "lucide-react";

const caseStudies = [
  {
    title: 'E-Learning Platform',
    client: 'Educational Institution',
    description: 'Developed a comprehensive e-learning platform with interactive content, video courses, and real-time progress tracking for students and educators.',
    impact: ['35% increase in student engagement', 'Reduced administrative tasks by 50%', '98% user satisfaction rate'],
    tags: ['Education', 'Web Development', 'User Experience']
  },
  {
    title: 'E-Commerce Mobile App',
    client: 'Retail Startup',
    description: 'Created a feature-rich mobile shopping application with personalized recommendations, AR product visualization, and seamless checkout process.',
    impact: ['42% increase in conversion rate', '27% higher average order value', '30% reduction in cart abandonment'],
    tags: ['E-Commerce', 'Mobile Development', 'AR Integration']
  },
  {
    title: 'VR Training Simulation',
    client: 'Manufacturing Company',
    description: 'Designed an immersive VR training system for factory workers, simulating complex machinery operation in a risk-free virtual environment.',
    impact: ['Training time reduced by 40%', 'Workplace accidents decreased by 65%', 'ROI achieved within 6 months'],
    tags: ['VR', 'Training', 'Industrial Solutions']
  },
  {
    title: 'Multiplayer Mobile Game',
    client: 'Gaming Studio',
    description: 'Developed a cross-platform multiplayer game with real-time interactions, social features, and monetization strategy that gained significant market traction.',
    impact: ['1M+ downloads in first month', 'Average session time of 45 minutes', '22% better retention than industry average'],
    tags: ['Game Development', 'Multiplayer', 'Mobile Gaming']
  },
];

const CaseStudiesContent = () => {
  const [activeTab, setActiveTab] = useState(0);

  return (
    <>
      <div className="flex overflow-x-auto hide-scrollbar mb-10 pb-2">
        <div className="flex gap-4 mx-auto">
          {caseStudies.map((study, index) => (
            <button
              key={index}
              className={`px-5 py-2.5 whitespace-nowrap rounded-full transition-all ${
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
      </div>
      
      <div className="quad-card p-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
          <div>
            <div className="inline-block px-3 py-1 bg-quadvis-blue/20 text-quadvis-blue rounded-full text-sm mb-4">
              {caseStudies[activeTab].client}
            </div>
            <h3 className="text-2xl md:text-3xl font-bold text-white mb-4">
              {caseStudies[activeTab].title}
            </h3>
            <p className="text-gray-300 mb-6">
              {caseStudies[activeTab].description}
            </p>
            
            <h4 className="text-lg font-semibold text-white mb-3">Key Impact</h4>
            <ul className="space-y-2 mb-6">
              {caseStudies[activeTab].impact.map((item, i) => (
                <li key={i} className="flex items-center gap-3">
                  <span className="h-6 w-6 rounded-full bg-quadvis-orange/20 flex items-center justify-center">
                    <ChevronRight className="h-4 w-4 text-quadvis-orange" />
                  </span>
                  <span className="text-gray-300">{item}</span>
                </li>
              ))}
            </ul>
            
            <div className="flex flex-wrap gap-2 mb-6">
              {caseStudies[activeTab].tags.map((tag, i) => (
                <span key={i} className="px-3 py-1 bg-quadvis-dark border border-gray-700 rounded-full text-sm text-gray-300">
                  {tag}
                </span>
              ))}
            </div>
            
            <Button className="quad-button">
              Read Full Case Study
            </Button>
          </div>
          
          <div className="relative">
            <div className="aspect-video rounded-lg overflow-hidden bg-gradient-to-br from-quadvis-blue/30 to-quadvis-orange/30 flex items-center justify-center">
              <div className="text-center p-6">
                <div className="w-20 h-20 rounded-full bg-quadvis-orange/20 flex items-center justify-center mx-auto mb-4">
                  <div className="w-14 h-14 rounded-full bg-quadvis-orange flex items-center justify-center">
                    <Play className="h-6 w-6 text-white ml-1" />
                  </div>
                </div>
                <p className="text-white font-medium">Watch the client testimonial</p>
              </div>
            </div>
            
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mt-4">
              {[1, 2, 3, 4].map((i) => (
                <div 
                  key={i}
                  className="aspect-video rounded-md bg-gradient-to-br from-gray-800 to-gray-900 hover:opacity-80 cursor-pointer transition-opacity"
                ></div>
              ))}
            </div>
          </div>
        </div>
      </div>
      
      <div className="mt-16">
        <h3 className="text-2xl font-bold mb-8 text-center">More Success Stories</h3>
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
            <div key={index} className="quad-card h-full">
              <div className="aspect-video bg-gradient-to-br from-quadvis-blue/20 to-quadvis-orange/20 rounded-md mb-4"></div>
              <div className="text-sm text-quadvis-orange mb-2">{project.client}</div>
              <h3 className="text-xl font-bold mb-2">{project.title}</h3>
              <p className="text-gray-300 mb-4">{project.description}</p>
              <Button variant="link" className="text-quadvis-orange p-0 flex items-center hover:text-quadvis-orange/80 transition-colors">
                View details
                <ChevronRight size={16} className="ml-1" />
              </Button>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default CaseStudiesContent;
