import apiClient from "./apiClient";

export const getDevices = async () => {
    const response = await apiClient.get("/devices/");
    return response.data;
};

export const getDeviceSummary = async () => {
    const response = await apiClient.get("/devices/summary");
    return response.data;
};

export const getDevice = async (id) => {
    const response = await apiClient.get(`/devices/${id}`);
    return response.data;
};

export const restartDevice = async (id) => {
    const response = await apiClient.post(`/devices/${id}/restart`);
    return response.data;
};