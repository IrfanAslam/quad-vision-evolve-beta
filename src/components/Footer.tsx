
import { Link } from "react-router-dom";
import { useTheme } from "@/hooks/use-theme";

const Footer = () => {
  const { theme } = useTheme();

  return (
    <footer className={`pt-16 pb-8 ${theme === 'dark' ? 'bg-black' : 'bg-quadvis-light'}`}>
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 mb-16">
          <div>
            <div className="flex items-center gap-2 mb-6">
              <img 
                src="/src/assets/logo.png"
                alt="QuadVis Logo" 
                className="h-10 w-auto" 
              />
              <span className={`font-bold text-xl ${theme === 'dark' ? 'text-white' : 'text-gray-700'}`}>QuadVis</span>
            </div>
            <p className="text-gray-400 mb-6">
              Four Fold Innovation, One Digital Vision. Transforming data into actionable insights through advanced visualization technology.
            </p>
            <div className="flex gap-4">
              {['facebook', 'twitter', 'linkedin', 'instagram'].map((social) => (
                <a 
                  key={social}
                  href={`#${social}`}
                  className={`h-10 w-10 rounded-full flex items-center justify-center transition-colors 
                    ${theme === 'dark' ? 'bg-quadvis-dark hover:bg-quadvis-blue/20' : 'bg-quadvis-gray hover:bg-quadvis-gray/20'}`}
                >
                  <span className="text-gray-400"></span>
                </a>
              ))}
            </div>
          </div>
          
          <div>
            <h3 className={`font-bold mb-6 ${theme === 'dark' ? 'text-white' : 'text-gray-700'}`}>Quick Links</h3>
            <ul className="space-y-4">
              {[
                { label: 'Home', path: '/' },
                { label: 'About Us', path: '/about' },
                { label: 'Services', path: '/services' },
                { label: 'Case Studies', path: '/case-studies' },
                { label: 'Contact', path: '/contact' },
              ].map((link) => (
                <li key={link.label}>
                  <Link 
                    to={link.path}
                    className="text-gray-400 hover:text-quadvis-orange transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          
          <div>
            <h3 className={`font-bold mb-6 ${theme === 'dark' ? 'text-white' : 'text-gray-700'}`}>Services</h3>
            <ul className="space-y-4">
              {[
                'Web Development',
                'E-Commerce Solutions',
                'Game Development',
                'XR & Immersive Experiences',
                'Content Creation',
                'QA Automation',
              ].map((service) => (
                <li key={service}>
                  <Link 
                    to="/services"
                    className="text-gray-400 hover:text-quadvis-orange transition-colors"
                  >
                    {service}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          
          <div>
            <h3 className={`font-bold mb-6 ${theme === 'dark' ? 'text-white' : 'text-gray-700'}`}>Contact Us</h3>
            <ul className="space-y-4 text-gray-400">
              <li>
                <strong className="text-quadvis-gray">Email:</strong><br />
                info@quadvis-tech.com
              </li>
              <li>
                <strong className="text-quadvis-gray">Phone:</strong><br />
                +92 321 7741575<br />
                +92 331 4585951
              </li>
              <li>
                <strong className="text-quadvis-gray">Address:</strong><br />
                722 D Block Johar Town<br />
                Lahore, Pakistan 54782
              </li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-gray-800 pt-8 mt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="text-gray-500 text-sm mb-4 md:mb-0">
              © {new Date().getFullYear()} QuadVis Technologies. All rights reserved.
            </div>
            
            <div className="flex gap-6">
              {['Privacy Policy', 'Terms of Service', 'Cookie Policy'].map((item) => (
                <Link 
                  key={item}
                  to="#"
                  className="text-gray-500 hover:text-quadvis-orange text-sm"
                >
                  {item}
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
