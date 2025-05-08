
const AboutContent = () => {
  return (
    <div>
      <div className="mb-20">
        <h2 className="text-3xl font-bold mb-8 text-center">Our Leadership Team</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {[
            {
              name: "Irfan Aslam",
              position: "Founder & CEO",
              bio: "Visionary tech leader with extensive experience in software development and digital transformation, passionate about creating innovative solutions.",
              image: "/placeholder.svg"
            },
            {
              name: "Sarah Ahmad",
              position: "CTO",
              bio: "Technical genius with deep expertise in web technologies, game development, and immersive experiences, leading our engineering teams.",
              image: "/placeholder.svg"
            },
            {
              name: "Michael Chen",
              position: "Creative Director",
              bio: "Award-winning designer focused on creating exceptional user experiences and stunning visuals for all our digital products.",
              image: "/placeholder.svg"
            }
          ].map((member, index) => (
            <div key={index} className="quad-card text-center">
              <div className="w-32 h-32 rounded-full overflow-hidden mx-auto mb-6 bg-gradient-to-br from-quadvis-blue/30 to-quadvis-orange/30 p-1">
                <div className="w-full h-full rounded-full overflow-hidden bg-quadvis-dark">
                  <img src={member.image} alt={member.name} className="w-full h-full object-cover" />
                </div>
              </div>
              <h3 className="text-xl font-bold mb-1">{member.name}</h3>
              <p className="text-quadvis-orange mb-3">{member.position}</p>
              <p className="text-gray-300">{member.bio}</p>
            </div>
          ))}
        </div>
      </div>
      
      <div className="mb-20">
        <h2 className="text-3xl font-bold mb-8 text-center">Our Mission</h2>
        <div className="quad-card">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
            <div>
              <h3 className="text-2xl font-bold mb-4">What We Do</h3>
              <p className="text-gray-300 mb-4">
                At QuadVis Technologies, we create digital solutions that solve real-world problems. We bridge the gap between complex technology and human needs, delivering products that are both innovative and intuitive.
              </p>
              <p className="text-gray-300">
                Our services span the full spectrum of digital development, from web and e-commerce solutions to cutting-edge game development and immersive XR experiences. Whatever your digital challenge, we have the expertise to meet it.
              </p>
            </div>
            
            <div>
              <h3 className="text-2xl font-bold mb-4">Why We Do It</h3>
              <p className="text-gray-300 mb-4">
                We believe that technology should enhance human experience, not complicate it. Our mission is to democratize access to advanced digital solutions, making powerful tools and experiences available to organizations of all sizes.
              </p>
              <p className="text-gray-300">
                We're passionate about pushing the boundaries of what's possible in digital spaces while ensuring that our solutions remain accessible, usable, and valuable to the people who interact with them.
              </p>
            </div>
          </div>
        </div>
      </div>
      
      <div className="mb-20">
        <h2 className="text-3xl font-bold mb-8 text-center">Our Approach</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {[
            {
              number: "01",
              title: "Understand",
              description: "We begin by deeply understanding your business, goals, and challenges."
            },
            {
              number: "02",
              title: "Innovate",
              description: "We develop creative solutions tailored to your specific needs and objectives."
            },
            {
              number: "03",
              title: "Implement",
              description: "We bring ideas to life with clean, efficient, and maintainable code."
            },
            {
              number: "04",
              title: "Optimize",
              description: "We continuously refine our solutions to maximize performance and results."
            }
          ].map((step, index) => (
            <div key={index} className="quad-card">
              <div className="text-3xl font-bold text-quadvis-orange mb-2">{step.number}</div>
              <h3 className="text-xl font-bold mb-3">{step.title}</h3>
              <p className="text-gray-300">{step.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default AboutContent;
