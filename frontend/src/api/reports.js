// src/api/reports.js


const API_URL =
"http://localhost:8000";





export async function getReports(){


    const response =

    await fetch(

        `${API_URL}/reports/`

    );


    return response.json();

}







export async function getReportSummary(){


    const response =

    await fetch(

        `${API_URL}/reports/summary`

    );


    return response.json();

}







export async function getReport(id){


    const response =

    await fetch(

        `${API_URL}/reports/${id}`

    );


    return response.json();

}







export async function generateReport(type){


    const response =

    await fetch(

        `${API_URL}/reports/generate/${type}`,

        {

            method:"POST"

        }

    );



    return response.json();

}