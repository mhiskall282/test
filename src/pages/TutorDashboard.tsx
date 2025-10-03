import { useState, useEffect } from 'react';
import { useAuth } from '../contexts/AuthContext';
import { useNavigate } from 'react-router-dom';
import { 
  Menu, X, User, Users, BookOpen, PenTool, MessageSquare,
  Search, Filter, Plus, Edit, Eye, CheckCircle, Star,
  Calendar, Clock, Award, Target
} from 'lucide-react';
import { User as UserType } from '../types/User';
import { userService } from '../services/userService';

export default function TutorDashboard() {
  const { currentUser, userProfile, logout } = useAuth();
  const navigate = useNavigate();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [students, setStudents] = useState<UserType[]>([]);
  const [loading, setLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState('');
  const [showGradeModal, setShowGradeModal] = useState(false);
  const [showNoteModal, setShowNoteModal] = useState(false);
  const [selectedStudent, setSelectedStudent] = useState<UserType | null>(null);
  const [gradeData, setGradeData] = useState({
    courseId: '',
    grade: '',
    notes: ''
  });
  const [noteData, setNoteData] = useState({
    title: '',
    content: ''
  });

  useEffect(() => {
    loadStudents();
  }, []);

  const loadStudents = async () => {
    try {
      setLoading(true);
      // Get all students (in a real app, you'd filter by tutor)
      const allStudents = await userService.getUsersByRole('student');
      setStudents(allStudents);
    } catch (error) {
      console.error('Error loading students:', error);
    } finally {
      setLoading(false);
    }
  };

  const handleLogout = async () => {
    try {
      await logout();
      navigate('/');
    } catch (error) {
      console.error('Failed to log out');
    }
  };

  const handleGradeStudent = async (e: React.FormEvent) => {
    e.preventDefault();
    // In a real app, you'd save this to Firestore
    console.log('Grading student:', selectedStudent, gradeData);
    setShowGradeModal(false);
    setGradeData({ courseId: '', grade: '', notes: '' });
  };

  const handleSendNote = async (e: React.FormEvent) => {
    e.preventDefault();
    // In a real app, you'd save this to Firestore
    console.log('Sending note to student:', selectedStudent, noteData);
    setShowNoteModal(false);
    setNoteData({ title: '', content: '' });
  };

  const filteredStudents = students.filter(student =>
    student.displayName.toLowerCase().includes(searchTerm.toLowerCase()) ||
    student.email.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="min-h-screen" style={{ backgroundColor: '#000000' }}>
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-5 lg:px-11 py-5 bg-black bg-opacity-30 backdrop-blur-sm">
        <div className="flex items-center space-x-2">
          <div className="w-7 h-7 bg-white rounded-full flex items-center justify-center">
            <div className="w-3.5 h-3.5 bg-black rounded-full"></div>
          </div>
          <span className="text-white font-normal text-lg">The Futurist Academy - Tutor</span>
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
            <span className="text-white text-sm">{currentUser?.displayName || 'Tutor'}</span>
            <button 
              onClick={handleLogout}
              className="text-gray-400 hover:text-white transition-colors"
            >
              <X className="w-4 h-4" />
            </button>
          </div>
        </div>
      </nav>

      {/* Dashboard Content */}
      <div className="pt-20 px-6 pb-20">
        <div className="max-w-7xl mx-auto">
          {/* Header */}
          <div className="mb-8">
            <h1 className="text-4xl font-bold text-white mb-2">Tutor Dashboard</h1>
            <p className="text-gray-300">Manage students, grades, and course content</p>
          </div>

          {/* Stats Cards */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
            <div className="bg-gray-900 rounded-2xl p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-gray-400 text-sm">Total Students</p>
                  <p className="text-2xl font-bold text-white">{students.length}</p>
                </div>
                <Users className="w-8 h-8 text-blue-500" />
              </div>
            </div>
            
            <div className="bg-gray-900 rounded-2xl p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-gray-400 text-sm">Courses Teaching</p>
                  <p className="text-2xl font-bold text-white">3</p>
                </div>
                <BookOpen className="w-8 h-8 text-green-500" />
              </div>
            </div>
            
            <div className="bg-gray-900 rounded-2xl p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-gray-400 text-sm">Grades Given</p>
                  <p className="text-2xl font-bold text-white">24</p>
                </div>
                <PenTool className="w-8 h-8 text-yellow-500" />
              </div>
            </div>
            
            <div className="bg-gray-900 rounded-2xl p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-gray-400 text-sm">Notes Sent</p>
                  <p className="text-2xl font-bold text-white">12</p>
                </div>
                <MessageSquare className="w-8 h-8 text-purple-500" />
              </div>
            </div>
          </div>

          {/* Student Management */}
          <div className="bg-gray-900 rounded-2xl p-6">
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-2xl font-bold text-white">My Students</h2>
            </div>

            {/* Search */}
            <div className="mb-6">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                <input
                  type="text"
                  placeholder="Search students..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full pl-10 pr-4 py-3 bg-gray-800 border border-gray-700 rounded-lg text-white placeholder-gray-400 focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none"
                />
              </div>
            </div>

            {/* Students Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredStudents.map((student) => (
                <div key={student.uid} className="bg-gray-800 rounded-xl p-6 hover:bg-gray-750 transition-colors">
                  <div className="flex items-center space-x-4 mb-4">
                    <div className="w-12 h-12 bg-gray-700 rounded-full flex items-center justify-center">
                      <User className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h3 className="text-white font-semibold">{student.displayName}</h3>
                      <p className="text-gray-400 text-sm">{student.email}</p>
                    </div>
                  </div>
                  
                  <div className="space-y-2 mb-4">
                    <div className="flex items-center justify-between">
                      <span className="text-gray-400 text-sm">Progress</span>
                      <span className="text-white text-sm">75%</span>
                    </div>
                    <div className="w-full bg-gray-700 rounded-full h-2">
                      <div className="bg-blue-500 h-2 rounded-full" style={{ width: '75%' }}></div>
                    </div>
                  </div>

                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-2">
                      <button 
                        onClick={() => {
                          setSelectedStudent(student);
                          setShowGradeModal(true);
                        }}
                        className="text-yellow-400 hover:text-yellow-300 transition-colors"
                        title="Grade Student"
                      >
                        <PenTool className="w-4 h-4" />
                      </button>
                      <button 
                        onClick={() => {
                          setSelectedStudent(student);
                          setShowNoteModal(true);
                        }}
                        className="text-blue-400 hover:text-blue-300 transition-colors"
                        title="Send Note"
                      >
                        <MessageSquare className="w-4 h-4" />
                      </button>
                      <button className="text-green-400 hover:text-green-300 transition-colors" title="View Profile">
                        <Eye className="w-4 h-4" />
                      </button>
                    </div>
                    <span className="text-xs text-gray-400">Active</span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Recent Activity */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mt-8">
            {/* Recent Grades */}
            <div className="bg-gray-900 rounded-2xl p-6">
              <h3 className="text-xl font-bold text-white mb-4">Recent Grades</h3>
              <div className="space-y-4">
                {[1, 2, 3].map((item) => (
                  <div key={item} className="flex items-center justify-between p-3 bg-gray-800 rounded-lg">
                    <div>
                      <p className="text-white font-medium">Student {item}</p>
                      <p className="text-gray-400 text-sm">Web3 Development Fundamentals</p>
                    </div>
                    <div className="text-right">
                      <p className="text-green-400 font-bold">A+</p>
                      <p className="text-gray-400 text-xs">2 days ago</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Upcoming Events */}
            <div className="bg-gray-900 rounded-2xl p-6">
              <h3 className="text-xl font-bold text-white mb-4">Upcoming Events</h3>
              <div className="space-y-4">
                {[
                  { title: 'Web3 Workshop', date: '2025-01-15', time: '2:00 PM' },
                  { title: 'Student Review', date: '2025-01-18', time: '4:00 PM' },
                  { title: 'Course Planning', date: '2025-01-20', time: '10:00 AM' }
                ].map((event, index) => (
                  <div key={index} className="flex items-center space-x-3 p-3 bg-gray-800 rounded-lg">
                    <Calendar className="w-5 h-5 text-blue-400" />
                    <div>
                      <p className="text-white font-medium">{event.title}</p>
                      <p className="text-gray-400 text-sm">{event.date} at {event.time}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Grade Modal */}
      {showGradeModal && selectedStudent && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
          <div className="bg-gray-900 rounded-2xl max-w-md w-full p-6">
            <h3 className="text-xl font-bold text-white mb-4">Grade Student: {selectedStudent.displayName}</h3>
            <form onSubmit={handleGradeStudent} className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2">Course</label>
                <select
                  value={gradeData.courseId}
                  onChange={(e) => setGradeData({...gradeData, courseId: e.target.value})}
                  required
                  className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg text-white focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none"
                >
                  <option value="">Select Course</option>
                  <option value="web3-fundamentals">Web3 Development Fundamentals</option>
                  <option value="smart-contracts">Smart Contract Development</option>
                  <option value="defi-protocols">DeFi Protocol Architecture</option>
                </select>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2">Grade</label>
                <input
                  type="text"
                  value={gradeData.grade}
                  onChange={(e) => setGradeData({...gradeData, grade: e.target.value})}
                  placeholder="A+, A, B+, etc."
                  required
                  className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg text-white placeholder-gray-400 focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2">Notes</label>
                <textarea
                  value={gradeData.notes}
                  onChange={(e) => setGradeData({...gradeData, notes: e.target.value})}
                  rows={3}
                  className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg text-white placeholder-gray-400 focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none resize-none"
                />
              </div>
              <div className="flex space-x-3 pt-4">
                <button
                  type="submit"
                  className="flex-1 bg-blue-600 text-white py-3 rounded-lg font-medium hover:bg-blue-700 transition-colors"
                >
                  Submit Grade
                </button>
                <button
                  type="button"
                  onClick={() => setShowGradeModal(false)}
                  className="flex-1 bg-gray-700 text-white py-3 rounded-lg font-medium hover:bg-gray-600 transition-colors"
                >
                  Cancel
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

      {/* Note Modal */}
      {showNoteModal && selectedStudent && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
          <div className="bg-gray-900 rounded-2xl max-w-md w-full p-6">
            <h3 className="text-xl font-bold text-white mb-4">Send Note to: {selectedStudent.displayName}</h3>
            <form onSubmit={handleSendNote} className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2">Title</label>
                <input
                  type="text"
                  value={noteData.title}
                  onChange={(e) => setNoteData({...noteData, title: e.target.value})}
                  required
                  className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg text-white placeholder-gray-400 focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2">Message</label>
                <textarea
                  value={noteData.content}
                  onChange={(e) => setNoteData({...noteData, content: e.target.value})}
                  rows={4}
                  required
                  className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg text-white placeholder-gray-400 focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none resize-none"
                />
              </div>
              <div className="flex space-x-3 pt-4">
                <button
                  type="submit"
                  className="flex-1 bg-blue-600 text-white py-3 rounded-lg font-medium hover:bg-blue-700 transition-colors"
                >
                  Send Note
                </button>
                <button
                  type="button"
                  onClick={() => setShowNoteModal(false)}
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
