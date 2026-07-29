import axios from "axios";

const API = axios.create({

    baseURL: "http://localhost:8000"

});

export const getPredictions = async () => {

    const response = await API.get("/predictions");

    return response.data;

};