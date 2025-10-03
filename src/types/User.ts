export interface User {
  uid: string;
  email: string;
  displayName: string;
  role: 'admin' | 'staff' | 'tutor' | 'student';
  createdAt: Date;
  updatedAt: Date;
  isActive: boolean;
  profile?: {
    phone?: string;
    department?: string;
    specialization?: string;
    bio?: string;
    avatar?: string;
  };
}

export interface Student extends User {
  role: 'student';
  studentId: string;
  enrollmentDate: Date;
  courses: string[];
  grades?: {
    courseId: string;
    grade: number;
    notes?: string;
    tutorId: string;
    date: Date;
  }[];
}

export interface Tutor extends User {
  role: 'tutor';
  tutorId: string;
  specializations: string[];
  courses: string[];
  students: string[];
}

export interface Staff extends User {
  role: 'staff';
  staffId: string;
  department: string;
  permissions: string[];
}

export interface Admin extends User {
  role: 'admin';
  adminId: string;
  permissions: string[];
}

export type UserRole = 'admin' | 'staff' | 'tutor' | 'student';
