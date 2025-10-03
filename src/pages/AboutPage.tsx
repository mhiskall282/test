import { useState } from 'react';
import { Menu, X, Users, Target, Award, Globe, BookOpen, Briefcase, Mail, Linkedin, Twitter } from 'lucide-react';

// Team members data
const teamMembers = [
  {
    id: 1,
    name: 'Dr. Alex Thompson',
    role: 'Founder & CEO',
    bio: 'Former blockchain architect at leading tech companies with 10+ years in Web3 development.',
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop&crop=face',
    linkedin: '#',
    twitter: '#',
    email: 'alex@thefuturistacademy.com'
  },
  {
    id: 2,
    name: 'Sarah Martinez',
    role: 'Head of Education',
    bio: 'Smart contract expert and former DeFi protocol developer with a passion for teaching.',
    image: 'https://images.unsplash.com/photo-1494790108755-2616b612b786?w=400&h=400&fit=crop&crop=face',
    linkedin: '#',
    twitter: '#',
    email: 'sarah@thefuturistacademy.com'
  },
  {
    id: 3,
    name: 'Mike Johnson',
    role: 'Lead Blockchain Developer',
    bio: 'DeFi protocol specialist with expertise in yield farming and liquidity mechanisms.',
    image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&h=400&fit=crop&crop=face',
    linkedin: '#',
    twitter: '#',
    email: 'mike@thefuturistacademy.com'
  },
  {
    id: 4,
    name: 'Dr. Lisa Chen',
    role: 'Security Director',
    bio: 'Blockchain security expert and certified smart contract auditor with 8+ years experience.',
    image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&h=400&fit=crop&crop=face',
    linkedin: '#',
    twitter: '#',
    email: 'lisa@thefuturistacademy.com'
  },
  {
    id: 5,
    name: 'David Kim',
    role: 'Frontend Development Lead',
    bio: 'Web3 frontend specialist focusing on user experience and wallet integration.',
    image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400&h=400&fit=crop&crop=face',
    linkedin: '#',
    twitter: '#',
    email: 'david@thefuturistacademy.com'
  },
  {
    id: 6,
    name: 'Emma Rodriguez',
    role: 'Career Development Manager',
    bio: 'Former HR director at major tech companies, specializing in Web3 career placement.',
    image: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=400&h=400&fit=crop&crop=face',
    linkedin: '#',
    twitter: '#',
    email: 'emma@thefuturistacademy.com'
  }
];

// Values data
const values = [
  {
    icon: Target,
    title: 'Excellence',
    description: 'We strive for the highest quality in education and student outcomes.'
  },
  {
    icon: Users,
    title: 'Community',
    description: 'Building a supportive network of Web3 professionals and learners.'
  },
  {
    icon: Award,
    title: 'Innovation',
    description: 'Staying at the forefront of blockchain technology and education.'
  },
  {
    icon: Globe,
    title: 'Accessibility',
    description: 'Making Web3 education accessible to everyone, everywhere.'
  }
];

// Stats data
const stats = [
  { number: '2,500+', label: 'Students Trained' },
  { number: '95%', label: 'Job Placement Rate' },
  { number: '100+', label: 'Industry Partners' },
  { number: '25+', label: 'Courses Available' }
];

export default function AboutPage() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <div className="min-h-screen" style={{ backgroundColor: '#000000' }}>
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-5 lg:px-11 py-5 bg-black bg-opacity-30 backdrop-blur-sm">
        <div className="flex items-center space-x-2">
          <div className="w-7 h-7 bg-white rounded-full flex items-center justify-center">
            <div className="w-3.5 h-3.5 bg-black rounded-full"></div>
          </div>
          <a href="/" className="text-white font-normal text-lg hover:text-gray-300 transition-colors">The Futurist Academy</a>
        </div>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center space-x-7">
          <a href="/#features" className="text-white cursor-pointer hover:text-gray-300 transition-colors">Courses</a>
          <a href="/#security" className="text-white cursor-pointer hover:text-gray-300 transition-colors">Web3</a>
          <a href="/#testimonials" className="text-white cursor-pointer hover:text-gray-300 transition-colors">Success Stories</a>
          <a href="/#faq" className="text-white cursor-pointer hover:text-gray-300 transition-colors">FAQ</a>
          <a href="/#contact" className="text-white cursor-pointer hover:text-gray-300 transition-colors">Contact</a>
          <a href="/careers" className="text-white cursor-pointer hover:text-gray-300 transition-colors">Careers</a>
          <a href="/about" className="text-white cursor-pointer hover:text-gray-300 transition-colors">About</a>
        </div>

        <div className="flex items-center space-x-3.5">
          <a 
            href="/"
            className="hidden md:block px-5 py-1.5 border border-gray-600 text-white rounded-full hover:border-gray-400 transition-all duration-300 hover:shadow-lg"
          >
            Back to Home
          </a>
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
                href="/#features" 
                className="block text-white text-lg hover:text-gray-300 transition-colors py-2"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Courses
              </a>
              <a 
                href="/#security" 
                className="block text-white text-lg hover:text-gray-300 transition-colors py-2"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Web3
              </a>
              <a 
                href="/#testimonials" 
                className="block text-white text-lg hover:text-gray-300 transition-colors py-2"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Success Stories
              </a>
              <a 
                href="/#faq" 
                className="block text-white text-lg hover:text-gray-300 transition-colors py-2"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                FAQ
              </a>
              <a 
                href="/#contact" 
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
              
              {/* Mobile Back to Home Button */}
              <a 
                href="/"
                className="w-full mt-8 px-5 py-3 border border-gray-600 text-white rounded-full hover:border-gray-400 transition-all duration-300 hover:shadow-lg text-center block"
              >
                Back to Home
              </a>
            </div>
          </div>
        </div>
      )}

      {/* Hero Section */}
      <div className="pt-32 pb-20 px-6 text-center" style={{ backgroundColor: '#0A0A0A' }}>
        <div className="max-w-4xl mx-auto">
          <h1 className="text-5xl font-bold text-white mb-6">
            About The Futurist<br/>
            <span className="bg-gradient-to-b from-white to-gray-600 bg-clip-text text-transparent">
              Academy
            </span>
          </h1>
          <p className="text-lg text-gray-300 mb-8">
            Empowering the next generation of Web3 developers and blockchain innovators 
            through world-class education and hands-on experience.
          </p>
        </div>
      </div>

      {/* Mission & Vision Section */}
      <div className="py-20 px-6" style={{ backgroundColor: '#000000' }}>
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            {/* Mission */}
            <div>
              <h2 className="text-4xl font-bold text-white mb-6">Our Mission</h2>
              <p className="text-lg text-gray-300 mb-6 leading-relaxed">
                To democratize Web3 education and create a global community of skilled blockchain developers. 
                We believe that everyone should have access to the knowledge and tools needed to participate 
                in the decentralized future.
              </p>
              <p className="text-lg text-gray-300 leading-relaxed">
                Through our comprehensive curriculum, expert mentorship, and industry partnerships, 
                we're building the bridge between traditional education and the Web3 revolution.
              </p>
            </div>

            {/* Vision */}
            <div>
              <h2 className="text-4xl font-bold text-white mb-6">Our Vision</h2>
              <p className="text-lg text-gray-300 mb-6 leading-relaxed">
                To become the world's leading Web3 education platform, producing thousands of 
                skilled developers who will shape the future of decentralized technology.
              </p>
              <p className="text-lg text-gray-300 leading-relaxed">
                We envision a world where blockchain technology is accessible to all, 
                and our graduates are at the forefront of innovation in DeFi, NFTs, 
                and the broader Web3 ecosystem.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Stats Section */}
      <div className="py-20 px-6" style={{ backgroundColor: '#0A0A0A' }}>
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-6">Our Impact</h2>
            <p className="text-lg text-gray-300">
              Numbers that speak to our commitment to excellence and student success
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-5xl font-bold text-white mb-2">{stat.number}</div>
                <div className="text-gray-300">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Values Section */}
      <div className="py-20 px-6" style={{ backgroundColor: '#000000' }}>
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-6">Our Values</h2>
            <p className="text-lg text-gray-300">
              The principles that guide everything we do at The Futurist Academy
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <div key={index} className="text-center">
                <div className="w-16 h-16 bg-gray-800 rounded-full flex items-center justify-center mx-auto mb-6">
                  <value.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-white mb-4">{value.title}</h3>
                <p className="text-gray-300">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Team Section */}
      <div className="py-20 px-6" style={{ backgroundColor: '#0A0A0A' }}>
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-6">Meet Our Team</h2>
            <p className="text-lg text-gray-300">
              Industry experts and passionate educators dedicated to your success
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {teamMembers.map((member) => (
              <div key={member.id} className="bg-gray-900 rounded-2xl p-6 text-center hover:bg-gray-800 transition-all duration-300">
                <div className="w-32 h-32 rounded-full mx-auto mb-6 overflow-hidden">
                  <img 
                    src={member.image} 
                    alt={member.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                <h3 className="text-xl font-bold text-white mb-2">{member.name}</h3>
                <p className="text-gray-300 mb-4">{member.role}</p>
                <p className="text-gray-400 text-sm mb-6 leading-relaxed">{member.bio}</p>
                
                <div className="flex items-center justify-center space-x-4">
                  <a 
                    href={member.linkedin}
                    className="text-gray-400 hover:text-white transition-colors"
                  >
                    <Linkedin className="w-5 h-5" />
                  </a>
                  <a 
                    href={member.twitter}
                    className="text-gray-400 hover:text-white transition-colors"
                  >
                    <Twitter className="w-5 h-5" />
                  </a>
                  <a 
                    href={`mailto:${member.email}`}
                    className="text-gray-400 hover:text-white transition-colors"
                  >
                    <Mail className="w-5 h-5" />
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Story Section */}
      <div className="py-20 px-6" style={{ backgroundColor: '#000000' }}>
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold text-white mb-6">Our Story</h2>
          <div className="space-y-6 text-lg text-gray-300 leading-relaxed">
            <p>
              The Futurist Academy was founded in 2023 by Dr. Alex Thompson, a former blockchain architect 
              who recognized the growing gap between traditional computer science education and the rapidly 
              evolving Web3 landscape.
            </p>
            <p>
              After witnessing countless talented developers struggle to break into the blockchain industry 
              due to lack of specialized knowledge and practical experience, Alex assembled a team of 
              industry veterans to create a comprehensive Web3 education platform.
            </p>
            <p>
              Today, we've grown from a small team of passionate educators to a global platform serving 
              thousands of students worldwide. Our graduates work at leading companies like Coinbase, 
              Uniswap, and Chainlink, and many have gone on to found their own successful Web3 startups.
            </p>
            <p>
              We continue to evolve with the industry, constantly updating our curriculum to reflect the 
              latest developments in blockchain technology, DeFi protocols, and Web3 applications.
            </p>
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="py-20 px-6 text-center" style={{ backgroundColor: '#0A0A0A' }}>
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-bold text-white mb-6">
            Ready to Join Our Community?
          </h2>
          <p className="text-lg text-gray-300 mb-8">
            Start your Web3 journey with The Futurist Academy and become part of the next generation 
            of blockchain innovators.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="/#features"
              className="bg-white text-black px-8 py-4 rounded-lg font-medium hover:bg-gray-100 transition-colors"
            >
              Explore Courses
            </a>
            <a
              href="/careers"
              className="border border-gray-600 text-white px-8 py-4 rounded-lg font-medium hover:border-gray-400 transition-colors"
            >
              View Careers
            </a>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="py-16 px-6" style={{ backgroundColor: '#000000' }}>
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
                <li><a href="/#features" className="text-gray-400 text-sm hover:text-white transition-colors">Web3 Development</a></li>
                <li><a href="/#features" className="text-gray-400 text-sm hover:text-white transition-colors">Smart Contracts</a></li>
                <li><a href="/#features" className="text-gray-400 text-sm hover:text-white transition-colors">DeFi Protocols</a></li>
                <li><a href="/#features" className="text-gray-400 text-sm hover:text-white transition-colors">More Coming Soon</a></li>
              </ul>
            </div>

            {/* Resources Column */}
            <div className="md:col-span-1">
              <h3 className="text-white font-semibold text-base mb-4">Resources</h3>
              <ul className="space-y-3">
                <li><a href="/#features" className="text-gray-400 text-sm hover:text-white transition-colors">Blog</a></li>
                <li><a href="/#features" className="text-gray-400 text-sm hover:text-white transition-colors">Case Studies</a></li>
                <li><a href="/#features" className="text-gray-400 text-sm hover:text-white transition-colors">Whitepapers</a></li>
                <li><a href="/#features" className="text-gray-400 text-sm hover:text-white transition-colors">eBooks</a></li>
              </ul>
            </div>

            {/* Support Column */}
            <div className="md:col-span-1">
              <h3 className="text-white font-semibold text-base mb-4">Support</h3>
              <ul className="space-y-3">
                <li><a href="/#contact" className="text-gray-400 text-sm hover:text-white transition-colors">Contact Us</a></li>
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
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12.017 0C5.396 0 .029 5.367.029 11.987c0 5.079 3.158 9.417 7.618 11.174-.105-.949-.199-2.403.041-3.439.219-.937 1.406-5.957 1.406-5.957s-.359-.72-.359-1.781c0-1.663.967-2.911 2.168-2.911 1.024 0 1.518.769 1.518 1.688 0 1.029-.653 2.567-.992 3.992-.285 1.193.6 2.165 1.775 2.165 2.128 0 3.768-2.245 3.768-5.487 0-2.861-2.063-4.869-5.008-4.869-3.41 0-5.409 2.562-5.409 5.199 0 1.033.394 2.143.889 2.741.099.12.112.225.085.345-.09.375-.293 1.199-.334 1.363-.053.225-.172.271-.402.165-1.495-.69-2.433-2.878-2.433-4.646 0-3.776 2.748-7.252 7.92-7.252 4.158 0 7.392 2.967 7.392 6.923 0 4.135-2.607 7.462-6.233 7.462-1.214 0-2.357-.629-2.746-1.378l-.748 2.853c-.271 1.043-1.002 2.35-1.492 3.146C9.57 23.812 10.763 24.009 12.017 24.009c6.624 0 11.99-5.367 11.99-11.988C24.007 5.367 18.641.001 12.017.001z"/>
                </svg>
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
                </svg>
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
                </svg>
              </a>
            </div>

            {/* Copyright */}
            <div className="text-gray-400 text-xs">
              © Copyright The Futurist Academy 2025
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
