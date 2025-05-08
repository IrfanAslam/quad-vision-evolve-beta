
import { useState, useEffect } from 'react';
import { Button } from "@/components/ui/button";
import { Link, useLocation } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { motion } from "framer-motion";

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
    <motion.header 
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        isScrolled 
          ? 'bg-gradient-to-r from-quadvis-blue/30 to-quadvis-orange/30 backdrop-blur-md shadow-lg' 
          : 'bg-transparent'
      }`}
    >
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        <Link to="/" className="flex items-center gap-3">
          <motion.img 
            src="/lovable-uploads/af8076ca-9c98-479d-a64f-cb9037f1f649.png" 
            alt="QuadVis Logo" 
            className="h-12 w-auto" 
            whileHover={{ scale: 1.05 }}
            transition={{ type: "spring", stiffness: 300 }}
          />
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-8">
          {[
            { path: '/', label: 'Home' },
            { path: '/services', label: 'Services' },
            { path: '/about', label: 'About' },
            { path: '/case-studies', label: 'Case Studies' },
            { path: '/contact', label: 'Contact' }
          ].map((item, index) => (
            <motion.div
              key={item.path}
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 * (index + 1) }}
            >
              <Link 
                to={item.path} 
                className={`transition-colors relative text-lg font-medium ${
                  isActive(item.path) 
                    ? 'text-quadvis-orange' 
                    : 'text-white hover:text-quadvis-orange'
                }`}
              >
                {item.label}
                {isActive(item.path) && (
                  <motion.div
                    layoutId="navbar-underline"
                    className="absolute bottom-[-5px] left-0 right-0 h-0.5 bg-quadvis-orange"
                  />
                )}
              </Link>
            </motion.div>
          ))}
        </nav>
        
        <motion.div 
          className="hidden md:block"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6 }}
        >
          <Link to="/contact">
            <Button className="quad-button text-lg px-6 py-2.5">Get Started</Button>
          </Link>
        </motion.div>
        
        {/* Mobile Menu Button */}
        <motion.button 
          className="md:hidden text-white"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          whileTap={{ scale: 0.95 }}
        >
          {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
        </motion.button>
      </div>
      
      {/* Mobile Navigation */}
      {isMobileMenuOpen && (
        <motion.div 
          className="md:hidden bg-gradient-to-r from-quadvis-blue/40 to-quadvis-orange/40 backdrop-blur-lg p-5"
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: 'auto' }}
          exit={{ opacity: 0, height: 0 }}
        >
          <nav className="flex flex-col gap-4 mb-4">
            {[
              { path: '/', label: 'Home' },
              { path: '/services', label: 'Services' },
              { path: '/about', label: 'About' },
              { path: '/case-studies', label: 'Case Studies' },
              { path: '/contact', label: 'Contact' }
            ].map((item, index) => (
              <motion.div
                key={item.path}
                initial={{ x: -20, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ delay: 0.1 * index }}
              >
                <Link 
                  to={item.path} 
                  className={`p-2 block text-lg font-medium ${
                    isActive(item.path) 
                      ? 'text-quadvis-orange' 
                      : 'text-white hover:text-quadvis-orange'
                  }`}
                >
                  {item.label}
                </Link>
              </motion.div>
            ))}
          </nav>
          <Link to="/contact" className="block">
            <Button className="quad-button w-full text-lg py-2.5">Get Started</Button>
          </Link>
        </motion.div>
      )}
    </motion.header>
  );
};

export default Navbar;
