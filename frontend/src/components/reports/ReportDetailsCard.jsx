// src/components/reports/ReportDetailsCard.jsx


import useReportsStore from "../../store/reportsStore";



function ReportDetailsCard(){


    const selectedReport =

    useReportsStore(

        (state)=>state.selectedReport

    );






    if(!selectedReport){


        return (



            <div className="report-details-card">



                <h3>

                    Report Details

                </h3>




                <p>

                    Select a report to view details

                </p>




            </div>



        );


    }








    return (




        <div className="report-details-card">





            <h3>


                {selectedReport.name}


            </h3>







            <div className="report-detail-item">



                <span>

                    Type

                </span>



                <b>

                    {selectedReport.type}

                </b>



            </div>







            <div className="report-detail-item">



                <span>

                    Period

                </span>



                <b>

                    {selectedReport.period}

                </b>



            </div>







            <div className="report-detail-item">



                <span>

                    Devices

                </span>



                <b>

                    {selectedReport.devices}

                </b>



            </div>







            <div className="report-detail-item">



                <span>

                    Uptime

                </span>



                <b>

                    {selectedReport.uptime}

                </b>



            </div>







            <div className="report-detail-item">



                <span>

                    Incidents

                </span>



                <b>

                    {selectedReport.incidents}

                </b>



            </div>







            <div className="report-detail-item">



                <span>

                    Status

                </span>



                <b>

                    {selectedReport.status}

                </b>



            </div>







        </div>



    );


}



export default ReportDetailsCard;