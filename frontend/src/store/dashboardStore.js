import { create } from "zustand";
import { getDashboardData } from "../api/dashboard";

const useDashboardStore = create((set) => ({

    dashboard: null,

    loading: false,

    fetchDashboard: async () => {

        set({ loading: true });

        const data = await getDashboardData();

        set({

            dashboard: data,

            loading: false

        });

    }

}));

export default useDashboardStore;