import { create } from "zustand";
import { getNetworkHealth } from "../api/network";

const useNetworkStore = create((set) => ({
    network: null,
    loading: false,
    error: null,

    fetchNetwork: async () => {
        set({
            loading: true,
            error: null,
        });

        try {
            const data = await getNetworkHealth();

            set({
                network: data,
            });
        } catch (error) {
            console.error(error);

            set({
                error: error.message,
            });
        } finally {
            set({
                loading: false,
            });
        }
    },
}));

export default useNetworkStore;