import React, { createContext, useContext, useEffect, useState } from 'react';
import { 
  User as FirebaseUser, 
  signInWithEmailAndPassword, 
  createUserWithEmailAndPassword,
  signInWithPopup,
  signOut,
  onAuthStateChanged,
  updateProfile
} from 'firebase/auth';
import { auth, googleProvider } from '../firebase/config';
import { User } from '../types/User';
import { userService } from '../services/userService';
import { adminService } from '../services/adminService';

interface AuthContextType {
  currentUser: FirebaseUser | null;
  userProfile: User | null;
  login: (email: string, password: string) => Promise<void>;
  loginWithGoogle: () => Promise<void>;
  signup: (email: string, password: string, fullName: string, role: string) => Promise<void>;
  logout: () => Promise<void>;
  loading: boolean;
}

const AuthContext = createContext<AuthContextType>({} as AuthContextType);

export function useAuth() {
  return useContext(AuthContext);
}

export function AuthProvider({ children }: { children: React.ReactNode }) {
  const [currentUser, setCurrentUser] = useState<FirebaseUser | null>(null);
  const [userProfile, setUserProfile] = useState<User | null>(null);
  const [loading, setLoading] = useState(true);

  async function signup(email: string, password: string, fullName: string, role: string) {
    const { user } = await createUserWithEmailAndPassword(auth, email, password);
    await updateProfile(user, { displayName: fullName });
    
    // Create user profile in Firestore
    await userService.createUser({
      email: user.email!,
      displayName: fullName,
      role: role as any,
      isActive: true
    });
  }

  async function login(email: string, password: string) {
    await signInWithEmailAndPassword(auth, email, password);
  }

  async function loginWithGoogle() {
    const result = await signInWithPopup(auth, googleProvider);
    const user = result.user;
    
    // Check if user exists in Firestore
    let userProfile = await userService.getUserByEmail(user.email!);
    
    if (!userProfile) {
      // Determine role based on email
      let role = 'student'; // Default role
      if (adminService.isAdmin(user.email!)) {
        role = 'admin';
      }
      
      // Create user profile if doesn't exist
      await userService.createUser({
        email: user.email!,
        displayName: user.displayName || 'User',
        role: role as any,
        isActive: true
      });
      
      // Get the created profile
      userProfile = await userService.getUserByEmail(user.email!);
    }
    
    setUserProfile(userProfile);
  }

  async function logout() {
    await signOut(auth);
    setUserProfile(null);
  }

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, async (user) => {
      setCurrentUser(user);
      
      if (user) {
        // Ensure admin exists
        await adminService.ensureAdminExists();
        
        // Get user profile from Firestore
        try {
          const profile = await userService.getUserByEmail(user.email!);
          setUserProfile(profile);
        } catch (error) {
          console.error('Error fetching user profile:', error);
        }
      } else {
        setUserProfile(null);
      }
      
      setLoading(false);
    });

    return unsubscribe;
  }, []);

  const value = {
    currentUser,
    userProfile,
    login,
    loginWithGoogle,
    signup,
    logout,
    loading
  };

  return (
    <AuthContext.Provider value={value}>
      {!loading && children}
    </AuthContext.Provider>
  );
}
