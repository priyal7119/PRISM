// src/components/alerts/AlertSummaryCard.jsx


import useAlertsStore from "../../store/alertsStore";



function AlertSummaryCard(){


    const summary =
    useAlertsStore(
        (state)=>state.summary
    );



    const cards = [


        {
            title:"Total Alerts",
            value:summary.total || 0,
            icon:"🔔",
            type:"total"
        },


        {
            title:"Critical Alerts",
            value:summary.critical || 0,
            icon:"🚨",
            type:"critical"
        },


        {
            title:"Warning Alerts",
            value:summary.warning || 0,
            icon:"⚠️",
            type:"warning"
        },


        {
            title:"Resolved Alerts",
            value:summary.resolved || 0,
            icon:"✅",
            type:"resolved"
        }


    ];




    return (


        <div className="alert-summary-grid">



            {
                cards.map(

                    (card)=>(


                    <div

                    key={card.title}

                    className={
                        `alert-summary-card ${card.type}`
                    }

                    >



                        <div className="alert-summary-header">


                            <span className="alert-summary-icon">

                                {card.icon}

                            </span>



                            <p>

                                {card.title}

                            </p>


                        </div>





                        <h2>

                            {card.value}

                        </h2>



                    </div>


                    )

                )
            }





        </div>


    );


}



export default AlertSummaryCard;