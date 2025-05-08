
import { Button } from "@/components/ui/button";
import { ArrowRight, Play } from "lucide-react";
import { Link } from "react-router-dom";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center pt-20 pb-16 overflow-hidden">
      {/* Gradient background effect */}
      <div className="absolute inset-0 bg-gradient-to-b from-quadvis-dark to-black z-0"></div>
      
      {/* Animated circles */}
      <div className="absolute top-1/4 left-1/4 w-64 h-64 rounded-full bg-quadvis-blue/10 blur-3xl animate-float z-0"></div>
      <div className="absolute bottom-1/4 right-1/4 w-80 h-80 rounded-full bg-quadvis-orange/10 blur-3xl animate-float animation-delay-2000 z-0"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 leading-tight">
            Four Fold Innovation,<br />
            <span className="gradient-text">One Digital Vision</span>
          </h1>
          
          <p className="text-lg md:text-xl text-gray-300 mb-10 max-w-3xl mx-auto">
            Pioneering the future of digital visualization technology with innovative solutions 
            that transform how businesses interpret, analyze, and present data.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/services">
              <Button className="quad-button group">
                Explore Our Solutions
                <ArrowRight size={18} className="ml-2 group-hover:translate-x-1 transition-transform" />
              </Button>
            </Link>
            <Button variant="outline" className="quad-button-outline flex items-center gap-2">
              <Play size={18} />
              Watch Demo
            </Button>
          </div>
          
          <div className="mt-16 md:mt-24 grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-10">
            {[
              { number: '12+', text: 'Years of Experience' },
              { number: '200+', text: 'Projects Completed' },
              { number: '98%', text: 'Client Satisfaction' },
              { number: '24/7', text: 'Technical Support' }
            ].map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-3xl md:text-4xl font-bold text-quadvis-orange mb-2">{stat.number}</div>
                <div className="text-sm text-gray-400">{stat.text}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
