
import { useEffect } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, MeshDistortMaterial } from "@react-three/drei";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ServicesContent from "@/components/ServicesContent";
import PageTransition from "@/components/PageTransition";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { motion } from "framer-motion";
import { useTheme } from "@/hooks/use-theme";

// Basic 3D cube model component
const CubeModel = () => {
  return (
    <mesh rotation={[0, Math.PI / 4, 0]}>
      <boxGeometry args={[1, 1, 1]} />
      <meshStandardMaterial color="#3366cc" />
    </mesh>
  );
};

// Basic 3D sphere model component
const SphereModel = () => {
  return (
    <mesh position={[2, 0, 0]}>
      <sphereGeometry args={[0.7, 16, 16]} />
      <MeshDistortMaterial distort={0.3} speed={2} color="#ff9933" />
    </mesh>
  );
};

// 3D website wireframe-like model
const WebsiteModel = () => {
  return (
    <group position={[-2, 0, 0]}>
      <mesh>
        <boxGeometry args={[1.5, 1, 0.1]} />
        <meshStandardMaterial color="#1e3a8a" />
      </mesh>
      <mesh position={[0, 0, 0.05]}>
        <boxGeometry args={[1.3, 0.2, 0.01]} />
        <meshStandardMaterial color="#ff9933" />
      </mesh>
      <mesh position={[0, -0.3, 0.05]}>
        <boxGeometry args={[1.3, 0.5, 0.01]} />
        <meshStandardMaterial color="#2563eb" />
      </mesh>
    </group>
  );
};

const Services = () => {
  const { theme } = useTheme();

  // Scroll to top when component mounts
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <PageTransition>
      <div className={`min-h-screen  ${theme === 'dark' ? 'bg-gradient-to-b from-quadvis-dark to-black' : 'bg-gradient-to-b from-quadvis-light to-gray-300'}`}>
        <Navbar />
        
        <div className="pt-24 pb-16">
          <div className="container mx-auto px-4">
            <motion.div 
              className="text-center mb-16"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <h1 className="text-4xl md:text-5xl font-bold mb-6">Our <span className="gradient-text">Technology Stacks</span></h1>
              <p className="text-xl max-w-3xl mx-auto">
                Cutting-edge solutions powered by the latest technologies to transform your vision into reality.
              </p>
            </motion.div>

            {/* 3D Models Showcase */}
            <motion.div 
              className="rounded-xl overflow-hidden mb-20 border border-quadvis-blue/20 shadow-xl shadow-quadvis-blue/5"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <div className="h-[400px] relative">
                <Canvas camera={{ position: [0, 0, 5] }}>
                  <ambientLight intensity={0.5} />
                  <spotLight position={[10, 10, 10]} angle={0.15} penumbra={1} />
                  <pointLight position={[-10, -10, -10]} />
                  <CubeModel />
                  <SphereModel />
                  <WebsiteModel />
                  <OrbitControls autoRotate />
                </Canvas>
                <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-transparent to-quadvis-dark/90 pointer-events-none"></div>
                <div className="absolute bottom-8 left-0 right-0 text-center">
                  <h2 className="text-2xl font-bold text-white mb-2">Interactive Technologies</h2>
                  <p className="text-gray-300">Explore our 3D development capabilities</p>
                </div>
              </div>
            </motion.div>
            
            <ServicesContent />

            <motion.div 
              className="mt-16 text-center"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.8 }}
            >
              <h3 className="text-2xl font-bold mb-6">Ready to bring your project to life?</h3>
              <Button className="quad-button group">
                Schedule a Consultation 
                <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" size={18} />
              </Button>
            </motion.div>
          </div>
        </div>
        
        <Footer />
      </div>
    </PageTransition>
  );
};

export default Services;
