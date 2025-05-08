
import { useState, useEffect } from 'react';
import { Button } from "@/components/ui/button";
import { Link, useLocation } from "react-router-dom";
import { Menu, X } from "lucide-react";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();
  
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

  // Close mobile menu when changing routes
  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [location.pathname]);

  const isActive = (path: string) => {
    return location.pathname === path;
  };

  return (
    <header className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${isScrolled ? 'bg-quadvis-dark/95 backdrop-blur-sm shadow-md' : 'bg-transparent'}`}>
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        <Link to="/" className="flex items-center gap-2">
          <img 
            src="/lovable-uploads/77223987-a581-48ba-ad61-470bd73d6c7f.png" 
            alt="QuadVis Logo" 
            className="h-10 w-auto" 
          />
          <span className="font-bold text-xl text-white">QuadVis</span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-8">
          <Link 
            to="/" 
            className={`transition-colors ${isActive('/') ? 'text-quadvis-orange' : 'text-white hover:text-quadvis-orange'}`}
          >
            Home
          </Link>
          <Link 
            to="/services" 
            className={`transition-colors ${isActive('/services') ? 'text-quadvis-orange' : 'text-white hover:text-quadvis-orange'}`}
          >
            Services
          </Link>
          <Link 
            to="/about" 
            className={`transition-colors ${isActive('/about') ? 'text-quadvis-orange' : 'text-white hover:text-quadvis-orange'}`}
          >
            About
          </Link>
          <Link 
            to="/case-studies" 
            className={`transition-colors ${isActive('/case-studies') ? 'text-quadvis-orange' : 'text-white hover:text-quadvis-orange'}`}
          >
            Case Studies
          </Link>
          <Link 
            to="/contact" 
            className={`transition-colors ${isActive('/contact') ? 'text-quadvis-orange' : 'text-white hover:text-quadvis-orange'}`}
          >
            Contact
          </Link>
        </nav>
        
        <div className="hidden md:block">
          <Link to="/contact">
            <Button className="quad-button">Get Started</Button>
          </Link>
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
            <Link 
              to="/" 
              className={`p-2 ${isActive('/') ? 'text-quadvis-orange' : 'text-white hover:text-quadvis-orange'}`}
            >
              Home
            </Link>
            <Link 
              to="/services" 
              className={`p-2 ${isActive('/services') ? 'text-quadvis-orange' : 'text-white hover:text-quadvis-orange'}`}
            >
              Services
            </Link>
            <Link 
              to="/about" 
              className={`p-2 ${isActive('/about') ? 'text-quadvis-orange' : 'text-white hover:text-quadvis-orange'}`}
            >
              About
            </Link>
            <Link 
              to="/case-studies" 
              className={`p-2 ${isActive('/case-studies') ? 'text-quadvis-orange' : 'text-white hover:text-quadvis-orange'}`}
            >
              Case Studies
            </Link>
            <Link 
              to="/contact" 
              className={`p-2 ${isActive('/contact') ? 'text-quadvis-orange' : 'text-white hover:text-quadvis-orange'}`}
            >
              Contact
            </Link>
          </nav>
          <Link to="/contact" className="block">
            <Button className="quad-button w-full">Get Started</Button>
          </Link>
        </div>
      )}
    </header>
  );
};

export default Navbar;
