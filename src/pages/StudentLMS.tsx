import { useState } from 'react';
import { useAuth } from '../contexts/AuthContext';
import { useNavigate } from 'react-router-dom';
import { 
  Menu, X, User, BookOpen, Award, Clock, TrendingUp, 
  Settings, LogOut, Calendar, Target, Star, ChevronRight,
  Play, CheckCircle, Lock, MessageSquare, PenTool, Bell, Mail, Send
} from 'lucide-react';

// Mock data for courses and progress
const courses = [
  {
    id: 1,
    title: 'Web3 Development Fundamentals',
    instructor: 'Sarah Martinez',
    progress: 75,
    duration: '8 weeks',
    level: 'Beginner',
    status: 'In Progress',
    thumbnail: 'https://images.unsplash.com/photo-1639762681485-074b7f938ba0?w=400&h=250&fit=crop'
  },
  {
    id: 2,
    title: 'Smart Contract Development',
    instructor: 'Mike Johnson',
    progress: 45,
    duration: '12 weeks',
    level: 'Intermediate',
    status: 'In Progress',
    thumbnail: 'https://images.unsplash.com/photo-1627398242454-45a1465c2479?w=400&h=250&fit=crop'
  },
  {
    id: 3,
    title: 'DeFi Protocol Architecture',
    instructor: 'Dr. Lisa Chen',
    progress: 100,
    duration: '10 weeks',
    level: 'Advanced',
    status: 'Completed',
    thumbnail: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=400&h=250&fit=crop'
  }
];

const recentGrades = [
  { course: 'Web3 Development Fundamentals', grade: 'A+', date: '2025-01-10', instructor: 'Sarah Martinez' },
  { course: 'Smart Contract Development', grade: 'B+', date: '2025-01-08', instructor: 'Mike Johnson' },
  { course: 'DeFi Protocol Architecture', grade: 'A', date: '2025-01-05', instructor: 'Dr. Lisa Chen' }
];

export default function StudentLMS() {
  const { currentUser, userProfile, logout } = useAuth();
  const navigate = useNavigate();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [showContactForm, setShowContactForm] = useState(false);
  const [contactForm, setContactForm] = useState({
    subject: '',
    message: ''
  });

  const handleLogout = async () => {
    try {
      await logout();
      navigate('/');
    } catch (error) {
      console.error('Failed to log out');
    }
  };

  const handleContactSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    // Create mailto link to send email to support
    const subject = encodeURIComponent(contactForm.subject);
    const body = encodeURIComponent(`From: ${currentUser?.email}\n\n${contactForm.message}`);
    const mailtoLink = `mailto:support@lovify.tech?subject=${subject}&body=${body}`;
    
    window.open(mailtoLink, '_blank');
    setShowContactForm(false);
    setContactForm({ subject: '', message: '' });
  };

  return (
    <div className="min-h-screen" style={{ backgroundColor: '#000000' }}>
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-5 lg:px-11 py-5 bg-black bg-opacity-30 backdrop-blur-sm">
        <div className="flex items-center space-x-2">
          <div className="w-7 h-7 bg-white rounded-full flex items-center justify-center">
            <div className="w-3.5 h-3.5 bg-black rounded-full"></div>
          </div>
          <span className="text-white font-normal text-lg">The Futurist Academy - Student Portal</span>
        </div>

        <div className="flex items-center space-x-3.5">
          <button 
            onClick={() => setShowContactForm(true)}
            className="hidden md:flex items-center space-x-2 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
          >
            <Mail className="w-4 h-4" />
            <span>Contact Support</span>
          </button>
          <button 
            onClick={() => setIsMobileMenuOpen(true)}
            className="md:hidden text-white"
          >
            <Menu className="w-5 h-5" />
          </button>
          <div className="hidden md:flex items-center space-x-3">
            <div className="w-8 h-8 bg-gray-700 rounded-full flex items-center justify-center">
              <User className="w-4 h-4 text-white" />
            </div>
            <span className="text-white text-sm">{currentUser?.displayName || 'Student'}</span>
            <button 
              onClick={handleLogout}
              className="text-gray-400 hover:text-white transition-colors"
            >
              <LogOut className="w-4 h-4" />
            </button>
          </div>
        </div>
      </nav>

      {/* Dashboard Content */}
      <div className="pt-20 px-6 pb-20">
        <div className="max-w-7xl mx-auto">
          {/* Welcome Section */}
          <div className="mb-8">
            <h1 className="text-4xl font-bold text-white mb-2">
              Welcome back, {currentUser?.displayName || 'Student'}!
            </h1>
            <p className="text-gray-300">Continue your Web3 learning journey</p>
          </div>

          {/* Stats Cards */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
            <div className="bg-gray-900 rounded-2xl p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-gray-400 text-sm">Courses Enrolled</p>
                  <p className="text-2xl font-bold text-white">3</p>
                </div>
                <BookOpen className="w-8 h-8 text-blue-500" />
              </div>
            </div>
            
            <div className="bg-gray-900 rounded-2xl p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-gray-400 text-sm">Hours Learned</p>
                  <p className="text-2xl font-bold text-white">42</p>
                </div>
                <Clock className="w-8 h-8 text-green-500" />
              </div>
            </div>
            
            <div className="bg-gray-900 rounded-2xl p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-gray-400 text-sm">Certificates</p>
                  <p className="text-2xl font-bold text-white">1</p>
                </div>
                <Award className="w-8 h-8 text-yellow-500" />
              </div>
            </div>
            
            <div className="bg-gray-900 rounded-2xl p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-gray-400 text-sm">Progress</p>
                  <p className="text-2xl font-bold text-white">73%</p>
                </div>
                <TrendingUp className="w-8 h-8 text-purple-500" />
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* My Courses */}
            <div className="lg:col-span-2">
              <div className="bg-gray-900 rounded-2xl p-6">
                <div className="flex items-center justify-between mb-6">
                  <h2 className="text-2xl font-bold text-white">My Courses</h2>
                </div>
                
                <div className="space-y-4">
                  {courses.map((course) => (
                    <div key={course.id} className="bg-gray-800 rounded-xl p-4 hover:bg-gray-750 transition-colors">
                      <div className="flex items-center space-x-4">
                        <img 
                          src={course.thumbnail} 
                          alt={course.title}
                          className="w-16 h-16 rounded-lg object-cover"
                        />
                        <div className="flex-1">
                          <h3 className="text-white font-semibold mb-1">{course.title}</h3>
                          <p className="text-gray-400 text-sm mb-2">by {course.instructor}</p>
                          <div className="flex items-center space-x-4 text-sm text-gray-400">
                            <span>{course.duration}</span>
                            <span>•</span>
                            <span>{course.level}</span>
                            <span>•</span>
                            <span className={`${course.status === 'Completed' ? 'text-green-400' : 'text-blue-400'}`}>
                              {course.status}
                            </span>
                          </div>
                          <div className="mt-2">
                            <div className="flex items-center justify-between text-sm mb-1">
                              <span className="text-gray-400">Progress</span>
                              <span className="text-white">{course.progress}%</span>
                            </div>
                            <div className="w-full bg-gray-700 rounded-full h-2">
                              <div 
                                className="bg-blue-500 h-2 rounded-full transition-all duration-300"
                                style={{ width: `${course.progress}%` }}
                              ></div>
                            </div>
                          </div>
                        </div>
                        <button className="bg-blue-600 text-white p-2 rounded-lg hover:bg-blue-700 transition-colors">
                          <Play className="w-4 h-4" />
                        </button>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Sidebar */}
            <div className="space-y-6">
              {/* Recent Grades */}
              <div className="bg-gray-900 rounded-2xl p-6">
                <h2 className="text-xl font-bold text-white mb-4">Recent Grades</h2>
                <div className="space-y-3">
                  {recentGrades.map((grade, index) => (
                    <div key={index} className="flex items-center justify-between p-3 bg-gray-800 rounded-lg">
                      <div>
                        <p className="text-white font-medium text-sm">{grade.course}</p>
                        <p className="text-gray-400 text-xs">{grade.instructor}</p>
                      </div>
                      <div className="text-right">
                        <p className="text-green-400 font-bold">{grade.grade}</p>
                        <p className="text-gray-400 text-xs">{grade.date}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Contact Support */}
              <div className="bg-gray-900 rounded-2xl p-6">
                <h2 className="text-xl font-bold text-white mb-4">Need Help?</h2>
                <p className="text-gray-300 text-sm mb-4">
                  Have questions about your courses or need technical support?
                </p>
                <button 
                  onClick={() => setShowContactForm(true)}
                  className="w-full bg-blue-600 text-white py-3 px-4 rounded-lg font-medium hover:bg-blue-700 transition-colors flex items-center justify-center space-x-2"
                >
                  <Mail className="w-4 h-4" />
                  <span>Contact Support</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Contact Support Modal */}
      {showContactForm && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
          <div className="bg-gray-900 rounded-2xl max-w-md w-full p-6">
            <h3 className="text-xl font-bold text-white mb-4">Contact Support</h3>
            <p className="text-gray-300 text-sm mb-4">
              Your message will be sent to support@lovify.tech
            </p>
            <form onSubmit={handleContactSubmit} className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2">Subject</label>
                <input
                  type="text"
                  value={contactForm.subject}
                  onChange={(e) => setContactForm({...contactForm, subject: e.target.value})}
                  required
                  className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg text-white placeholder-gray-400 focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none"
                  placeholder="What's this about?"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2">Message</label>
                <textarea
                  value={contactForm.message}
                  onChange={(e) => setContactForm({...contactForm, message: e.target.value})}
                  rows={4}
                  required
                  className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg text-white placeholder-gray-400 focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none resize-none"
                  placeholder="Describe your question or issue..."
                />
              </div>
              <div className="flex space-x-3 pt-4">
                <button
                  type="submit"
                  className="flex-1 bg-blue-600 text-white py-3 rounded-lg font-medium hover:bg-blue-700 transition-colors flex items-center justify-center space-x-2"
                >
                  <Send className="w-4 h-4" />
                  <span>Send Message</span>
                </button>
                <button
                  type="button"
                  onClick={() => setShowContactForm(false)}
                  className="flex-1 bg-gray-700 text-white py-3 rounded-lg font-medium hover:bg-gray-600 transition-colors"
                >
                  Cancel
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}
