//@ts-nocheck
import { create } from 'zustand'
import { persist } from 'zustand/middleware'

interface User {
  id: string
  name: string
  userName: string
  email: string
  phone: string
  status: 'active' | 'not_active' | null
}

interface UserStore {
  users: User[]
  addUser: (user: User) => void
  updateUser: (userId: string, updatedUser: Partial<User>) => void
  loadUsers: () => void
}

export const useUserStore = create<UserStore>(
  persist(
    (set) => ({
      users: [],
      addUser: (user) =>
        set((state) => ({
          users: [...state.users, user],
        })),
      updateUser: (userId, updatedUser) =>
        set((state) => ({
          users: state.users.map((u, index) =>
            index + 1 === Number(userId) ? { ...u, ...updatedUser } : u
          ),
        })),
      loadUsers: () =>
        set((state) => ({
          users: state.users,
        })),
    }),
    {
      name: 'user-store', // Key in localStorage
      getStorage: () => localStorage, // Use localStorage
    }
  )
)
