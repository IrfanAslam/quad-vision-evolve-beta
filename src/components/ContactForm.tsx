
import { useState } from 'react';
import { Button } from "@/components/ui/button";
import { toast } from '@/hooks/use-toast';
import { useTheme } from "@/hooks/use-theme";

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  });
  
  const { theme } = useTheme();
  const [isSubmitting, setIsSubmitting] = useState(false);
  
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      toast({
        title: "Message Sent!",
        description: "We'll get back to you as soon as possible.",
      });
      
      setFormData({
        name: '',
        email: '',
        phone: '',
        subject: '',
        message: ''
      });
      
      setIsSubmitting(false);
    }, 1000);
  };
  
  return (
    <form onSubmit={handleSubmit} className="space-y-5">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
        <div>
          <label htmlFor="name" className={`block mb-1 ${theme === 'dark' ? 'text-gray-300' : 'text-gray-500'}`}>Your Name *</label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
            className={`w-full rounded-md  border border-gray-700 p-3 focus:border-quadvis-orange focus:outline-none 
              ${theme === 'dark' ? 'text-white bg-quadvis-dark' : 'text-gray-500 bg-quadvis-light'}`}
          />
        </div>
        
        <div>
          <label htmlFor="email" className={`block mb-1 ${theme === 'dark' ? 'text-gray-300' : 'text-gray-500'}`}>Your Email *</label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
            className={`w-full rounded-md border border-gray-700 p-3 focus:border-quadvis-orange focus:outline-none
              ${theme === 'dark' ? 'text-white bg-quadvis-dark' : 'text-gray-500 bg-quadvis-light'}`}
          />
        </div>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
        <div>
          <label htmlFor="phone" className={`block mb-1 ${theme === 'dark' ? 'text-gray-300' : 'text-gray-500'}`}>Phone Number</label>
          <input
            type="tel"
            id="phone"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            className={`w-full rounded-md border border-gray-700 p-3 focus:border-quadvis-orange focus:outline-none
              ${theme === 'dark' ? 'text-white bg-quadvis-dark' : 'text-gray-500 bg-quadvis-light'}`}
          />
        </div>
        
        <div>
          <label htmlFor="subject" className={`block mb-1 ${theme === 'dark' ? 'text-gray-300' : 'text-gray-500'}`}>Subject *</label>
          <select
            id="subject"
            name="subject"
            value={formData.subject}
            onChange={handleChange}
            required
            className={`w-full rounded-md border border-gray-700 p-3 focus:border-quadvis-orange focus:outline-none
              ${theme === 'dark' ? 'text-white bg-quadvis-dark' : 'text-gray-500 bg-quadvis-light'}`}
          >
            <option value="">Select a subject</option>
            <option value="General Inquiry">General Inquiry</option>
            <option value="Project Discussion">Project Discussion</option>
            <option value="Partnership">Partnership</option>
            <option value="Support">Support</option>
            <option value="Other">Other</option>
          </select>
        </div>
      </div>
      
      <div>
        <label htmlFor="message" className={`block mb-1 ${theme === 'dark' ? 'text-gray-300' : 'text-gray-500'}`}>Your Message *</label>
        <textarea
          id="message"
          name="message"
          value={formData.message}
          onChange={handleChange}
          required
          rows={5}
          className={`w-full rounded-md border border-gray-700 p-3 focus:border-quadvis-orange focus:outline-none resize-none
            ${theme === 'dark' ? 'text-white bg-quadvis-dark' : 'text-gray-500 bg-quadvis-light'}`}
        ></textarea>
      </div>
      
      <div className="flex items-center">
        <input
          type="checkbox"
          id="consent"
          required
          className="h-4 w-4 border-gray-700 rounded"
        />
        <label htmlFor="consent" className={`ml-2 text-sm ${theme === 'dark' ? 'text-gray-300' : 'text-gray-500'}`}>
          I agree to the processing of my personal data according to the Privacy Policy
        </label>
      </div>
      
      <Button 
        type="submit" 
        className="quad-button w-full" 
        disabled={isSubmitting}
      >
        {isSubmitting ? 'Sending...' : 'Send Message'}
      </Button>
    </form>
  );
};

export default ContactForm;
