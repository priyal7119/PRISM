import { create } from "zustand";
import {
    getDevices,
    getDeviceSummary,
    restartDevice
} from "../api/devices";

const useDevicesStore = create((set, get) => ({

    devices: [],
    filteredDevices: [],
    summary: {},
    selectedDevice: null,

    loading: false,
    error: null,

    search: "",
    statusFilter: "All",
    typeFilter: "All",

    loadDevices: async () => {

        set({
            loading: true,
            error: null
        });

        try {

            const data = await getDevices();

            set({
                devices: data,
                filteredDevices: data,
                loading: false
            });

        } catch {

            set({
                loading: false,
                error: "Unable to load devices."
            });

        }

    },

    loadSummary: async () => {

        const summary = await getDeviceSummary();

        set({
            summary
        });

    },

    applyFilters: () => {

        const {
            devices,
            search,
            statusFilter,
            typeFilter
        } = get();

        let result = [...devices];

        if (search) {

            result = result.filter(device =>
                device.name
                    .toLowerCase()
                    .includes(search.toLowerCase())
            );

        }

        if (statusFilter !== "All") {

            result = result.filter(
                device => device.status === statusFilter
            );

        }

        if (typeFilter !== "All") {

            result = result.filter(
                device => device.type === typeFilter
            );

        }

        set({
            filteredDevices: result
        });

    },

    setSearch: (value) => {

        set({
            search: value
        });

        get().applyFilters();

    },

    setStatusFilter: (value) => {

        set({
            statusFilter: value
        });

        get().applyFilters();

    },

    setTypeFilter: (value) => {

        set({
            typeFilter: value
        });

        get().applyFilters();

    },

    resetFilters: () => {

        set({

            search: "",
            statusFilter: "All",
            typeFilter: "All",
            filteredDevices: get().devices

        });

    },

    selectDevice: (device) => {

        set({
            selectedDevice: device
        });

    },

    restart: async (id) => {

        await restartDevice(id);

        await get().loadDevices();

        await get().loadSummary();

        const device = get().devices.find(
            d => d.id === id
        );

        set({
            selectedDevice: device || null
        });

    }

}));

export default useDevicesStore;