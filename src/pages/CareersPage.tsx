import { useState } from 'react';
import { MapPin, Clock, Briefcase, Star, Filter, Search, Menu, X } from 'lucide-react';

interface JobPosting {
  id: string;
  title: string;
  company: string;
  location: string;
  type: 'Full-time' | 'Part-time' | 'Internship' | 'Contract';
  experience: 'Entry' | 'Mid' | 'Senior';
  salary?: string;
  description: string;
  requirements: string[];
  benefits: string[];
  postedDate: string;
  featured: boolean;
  tags: string[];
}

const jobPostings: JobPosting[] = [
  {
    id: '1',
    title: 'Web3 Developer',
    company: 'Blockchain Innovations Inc.',
    location: 'San Francisco, CA',
    type: 'Full-time',
    experience: 'Mid',
    salary: '$120,000 - $180,000',
    description: 'Join our cutting-edge Web3 development team to build the next generation of decentralized applications. You\'ll work with smart contracts, DeFi protocols, and blockchain infrastructure.',
    requirements: [
      '3+ years of Web3 development experience',
      'Proficiency in Solidity and smart contract development',
      'Experience with DeFi protocols and DApps',
      'Strong understanding of blockchain technology',
      'Experience with Web3 libraries (ethers.js, web3.js)'
    ],
    benefits: [
      'Competitive salary and equity',
      'Health, dental, and vision insurance',
      'Flexible work arrangements',
      'Professional development budget',
      'Stock options'
    ],
    postedDate: '2025-01-15',
    featured: true,
    tags: ['Solidity', 'DeFi', 'Smart Contracts', 'React', 'Node.js']
  },
  {
    id: '2',
    title: 'Blockchain Security Intern',
    company: 'SecureChain Labs',
    location: 'Remote',
    type: 'Internship',
    experience: 'Entry',
    salary: '$25 - $35/hour',
    description: 'Gain hands-on experience in blockchain security auditing and smart contract vulnerability assessment. Work alongside senior security researchers.',
    requirements: [
      'Currently enrolled in computer science or related field',
      'Basic understanding of blockchain technology',
      'Interest in cybersecurity and smart contract security',
      'Strong analytical and problem-solving skills',
      'Ability to work independently and in teams'
    ],
    benefits: [
      'Mentorship from senior security experts',
      'Hands-on experience with real projects',
      'Networking opportunities',
      'Potential for full-time conversion',
      'Flexible schedule'
    ],
    postedDate: '2025-01-14',
    featured: true,
    tags: ['Security', 'Auditing', 'Smart Contracts', 'Cybersecurity']
  },
  {
    id: '3',
    title: 'DeFi Protocol Developer',
    company: 'DeFi Solutions Ltd.',
    location: 'New York, NY',
    type: 'Full-time',
    experience: 'Senior',
    salary: '$150,000 - $250,000',
    description: 'Lead the development of innovative DeFi protocols and contribute to the future of decentralized finance. Work on cutting-edge financial primitives.',
    requirements: [
      '5+ years of blockchain development experience',
      'Expert knowledge of DeFi protocols and mechanisms',
      'Experience with yield farming, liquidity pools, and AMMs',
      'Strong background in financial mathematics',
      'Leadership experience in technical teams'
    ],
    benefits: [
      'Top-tier compensation package',
      'Significant equity participation',
      'Comprehensive health benefits',
      'Unlimited PTO',
      'Conference and training budget'
    ],
    postedDate: '2025-01-13',
    featured: false,
    tags: ['DeFi', 'Protocol Development', 'Yield Farming', 'AMM', 'Leadership']
  },
  {
    id: '4',
    title: 'Frontend Developer (Web3)',
    company: 'NFT Marketplace Co.',
    location: 'Los Angeles, CA',
    type: 'Full-time',
    experience: 'Mid',
    salary: '$100,000 - $140,000',
    description: 'Build beautiful and intuitive user interfaces for our NFT marketplace. Work with Web3 integration, wallet connections, and blockchain interactions.',
    requirements: [
      '3+ years of frontend development experience',
      'Proficiency in React, TypeScript, and modern web technologies',
      'Experience with Web3 wallet integration',
      'Knowledge of NFT standards (ERC-721, ERC-1155)',
      'Strong UI/UX design skills'
    ],
    benefits: [
      'Competitive salary and benefits',
      'Remote work options',
      'Creative and collaborative environment',
      'Opportunity to work with cutting-edge technology',
      'Career growth opportunities'
    ],
    postedDate: '2025-01-12',
    featured: false,
    tags: ['React', 'TypeScript', 'Web3', 'NFT', 'Frontend']
  },
  {
    id: '5',
    title: 'Smart Contract Auditor',
    company: 'SecurityFirst Blockchain',
    location: 'Remote',
    type: 'Contract',
    experience: 'Senior',
    salary: '$80 - $150/hour',
    description: 'Conduct comprehensive security audits of smart contracts and DeFi protocols. Help secure the Web3 ecosystem through thorough code review.',
    requirements: [
      '4+ years of smart contract security experience',
      'Expert knowledge of common vulnerabilities and attack vectors',
      'Experience with formal verification tools',
      'Strong understanding of EVM and Solidity',
      'Certified security auditor credentials preferred'
    ],
    benefits: [
      'High hourly rates',
      'Flexible remote work',
      'Work with top-tier projects',
      'Continuous learning opportunities',
      'Professional recognition'
    ],
    postedDate: '2025-01-11',
    featured: false,
    tags: ['Security', 'Auditing', 'Smart Contracts', 'EVM', 'Formal Verification']
  }
];

const filterOptions = {
  type: ['All', 'Full-time', 'Part-time', 'Internship', 'Contract'],
  experience: ['All', 'Entry', 'Mid', 'Senior'],
  location: ['All', 'Remote', 'San Francisco, CA', 'New York, NY', 'Los Angeles, CA']
};

export default function CareersPage() {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedType, setSelectedType] = useState('All');
  const [selectedExperience, setSelectedExperience] = useState('All');
  const [selectedLocation, setSelectedLocation] = useState('All');
  const [showFilters, setShowFilters] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const filteredJobs = jobPostings.filter(job => {
    const matchesSearch = job.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         job.company.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         job.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         job.tags.some(tag => tag.toLowerCase().includes(searchTerm.toLowerCase()));
    
    const matchesType = selectedType === 'All' || job.type === selectedType;
    const matchesExperience = selectedExperience === 'All' || job.experience === selectedExperience;
    const matchesLocation = selectedLocation === 'All' || job.location.includes(selectedLocation);

    return matchesSearch && matchesType && matchesExperience && matchesLocation;
  });

  const featuredJobs = filteredJobs.filter(job => job.featured);
  const regularJobs = filteredJobs.filter(job => !job.featured);

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
          {/* <a href="/#security" className="text-white cursor-pointer hover:text-gray-300 transition-colors">Web3</a> */}
          <a href="/#testimonials" className="text-white cursor-pointer hover:text-gray-300 transition-colors">Success Stories</a>
          <a href="/#faq" className="text-white cursor-pointer hover:text-gray-300 transition-colors">FAQ</a>
          <a href="/#contact" className="text-white cursor-pointer hover:text-gray-300 transition-colors">Contact</a>
          <a href="/careers" className="text-white cursor-pointer hover:text-gray-300 transition-colors">Careers</a>
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
              {/* <a 
                href="/#security" 
                className="block text-white text-lg hover:text-gray-300 transition-colors py-2"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Web3
              </a> */}
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

      {/* Header */}
      <div className="py-20 px-6 text-center pt-32" style={{ backgroundColor: '#0A0A0A' }}>
        <div className="max-w-4xl mx-auto">
          <h1 className="text-5xl font-bold text-white mb-6">
            Web3 Careers &<br/>
            <span className="bg-gradient-to-b from-white to-gray-600 bg-clip-text text-transparent">
              Internships
            </span>
          </h1>
          <p className="text-lg text-gray-300 mb-8">
            Discover exciting career opportunities in Web3 and blockchain technology. 
            Find your dream job or kickstart your career with our internship programs.
          </p>
          
          {/* Search and Filter Bar */}
          <div className="max-w-4xl mx-auto">
            <div className="flex flex-col md:flex-row gap-4 mb-6">
              <div className="flex-1 relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                <input
                  type="text"
                  placeholder="Search jobs, companies, or skills..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full pl-10 pr-4 py-3 bg-gray-800 border border-gray-700 rounded-lg text-white placeholder-gray-400 focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all"
                />
              </div>
              <button
                onClick={() => setShowFilters(!showFilters)}
                className="flex items-center space-x-2 px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg text-white hover:bg-gray-700 transition-colors"
              >
                <Filter className="w-5 h-5" />
                <span>Filters</span>
              </button>
            </div>

            {/* Filter Options */}
            {showFilters && (
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2">Job Type</label>
                  <select
                    value={selectedType}
                    onChange={(e) => setSelectedType(e.target.value)}
                    className="w-full px-4 py-2 bg-gray-800 border border-gray-700 rounded-lg text-white focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none"
                  >
                    {filterOptions.type.map(type => (
                      <option key={type} value={type}>{type}</option>
                    ))}
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2">Experience Level</label>
                  <select
                    value={selectedExperience}
                    onChange={(e) => setSelectedExperience(e.target.value)}
                    className="w-full px-4 py-2 bg-gray-800 border border-gray-700 rounded-lg text-white focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none"
                  >
                    {filterOptions.experience.map(exp => (
                      <option key={exp} value={exp}>{exp}</option>
                    ))}
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2">Location</label>
                  <select
                    value={selectedLocation}
                    onChange={(e) => setSelectedLocation(e.target.value)}
                    className="w-full px-4 py-2 bg-gray-800 border border-gray-700 rounded-lg text-white focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none"
                  >
                    {filterOptions.location.map(location => (
                      <option key={location} value={location}>{location}</option>
                    ))}
                  </select>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Featured Jobs */}
      {featuredJobs.length > 0 && (
        <div className="py-16 px-6" style={{ backgroundColor: '#0A0A0A' }}>
          <div className="max-w-7xl mx-auto">
            <h2 className="text-3xl font-bold text-white mb-8 flex items-center">
              <Star className="w-8 h-8 text-white mr-3" />
              Featured Opportunities
            </h2>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {featuredJobs.map(job => (
                <JobCard key={job.id} job={job} featured={true} />
              ))}
            </div>
          </div>
        </div>
      )}

      {/* All Jobs */}
      <div className="py-16 px-6" style={{ backgroundColor: '#000000' }}>
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-white mb-8">
            All Opportunities ({filteredJobs.length})
          </h2>
          <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-8">
            {regularJobs.map(job => (
              <JobCard key={job.id} job={job} featured={false} />
            ))}
          </div>
        </div>
      </div>

      {/* No Results */}
      {filteredJobs.length === 0 && (
        <div className="py-20 px-6 text-center" style={{ backgroundColor: '#0A0A0A' }}>
          <div className="max-w-2xl mx-auto">
            <Briefcase className="w-16 h-16 text-gray-400 mx-auto mb-4" />
            <h3 className="text-2xl font-bold text-white mb-4">No jobs found</h3>
            <p className="text-gray-300 mb-6">
              Try adjusting your search criteria or check back later for new opportunities.
            </p>
            <button
              onClick={() => {
                setSearchTerm('');
                setSelectedType('All');
                setSelectedExperience('All');
                setSelectedLocation('All');
              }}
              className="bg-white text-black px-6 py-3 rounded-lg font-medium hover:bg-gray-100 transition-colors"
            >
              Clear Filters
            </button>
          </div>
        </div>
      )}

      {/* CTA Section */}
      <div className="py-20 px-6 text-center" style={{ backgroundColor: '#0A0A0A' }}>
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-bold text-white mb-6">
            Don't See What You're Looking For?
          </h2>
          <p className="text-lg text-gray-300 mb-8">
            We're always looking for talented individuals to join our network. 
            Send us your resume and let us know what you're interested in.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="#contact"
              className="bg-white text-black px-8 py-4 rounded-lg font-medium hover:bg-gray-100 transition-colors"
            >
              Contact Us
            </a>
            <a
              href="mailto:careers@thefuturistacademy.com"
              className="border border-gray-600 text-white px-8 py-4 rounded-lg font-medium hover:border-gray-400 transition-colors"
            >
              Send Resume
            </a>
          </div>
        </div>
      </div>

      {/* Footer */}
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
                <li><a href="/#features" className="text-gray-400 text-sm hover:text-white transition-colors">Our Mission</a></li>
                <li><a href="/#features" className="text-gray-400 text-sm hover:text-white transition-colors">Our Vision</a></li>
                <li><a href="/#features" className="text-gray-400 text-sm hover:text-white transition-colors">Our Story</a></li>
                <li><a href="/#features" className="text-gray-400 text-sm hover:text-white transition-colors">Meet Our Team</a></li>
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

interface JobCardProps {
  job: JobPosting;
  featured: boolean;
}

function JobCard({ job, featured }: JobCardProps) {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <div className={`bg-gray-900 rounded-2xl p-6 hover:bg-gray-800 transition-all duration-300 ${featured ? 'border-2 border-white' : 'border border-gray-700'}`}>
      {/* Header */}
      <div className="flex justify-between items-start mb-4">
        <div className="flex-1">
          <div className="flex items-center space-x-2 mb-2">
            <h3 className="text-xl font-bold text-white">{job.title}</h3>
            {featured && <Star className="w-5 h-5 text-white" />}
          </div>
          <p className="text-gray-300 font-medium">{job.company}</p>
        </div>
        <span className={`px-3 py-1 rounded-full text-xs font-medium ${
          job.type === 'Internship' ? 'bg-gray-800 text-gray-300' :
          job.type === 'Full-time' ? 'bg-gray-800 text-gray-300' :
          job.type === 'Part-time' ? 'bg-gray-800 text-gray-300' :
          'bg-gray-800 text-gray-300'
        }`}>
          {job.type}
        </span>
      </div>

      {/* Job Details */}
      <div className="space-y-3 mb-4">
        <div className="flex items-center text-gray-300">
          <MapPin className="w-4 h-4 mr-2" />
          <span className="text-sm">{job.location}</span>
        </div>
        <div className="flex items-center text-gray-300">
          <Clock className="w-4 h-4 mr-2" />
          <span className="text-sm">Posted {job.postedDate}</span>
        </div>
        {job.salary && (
          <div className="flex items-center text-gray-300">
            <Briefcase className="w-4 h-4 mr-2" />
            <span className="text-sm font-medium">{job.salary}</span>
          </div>
        )}
      </div>

      {/* Description */}
      <p className="text-gray-300 text-sm mb-4 line-clamp-3">
        {job.description}
      </p>

      {/* Tags */}
      <div className="flex flex-wrap gap-2 mb-4">
        {job.tags.slice(0, 3).map(tag => (
          <span key={tag} className="px-2 py-1 bg-gray-800 text-gray-300 text-xs rounded">
            {tag}
          </span>
        ))}
        {job.tags.length > 3 && (
          <span className="px-2 py-1 bg-gray-800 text-gray-300 text-xs rounded">
            +{job.tags.length - 3} more
          </span>
        )}
      </div>

      {/* Actions */}
      <div className="flex space-x-3">
        <button
          onClick={() => setIsExpanded(!isExpanded)}
          className="flex-1 bg-black text-white py-2 px-4 rounded-lg font-medium hover:bg-gray-800 transition-colors text-sm"
        >
          {isExpanded ? 'Show Less' : 'View Details'}
        </button>
        <button className="border border-gray-600 text-white py-2 px-4 rounded-lg font-medium hover:border-gray-400 transition-colors text-sm">
          Apply
        </button>
      </div>

      {/* Expanded Details */}
      {isExpanded && (
        <div className="mt-6 pt-6 border-t border-gray-700">
          <div className="space-y-4">
            <div>
              <h4 className="text-white font-semibold mb-2">Requirements:</h4>
              <ul className="text-gray-300 text-sm space-y-1">
                {job.requirements.map((req, index) => (
                  <li key={index} className="flex items-start">
                    <span className="w-2 h-2 bg-white rounded-full mt-2 mr-3 flex-shrink-0"></span>
                    {req}
                  </li>
                ))}
              </ul>
            </div>
            
            <div>
              <h4 className="text-white font-semibold mb-2">Benefits:</h4>
              <ul className="text-gray-300 text-sm space-y-1">
                {job.benefits.map((benefit, index) => (
                  <li key={index} className="flex items-start">
                    <span className="w-2 h-2 bg-gray-400 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                    {benefit}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
