import { Check } from 'lucide-react';

export default function InterviewBookingSection() {
  return (
    <section className="py-20 px-6 text-center lg:text-left" style={{ backgroundColor: '#0A0A0A' }}>
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left Section: Text Content */}
          <div className="lg:pr-8">
            <h2 className="text-5xl font-sans font-bold text-white mb-6 leading-tight">
              Mentorship & Career Support<br/>
              <span className="bg-gradient-to-b from-white to-gray-600 bg-clip-text text-transparent">From Day One</span>
            </h2>
            
            <p className="text-lg font-sans font-normal mb-8 leading-relaxed" style={{ color: '#BBBBBB' }}>
              Get personalized mentorship from Web3 industry professionals and career guidance 
              to land your dream job in blockchain development and emerging technologies.
            </p>

            {/* Feature List */}
            <div className="space-y-4 mb-8">
              <div className="flex items-center space-x-3">
                <Check className="w-5 h-5 text-white flex-shrink-0" />
                <span className="text-lg font-sans font-normal text-white">1-on-1 mentorship sessions</span>
              </div>
              <div className="flex items-center space-x-3">
                <Check className="w-5 h-5 text-white flex-shrink-0" />
                <span className="text-lg font-sans font-normal text-white">Career guidance & job placement</span>
              </div>
              <div className="flex items-center space-x-3">
                <Check className="w-5 h-5 text-white flex-shrink-0" />
                <span className="text-lg font-sans font-normal text-white">Industry networking opportunities</span>
              </div>
            </div>

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
              Get Mentorship
            </a>
          </div>

          {/* Right Section: Dashboard Interface */}
          <div className="relative flex items-center justify-center">
            <img 
              src="https://res.cloudinary.com/doevp9obh/image/upload/v1759015512/ChatGPT_Image_Sep_28_2025_04_54_55_AM_k9o7pn.png"
              alt="Dashboard Interface"
              className="w-full h-auto"
            />
          </div>
        </div>
      </div>
    </section>
  );
}