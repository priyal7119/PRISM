// src/components/reports/ReportTable.jsx


import useReportsStore from "../../store/reportsStore";



function ReportTable(){


    const {


        filteredReports,

        selectReport


    } = useReportsStore();






    return (



        <div className="report-table-container">





            <table className="report-table">





                <thead>


                    <tr>


                        <th>

                            Report Name

                        </th>



                        <th>

                            Type

                        </th>



                        <th>

                            Period

                        </th>



                        <th>

                            Devices

                        </th>



                        <th>

                            Uptime

                        </th>



                        <th>

                            Status

                        </th>



                        <th>

                            Created

                        </th>



                    </tr>


                </thead>








                <tbody>



                {


                filteredReports.map(


                    (report)=>(



                    <tr


                    key={report.id}


                    onClick={

                        ()=>selectReport(report)

                    }


                    >






                        <td>


                            <strong>


                                {report.name}


                            </strong>



                        </td>







                        <td>


                            {report.type}


                        </td>







                        <td>


                            {report.period}


                        </td>







                        <td>


                            {report.devices}


                        </td>







                        <td>


                            {report.uptime}


                        </td>








                        <td>




                            <span


                            className={

                                `report-status ${report.status.toLowerCase()}`

                            }


                            >



                                {report.status}



                            </span>




                        </td>








                        <td>


                            {report.created}


                        </td>






                    </tr>



                    )


                )

                }





                </tbody>





            </table>







        </div>



    );


}



export default ReportTable;