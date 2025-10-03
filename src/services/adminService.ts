import { userService } from './userService';

// Admin email for special access
const ADMIN_EMAIL = 'johnokyere282@icloud.com';

export const adminService = {
  // Check if user is admin
  isAdmin(email: string): boolean {
    return email === ADMIN_EMAIL;
  },

  // Create admin user if doesn't exist
  async ensureAdminExists(): Promise<void> {
    try {
      const existingAdmin = await userService.getUserByEmail(ADMIN_EMAIL);
      
      if (!existingAdmin) {
        await userService.createUser({
          email: ADMIN_EMAIL,
          displayName: 'Admin User',
          role: 'admin',
          isActive: true,
          profile: {
            department: 'Administration'
          }
        });
        console.log('Admin user created successfully');
      }
    } catch (error) {
      console.error('Error ensuring admin exists:', error);
    }
  },

  // Get admin user
  async getAdminUser() {
    return await userService.getUserByEmail(ADMIN_EMAIL);
  }
};
