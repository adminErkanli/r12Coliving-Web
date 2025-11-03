import { create } from 'zustand'
import { devtools, persist } from 'zustand/middleware'

// Example store interface
interface AppState {
  // User state
  user: {
    id: string | null
    name: string | null
    email: string | null
    isAuthenticated: boolean
  }
  
  // UI state
  theme: 'light' | 'dark' | 'system'
  sidebarOpen: boolean
  
  // Actions
  setUser: (user: Partial<AppState['user']>) => void
  logout: () => void
  setTheme: (theme: AppState['theme']) => void
  toggleSidebar: () => void
  setSidebarOpen: (open: boolean) => void
}

export const useAppStore = create<AppState>()(
  devtools(
    persist(
      (set, get) => ({
        // Initial state
        user: {
          id: null,
          name: null,
          email: null,
          isAuthenticated: false,
        },
        theme: 'system',
        sidebarOpen: false,
        
        // Actions
        setUser: (userData) =>
          set(
            (state) => ({
              user: { ...state.user, ...userData, isAuthenticated: true },
            }),
            false,
            'setUser'
          ),
        
        logout: () =>
          set(
            {
              user: {
                id: null,
                name: null,
                email: null,
                isAuthenticated: false,
              },
            },
            false,
            'logout'
          ),
        
        setTheme: (theme) =>
          set({ theme }, false, 'setTheme'),
        
        toggleSidebar: () =>
          set(
            (state) => ({ sidebarOpen: !state.sidebarOpen }),
            false,
            'toggleSidebar'
          ),
        
        setSidebarOpen: (open) =>
          set({ sidebarOpen: open }, false, 'setSidebarOpen'),
      }),
      {
        name: 'app-storage',
        partialize: (state) => ({
          user: state.user,
          theme: state.theme,
        }),
      }
    ),
    {
      name: 'app-store',
    }
  )
)