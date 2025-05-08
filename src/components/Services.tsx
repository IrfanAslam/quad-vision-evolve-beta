
import { useState } from 'react';
import { Button } from "@/components/ui/button";
import { 
  Calendar, 
  Info, 
  BookOpen, 
  Settings, 
  Image,
  ArrowRight
} from "lucide-react";

const services = [
  {
    icon: <Image className="text-quadvis-orange h-8 w-8" />,
    title: 'Advanced Visualization',
    description: 'Transform complex data into clear, actionable visual insights with our state-of-the-art visualization technology.',
    features: ['Real-time data rendering', '3D visualization capability', 'Interactive dashboards', 'Custom visual analytics']
  },
  {
    icon: <Settings className="text-quadvis-orange h-8 w-8" />,
    title: 'Intelligent Analytics',
    description: 'Leverage AI-powered analytics to discover hidden patterns and make data-driven decisions with confidence.',
    features: ['Predictive analysis', 'Machine learning integration', 'Anomaly detection', 'Automated insight generation']
  },
  {
    icon: <BookOpen className="text-quadvis-orange h-8 w-8" />,
    title: 'Digital Transformation',
    description: 'Navigate your organization\'s digital journey with comprehensive transformation solutions tailored to your needs.',
    features: ['Digital strategy consulting', 'Legacy system modernization', 'Cloud migration services', 'Digital process automation']
  },
  {
    icon: <Calendar className="text-quadvis-orange h-8 w-8" />,
    title: 'Custom Development',
    description: 'Create bespoke software solutions designed specifically for your business challenges and opportunities.',
    features: ['Custom application development', 'API integration', 'Mobile app development', 'Enterprise software solutions']
  }
];

const Services = () => {
  const [activeService, setActiveService] = useState(0);

  return (
    <section id="services" className="py-20 bg-quadvis-dark">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="section-title">Our <span className="gradient-text">Services</span></h2>
          <p className="section-subtitle">
            We deliver comprehensive solutions powered by cutting-edge technology to address your most complex challenges and unlock new possibilities.
          </p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <div className="flex flex-wrap gap-3 mb-8">
              {services.map((service, index) => (
                <button
                  key={index}
                  className={`py-2 px-4 rounded-full text-sm font-medium transition-all ${
                    activeService === index
                      ? 'bg-quadvis-orange text-white'
                      : 'bg-transparent text-gray-400 hover:text-white border border-gray-700'
                  }`}
                  onClick={() => setActiveService(index)}
                >
                  {service.title}
                </button>
              ))}
            </div>
            
            <div className="quad-card">
              <div className="mb-4">{services[activeService].icon}</div>
              <h3 className="text-2xl font-bold text-white mb-3">{services[activeService].title}</h3>
              <p className="text-gray-300 mb-6">{services[activeService].description}</p>
              
              <ul className="space-y-3 mb-6">
                {services[activeService].features.map((feature, index) => (
                  <li key={index} className="flex items-center gap-2">
                    <div className="h-1.5 w-1.5 rounded-full bg-quadvis-orange"></div>
                    <span className="text-gray-300">{feature}</span>
                  </li>
                ))}
              </ul>
              
              <Button className="quad-button-outline group">
                Learn More
                <ArrowRight size={16} className="ml-2 group-hover:translate-x-1 transition-transform" />
              </Button>
            </div>
          </div>
          
          <div className="relative">
            <div className="aspect-square rounded-xl overflow-hidden relative bg-gradient-to-br from-quadvis-blue/20 to-quadvis-orange/20 backdrop-blur-md">
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-center">
                  <h3 className="text-3xl font-bold text-white mb-4">Custom Solutions for Every Need</h3>
                  <p className="text-gray-300 mb-6">Our tailored approach ensures your specific challenges are met with precision and expertise.</p>
                  <Button className="quad-button">Schedule a Consultation</Button>
                </div>
              </div>
              {/* Abstract shapes */}
              <div className="absolute top-0 left-0 h-20 w-20 bg-quadvis-blue/30 rounded-full blur-xl"></div>
              <div className="absolute bottom-0 right-0 h-32 w-32 bg-quadvis-orange/30 rounded-full blur-xl"></div>
            </div>
            
            <div className="hidden md:block absolute -bottom-8 -left-8 h-40 w-40 border-2 border-dashed border-quadvis-blue/30 rounded-xl -z-10"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
