// src/api/devices.js


const API_URL = "http://localhost:8000";



export async function getDevices(){

    const response = await fetch(
        `${API_URL}/devices/`
    );


    return response.json();

}



export async function getDeviceSummary(){

    const response = await fetch(
        `${API_URL}/devices/summary`
    );


    return response.json();

}



export async function getDevice(id){

    const response = await fetch(
        `${API_URL}/devices/${id}`
    );


    return response.json();

}



export async function restartDevice(id){

    const response = await fetch(
        `${API_URL}/devices/${id}/restart`,
        {
            method:"POST"
        }
    );


    return response.json();

}