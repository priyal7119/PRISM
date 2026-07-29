// src/components/reports/ReportSummaryCard.jsx


import useReportsStore from "../../store/reportsStore";



function ReportSummaryCard(){


    const summary =

    useReportsStore(

        (state)=>state.summary

    );





    const cards = [



        {

            title:"Total Reports",

            value:summary.total || 0,

            icon:"📄",

            type:"total"

        },



        {

            title:"Completed Reports",

            value:summary.completed || 0,

            icon:"✅",

            type:"completed"

        },



        {

            title:"Processing Reports",

            value:summary.processing || 0,

            icon:"⏳",

            type:"processing"

        },



        {

            title:"System Uptime",

            value:summary.uptime || "0%",

            icon:"📈",

            type:"uptime"

        }



    ];





    return (



        <div className="report-summary-grid">





            {

            cards.map(


                (card)=>(



                <div


                key={card.title}


                className={

                    `report-summary-card ${card.type}`

                }


                >




                    <div className="report-summary-header">



                        <span className="report-summary-icon">


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




export default ReportSummaryCard;