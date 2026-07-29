import axios from "axios";

const API = axios.create({

    baseURL: "http://localhost:8000"

});

export const getNetworkHealth = async () => {

    const response = await API.get("/network");

    return response.data;

};