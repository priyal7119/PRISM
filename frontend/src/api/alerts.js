// src/api/alerts.js


const API_URL =
"http://localhost:8000";




export async function getAlerts(){


    const response =
    await fetch(
        `${API_URL}/alerts/`
    );


    return response.json();

}





export async function getAlertSummary(){


    const response =
    await fetch(
        `${API_URL}/alerts/summary`
    );


    return response.json();

}






export async function getAlert(id){


    const response =
    await fetch(
        `${API_URL}/alerts/${id}`
    );


    return response.json();

}





export async function resolveAlert(id){


    const response =
    await fetch(

        `${API_URL}/alerts/${id}/resolve`,

        {

            method:"POST"

        }

    );


    return response.json();

}