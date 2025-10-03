import { Lock, Hexagon } from 'lucide-react';

export default function SecuritySection() {
  return (
    <section className="py-20 px-6 text-center lg:text-left" style={{ backgroundColor: '#0A0A0A' }}>
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-16 items-center">
          {/* Left Section: Text Content */}
          <div className="lg:col-span-3 lg:pr-8">
            <h2 className="text-5xl font-sans font-bold text-white mb-6 leading-tight">
              Learn Blockchain Security<br/>
              <span className="bg-gradient-to-b from-white to-gray-600 bg-clip-text text-transparent">From Industry Experts</span>
            </h2>
            
            <p className="text-lg font-sans font-normal mb-8 leading-relaxed" style={{ color: '#BBBBBB' }}>
              Master smart contract security, DeFi protocols, and cloud security 
              with hands-on labs and real-world case studies.
            </p>

            <a 
              href="#"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block px-6 py-3 rounded-lg font-sans font-normal text-white border transition-all duration-300 hover:border-gray-400 hover:shadow-lg"
              style={{ 
                backgroundColor: '#1A1A1A',
                borderColor: '#444444'
              }}
            >
              Start Learning
            </a>
          </div>

          {/* Right Section: Security Visuals */}
          <div className="lg:col-span-2 relative flex items-center justify-end min-h-[400px] pl-8">
            <video 
              src="https://res.cloudinary.com/doevp9obh/video/upload/v1759016113/Video_Generation_From_Image_nxyrmc.mov"
              autoPlay
              loop
              muted
              playsInline
              className="w-full h-auto"
            />
          </div>
        </div>
      </div>
    </section>
  );
}