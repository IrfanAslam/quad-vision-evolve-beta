
import { Button } from "@/components/ui/button";
import { useTheme } from "@/hooks/use-theme";

const About = () => {
  const { theme } = useTheme();  

  return (
    <section id="about" className={`py-20 relative overflow-hidden ${theme === 'dark' ? 'bg-gradient-to-b from-quadvis-dark to-black' : 'bg-gradient-to-b from-quadvis-light to-gray-300'}`}>
      {/* Background elements */}
      <div className="absolute top-0 right-0 w-1/3 h-1/3 bg-quadvis-blue/10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 left-0 w-1/4 h-1/4 bg-quadvis-orange/10 rounded-full blur-3xl"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <h2 className="section-title">About <span className="gradient-text">QuadVis</span></h2>
          <p className="section-subtitle">
            We are pioneers in digital visualization, committed to transforming how organizations perceive, process, and leverage their data.
          </p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-16">
          <div className="order-2 lg:order-1">
            <h3 className={`text-2xl font-bold mb-4 ${theme === 'dark' ? 'text-white' : 'text-gray-700'}`}>Our Vision</h3>
            <p className={`mb-6 ${theme === 'dark' ? 'text-gray-300' : 'text-gray-500'}`}>
              At QuadVis Technologies, we envision a world where complex data becomes intuitive knowledge, where digital barriers dissolve, and where technology enhances human capability rather than complicating it.
            </p>
            <p className={`mb-6 ${theme === 'dark' ? 'text-gray-300' : 'text-gray-500'}`}>
              Our name "QuadVis" represents the four pillars of our approach: Visualization, Innovation, Simplification, and Integration. These core principles guide everything we do, from product development to customer service.
            </p>
            <h3 className={`text-2xl font-bold mb-4 mt-8 ${theme === 'dark' ? 'text-white' : 'text-gray-700'}`}>Our Mission</h3>
            <p className={`mb-6 ${theme === 'dark' ? 'text-gray-300' : 'text-gray-500'}`}>
              We're on a mission to democratize advanced data visualization and analytics, making powerful tools accessible to organizations of all sizes. By providing intuitive, powerful solutions, we enable our clients to uncover insights that drive genuine business transformation.
            </p>
            
            <Button className="quad-button mt-4">Learn Our Story</Button>
          </div>
          
          <div className="order-1 lg:order-2 relative">
            <div className="relative aspect-square max-w-md mx-auto">
              {/* Four-quadrant visual representing "four fold innovation" */}
              <div className="grid grid-cols-2 gap-4 h-full">
                <div className="quad-card flex flex-col items-center justify-center text-center">
                  <div className="h-16 w-16 rounded-full bg-quadvis-blue/20 flex items-center justify-center mb-4">
                    <span className="text-2xl font-bold text-quadvis-blue">V</span>
                  </div>
                  <h4 className={`text-lg font-bold mb-2 ${theme === 'dark' ? 'text-white' : 'text-gray-700'}`}>Visualization</h4>
                  <p className="text-sm text-gray-400">Transforming data into actionable visual insights</p>
                </div>
                
                <div className="quad-card flex flex-col items-center justify-center text-center">
                  <div className="h-16 w-16 rounded-full bg-quadvis-orange/20 flex items-center justify-center mb-4">
                    <span className="text-2xl font-bold text-quadvis-orange">I</span>
                  </div>
                  <h4 className={`text-lg font-bold mb-2 ${theme === 'dark' ? 'text-white' : 'text-gray-700'}`}>Innovation</h4>
                  <p className="text-sm text-gray-400">Pioneering new approaches to digital challenges</p>
                </div>
                
                <div className="quad-card flex flex-col items-center justify-center text-center">
                  <div className="h-16 w-16 rounded-full bg-quadvis-orange/20 flex items-center justify-center mb-4">
                    <span className="text-2xl font-bold text-quadvis-orange">S</span>
                  </div>
                  <h4 className={`text-lg font-bold mb-2 ${theme === 'dark' ? 'text-white' : 'text-gray-700'}`}>Simplification</h4>
                  <p className="text-sm text-gray-400">Making complex technology intuitive and accessible</p>
                </div>
                
                <div className="quad-card flex flex-col items-center justify-center text-center">
                  <div className="h-16 w-16 rounded-full bg-quadvis-blue/20 flex items-center justify-center mb-4">
                    <span className="text-2xl font-bold text-quadvis-blue">I</span>
                  </div>
                  <h4 className={`text-lg font-bold mb-2 ${theme === 'dark' ? 'text-white' : 'text-gray-700'}`}>Integration</h4>
                  <p className="text-sm text-gray-400">Seamlessly connecting systems and data sources</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        {/* Values Section */}
        <div className="mt-24">
          <div className="text-center mb-16">
            <h2 className={`text-3xl font-bold mb-4 ${theme === 'dark' ? 'text-white' : 'text-gray-700'}`}>Our Core Values</h2>
            <p className={`max-w-2xl mx-auto ${theme === 'dark' ? 'text-gray-300' : 'text-gray-600'}`}>
              These principles guide our team in delivering exceptional solutions and building lasting relationships with our clients.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                title: 'Innovation',
                description: 'We push boundaries and explore new frontiers to deliver cutting-edge solutions.'
              },
              {
                title: 'Integrity',
                description: 'We maintain the highest ethical standards in all our business relationships and practices.'
              },
              {
                title: 'Excellence',
                description: 'We strive for perfection in every project, product, and customer interaction.'
              },
              {
                title: 'Collaboration',
                description: 'We believe in the power of teamwork—both internally and with our clients.'
              }
            ].map((value, index) => (
              <div key={index} className="quad-card h-full">
                <div className="mb-4 h-12 w-12 rounded-full bg-gradient-to-br from-quadvis-blue to-quadvis-orange flex items-center justify-center">
                  <span className="font-bold text-white">{index + 1}</span>
                </div>
                <h3 className={`text-xl font-bold mb-3 ${theme === 'dark' ? 'text-white' : 'text-gray-700'}`}>{value.title}</h3>
                <p className="text-gray-400">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
