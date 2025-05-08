
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const services = [
  {
    title: "Web Development",
    description: "We create responsive, high-performance web applications using the latest technologies including React, Vue, Angular, and Node.js.",
    features: [
      "Responsive Design",
      "Progressive Web Apps",
      "Single Page Applications",
      "Full-Stack Development"
    ],
    icon: "💻"
  },
  {
    title: "E-Commerce Solutions",
    description: "Custom e-commerce platforms designed to scale with your business, with secure payment gateways and optimized user experiences.",
    features: [
      "Custom Shopping Experiences",
      "Payment Gateway Integration",
      "Inventory Management",
      "Analytics Dashboard"
    ],
    icon: "🛒"
  },
  {
    title: "Game Development",
    description: "Engaging games across all genres, from casual mobile games to immersive multiplayer experiences and advanced 3D environments.",
    features: [
      "Multiplayer Architecture",
      "Cross-Platform Development",
      "Game Design & Strategy",
      "Unity & Unreal Engine"
    ],
    icon: "🎮"
  },
  {
    title: "XR & Immersive Experiences",
    description: "Cutting-edge VR, AR, and mixed reality applications that transform how users interact with digital content.",
    features: [
      "Virtual Reality (VR)",
      "Augmented Reality (AR)",
      "Mixed Reality Solutions",
      "Interactive 3D Environments"
    ],
    icon: "🥽"
  },
  {
    title: "Content Creation",
    description: "Compelling digital content including 3D models, animations, video editing, and interactive media for various platforms.",
    features: [
      "3D Modeling & Animation",
      "Video Production",
      "Interactive Content",
      "Digital Storytelling"
    ],
    icon: "🎨"
  },
  {
    title: "QA Automation",
    description: "Comprehensive testing solutions to ensure your applications perform flawlessly across all devices and use cases.",
    features: [
      "Automated Testing",
      "Performance Testing",
      "Cross-Browser Testing",
      "Continuous Integration"
    ],
    icon: "🧪"
  }
];

const ServicesContent = () => {
  return (
    <div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
        {services.map((service, index) => (
          <div key={index} className="quad-card group">
            <div className="text-4xl mb-4">{service.icon}</div>
            <h3 className="text-2xl font-bold mb-3">{service.title}</h3>
            <p className="text-gray-300 mb-6">{service.description}</p>
            
            <h4 className="font-semibold text-quadvis-orange mb-3">Key Features:</h4>
            <ul className="space-y-2 mb-6">
              {service.features.map((feature, i) => (
                <li key={i} className="flex items-start gap-2">
                  <div className="h-2 w-2 rounded-full bg-quadvis-orange mt-2"></div>
                  <span className="text-gray-300">{feature}</span>
                </li>
              ))}
            </ul>
            
            <Button variant="link" className="text-quadvis-orange p-0 flex items-center group-hover:text-quadvis-orange/80 transition-colors">
              Learn more
              <ArrowRight size={16} className="ml-2 group-hover:translate-x-1 transition-transform" />
            </Button>
          </div>
        ))}
      </div>
      
      <div className="bg-gradient-to-r from-quadvis-blue/20 to-quadvis-orange/20 p-8 rounded-xl">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <div>
            <h3 className="text-2xl font-bold mb-4">Custom Technology Solutions</h3>
            <p className="text-gray-300 mb-6">
              Don't see exactly what you need? We specialize in custom solutions tailored to your specific business challenges and opportunities.
            </p>
            <Button className="quad-button">
              Request Custom Solution
            </Button>
          </div>
          
          <div>
            <div className="bg-black/50 p-6 rounded-lg border border-quadvis-blue/30">
              <h4 className="text-xl font-semibold mb-4">Our Technology Stack</h4>
              <div className="flex flex-wrap gap-3">
                {[
                  "React", "Node.js", "TypeScript", "MongoDB", "GraphQL", "AWS", 
                  "Unity", "Unreal Engine", "Three.js", "WebGL", "AR/VR", "React Native",
                  "Next.js", "PostgreSQL", "Docker", "Kubernetes", "TensorFlow", "Shopify",
                  "WooCommerce", "Stripe", "Firebase", "Supabase", "Flutter", "Swift"
                ].map((tech, index) => (
                  <span key={index} className="bg-quadvis-dark px-3 py-1 rounded-full text-sm border border-quadvis-blue/20">
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServicesContent;
