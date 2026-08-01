import { create } from "zustand";
import { getPredictions } from "../api/prediction";

const usePredictionStore = create((set) => ({
    predictionData: null,
    loading: false,
    error: null,

    fetchPredictions: async () => {
        set({
            loading: true,
            error: null,
        });

        try {
            const data = await getPredictions();

            set({
                predictionData: data,
            });
        } catch (error) {
            console.error(error);

            set({
                predictionData: null,
                error: error.message,
            });
        } finally {
            set({
                loading: false,
            });
        }
    },
}));

export default usePredictionStore;