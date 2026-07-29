import { create } from "zustand";

import { getCopilotData } from "../api/copilot";

const useCopilotStore = create((set) => ({

    copilotData: null,

    loading: false,

    fetchCopilot: async () => {

        set({

            loading: true

        });

        try {

            const data = await getCopilotData();

            set({

                copilotData: data,

                loading: false

            });

        }

        catch (error) {

            console.error(error);

            set({

                copilotData: null,

                loading: false

            });

        }

    }

}));

export default useCopilotStore;