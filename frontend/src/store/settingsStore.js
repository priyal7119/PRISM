// src/store/settingsStore.js

import { create } from "zustand";

import {
    getSettings,
    updateSettings,
    resetSettings
} from "../api/settings";

const defaultSettings = {
    profile: {
        name: "Admin User",
        role: "Super Administrator",
        email: "admin@prism.local"
    },

    network: {
        defaultView: "overview"
    },

    notifications: {
        enabled: true,
        emailAlerts: true
    },

    security: {
        openAccess: true
    },

    preferences: {
        refreshInterval: 30,
        autoRefresh: true
    }
};

const useSettingsStore = create((set, get) => ({
    settings: defaultSettings,

    loading: false,

    saving: false,

    error: null,

    loadSettings: async () => {
        set({
            loading: true,
            error: null
        });

        try {
            const data = await getSettings();

            set({
                settings: {
                    ...defaultSettings,
                    ...data
                }
            });
        } catch (error) {
            console.error(error);

            set({
                error: error.message,
                settings: defaultSettings
            });
        } finally {
            set({
                loading: false
            });
        }
    },

    updateLocalSetting: (section, field, value) => {
        const current = get().settings;

        set({
            settings: {
                ...current,
                [section]: {
                    ...current[section],
                    [field]: value
                }
            }
        });
    },

    saveSettings: async () => {
        set({
            saving: true,
            error: null
        });

        try {
            const response = await updateSettings(get().settings);

            set({
                settings: response.settings || response
            });

            return true;
        } catch (error) {
            console.error(error);

            set({
                error: error.message
            });

            return false;
        } finally {
            set({
                saving: false
            });
        }
    },

    reset: async () => {
        set({
            loading: true
        });

        try {
            const response = await resetSettings();

            set({
                settings: response.settings || response
            });
        } catch (error) {
            console.error(error);

            set({
                settings: defaultSettings,
                error: error.message
            });
        } finally {
            set({
                loading: false
            });
        }
    }
}));

export default useSettingsStore;