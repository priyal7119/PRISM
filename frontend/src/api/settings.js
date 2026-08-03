// src/api/settings.js

import apiClient from "./apiClient";

/**
 * Fetch all enterprise settings
 */
export const getSettings = async () => {
    const response = await apiClient.get("/settings/");
    return response.data;
};

/**
 * Update settings
 */
export const updateSettings = async (settings) => {
    const response = await apiClient.put(
        "/settings/",
        settings
    );

    return response.data;
};

/**
 * Reset settings back to backend defaults
 */
export const resetSettings = async () => {
    const response = await apiClient.post(
        "/settings/reset"
    );

    return response.data;
};

/**
 * Export settings configuration
 * (Optional backend endpoint)
 */
export const exportSettings = async () => {
    const response = await apiClient.get(
        "/settings/export"
    );

    return response.data;
};

/**
 * Import settings configuration
 * (Optional backend endpoint)
 */
export const importSettings = async (settings) => {
    const response = await apiClient.post(
        "/settings/import",
        settings
    );

    return response.data;
};