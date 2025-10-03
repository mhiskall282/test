import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import App from './App';
import CareersPage from './pages/CareersPage';
import AboutPage from './pages/AboutPage';
import AdminPage from './pages/AdminPage';
import LoginPage from './pages/LoginPage';
import SignupPage from './pages/SignupPage';
import UserDashboard from './pages/UserDashboard';
import StaffDashboard from './pages/StaffDashboard';
import TutorDashboard from './pages/TutorDashboard';
import StudentDashboard from './pages/StudentDashboard';
import StudentLMS from './pages/StudentLMS';
import ProtectedRoute from './components/ProtectedRoute';
import RoleBasedRoute from './components/RoleBasedRoute';
import { AuthProvider } from './contexts/AuthContext';

export default function AppRouter() {
  return (
    <AuthProvider>
      <Router>
        <Routes>
          <Route path="/" element={<App />} />
          <Route path="/careers" element={<CareersPage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/signup" element={<SignupPage />} />
          
          {/* Role-based protected routes */}
          <Route 
            path="/admin" 
            element={
              <RoleBasedRoute allowedRoles={['admin']}>
                <AdminPage />
              </RoleBasedRoute>
            } 
          />
          <Route 
            path="/staff-dashboard" 
            element={
              <RoleBasedRoute allowedRoles={['staff', 'admin']}>
                <StaffDashboard />
              </RoleBasedRoute>
            } 
          />
          <Route 
            path="/tutor-dashboard" 
            element={
              <RoleBasedRoute allowedRoles={['tutor', 'admin']}>
                <TutorDashboard />
              </RoleBasedRoute>
            } 
          />
          <Route 
            path="/student-dashboard" 
            element={
              <RoleBasedRoute allowedRoles={['student', 'admin']}>
                <StudentDashboard />
              </RoleBasedRoute>
            } 
          />
          <Route 
            path="/student-lms" 
            element={
              <RoleBasedRoute allowedRoles={['student', 'admin']}>
                <StudentLMS />
              </RoleBasedRoute>
            } 
          />
          
          {/* Legacy route for backward compatibility */}
          <Route 
            path="/user" 
            element={
              <ProtectedRoute>
                <UserDashboard />
              </ProtectedRoute>
            } 
          />
          
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </Router>
    </AuthProvider>
  );
}
