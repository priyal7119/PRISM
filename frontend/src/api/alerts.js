import apiClient from "./apiClient";

export const getAlerts = async () => {
    const response = await apiClient.get("/alerts/");
    return response.data;
};

export const getAlertSummary = async () => {
    const response = await apiClient.get("/alerts/summary");
    return response.data;
};

export const getAlert = async (id) => {
    const response = await apiClient.get(`/alerts/${id}`);
    return response.data;
};

export const resolveAlert = async (id) => {
    const response = await apiClient.post(`/alerts/${id}/resolve`);
    return response.data;
};