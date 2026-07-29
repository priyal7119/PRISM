import axios from "axios";

const API = axios.create({

    baseURL: "http://localhost:8000"

});

export const getCopilotData = async () => {

    const response = await API.get("/copilot");

    return response.data;

};