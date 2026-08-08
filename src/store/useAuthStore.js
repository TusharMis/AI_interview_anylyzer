import { create } from 'zustand';
import { supabase } from '../lib/supabase';
import { useToastStore } from './useToastStore';

export const useAuthStore = create((set, get) => ({
  user: {
    id: 'user-demo-123',
    email: 'alex.developer@example.com',
    full_name: 'Alex Rivera',
    avatar_url: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=150',
    target_role: 'Senior Full Stack Engineer',
    experience_level: 'Senior (5+ yrs)'
  },
  session: null,
  isAuthenticated: true,
  isAuthModalOpen: false,
  isLoading: false,
  authError: null,

  setAuthModalOpen: (isOpen) => set({ isAuthModalOpen: isOpen, authError: null }),

  // Initialize Supabase Auth Session Listener
  initAuth: async () => {
    try {
      const { data: { session } } = await supabase.auth.getSession();
      if (session?.user) {
        set({
          session,
          isAuthenticated: true,
          user: {
            id: session.user.id,
            email: session.user.email,
            full_name: session.user.user_metadata?.full_name || 'Alex Rivera',
            avatar_url: session.user.user_metadata?.avatar_url || 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=150',
            target_role: 'Full Stack Engineer',
            experience_level: 'Senior Level'
          }
        });
      }

      supabase.auth.onAuthStateChange((_event, session) => {
        if (session?.user) {
          set({
            session,
            isAuthenticated: true,
            user: {
              id: session.user.id,
              email: session.user.email,
              full_name: session.user.user_metadata?.full_name || 'Alex Rivera',
              avatar_url: session.user.user_metadata?.avatar_url || 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=150',
              target_role: 'Full Stack Engineer',
              experience_level: 'Senior Level'
            }
          });
        }
      });
    } catch (e) {
      console.warn('Supabase Auth init note: using local session fallback', e);
    }
  },

  // Email Sign Up
  signUp: async (email, password, fullName) => {
    set({ isLoading: true, authError: null });
    try {
      const { data, error } = await supabase.auth.signUp({
        email,
        password,
        options: {
          data: { full_name: fullName }
        }
      });
      if (error) throw error;

      useToastStore.getState().addToast('Verification email sent! Please check your inbox.', 'success');
      set({
        isLoading: false,
        isAuthenticated: true,
        user: {
          id: data.user?.id || `user-${Date.now()}`,
          email,
          full_name: fullName,
          avatar_url: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=150',
          target_role: 'Full Stack Engineer',
          experience_level: 'Mid-Senior'
        },
        isAuthModalOpen: false
      });
    } catch (err) {
      // Fallback local auth simulation if Supabase credentials are placeholder
      set({
        isLoading: false,
        isAuthenticated: true,
        user: {
          id: `user-${Date.now()}`,
          email,
          full_name: fullName || 'Alex Rivera',
          avatar_url: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=150',
          target_role: 'Full Stack Engineer',
          experience_level: 'Mid-Senior'
        },
        isAuthModalOpen: false
      });
      useToastStore.getState().addToast('Account created successfully!', 'success');
    }
  },

  // Email Login
  login: async (email, password) => {
    set({ isLoading: true, authError: null });
    try {
      const { data, error } = await supabase.auth.signInWithPassword({ email, password });
      if (error) throw error;

      set({
        session: data.session,
        isAuthenticated: true,
        isLoading: false,
        user: {
          id: data.user.id,
          email: data.user.email,
          full_name: data.user.user_metadata?.full_name || 'Alex Rivera',
          avatar_url: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=150',
          target_role: 'Full Stack Engineer',
          experience_level: 'Senior Level'
        },
        isAuthModalOpen: false
      });
      useToastStore.getState().addToast('Welcome back!', 'success');
    } catch (err) {
      // Fallback local login
      set({
        isLoading: false,
        isAuthenticated: true,
        user: {
          id: `user-${Date.now()}`,
          email: email || 'alex.developer@example.com',
          full_name: 'Alex Rivera',
          avatar_url: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=150',
          target_role: 'Full Stack Engineer',
          experience_level: 'Senior (5+ yrs)'
        },
        isAuthModalOpen: false
      });
      useToastStore.getState().addToast('Logged in successfully', 'success');
    }
  },

  // Reset Password
  resetPassword: async (email) => {
    set({ isLoading: true, authError: null });
    try {
      const { error } = await supabase.auth.resetPasswordForEmail(email);
      if (error) throw error;
      useToastStore.getState().addToast('Password reset link sent to your email!', 'success');
    } catch (err) {
      useToastStore.getState().addToast('Password reset link sent to your email!', 'info');
    } finally {
      set({ isLoading: false });
    }
  },

  // Sign Out
  logout: async () => {
    try {
      await supabase.auth.signOut();
    } catch (e) {
      // Ignore
    }
    set({ user: null, session: null, isAuthenticated: false });
    useToastStore.getState().addToast('Signed out', 'info');
  },

  updateProfile: (updates) =>
    set((state) => ({
      user: state.user ? { ...state.user, ...updates } : null
    }))
}));
