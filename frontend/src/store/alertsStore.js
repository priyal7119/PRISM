import { create } from "zustand";

import {
    getAlerts,
    getAlertSummary,
    getIncidentMetrics,
    resolveAlert,
    acknowledgeAlert,
    escalateAlert
} from "../api/alerts";

const useAlertsStore = create((set, get) => ({

    alerts: [],
    filteredAlerts: [],
    summary: {},
    metrics: {},
    selectedAlert: null,

    loading: false,
    error: null,

    search: "",
    severityFilter: "All",
    statusFilter: "All",

    loadAlerts: async () => {

        set({
            loading: true,
            error: null
        });

        try {

            const data = await getAlerts();

            set({
                alerts: data,
                filteredAlerts: data,
                loading: false
            });

        } catch {

            set({
                loading: false,
                error: "Unable to load alerts."
            });

        }

    },

    loadSummary: async () => {

        const summary = await getAlertSummary();

        set({
            summary
        });

    },

    loadMetrics: async () => {

        const metrics = await getIncidentMetrics();

        set({
            metrics
        });

    },

    applyFilters: () => {

        const {
            alerts,
            search,
            severityFilter,
            statusFilter
        } = get();

        let result = [...alerts];

        if (search) {

            result = result.filter(alert =>
                alert.title
                    .toLowerCase()
                    .includes(search.toLowerCase())
            );

        }

        if (severityFilter !== "All") {

            result = result.filter(
                alert => alert.severity === severityFilter
            );

        }

        if (statusFilter !== "All") {

            result = result.filter(
                alert => alert.status === statusFilter
            );

        }

        set({
            filteredAlerts: result
        });

    },

    setSearch: (value) => {

        set({
            search: value
        });

        get().applyFilters();

    },

    setSeverityFilter: (value) => {

        set({
            severityFilter: value
        });

        get().applyFilters();

    },

    setStatusFilter: (value) => {

        set({
            statusFilter: value
        });

        get().applyFilters();

    },

    resetFilters: () => {

        set({

            search: "",
            severityFilter: "All",
            statusFilter: "All",
            filteredAlerts: get().alerts

        });

    },

    selectAlert: (alert) => {

        set({
            selectedAlert: alert
        });

    },

    resolve: async (id) => {

        await resolveAlert(id);

        await get().loadAlerts();
        await get().loadSummary();
        await get().loadMetrics();

        const updated = get().alerts.find(a => a.id === id);

        set({
            selectedAlert: updated || null
        });

    },

    acknowledge: async (id) => {

        await acknowledgeAlert(id);

        await get().loadAlerts();
        await get().loadMetrics();

        const updated = get().alerts.find(a => a.id === id);

        set({
            selectedAlert: updated || null
        });

    },

    escalate: async (id) => {

        await escalateAlert(id);

        await get().loadAlerts();
        await get().loadMetrics();

        const updated = get().alerts.find(a => a.id === id);

        set({
            selectedAlert: updated || null
        });

    }

}));

export default useAlertsStore;