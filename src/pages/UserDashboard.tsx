import { useState } from 'react';
import { useAuth } from '../contexts/AuthContext';
import { useNavigate } from 'react-router-dom';
import { 
  Menu, X, User, BookOpen, Award, Clock, TrendingUp, 
  Settings, LogOut, Calendar, Target, Star, ChevronRight,
  Play, CheckCircle, Lock
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

const achievements = [
  { id: 1, title: 'First Course Completed', description: 'Completed your first Web3 course', icon: Award, earned: true },
  { id: 2, title: 'Smart Contract Developer', description: 'Built your first smart contract', icon: Star, earned: true },
  { id: 3, title: 'DeFi Expert', description: 'Mastered DeFi protocols', icon: TrendingUp, earned: false },
  { id: 4, title: 'Blockchain Architect', description: 'Designed a complete blockchain solution', icon: Target, earned: false }
];

const upcomingEvents = [
  { id: 1, title: 'Web3 Workshop', date: '2025-01-15', time: '2:00 PM', type: 'Workshop' },
  { id: 2, title: 'Career Guidance Session', date: '2025-01-18', time: '4:00 PM', type: 'Mentorship' },
  { id: 3, title: 'Project Review', date: '2025-01-20', time: '10:00 AM', type: 'Review' }
];

export default function UserDashboard() {
  const { currentUser, logout } = useAuth();
  const navigate = useNavigate();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const handleLogout = async () => {
    try {
      await logout();
      navigate('/');
    } catch (error) {
      console.error('Failed to log out');
    }
  };

  return (
    <div className="min-h-screen" style={{ backgroundColor: '#000000' }}>
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-5 lg:px-11 py-5 bg-black bg-opacity-30 backdrop-blur-sm">
        <div className="flex items-center space-x-2">
          <div className="w-7 h-7 bg-white rounded-full flex items-center justify-center">
            <div className="w-3.5 h-3.5 bg-black rounded-full"></div>
          </div>
          <span className="text-white font-normal text-lg">The Futurist Academy</span>
        </div>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center space-x-7">
          <a href="/#features" className="text-white cursor-pointer hover:text-gray-300 transition-colors">Courses</a>
          <a href="/#testimonials" className="text-white cursor-pointer hover:text-gray-300 transition-colors">Success Stories</a>
          <a href="/#faq" className="text-white cursor-pointer hover:text-gray-300 transition-colors">FAQ</a>
          <a href="/#contact" className="text-white cursor-pointer hover:text-gray-300 transition-colors">Contact</a>
          <a href="/careers" className="text-white cursor-pointer hover:text-gray-300 transition-colors">Careers</a>
          <a href="/about" className="text-white cursor-pointer hover:text-gray-300 transition-colors">About</a>
        </div>

        <div className="flex items-center space-x-3.5">
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

      {/* Mobile Menu Overlay */}
      {isMobileMenuOpen && (
        <div className="fixed inset-0 z-50 md:hidden">
          <div 
            className="absolute inset-0 bg-black bg-opacity-50"
            onClick={() => setIsMobileMenuOpen(false)}
          ></div>
          
          <div className="absolute top-0 right-0 h-full w-80 max-w-[85vw] bg-black bg-opacity-95 backdrop-blur-md">
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
            
            <div className="p-6 space-y-6">
              <div className="flex items-center space-x-3 pb-4 border-b border-gray-700">
                <div className="w-10 h-10 bg-gray-700 rounded-full flex items-center justify-center">
                  <User className="w-5 h-5 text-white" />
                </div>
                <div>
                  <div className="text-white font-medium">{currentUser?.displayName || 'Student'}</div>
                  <div className="text-gray-400 text-sm">{currentUser?.email}</div>
                </div>
              </div>
              
              <a href="/#features" className="block text-white text-lg hover:text-gray-300 transition-colors py-2">Courses</a>
              <a href="/#testimonials" className="block text-white text-lg hover:text-gray-300 transition-colors py-2">Success Stories</a>
              <a href="/#faq" className="block text-white text-lg hover:text-gray-300 transition-colors py-2">FAQ</a>
              <a href="/#contact" className="block text-white text-lg hover:text-gray-300 transition-colors py-2">Contact</a>
              <a href="/careers" className="block text-white text-lg hover:text-gray-300 transition-colors py-2">Careers</a>
              <a href="/about" className="block text-white text-lg hover:text-gray-300 transition-colors py-2">About</a>
              
              <button 
                onClick={handleLogout}
                className="w-full mt-8 px-5 py-3 border border-gray-600 text-white rounded-full hover:border-gray-400 transition-all duration-300 hover:shadow-lg text-center"
              >
                Sign Out
              </button>
            </div>
          </div>
        </div>
      )}

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
                  <button className="text-blue-400 hover:text-blue-300 transition-colors flex items-center">
                    View All <ChevronRight className="w-4 h-4 ml-1" />
                  </button>
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
              {/* Achievements */}
              <div className="bg-gray-900 rounded-2xl p-6">
                <h2 className="text-xl font-bold text-white mb-4">Achievements</h2>
                <div className="space-y-3">
                  {achievements.map((achievement) => (
                    <div key={achievement.id} className="flex items-center space-x-3">
                      <div className={`w-8 h-8 rounded-full flex items-center justify-center ${
                        achievement.earned ? 'bg-yellow-500' : 'bg-gray-700'
                      }`}>
                        <achievement.icon className={`w-4 h-4 ${
                          achievement.earned ? 'text-black' : 'text-gray-400'
                        }`} />
                      </div>
                      <div className="flex-1">
                        <p className={`text-sm font-medium ${
                          achievement.earned ? 'text-white' : 'text-gray-400'
                        }`}>
                          {achievement.title}
                        </p>
                        <p className="text-xs text-gray-500">{achievement.description}</p>
                      </div>
                      {achievement.earned && (
                        <CheckCircle className="w-4 h-4 text-green-500" />
                      )}
                    </div>
                  ))}
                </div>
              </div>

              {/* Upcoming Events */}
              <div className="bg-gray-900 rounded-2xl p-6">
                <h2 className="text-xl font-bold text-white mb-4">Upcoming Events</h2>
                <div className="space-y-3">
                  {upcomingEvents.map((event) => (
                    <div key={event.id} className="flex items-center space-x-3">
                      <div className="w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center">
                        <Calendar className="w-4 h-4 text-white" />
                      </div>
                      <div className="flex-1">
                        <p className="text-sm font-medium text-white">{event.title}</p>
                        <p className="text-xs text-gray-400">{event.date} at {event.time}</p>
                        <p className="text-xs text-blue-400">{event.type}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
