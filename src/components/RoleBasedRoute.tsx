import { ReactNode } from 'react';
import { Navigate } from 'react-router-dom';
import { useAuth } from '../contexts/AuthContext';
import { UserRole } from '../types/User';

interface RoleBasedRouteProps {
  children: ReactNode;
  allowedRoles: UserRole[];
  fallbackPath?: string;
}

export default function RoleBasedRoute({ 
  children, 
  allowedRoles, 
  fallbackPath = '/login' 
}: RoleBasedRouteProps) {
  const { currentUser, userProfile } = useAuth();

  if (!currentUser) {
    return <Navigate to={fallbackPath} />;
  }

  if (!userProfile) {
    return <div>Loading...</div>;
  }

  if (!allowedRoles.includes(userProfile.role)) {
    // Redirect based on user role
    switch (userProfile.role) {
      case 'admin':
        return <Navigate to="/admin" />;
      case 'staff':
        return <Navigate to="/staff-dashboard" />;
      case 'tutor':
        return <Navigate to="/tutor-dashboard" />;
      case 'student':
        return <Navigate to="/student-lms" />;
      default:
        return <Navigate to={fallbackPath} />;
    }
  }

  return <>{children}</>;
}
