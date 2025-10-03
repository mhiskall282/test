import { Instagram, Youtube } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="py-16 px-6" style={{ backgroundColor: '#0A0A0A' }}>
      <div className="max-w-7xl mx-auto">
        {/* Main Content Area */}
        <div className="grid grid-cols-1 md:grid-cols-7 gap-12 lg:gap-16 mb-16 text-center md:text-left">
          {/* Logo and Branding */}
          <div className="md:col-span-1">
            <div className="flex items-center space-x-2">
              <div className="w-6 h-6 bg-white rounded-full flex items-center justify-center">
                <div className="w-3 h-3 bg-black rounded-full"></div>
              </div>
              <span className="text-white font-bold text-xl">The Futurist Academy</span>
            </div>
          </div>

          {/* Empty column for spacing */}
          <div className="md:col-span-1"></div>

          {/* Academy Column */}
          <div className="md:col-span-1">
            <h3 className="text-white font-semibold text-base mb-4">Academy</h3>
            <ul className="space-y-3">
              <li><a href="/about" className="text-gray-400 text-sm hover:text-white transition-colors">Our Mission</a></li>
              <li><a href="/about" className="text-gray-400 text-sm hover:text-white transition-colors">Our Vision</a></li>
              <li><a href="/about" className="text-gray-400 text-sm hover:text-white transition-colors">Our Story</a></li>
              <li><a href="/about" className="text-gray-400 text-sm hover:text-white transition-colors">Meet Our Team</a></li>
            </ul>
          </div>

          {/* Courses Column */}
          <div className="md:col-span-1">
            <h3 className="text-white font-semibold text-base mb-4">Courses</h3>
            <ul className="space-y-3">
              <li><a href="#" className="text-gray-400 text-sm hover:text-white transition-colors">Web3 Development</a></li>
              <li><a href="#" className="text-gray-400 text-sm hover:text-white transition-colors">Smart Contracts</a></li>
              <li><a href="#" className="text-gray-400 text-sm hover:text-white transition-colors">DeFi Protocols</a></li>
              <li><a href="#" className="text-gray-400 text-sm hover:text-white transition-colors">More Coming Soon</a></li>
            </ul>
          </div>

          {/* Resources Column */}
          <div className="md:col-span-1">
            <h3 className="text-white font-semibold text-base mb-4">Resources</h3>
            <ul className="space-y-3">
              <li><a href="#" className="text-gray-400 text-sm hover:text-white transition-colors">Blog</a></li>
              <li><a href="#" className="text-gray-400 text-sm hover:text-white transition-colors">Case Studies</a></li>
              <li><a href="#" className="text-gray-400 text-sm hover:text-white transition-colors">Whitepapers</a></li>
              <li><a href="#" className="text-gray-400 text-sm hover:text-white transition-colors">eBooks</a></li>
            </ul>
          </div>

          {/* Support Column */}
          <div className="md:col-span-1">
            <h3 className="text-white font-semibold text-base mb-4">Support</h3>
            <ul className="space-y-3">
              <li><a href="#contact" className="text-gray-400 text-sm hover:text-white transition-colors">Contact Us</a></li>
              <li><a href="/careers" className="text-gray-400 text-sm hover:text-white transition-colors">Careers</a></li>
              <li><a href="mailto:info@thefuturistacademy.com" className="text-gray-400 text-sm hover:text-white transition-colors">Email Support</a></li>
              <li><a href="tel:+15551234567" className="text-gray-400 text-sm hover:text-white transition-colors">Phone: (555) 123-4567</a></li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="flex flex-col md:flex-row justify-between items-center pt-8 text-center md:text-left">
          {/* Social Media Icons */}
          <div className="flex items-center space-x-6 mb-4 md:mb-0">
            <a href="#" className="text-gray-400 hover:text-white transition-colors">
              <Instagram className="w-5 h-5" />
            </a>
            <a href="#" className="text-gray-400 hover:text-white transition-colors">
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
              </svg>
            </a>
            <a href="#" className="text-gray-400 hover:text-white transition-colors">
              <Youtube className="w-5 h-5" />
            </a>
          </div>

          {/* Copyright */}
          <div className="text-gray-400 text-xs">
            © Copyright The Futurist Academy 2025
          </div>
        </div>
      </div>
    </footer>
  );
}