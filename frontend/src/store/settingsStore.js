import { create } from "zustand";

import {

    getSettings,
    updateSettings,
    resetSettings

} from "../api/settings";

const useSettingsStore = create((set, get) => ({

    settings: {

        profile: {},
        network: {},
        notifications: {},
        security: {},
        preferences: {}

    },

    loading: false,

    error: null,



    loadSettings: async () => {

        set({

            loading: true,
            error: null

        });

        try {

            const data = await getSettings();

            set({

                settings: data

            });

        }

        catch (error) {

            console.error(error);

            set({

                error: error.message

            });

        }

        finally {

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



    saveSettings: async (data) => {

        try {

            const response = await updateSettings(data);

            set({

                settings: response.settings

            });

        }

        catch (error) {

            console.error(error);

        }

    },



    reset: async () => {

        try {

            const response = await resetSettings();

            set({

                settings: response.settings

            });

        }

        catch (error) {

            console.error(error);

        }

    }

}));

export default useSettingsStore;