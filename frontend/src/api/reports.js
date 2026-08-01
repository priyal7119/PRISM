import apiClient from "./apiClient";

export const getReports = async () => {
    const response = await apiClient.get("/reports/");
    return response.data;
};

export const getReportSummary = async () => {
    const response = await apiClient.get("/reports/summary");
    return response.data;
};

export const getReport = async (id) => {
    const response = await apiClient.get(`/reports/${id}`);
    return response.data;
};

export const generateReport = async (type) => {
    const response = await apiClient.post(
        `/reports/generate/${type}`
    );

    return response.data;
};