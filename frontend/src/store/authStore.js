// src/store/authStore.js

import { create } from "zustand";
import { login, register } from "../api/auth";

const useAuthStore = create((set) => ({
    token: typeof window !== "undefined" ? localStorage.getItem("token") : null,
    user: null,

    loginUser: async (data) => {
        try {
            const response = await login(data);

            if (response?.access_token) {
                localStorage.setItem("token", response.access_token);
                set({ token: response.access_token, user: response.user || null });
            }

            return response;
        } catch (error) {
            return {
                error: error?.response?.data?.detail || "Login failed"
            };
        }
    },

    registerUser: async (data) => {
        try {
            return await register(data);
        } catch (error) {
            return {
                error: error?.response?.data?.detail || "Registration failed"
            };
        }
    },

    logout: () => {
        localStorage.removeItem("token");
        set({ token: null, user: null });
    }
}));

export default useAuthStore;