// src/components/alerts/AlertActions.jsx


import useAlertsStore from "../../store/alertsStore";



function AlertActions(){


    const {

        selectedAlert,

        resolve


    } = useAlertsStore();






    if(!selectedAlert){


        return (


            <div className="alert-actions-card">


                <h3>
                    Quick Actions
                </h3>


                <p>
                    Select an alert first
                </p>



            </div>


        );


    }





    return (


        <div className="alert-actions-card">



            <h3>
                Quick Actions
            </h3>






            <button

                className="alert-action-btn"

            >

                Acknowledge Alert

            </button>






            <button

                className="alert-action-btn"

                onClick={
                    ()=>resolve(selectedAlert.id)
                }

            >

                Resolve Alert

            </button>







            <button

                className="alert-action-btn"

            >

                Create Ticket

            </button>








            <button

                className="alert-action-btn danger"

            >

                Delete Alert

            </button>





        </div>


    );


}



export default AlertActions;