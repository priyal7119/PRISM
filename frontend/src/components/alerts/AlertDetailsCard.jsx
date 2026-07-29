// src/components/alerts/AlertDetailsCard.jsx


import useAlertsStore from "../../store/alertsStore";



function AlertDetailsCard(){


    const selectedAlert =
    useAlertsStore(
        (state)=>state.selectedAlert
    );




    if(!selectedAlert){


        return (

            <div className="alert-details-card">


                <h3>
                    Alert Details
                </h3>



                <p>
                    Select an alert to view details
                </p>



            </div>

        );


    }





    return (


        <div className="alert-details-card">



            <h3>

                {selectedAlert.title}

            </h3>




            <div className="alert-detail-item">


                <span>
                    Description
                </span>


                <b>
                    {selectedAlert.description}
                </b>


            </div>






            <div className="alert-detail-item">


                <span>
                    Device
                </span>


                <b>
                    {selectedAlert.device}
                </b>


            </div>







            <div className="alert-detail-item">


                <span>
                    Severity
                </span>


                <b>
                    {selectedAlert.severity}
                </b>


            </div>







            <div className="alert-detail-item">


                <span>
                    Category
                </span>


                <b>
                    {selectedAlert.category}
                </b>


            </div>







            <div className="alert-detail-item">


                <span>
                    Status
                </span>


                <b>
                    {selectedAlert.status}
                </b>


            </div>






            <div className="alert-detail-item">


                <span>
                    Time
                </span>


                <b>
                    {selectedAlert.time}
                </b>


            </div>





        </div>


    );


}



export default AlertDetailsCard;