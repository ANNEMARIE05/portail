import { create } from 'zustand';

interface UserState {
    apiKey: string | null;
    isAuthenticated: boolean;
    setApiKey: (key: string) => void;
    logout: () => void;
}

export const useUserStore = create<UserState>((set) => ({
    apiKey: null,
    isAuthenticated: false,
    setApiKey: (key) => set({ apiKey: key, isAuthenticated: true }),
    logout: () => set({ apiKey: null, isAuthenticated: false }),
}));
