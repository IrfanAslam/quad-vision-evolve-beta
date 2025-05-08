
import { useEffect } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ContactForm from "@/components/ContactForm";
import { Phone, Mail, Home, Globe } from "lucide-react";

const Contact = () => {
  // Scroll to top when component mounts
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-quadvis-dark text-white">
      <Navbar />
      
      <div className="pt-24 pb-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Contact <span className="gradient-text">Us</span></h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Have a question or ready to start your next project? Get in touch with our team today.
            </p>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
            <div>
              <div className="quad-card mb-8">
                <h2 className="text-2xl font-bold mb-6">Get in Touch</h2>
                <div className="space-y-6">
                  <div className="flex items-start gap-4">
                    <div className="h-12 w-12 rounded-full bg-quadvis-blue/20 flex items-center justify-center flex-shrink-0">
                      <Phone className="h-5 w-5 text-quadvis-orange" />
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold mb-1">Phone</h3>
                      <p className="text-gray-300">+92 321 7741575</p>
                      <p className="text-gray-300">+92 331 4585951</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-4">
                    <div className="h-12 w-12 rounded-full bg-quadvis-blue/20 flex items-center justify-center flex-shrink-0">
                      <Mail className="h-5 w-5 text-quadvis-orange" />
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold mb-1">Email</h3>
                      <p className="text-gray-300">info@quadvis-tech.com</p>
                      <p className="text-gray-300">support@quadvis-tech.com</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-4">
                    <div className="h-12 w-12 rounded-full bg-quadvis-blue/20 flex items-center justify-center flex-shrink-0">
                      <Home className="h-5 w-5 text-quadvis-orange" />
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold mb-1">Office</h3>
                      <p className="text-gray-300">722 D Block Johar Town</p>
                      <p className="text-gray-300">Lahore, Pakistan 54782</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-4">
                    <div className="h-12 w-12 rounded-full bg-quadvis-blue/20 flex items-center justify-center flex-shrink-0">
                      <Globe className="h-5 w-5 text-quadvis-orange" />
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold mb-1">Working Hours</h3>
                      <p className="text-gray-300">Monday - Friday: 9am - 6pm</p>
                      <p className="text-gray-300">Saturday: 10am - 2pm</p>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="quad-card">
                <h2 className="text-2xl font-bold mb-4">Follow Us</h2>
                <p className="text-gray-300 mb-6">Stay connected with us on social media for updates and insights.</p>
                <div className="flex gap-4">
                  {['facebook', 'twitter', 'linkedin', 'instagram'].map((social) => (
                    <a 
                      key={social}
                      href={`#${social}`}
                      className="h-12 w-12 rounded-full bg-quadvis-dark flex items-center justify-center hover:bg-quadvis-blue/20 transition-colors"
                    >
                      <span className="text-gray-400"></span>
                    </a>
                  ))}
                </div>
              </div>
            </div>
            
            <div className="quad-card">
              <h2 className="text-2xl font-bold mb-6">Send Us a Message</h2>
              <ContactForm />
            </div>
          </div>
          
          <div className="rounded-xl overflow-hidden h-[400px] border border-quadvis-blue/20">
            <iframe 
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3401.673476714326!2d74.28526687551063!3d31.495760348463565!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x391903f2a1dbbed7%3A0xf57a94b00851f56a!2sJohar%20Town%20Block%20D%2C%20Johar%20Town%2C%20Lahore%2C%20Punjab%2C%20Pakistan!5e0!3m2!1sen!2s!4v1715192275832!5m2!1sen!2s" 
              width="100%" 
              height="100%" 
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              title="QuadVis Office Location"
            ></iframe>
          </div>
        </div>
      </div>
      
      <Footer />
    </div>
  );
};

export default Contact;
