
import { useState, useEffect } from 'react';
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Menu, X } from "lucide-react";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${isScrolled ? 'bg-quadvis-dark/95 backdrop-blur-sm shadow-md' : 'bg-transparent'}`}>
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <img 
            src="/lovable-uploads/77223987-a581-48ba-ad61-470bd73d6c7f.png" 
            alt="QuadVis Logo" 
            className="h-10 w-auto" 
          />
          <span className="font-bold text-xl text-white">QuadVis</span>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-8">
          <Link to="/" className="text-white hover:text-quadvis-orange transition-colors">Home</Link>
          <Link to="/services" className="text-white hover:text-quadvis-orange transition-colors">Services</Link>
          <Link to="/about" className="text-white hover:text-quadvis-orange transition-colors">About</Link>
          <Link to="/case-studies" className="text-white hover:text-quadvis-orange transition-colors">Case Studies</Link>
          <Link to="/contact" className="text-white hover:text-quadvis-orange transition-colors">Contact</Link>
        </nav>
        
        <div className="hidden md:block">
          <Button className="quad-button">Get Started</Button>
        </div>
        
        {/* Mobile Menu Button */}
        <button 
          className="md:hidden text-white"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>
      
      {/* Mobile Navigation */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-quadvis-dark/95 backdrop-blur-sm p-4 animate-slide-in">
          <nav className="flex flex-col gap-4 mb-4">
            <Link to="/" className="text-white hover:text-quadvis-orange transition-colors p-2">Home</Link>
            <Link to="/services" className="text-white hover:text-quadvis-orange transition-colors p-2">Services</Link>
            <Link to="/about" className="text-white hover:text-quadvis-orange transition-colors p-2">About</Link>
            <Link to="/case-studies" className="text-white hover:text-quadvis-orange transition-colors p-2">Case Studies</Link>
            <Link to="/contact" className="text-white hover:text-quadvis-orange transition-colors p-2">Contact</Link>
          </nav>
          <Button className="quad-button w-full">Get Started</Button>
        </div>
      )}
    </header>
  );
};

export default Navbar;
