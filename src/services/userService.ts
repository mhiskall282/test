import { 
  collection, 
  doc, 
  addDoc, 
  updateDoc, 
  deleteDoc, 
  getDocs, 
  getDoc,
  query, 
  where, 
  orderBy,
  serverTimestamp 
} from 'firebase/firestore';
import { db } from '../firebase/firebase.client.ts';
import { User, UserRole } from '../types/User';

const USERS_COLLECTION = 'users';

export const userService = {
  // Create a new user
  async createUser(userData: Omit<User, 'uid' | 'createdAt' | 'updatedAt'>): Promise<string> {
    try {
      const docRef = await addDoc(collection(db, USERS_COLLECTION), {
        ...userData,
        createdAt: serverTimestamp(),
        updatedAt: serverTimestamp(),
        isActive: true
      });
      return docRef.id;
    } catch (error) {
      console.error('Error creating user:', error);
      throw error;
    }
  },

  // Get user by ID
  async getUserById(uid: string): Promise<User | null> {
    try {
      const docRef = doc(db, USERS_COLLECTION, uid);
      const docSnap = await getDoc(docRef);
      
      if (docSnap.exists()) {
        return { uid: docSnap.id, ...docSnap.data() } as User;
      }
      return null;
    } catch (error) {
      console.error('Error getting user:', error);
      throw error;
    }
  },

  // Get user by email
  async getUserByEmail(email: string): Promise<User | null> {
    try {
      const q = query(
        collection(db, USERS_COLLECTION),
        where('email', '==', email)
      );
      const querySnapshot = await getDocs(q);
      
      if (!querySnapshot.empty) {
        const doc = querySnapshot.docs[0];
        return { uid: doc.id, ...doc.data() } as User;
      }
      return null;
    } catch (error) {
      console.error('Error getting user by email:', error);
      throw error;
    }
  },

  // Get all users
  async getAllUsers(): Promise<User[]> {
    try {
      const q = query(
        collection(db, USERS_COLLECTION),
        orderBy('createdAt', 'desc')
      );
      const querySnapshot = await getDocs(q);
      
      return querySnapshot.docs.map(doc => ({
        uid: doc.id,
        ...doc.data()
      })) as User[];
    } catch (error) {
      console.error('Error getting all users:', error);
      throw error;
    }
  },

  // Get users by role
  async getUsersByRole(role: UserRole): Promise<User[]> {
    try {
      const q = query(
        collection(db, USERS_COLLECTION),
        where('role', '==', role),
        orderBy('createdAt', 'desc')
      );
      const querySnapshot = await getDocs(q);
      
      return querySnapshot.docs.map(doc => ({
        uid: doc.id,
        ...doc.data()
      })) as User[];
    } catch (error) {
      console.error('Error getting users by role:', error);
      throw error;
    }
  },

  // Update user
  async updateUser(uid: string, userData: Partial<User>): Promise<void> {
    try {
      const docRef = doc(db, USERS_COLLECTION, uid);
      await updateDoc(docRef, {
        ...userData,
        updatedAt: serverTimestamp()
      });
    } catch (error) {
      console.error('Error updating user:', error);
      throw error;
    }
  },

  // Delete user
  async deleteUser(uid: string): Promise<void> {
    try {
      const docRef = doc(db, USERS_COLLECTION, uid);
      await deleteDoc(docRef);
    } catch (error) {
      console.error('Error deleting user:', error);
      throw error;
    }
  },

  // Get students for a tutor
  async getStudentsForTutor(tutorId: string): Promise<User[]> {
    try {
      const q = query(
        collection(db, USERS_COLLECTION),
        where('role', '==', 'student'),
        where('tutorId', '==', tutorId)
      );
      const querySnapshot = await getDocs(q);
      
      return querySnapshot.docs.map(doc => ({
        uid: doc.id,
        ...doc.data()
      })) as User[];
    } catch (error) {
      console.error('Error getting students for tutor:', error);
      throw error;
    }
  },

  // Search users
  async searchUsers(searchTerm: string): Promise<User[]> {
    try {
      const q = query(
        collection(db, USERS_COLLECTION),
        orderBy('displayName')
      );
      const querySnapshot = await getDocs(q);
      
      const users = querySnapshot.docs.map(doc => ({
        uid: doc.id,
        ...doc.data()
      })) as User[];
      
      return users.filter(user => 
        user.displayName.toLowerCase().includes(searchTerm.toLowerCase()) ||
        user.email.toLowerCase().includes(searchTerm.toLowerCase())
      );
    } catch (error) {
      console.error('Error searching users:', error);
      throw error;
    }
  }
};

