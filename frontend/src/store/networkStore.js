import { create } from "zustand";

import { getNetworkHealth } from "../api/network";

const useNetworkStore = create((set) => ({

    network: null,

    loading: false,

    fetchNetwork: async () => {

        set({

            loading: true

        });

        const data = await getNetworkHealth();

        set({

            network: data,

            loading: false

        });

    }

}));

export default useNetworkStore;