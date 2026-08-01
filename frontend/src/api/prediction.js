import apiClient from "./apiClient";

export const getPredictions = async () => {
    const response = await apiClient.get("/predictions");
    return response.data;
};