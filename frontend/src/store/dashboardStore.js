import { create } from "zustand";
import { getDashboardData } from "../api/dashboard";

const useDashboardStore = create((set) => ({
    dashboard: null,
    loading: false,
    error: null,

    fetchDashboard: async () => {
        set({
            loading: true,
            error: null
        });

        try {
            const data = await getDashboardData();

            set({
                dashboard: data,
                loading: false,
                error: null
            });
        } catch (err) {
            console.error(err);

            set({
                dashboard: null,
                loading: false,
                error: "Unable to load dashboard."
            });
        }
    },

    refreshDashboard: async () => {
        const data = await getDashboardData();

        set({
            dashboard: data
        });
    }
}));

export default useDashboardStore;