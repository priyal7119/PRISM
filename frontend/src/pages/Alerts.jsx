// src/pages/Alerts.jsx


import { useEffect } from "react";


import useAlertsStore from "../store/alertsStore";


import AlertSummaryCard 
from "../components/alerts/AlertSummaryCard";


import AlertFilters 
from "../components/alerts/AlertFilters";


import AlertTable 
from "../components/alerts/AlertTable";


import AlertDetailsCard 
from "../components/alerts/AlertDetailsCard";


import AlertTimeline 
from "../components/alerts/AlertTimeline";


import AlertActions 
from "../components/alerts/AlertActions";


import "../styles/alerts.css";




function Alerts(){


    const {

        loadAlerts,

        loadSummary


    } = useAlertsStore();





    useEffect(()=>{


        loadAlerts();

        loadSummary();



    },[]);







    return (



        <div className="alerts-page">





            <div className="alerts-header">



                <h1>

                    Alerts Management

                </h1>




                <p>

                    Monitor and resolve network alerts

                </p>



            </div>







            <AlertSummaryCard />








            <div className="alerts-section">


                <AlertFilters />


            </div>









            <div className="alerts-section alert-card">



                <h2>

                    Alert Table

                </h2>



                <AlertTable />



            </div>









            <div className="alerts-grid">






                <AlertTimeline />






                <AlertDetailsCard />






                <AlertActions />






            </div>








        </div>



    );


}



export default Alerts;