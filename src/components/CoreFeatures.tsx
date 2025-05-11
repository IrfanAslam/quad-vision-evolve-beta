
import { Check, BarChart3, Shield, Zap, Sparkles, ServerCog } from "lucide-react";
import { useTheme } from "@/hooks/use-theme";

const CoreFeatures = () => {
  const { theme } = useTheme();
  
  const features = [
    {
      icon: <BarChart3 size={48} className="text-quadvis-orange" />,
      title: "Data Visualization",
      description: "Transform complex data into intuitive, interactive visualizations that tell a compelling story.",
      benefits: ["Interactive Dashboards", "Real-time Analytics", "Custom Reports"]
    },
    {
      icon: <Shield size={48} className="text-quadvis-orange" />,
      title: "Secure Applications",
      description: "Build applications with security at the core, protecting sensitive data at every level.",
      benefits: ["End-to-End Encryption", "Compliance Ready", "Penetration Tested"]
    },
    {
      icon: <Zap size={48} className="text-quadvis-orange" />,
      title: "High Performance",
      description: "Create lightning-fast experiences that keep users engaged and satisfied.",
      benefits: ["Optimized Load Times", "Efficient Algorithms", "Smooth Interactions"]
    },
    {
      icon: <Sparkles size={48} className="text-quadvis-orange" />,
      title: "Modern UX Design",
      description: "Craft intuitive user experiences that delight users and drive adoption.",
      benefits: ["Accessibility First", "User Research Driven", "Responsive Design"]
    },
    {
      icon: <ServerCog size={48} className="text-quadvis-orange" />,
      title: "Scalable Architecture",
      description: "Build systems that grow with your business without compromising performance.",
      benefits: ["Cloud-Native", "Microservices Ready", "Horizontal Scaling"]
    }
  ];

  return (
    <section className={`py-24 transition-colors duration-300 ${theme === 'dark' ? 'bg-quadvis-dark/50' : 'bg-gray-50'}`}>
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className={`${theme === 'dark' ? 'text-quadvis-light' : 'text-quadvis-blue'} section-title`}>Core <span className="gradient-text">Capabilities</span></h2>
          <p className="section-subtitle">
            Delivering exceptional digital experiences through our core technology pillars
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div 
              key={index}
              className={`p-6 rounded-xl border transition-all duration-300 hover:-translate-y-1 hover:shadow-lg ${
                theme === 'dark' 
                  ? 'bg-black/20 border-quadvis-blue/20 hover:shadow-quadvis-blue/10' 
                  : 'bg-white border-gray-200 hover:shadow-gray-200'
              }`}
            >
              <div className="mb-4">{feature.icon}</div>
              <h3 className={`text-xl font-bold mb-3 ${theme === 'dark' ? 'text-gray-300' : 'text-gray-600'}`}>{feature.title}</h3>
              <p className={`mb-6 ${theme === 'dark' ? 'text-gray-300' : 'text-gray-600'}`}>
                {feature.description}
              </p>
              
              <ul className="space-y-2">
                {feature.benefits.map((benefit, i) => (
                  <li key={i} className="flex items-center gap-2">
                    <Check size={16} className="text-quadvis-orange" />
                    <span className={theme === 'dark' ? 'text-gray-300' : 'text-gray-600'}>
                      {benefit}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CoreFeatures;
