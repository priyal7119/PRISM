// src/api/alerts.js

import apiClient from "./apiClient";

export const getAlerts = async () => {
    const response = await apiClient.get("/alerts/");
    return response.data;
};

export const getAlertSummary = async () => {
    const response = await apiClient.get("/alerts/summary");
    return response.data;
};

export const getIncidentMetrics = async () => {
    const response = await apiClient.get("/alerts/incident-metrics");
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

export const acknowledgeAlert = async (id) => {
    const response = await apiClient.post(`/alerts/${id}/acknowledge`);
    return response.data;
};

export const escalateAlert = async (id) => {
    const response = await apiClient.post(`/alerts/${id}/escalate`);
    return response.data;
};