import apiClient from "./apiClient";

export const getNetworkHealth = async () => {
    const response = await apiClient.get("/network");
    return response.data;
};