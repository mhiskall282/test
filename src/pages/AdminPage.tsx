import React, { useState } from 'react';
import { 
  Users, 
  BookOpen, 
  Briefcase, 
  MessageSquare, 
  Settings, 
  BarChart3, 
  Plus, 
  Edit, 
  Trash2, 
  Eye, 
  Save, 
  X,
  UserPlus,
  FileText,
  Calendar,
  DollarSign,
  TrendingUp,
  Award,
  Globe,
  Mail,
  Phone,
  MapPin
} from 'lucide-react';

// Mock data for demonstration
const mockStudents = [
  { id: 1, name: 'Sarah Johnson', email: 'sarah.j@email.com', course: 'Web3 Development', status: 'Active', enrollmentDate: '2024-12-15', progress: 75 },
  { id: 2, name: 'Michael Chen', email: 'michael.c@email.com', course: 'Smart Contracts', status: 'Active', enrollmentDate: '2024-12-10', progress: 90 },
  { id: 3, name: 'Emma Rodriguez', email: 'emma.r@email.com', course: 'DeFi Protocols', status: 'Completed', enrollmentDate: '2024-11-20', progress: 100 },
  { id: 4, name: 'David Kim', email: 'david.k@email.com', course: 'Blockchain Security', status: 'Active', enrollmentDate: '2024-12-05', progress: 45 },
  { id: 5, name: 'Lisa Wang', email: 'lisa.w@email.com', course: 'Web3 Development', status: 'Paused', enrollmentDate: '2024-11-30', progress: 30 }
];

const mockCourses = [
  { id: 1, title: 'Web3 Development Fundamentals', instructor: 'Dr. Alex Thompson', students: 45, price: '$299', status: 'Active', duration: '12 weeks' },
  { id: 2, title: 'Smart Contract Development', instructor: 'Sarah Martinez', students: 32, price: '$399', status: 'Active', duration: '8 weeks' },
  { id: 3, title: 'DeFi Protocol Design', instructor: 'Mike Johnson', students: 28, price: '$499', status: 'Active', duration: '10 weeks' },
  { id: 4, title: 'Blockchain Security Auditing', instructor: 'Dr. Lisa Chen', students: 18, price: '$599', status: 'Draft', duration: '6 weeks' }
];

const mockJobs = [
  { id: 1, title: 'Web3 Developer', company: 'Blockchain Innovations Inc.', applicants: 23, status: 'Active', postedDate: '2025-01-15' },
  { id: 2, title: 'Smart Contract Auditor', company: 'SecurityFirst Blockchain', applicants: 15, status: 'Active', postedDate: '2025-01-14' },
  { id: 3, title: 'DeFi Protocol Developer', company: 'DeFi Solutions Ltd.', applicants: 31, status: 'Closed', postedDate: '2025-01-10' }
];

const mockMessages = [
  { id: 1, name: 'John Smith', email: 'john.s@email.com', subject: 'Course Inquiry', message: 'I\'m interested in the Web3 Development course...', date: '2025-01-15', status: 'Unread' },
  { id: 2, name: 'Maria Garcia', email: 'maria.g@email.com', subject: 'Technical Support', message: 'Having trouble accessing the course materials...', date: '2025-01-14', status: 'Read' },
  { id: 3, name: 'Robert Lee', email: 'robert.l@email.com', subject: 'Career Guidance', message: 'Looking for advice on Web3 career paths...', date: '2025-01-13', status: 'Unread' }
];

export default function AdminPage() {
  const [activeTab, setActiveTab] = useState('dashboard');
  const [showModal, setShowModal] = useState(false);
  const [modalType, setModalType] = useState('');
  const [editingItem, setEditingItem] = useState(null);

  const stats = {
    totalStudents: 1250,
    activeStudents: 890,
    totalCourses: 12,
    totalJobs: 45,
    unreadMessages: 8,
    revenue: 125000
  };

  const handleAddNew = (type: string) => {
    setModalType(type);
    setEditingItem(null);
    setShowModal(true);
  };

  const handleEdit = (item: any, type: string) => {
    setEditingItem(item);
    setModalType(type);
    setShowModal(true);
  };

  const handleDelete = (id: number, type: string) => {
    if (confirm('Are you sure you want to delete this item?')) {
      console.log(`Delete ${type} with id: ${id}`);
    }
  };

  return (
    <div className="min-h-screen" style={{ backgroundColor: '#000000' }}>
      {/* Header */}
      <div className="bg-gray-900 border-b border-gray-700 px-6 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-4">
            <div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center">
              <Settings className="w-5 h-5 text-white" />
            </div>
            <div>
              <h1 className="text-2xl font-bold text-white">Admin Dashboard</h1>
              <p className="text-gray-400 text-sm">The Futurist Academy Management</p>
            </div>
          </div>
          <div className="flex items-center space-x-4">
            <span className="text-gray-400 text-sm">Last updated: {new Date().toLocaleDateString()}</span>
          </div>
        </div>
      </div>

      <div className="flex">
        {/* Sidebar */}
        <div className="w-64 bg-gray-900 border-r border-gray-700 min-h-screen">
          <nav className="p-4 space-y-2">
            {[
              { id: 'dashboard', label: 'Dashboard', icon: BarChart3 },
              { id: 'students', label: 'Students', icon: Users },
              { id: 'courses', label: 'Courses', icon: BookOpen },
              { id: 'jobs', label: 'Job Postings', icon: Briefcase },
              { id: 'messages', label: 'Messages', icon: MessageSquare },
              { id: 'analytics', label: 'Analytics', icon: TrendingUp },
              { id: 'settings', label: 'Settings', icon: Settings }
            ].map(tab => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`w-full flex items-center space-x-3 px-4 py-3 rounded-lg text-left transition-colors ${
                  activeTab === tab.id 
                    ? 'bg-blue-600 text-white' 
                    : 'text-gray-300 hover:bg-gray-800 hover:text-white'
                }`}
              >
                <tab.icon className="w-5 h-5" />
                <span>{tab.label}</span>
              </button>
            ))}
          </nav>
        </div>

        {/* Main Content */}
        <div className="flex-1 p-6">
          {activeTab === 'dashboard' && <DashboardTab stats={stats} />}
          {activeTab === 'students' && <StudentsTab students={mockStudents} onEdit={handleEdit} onDelete={handleDelete} onAdd={() => handleAddNew('student')} />}
          {activeTab === 'courses' && <CoursesTab courses={mockCourses} onEdit={handleEdit} onDelete={handleDelete} onAdd={() => handleAddNew('course')} />}
          {activeTab === 'jobs' && <JobsTab jobs={mockJobs} onEdit={handleEdit} onDelete={handleDelete} onAdd={() => handleAddNew('job')} />}
          {activeTab === 'messages' && <MessagesTab messages={mockMessages} onEdit={handleEdit} onDelete={handleDelete} />}
          {activeTab === 'analytics' && <AnalyticsTab />}
          {activeTab === 'settings' && <SettingsTab />}
        </div>
      </div>

      {/* Modal */}
      {showModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
          <div className="bg-gray-900 rounded-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto">
            <ModalContent 
              type={modalType} 
              item={editingItem} 
              onClose={() => setShowModal(false)} 
            />
          </div>
        </div>
      )}
    </div>
  );
}

// Dashboard Tab Component
function DashboardTab({ stats }: { stats: any }) {
  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h2 className="text-3xl font-bold text-white">Dashboard Overview</h2>
        <div className="text-gray-400 text-sm">
          {new Date().toLocaleDateString('en-US', { 
            weekday: 'long', 
            year: 'numeric', 
            month: 'long', 
            day: 'numeric' 
          })}
        </div>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <div className="bg-gray-800 rounded-xl p-6">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-gray-400 text-sm">Total Students</p>
              <p className="text-3xl font-bold text-white">{stats.totalStudents.toLocaleString()}</p>
            </div>
            <Users className="w-8 h-8 text-blue-500" />
          </div>
          <div className="mt-4 flex items-center text-green-400 text-sm">
            <TrendingUp className="w-4 h-4 mr-1" />
            +12% from last month
          </div>
        </div>

        <div className="bg-gray-800 rounded-xl p-6">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-gray-400 text-sm">Active Students</p>
              <p className="text-3xl font-bold text-white">{stats.activeStudents.toLocaleString()}</p>
            </div>
            <Award className="w-8 h-8 text-green-500" />
          </div>
          <div className="mt-4 flex items-center text-green-400 text-sm">
            <TrendingUp className="w-4 h-4 mr-1" />
            +8% from last month
          </div>
        </div>

        <div className="bg-gray-800 rounded-xl p-6">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-gray-400 text-sm">Total Courses</p>
              <p className="text-3xl font-bold text-white">{stats.totalCourses}</p>
            </div>
            <BookOpen className="w-8 h-8 text-purple-500" />
          </div>
          <div className="mt-4 flex items-center text-blue-400 text-sm">
            <Plus className="w-4 h-4 mr-1" />
            2 new this month
          </div>
        </div>

        <div className="bg-gray-800 rounded-xl p-6">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-gray-400 text-sm">Revenue</p>
              <p className="text-3xl font-bold text-white">${stats.revenue.toLocaleString()}</p>
            </div>
            <DollarSign className="w-8 h-8 text-yellow-500" />
          </div>
          <div className="mt-4 flex items-center text-green-400 text-sm">
            <TrendingUp className="w-4 h-4 mr-1" />
            +15% from last month
          </div>
        </div>
      </div>

      {/* Recent Activity */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div className="bg-gray-800 rounded-xl p-6">
          <h3 className="text-xl font-bold text-white mb-4">Recent Enrollments</h3>
          <div className="space-y-3">
            {[
              { name: 'Sarah Johnson', course: 'Web3 Development', time: '2 hours ago' },
              { name: 'Michael Chen', course: 'Smart Contracts', time: '4 hours ago' },
              { name: 'Emma Rodriguez', course: 'DeFi Protocols', time: '1 day ago' }
            ].map((enrollment, index) => (
              <div key={index} className="flex items-center justify-between p-3 bg-gray-700 rounded-lg">
                <div>
                  <p className="text-white font-medium">{enrollment.name}</p>
                  <p className="text-gray-400 text-sm">{enrollment.course}</p>
                </div>
                <span className="text-gray-400 text-xs">{enrollment.time}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="bg-gray-800 rounded-xl p-6">
          <h3 className="text-xl font-bold text-white mb-4">Quick Actions</h3>
          <div className="grid grid-cols-2 gap-3">
            <button className="p-4 bg-blue-600 rounded-lg text-white hover:bg-blue-700 transition-colors">
              <UserPlus className="w-6 h-6 mx-auto mb-2" />
              <span className="text-sm">Add Student</span>
            </button>
            <button className="p-4 bg-green-600 rounded-lg text-white hover:bg-green-700 transition-colors">
              <BookOpen className="w-6 h-6 mx-auto mb-2" />
              <span className="text-sm">New Course</span>
            </button>
            <button className="p-4 bg-purple-600 rounded-lg text-white hover:bg-purple-700 transition-colors">
              <Briefcase className="w-6 h-6 mx-auto mb-2" />
              <span className="text-sm">Post Job</span>
            </button>
            <button className="p-4 bg-orange-600 rounded-lg text-white hover:bg-orange-700 transition-colors">
              <MessageSquare className="w-6 h-6 mx-auto mb-2" />
              <span className="text-sm">View Messages</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

// Students Tab Component
function StudentsTab({ students, onEdit, onDelete, onAdd }: any) {
  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h2 className="text-3xl font-bold text-white">Students Management</h2>
        <button
          onClick={onAdd}
          className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors flex items-center space-x-2"
        >
          <Plus className="w-5 h-5" />
          <span>Add Student</span>
        </button>
      </div>

      <div className="bg-gray-800 rounded-xl overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead className="bg-gray-700">
              <tr>
                <th className="px-6 py-4 text-left text-white font-semibold">Name</th>
                <th className="px-6 py-4 text-left text-white font-semibold">Email</th>
                <th className="px-6 py-4 text-left text-white font-semibold">Course</th>
                <th className="px-6 py-4 text-left text-white font-semibold">Status</th>
                <th className="px-6 py-4 text-left text-white font-semibold">Progress</th>
                <th className="px-6 py-4 text-left text-white font-semibold">Actions</th>
              </tr>
            </thead>
            <tbody>
              {students.map((student: any) => (
                <tr key={student.id} className="border-b border-gray-700 hover:bg-gray-700">
                  <td className="px-6 py-4 text-white">{student.name}</td>
                  <td className="px-6 py-4 text-gray-300">{student.email}</td>
                  <td className="px-6 py-4 text-gray-300">{student.course}</td>
                  <td className="px-6 py-4">
                    <span className={`px-2 py-1 rounded-full text-xs ${
                      student.status === 'Active' ? 'bg-green-900 text-green-300' :
                      student.status === 'Completed' ? 'bg-blue-900 text-blue-300' :
                      'bg-yellow-900 text-yellow-300'
                    }`}>
                      {student.status}
                    </span>
                  </td>
                  <td className="px-6 py-4">
                    <div className="flex items-center space-x-2">
                      <div className="w-20 bg-gray-600 rounded-full h-2">
                        <div 
                          className="bg-blue-500 h-2 rounded-full" 
                          style={{ width: `${student.progress}%` }}
                        ></div>
                      </div>
                      <span className="text-gray-300 text-sm">{student.progress}%</span>
                    </div>
                  </td>
                  <td className="px-6 py-4">
                    <div className="flex items-center space-x-2">
                      <button
                        onClick={() => onEdit(student, 'student')}
                        className="text-blue-400 hover:text-blue-300"
                      >
                        <Edit className="w-4 h-4" />
                      </button>
                      <button
                        onClick={() => onDelete(student.id, 'student')}
                        className="text-red-400 hover:text-red-300"
                      >
                        <Trash2 className="w-4 h-4" />
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

// Courses Tab Component
function CoursesTab({ courses, onEdit, onDelete, onAdd }: any) {
  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h2 className="text-3xl font-bold text-white">Courses Management</h2>
        <button
          onClick={onAdd}
          className="bg-green-600 text-white px-4 py-2 rounded-lg hover:bg-green-700 transition-colors flex items-center space-x-2"
        >
          <Plus className="w-5 h-5" />
          <span>Add Course</span>
        </button>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-6">
        {courses.map((course: any) => (
          <div key={course.id} className="bg-gray-800 rounded-xl p-6">
            <div className="flex items-start justify-between mb-4">
              <div className="flex-1">
                <h3 className="text-xl font-bold text-white mb-2">{course.title}</h3>
                <p className="text-gray-400 text-sm">by {course.instructor}</p>
              </div>
              <span className={`px-2 py-1 rounded-full text-xs ${
                course.status === 'Active' ? 'bg-green-900 text-green-300' : 'bg-yellow-900 text-yellow-300'
              }`}>
                {course.status}
              </span>
            </div>
            
            <div className="space-y-2 mb-4">
              <div className="flex items-center justify-between text-sm">
                <span className="text-gray-400">Students:</span>
                <span className="text-white">{course.students}</span>
              </div>
              <div className="flex items-center justify-between text-sm">
                <span className="text-gray-400">Price:</span>
                <span className="text-white">{course.price}</span>
              </div>
              <div className="flex items-center justify-between text-sm">
                <span className="text-gray-400">Duration:</span>
                <span className="text-white">{course.duration}</span>
              </div>
            </div>

            <div className="flex items-center space-x-2">
              <button
                onClick={() => onEdit(course, 'course')}
                className="flex-1 bg-blue-600 text-white py-2 px-4 rounded-lg hover:bg-blue-700 transition-colors text-sm"
              >
                Edit
              </button>
              <button
                onClick={() => onDelete(course.id, 'course')}
                className="bg-red-600 text-white py-2 px-4 rounded-lg hover:bg-red-700 transition-colors text-sm"
              >
                <Trash2 className="w-4 h-4" />
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

// Jobs Tab Component
function JobsTab({ jobs, onEdit, onDelete, onAdd }: any) {
  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h2 className="text-3xl font-bold text-white">Job Postings Management</h2>
        <button
          onClick={onAdd}
          className="bg-purple-600 text-white px-4 py-2 rounded-lg hover:bg-purple-700 transition-colors flex items-center space-x-2"
        >
          <Plus className="w-5 h-5" />
          <span>Post Job</span>
        </button>
      </div>

      <div className="bg-gray-800 rounded-xl overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead className="bg-gray-700">
              <tr>
                <th className="px-6 py-4 text-left text-white font-semibold">Job Title</th>
                <th className="px-6 py-4 text-left text-white font-semibold">Company</th>
                <th className="px-6 py-4 text-left text-white font-semibold">Applicants</th>
                <th className="px-6 py-4 text-left text-white font-semibold">Status</th>
                <th className="px-6 py-4 text-left text-white font-semibold">Posted</th>
                <th className="px-6 py-4 text-left text-white font-semibold">Actions</th>
              </tr>
            </thead>
            <tbody>
              {jobs.map((job: any) => (
                <tr key={job.id} className="border-b border-gray-700 hover:bg-gray-700">
                  <td className="px-6 py-4 text-white font-medium">{job.title}</td>
                  <td className="px-6 py-4 text-gray-300">{job.company}</td>
                  <td className="px-6 py-4 text-gray-300">{job.applicants}</td>
                  <td className="px-6 py-4">
                    <span className={`px-2 py-1 rounded-full text-xs ${
                      job.status === 'Active' ? 'bg-green-900 text-green-300' : 'bg-red-900 text-red-300'
                    }`}>
                      {job.status}
                    </span>
                  </td>
                  <td className="px-6 py-4 text-gray-300">{job.postedDate}</td>
                  <td className="px-6 py-4">
                    <div className="flex items-center space-x-2">
                      <button className="text-blue-400 hover:text-blue-300">
                        <Eye className="w-4 h-4" />
                      </button>
                      <button
                        onClick={() => onEdit(job, 'job')}
                        className="text-blue-400 hover:text-blue-300"
                      >
                        <Edit className="w-4 h-4" />
                      </button>
                      <button
                        onClick={() => onDelete(job.id, 'job')}
                        className="text-red-400 hover:text-red-300"
                      >
                        <Trash2 className="w-4 h-4" />
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

// Messages Tab Component
function MessagesTab({ messages, onEdit, onDelete }: any) {
  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h2 className="text-3xl font-bold text-white">Messages & Inquiries</h2>
        <div className="text-gray-400 text-sm">
          {messages.filter((m: any) => m.status === 'Unread').length} unread messages
        </div>
      </div>

      <div className="space-y-4">
        {messages.map((message: any) => (
          <div key={message.id} className={`bg-gray-800 rounded-xl p-6 ${message.status === 'Unread' ? 'border-l-4 border-blue-500' : ''}`}>
            <div className="flex items-start justify-between mb-4">
              <div className="flex-1">
                <div className="flex items-center space-x-3 mb-2">
                  <h3 className="text-lg font-bold text-white">{message.name}</h3>
                  <span className={`px-2 py-1 rounded-full text-xs ${
                    message.status === 'Unread' ? 'bg-blue-900 text-blue-300' : 'bg-gray-600 text-gray-300'
                  }`}>
                    {message.status}
                  </span>
                </div>
                <p className="text-gray-400 text-sm">{message.email}</p>
              </div>
              <span className="text-gray-400 text-sm">{message.date}</span>
            </div>
            
            <div className="mb-4">
              <h4 className="text-white font-semibold mb-2">{message.subject}</h4>
              <p className="text-gray-300">{message.message}</p>
            </div>

            <div className="flex items-center space-x-3">
              <button className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors text-sm">
                Reply
              </button>
              <button
                onClick={() => onEdit(message, 'message')}
                className="border border-gray-600 text-white px-4 py-2 rounded-lg hover:border-gray-400 transition-colors text-sm"
              >
                Mark as Read
              </button>
              <button
                onClick={() => onDelete(message.id, 'message')}
                className="text-red-400 hover:text-red-300"
              >
                <Trash2 className="w-4 h-4" />
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

// Analytics Tab Component
function AnalyticsTab() {
  return (
    <div className="space-y-6">
      <h2 className="text-3xl font-bold text-white">Analytics & Reports</h2>
      
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div className="bg-gray-800 rounded-xl p-6">
          <h3 className="text-xl font-bold text-white mb-4">Student Engagement</h3>
          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <span className="text-gray-400">Course Completion Rate</span>
              <span className="text-white font-bold">78%</span>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-gray-400">Average Study Time</span>
              <span className="text-white font-bold">4.2 hours/week</span>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-gray-400">Student Satisfaction</span>
              <span className="text-white font-bold">4.8/5</span>
            </div>
          </div>
        </div>

        <div className="bg-gray-800 rounded-xl p-6">
          <h3 className="text-xl font-bold text-white mb-4">Revenue Analytics</h3>
          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <span className="text-gray-400">Monthly Revenue</span>
              <span className="text-white font-bold">$45,000</span>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-gray-400">Course Sales</span>
              <span className="text-white font-bold">156</span>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-gray-400">Conversion Rate</span>
              <span className="text-white font-bold">12.5%</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

// Settings Tab Component
function SettingsTab() {
  return (
    <div className="space-y-6">
      <h2 className="text-3xl font-bold text-white">System Settings</h2>
      
      <div className="bg-gray-800 rounded-xl p-6">
        <h3 className="text-xl font-bold text-white mb-4">Academy Information</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <label className="block text-gray-300 text-sm mb-2">Academy Name</label>
            <input
              type="text"
              defaultValue="The Futurist Academy"
              className="w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded-lg text-white focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none"
            />
          </div>
          <div>
            <label className="block text-gray-300 text-sm mb-2">Contact Email</label>
            <input
              type="email"
              defaultValue="info@thefuturistacademy.com"
              className="w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded-lg text-white focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none"
            />
          </div>
          <div>
            <label className="block text-gray-300 text-sm mb-2">Phone Number</label>
            <input
              type="tel"
              defaultValue="+1 (555) 123-4567"
              className="w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded-lg text-white focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none"
            />
          </div>
          <div>
            <label className="block text-gray-300 text-sm mb-2">Location</label>
            <input
              type="text"
              defaultValue="Tech Hub, Silicon Valley"
              className="w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded-lg text-white focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none"
            />
          </div>
        </div>
        
        <div className="mt-6">
          <button className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors">
            Save Changes
          </button>
        </div>
      </div>
    </div>
  );
}

// Modal Content Component
function ModalContent({ type, item, onClose }: any) {
  const [formData, setFormData] = useState(item || {});

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log(`Save ${type}:`, formData);
    onClose();
  };

  return (
    <div className="p-6">
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-2xl font-bold text-white">
          {item ? 'Edit' : 'Add New'} {type.charAt(0).toUpperCase() + type.slice(1)}
        </h2>
        <button onClick={onClose} className="text-gray-400 hover:text-white">
          <X className="w-6 h-6" />
        </button>
      </div>

      <form onSubmit={handleSubmit} className="space-y-4">
        {type === 'student' && (
          <>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="block text-gray-300 text-sm mb-2">Full Name</label>
                <input
                  type="text"
                  value={formData.name || ''}
                  onChange={(e) => setFormData({...formData, name: e.target.value})}
                  className="w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded-lg text-white focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none"
                  required
                />
              </div>
              <div>
                <label className="block text-gray-300 text-sm mb-2">Email</label>
                <input
                  type="email"
                  value={formData.email || ''}
                  onChange={(e) => setFormData({...formData, email: e.target.value})}
                  className="w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded-lg text-white focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none"
                  required
                />
              </div>
            </div>
            <div>
              <label className="block text-gray-300 text-sm mb-2">Course</label>
              <select
                value={formData.course || ''}
                onChange={(e) => setFormData({...formData, course: e.target.value})}
                className="w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded-lg text-white focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none"
                required
              >
                <option value="">Select Course</option>
                <option value="Web3 Development">Web3 Development</option>
                <option value="Smart Contracts">Smart Contracts</option>
                <option value="DeFi Protocols">DeFi Protocols</option>
                <option value="Blockchain Security">Blockchain Security</option>
              </select>
            </div>
          </>
        )}

        {type === 'course' && (
          <>
            <div>
              <label className="block text-gray-300 text-sm mb-2">Course Title</label>
              <input
                type="text"
                value={formData.title || ''}
                onChange={(e) => setFormData({...formData, title: e.target.value})}
                className="w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded-lg text-white focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none"
                required
              />
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="block text-gray-300 text-sm mb-2">Instructor</label>
                <input
                  type="text"
                  value={formData.instructor || ''}
                  onChange={(e) => setFormData({...formData, instructor: e.target.value})}
                  className="w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded-lg text-white focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none"
                  required
                />
              </div>
              <div>
                <label className="block text-gray-300 text-sm mb-2">Price</label>
                <input
                  type="text"
                  value={formData.price || ''}
                  onChange={(e) => setFormData({...formData, price: e.target.value})}
                  className="w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded-lg text-white focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none"
                  required
                />
              </div>
            </div>
          </>
        )}

        {type === 'job' && (
          <>
            <div>
              <label className="block text-gray-300 text-sm mb-2">Job Title</label>
              <input
                type="text"
                value={formData.title || ''}
                onChange={(e) => setFormData({...formData, title: e.target.value})}
                className="w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded-lg text-white focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none"
                required
              />
            </div>
            <div>
              <label className="block text-gray-300 text-sm mb-2">Company</label>
              <input
                type="text"
                value={formData.company || ''}
                onChange={(e) => setFormData({...formData, company: e.target.value})}
                className="w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded-lg text-white focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none"
                required
              />
            </div>
          </>
        )}

        <div className="flex items-center space-x-4 pt-6">
          <button
            type="submit"
            className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors flex items-center space-x-2"
          >
            <Save className="w-5 h-5" />
            <span>{item ? 'Update' : 'Create'}</span>
          </button>
          <button
            type="button"
            onClick={onClose}
            className="border border-gray-600 text-white px-6 py-3 rounded-lg hover:border-gray-400 transition-colors"
          >
            Cancel
          </button>
        </div>
      </form>
    </div>
  );
}
