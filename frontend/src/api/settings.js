// src/api/settings.js


const API_URL =
"http://localhost:8000";





export async function getSettings(){


    const response =

    await fetch(

        `${API_URL}/settings/`

    );


    return response.json();

}






export async function updateSettings(data){


    const response =

    await fetch(

        `${API_URL}/settings/`,

        {

            method:"PUT",

            headers:{

                "Content-Type":"application/json"

            },

            body:JSON.stringify(data)

        }

    );


    return response.json();

}






export async function resetSettings(){


    const response =

    await fetch(

        `${API_URL}/settings/reset`,

        {

            method:"POST"

        }

    );


    return response.json();

}