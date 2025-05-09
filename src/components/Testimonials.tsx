
import { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight, Star } from 'lucide-react';
import { motion } from 'framer-motion';

const testimonials = [
  {
    quote: "QuadVis Technologies completely transformed how we analyze and visualize our market data. Their custom solution has given us a competitive edge we didn't think was possible.",
    author: "Sarah Johnson",
    position: "CTO, Financial Analytics Inc.",
    rating: 5
  },
  {
    quote: "The visualization tools developed by QuadVis have revolutionized our research department. We're able to identify patterns and make discoveries that were previously hidden in our data.",
    author: "Dr. Michael Chen",
    position: "Research Director, BioTech Innovations",
    rating: 5
  },
  {
    quote: "Implementation was seamless, and the support has been exceptional. QuadVis doesn't just provide technology—they provide a partnership focused on our success.",
    author: "Alexis Rodriguez",
    position: "VP of Operations, Global Logistics",
    rating: 5
  },
  {
    quote: "The ROI on our QuadVis implementation was evident within months. Their solution has streamlined our decision-making process and significantly improved our operational efficiency.",
    author: "James Wilson",
    position: "CEO, Retail Solutions Group",
    rating: 4
  }
];

const Testimonials = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);
  
  const nextTestimonial = () => {
    if (isAnimating) return;
    
    setIsAnimating(true);
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
    
    setTimeout(() => {
      setIsAnimating(false);
    }, 500);
  };
  
  const prevTestimonial = () => {
    if (isAnimating) return;
    
    setIsAnimating(true);
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
    
    setTimeout(() => {
      setIsAnimating(false);
    }, 500);
  };
  
  useEffect(() => {
    const interval = setInterval(nextTestimonial, 6000);
    return () => clearInterval(interval);
  }, []);
  
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
            What Our <span className="gradient-text">Clients Say</span>
          </motion.h2>
          <motion.p 
            className="section-subtitle"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
          >
            Hear directly from organizations that have experienced the transformative impact of QuadVis technologies.
          </motion.p>
        </div>
        
        <motion.div 
          className="max-w-4xl mx-auto relative"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.3 }}
          viewport={{ once: true }}
        >
          <div className="overflow-hidden relative">
            <div 
              className={`transition-transform duration-500 ease-out flex`}
              style={{ transform: `translateX(-${currentIndex * 100}%)` }}
            >
              {testimonials.map((testimonial, index) => (
                <div
                  key={index}
                  className="min-w-full px-4"
                >
                  <div className="quad-card bg-gradient-to-b from-quadvis-dark to-black/90 p-8 md:p-10">
                    <div className="flex mb-6">
                      {[...Array(5)].map((_, i) => (
                        <Star
                          key={i}
                          className={`h-5 w-5 ${
                            i < testimonial.rating ? 'text-quadvis-orange fill-quadvis-orange' : 'text-gray-500'
                          }`}
                        />
                      ))}
                    </div>
                    
                    <blockquote className="text-xl md:text-2xl italic text-gray-200 mb-8">
                      "{testimonial.quote}"
                    </blockquote>
                    
                    <div>
                      <div className="font-bold text-white">{testimonial.author}</div>
                      <div className="text-quadvis-gray text-sm">{testimonial.position}</div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
          
          <div className="flex justify-between mt-8">
            <button 
              onClick={prevTestimonial}
              className="h-12 w-12 rounded-full bg-quadvis-dark hover:bg-quadvis-blue/20 border border-gray-700 flex items-center justify-center text-white transition-colors"
              disabled={isAnimating}
            >
              <ChevronLeft className="h-5 w-5" />
            </button>
            
            <div className="flex gap-2 items-center">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  className={`h-3 rounded-full transition-all ${
                    currentIndex === index ? 'w-8 bg-quadvis-orange' : 'w-3 bg-gray-700'
                  }`}
                  onClick={() => setCurrentIndex(index)}
                ></button>
              ))}
            </div>
            
            <button 
              onClick={nextTestimonial}
              className="h-12 w-12 rounded-full bg-quadvis-dark hover:bg-quadvis-blue/20 border border-gray-700 flex items-center justify-center text-white transition-colors"
              disabled={isAnimating}
            >
              <ChevronRight className="h-5 w-5" />
            </button>
          </div>
        </motion.div>
        
        <div className="mt-20 grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-8 items-center">
          {[...Array(6)].map((_, i) => (
            <div key={i} className="flex justify-center">
              <div className="h-12 w-36 bg-gray-800 opacity-50 rounded"></div>
            </div>
          ))}
        </div>
      </div>
    </motion.section>
  );
};

export default Testimonials;
