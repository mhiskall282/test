import { useState } from 'react';
import { Menu, X } from 'lucide-react';
import LogoCloud from './components/sections/LogoCloud';
import StatisticsSection from './components/sections/StatisticsSection';
import DashboardSection from './components/sections/DashboardSection';
import SecuritySection from './components/sections/SecuritySection';
import InterviewBookingSection from './components/sections/InterviewBookingSection';
import EffortlessSecuritySection from './components/sections/EffortlessSecuritySection';
import TestimonialsSection from './components/sections/TestimonialsSection';
import FAQSection from './components/sections/FAQSection';
import CTABanner from './components/sections/CTABanner';
import Footer from './components/layout/Footer';
import RegistrationModal from './components/forms/RegistrationModal';
import ContactForm from './components/forms/ContactForm';
import { SpeedInsights } from "@vercel/speed-insights/react";

function App() {
  const [isRegistrationModalOpen, setIsRegistrationModalOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <>
    <SpeedInsights />
    <div className="min-h-screen relative overflow-hidden" id="home">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: 'url(https://res.cloudinary.com/doevp9obh/image/upload/v1758953729/ChatGPT_Image_Sep_27_2025_11_33_24_AM_lokl3m.jpg)'
        }}
      ></div>

      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-5 lg:px-11 py-5 bg-black bg-opacity-30 backdrop-blur-sm animate-fadeIn">
        <div className="flex items-center space-x-2">
          <div className="w-7 h-7 bg-white rounded-full flex items-center justify-center">
            <div className="w-3.5 h-3.5 bg-black rounded-full"></div>
          </div>
          <span className="text-white font-normal text-lg">The Futurist Academy</span>
         
        </div>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center space-x-7">
          <a href="#features" className="text-white cursor-pointer hover:text-gray-300 transition-colors">Courses</a>
          {/* <a href="#security" className="text-white cursor-pointer hover:text-gray-300 transition-colors">Web3</a> */}
          <a href="#testimonials" className="text-white cursor-pointer hover:text-gray-300 transition-colors">Success Stories</a>
          <a href="#faq" className="text-white cursor-pointer hover:text-gray-300 transition-colors">FAQ</a>
          <a href="#contact" className="text-white cursor-pointer hover:text-gray-300 transition-colors">Contact</a>
          <a href="/careers" className="text-white cursor-pointer hover:text-gray-300 transition-colors">Careers</a>
          <a href="/about" className="text-white cursor-pointer hover:text-gray-300 transition-colors">About</a>
        </div>

        <div className="flex items-center space-x-3.5">
          <button 
            onClick={() => setIsRegistrationModalOpen(true)}
            className="hidden md:block px-5 py-1.5 border border-gray-600 text-white rounded-full hover:border-gray-400 transition-all duration-300 hover:shadow-lg"
          >
            Enroll Now
          </button>
          <button 
            onClick={() => setIsMobileMenuOpen(true)}
            className="md:hidden text-white"
          >
            <Menu className="w-5 h-5" />
          </button>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      {isMobileMenuOpen && (
        <div className="fixed inset-0 z-50 md:hidden">
          {/* Backdrop */}
          <div 
            className="absolute inset-0 bg-black bg-opacity-50"
            onClick={() => setIsMobileMenuOpen(false)}
          ></div>
          
          {/* Mobile Menu Panel */}
          <div className="absolute top-0 right-0 h-full w-80 max-w-[85vw] bg-black bg-opacity-95 backdrop-blur-md">
            {/* Header */}
            <div className="flex items-center justify-between p-6 border-b border-gray-700">
              <div className="flex items-center space-x-2">
                <div className="w-7 h-7 bg-white rounded-full flex items-center justify-center">
                  <div className="w-3.5 h-3.5 bg-black rounded-full"></div>
                </div>
                <span className="text-white font-normal text-lg">The Futurist Academy</span>
              </div>
              <button 
                onClick={() => setIsMobileMenuOpen(false)}
                className="text-white hover:text-gray-300 transition-colors"
              >
                <X className="w-6 h-6" />
              </button>
            </div>
            
            {/* Navigation Links */}
            <div className="p-6 space-y-6">
              <a 
                href="#features" 
                className="block text-white text-lg hover:text-gray-300 transition-colors py-2"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Courses
              </a>
              {/* <a 
                href="#security" 
                className="block text-white text-lg hover:text-gray-300 transition-colors py-2"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Web3
              </a> */}
              <a 
                href="#testimonials" 
                className="block text-white text-lg hover:text-gray-300 transition-colors py-2"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Success Stories
              </a>
              <a 
                href="#faq" 
                className="block text-white text-lg hover:text-gray-300 transition-colors py-2"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                FAQ
              </a>
              <a 
                href="#contact" 
                className="block text-white text-lg hover:text-gray-300 transition-colors py-2"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Contact
              </a>
              <a 
                href="/careers" 
                className="block text-white text-lg hover:text-gray-300 transition-colors py-2"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Careers
              </a>
              <a 
                href="/about" 
                className="block text-white text-lg hover:text-gray-300 transition-colors py-2"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                About
              </a>
              
              {/* Mobile Register Button */}
              <button 
                onClick={() => {
                  setIsMobileMenuOpen(false);
                  setIsRegistrationModalOpen(true);
                }}
                className="w-full mt-8 px-5 py-3 border border-gray-600 text-white rounded-full hover:border-gray-400 transition-all duration-300 hover:shadow-lg"
              >
                Enroll Now
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Hero Content */}
      <div className="relative z-40 flex flex-col items-center justify-center px-6 pt-20 pb-20 min-h-[80vh]">
        {/* Main Heading */}
        <h1 className="text-center mb-6 opacity-0 animate-fadeInUpDelay">
          <span className="block text-4xl md:text-5xl lg:text-6xl font-normal md:font-medium text-white leading-tight drop-shadow-2xl">
          Innovate • Build • Belong
          </span>
          <span className="block text-4xl md:text-5xl lg:text-6xl font-normal md:font-medium bg-gradient-to-b from-white to-gray-600 bg-clip-text text-transparent leading-tight drop-shadow-2xl">
            @ The Futurist Academy
          </span>
        </h1>

        {/* Subheading */}
        <p className="text-center text-gray-300 text-sm md:text-base max-w-lg mb-6 leading-relaxed font-normal opacity-0 animate-fadeInDelay">
          Learn from industry experts and build the future<br/> with cutting-edge Web3 technologies and cloud computing.
        </p>

        {/* CTA Button */}
        <a 
          href="#"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block px-6 py-3 bg-black text-white font-normal rounded-full border border-gray-700 hover:border-gray-500 hover:shadow-2xl hover:shadow-purple-500/20 transition-all duration-300 transform hover:-translate-y-1 opacity-0 animate-fadeInDelay"
        >
          Start Learning
        </a>
      </div>

      {/* Gradient Fade at Bottom */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-b from-transparent to-black z-30"></div>
    </div>

    {/* Logo Cloud Section */}
    <div id="partners">
      <LogoCloud />
    </div>

    {/* Statistics Section */}
    <div id="features">
      <StatisticsSection />
    </div>

    {/* Dashboard Section */}
    <DashboardSection />

    {/* Security Section */}
    <div id="security">
      <SecuritySection />
    </div>

    {/* Interview Booking Section */}
    <InterviewBookingSection />

    {/* Effortless Security Section */}
    <EffortlessSecuritySection />

    {/* Testimonials Section */}
    <div id="testimonials">
      <TestimonialsSection />
    </div>

    {/* FAQ Section */}
    <div id="faq">
      <FAQSection />
    </div>

    {/* Contact Form Section */}
    <div id="contact">
      <ContactForm />
    </div>

    {/* CTA Banner */}
    <CTABanner />

    {/* Footer */}
    <Footer />

    {/* Registration Modal */}
    <RegistrationModal 
      isOpen={isRegistrationModalOpen}
      onClose={() => setIsRegistrationModalOpen(false)}
    />
    </>
  );
}

export default App;