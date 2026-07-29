import { create } from "zustand";

import { getPredictions } from "../api/prediction";

const usePredictionStore = create((set) => ({

    predictionData: null,

    loading: false,

    fetchPredictions: async () => {

        set({

            loading: true

        });

        try {

            const data = await getPredictions();

            set({

                predictionData: data,

                loading: false

            });

        } catch (error) {

            console.error(error);

            set({

                predictionData: null,

                loading: false

            });

        }

    }

}));

export default usePredictionStore;