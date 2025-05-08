
import { useState } from 'react';
import { Button } from "@/components/ui/button";
import { ChevronRight } from "lucide-react";

const caseStudies = [
  {
    title: 'Financial Data Transformation',
    client: 'Global Investment Firm',
    description: 'Implemented a comprehensive visualization solution that transformed complex financial data into intuitive dashboards, reducing analysis time by 70%.',
    impact: ['70% reduction in analysis time', 'Increased trade accuracy by 45%', '32% improvement in client satisfaction'],
    tags: ['Finance', 'Data Visualization', 'AI Analytics']
  },
  {
    title: 'Healthcare Analytics Platform',
    client: 'Regional Hospital Network',
    description: 'Developed a patient-centered analytics system that improved treatment planning and resource allocation across multiple facilities.',
    impact: ['Reduced patient wait times by 35%', 'Optimized resource allocation by 28%', 'Improved treatment outcomes by 22%'],
    tags: ['Healthcare', 'Predictive Analytics', 'Real-time Monitoring']
  },
  {
    title: 'Supply Chain Optimization',
    client: 'International Logistics Company',
    description: 'Created an end-to-end visualization system for tracking global shipments, predicting delays, and optimizing routes in real-time.',
    impact: ['15% reduction in delivery delays', '23% decrease in operational costs', 'Carbon footprint reduced by 18%'],
    tags: ['Logistics', 'AI Prediction', 'Sustainability']
  },
  {
    title: 'Retail Customer Insights',
    client: 'E-commerce Platform',
    description: 'Implemented a customer behavior analysis tool that provided actionable insights, leading to targeted marketing campaigns and improved conversion rates.',
    impact: ['42% increase in conversion rate', '27% higher average order value', '3x return on marketing investment'],
    tags: ['Retail', 'Customer Analytics', 'Marketing Optimization']
  },
];

const CaseStudies = () => {
  const [activeTab, setActiveTab] = useState(0);

  return (
    <section id="case-studies" className="py-20 bg-quadvis-dark relative">
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxwYXRoIGQ9Ik0zNiAxOGMxLjIgMCAyLjEuOSAyLjEgMi4xIDAgMS4yLS45IDIuMS0yLjEgMi4xLTEuMiAwLTIuMS0uOS0yLjEtMi4xIDAtMS4yLjktMi4xIDIuMS0yLjF6IiBmaWxsLW9wYWNpdHk9Ii41IiBmaWxsPSIjNjc4IiBmaWxsLXJ1bGU9Im5vbnplcm8iLz48L2c+PC9zdmc+')] opacity-[0.03] z-0"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <h2 className="section-title">Case <span className="gradient-text">Studies</span></h2>
          <p className="section-subtitle">
            Explore how our solutions have delivered measurable impact and transformation for our clients across industries.
          </p>
        </div>
        
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
                      <div className="w-0 h-0 border-t-8 border-t-transparent border-l-16 border-l-white border-b-8 border-b-transparent ml-1"></div>
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
      </div>
    </section>
  );
};

export default CaseStudies;
