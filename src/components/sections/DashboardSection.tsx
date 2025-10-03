export default function DashboardSection() {
  return (
    <section className="py-20 px-6 text-center lg:text-left" style={{ backgroundColor: '#0A0A0A' }}>
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Right Section: Text Content */}
          <div className="lg:order-2 lg:pl-8">
            <h2 className="text-5xl font-sans font-bold text-white mb-6 leading-tight">
              Hands-On Web3 Learning<br/>
              <span className="bg-gradient-to-b from-white to-gray-600 bg-clip-text text-transparent">
                With Real Projects
              </span>
            </h2>
            
            <p className="text-lg font-sans font-normal mb-8 leading-relaxed" style={{ color: '#BBBBBB' }}>
              Build real Web3 applications, smart contracts, and DeFi protocols with our 
              comprehensive curriculum and industry-standard tools.
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
              Enroll Now
            </a>
          </div>

          {/* Left Section: Dashboard Visualization */}
          <div className="lg:order-1 relative">
            <video 
              src="https://res.cloudinary.com/doevp9obh/video/upload/v1759016097/Image_Animation_Video_Ready_hvsl7j.mov"
              autoPlay
              loop
              muted
              playsInline
              className="w-full h-auto rounded-2xl"
            />
          </div>
        </div>
      </div>
    </section>
  )
}