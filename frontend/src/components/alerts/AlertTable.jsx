// src/components/alerts/AlertTable.jsx


import useAlertsStore from "../../store/alertsStore";



function AlertTable(){


    const {

        filteredAlerts,

        selectAlert


    } = useAlertsStore();





    return (


        <div className="alert-table-container">



            <table className="alert-table">



                <thead>


                    <tr>


                        <th>
                            Alert
                        </th>


                        <th>
                            Device
                        </th>


                        <th>
                            Severity
                        </th>


                        <th>
                            Category
                        </th>


                        <th>
                            Status
                        </th>


                        <th>
                            Time
                        </th>


                    </tr>


                </thead>





                <tbody>


                    {

                    filteredAlerts.map(

                        (alert)=>(


                        <tr

                        key={alert.id}

                        onClick={
                            ()=>selectAlert(alert)
                        }

                        >



                            <td>


                                <strong>

                                    {alert.title}

                                </strong>


                                <br/>


                                <span>

                                    {alert.description}

                                </span>


                            </td>





                            <td>

                                {alert.device}

                            </td>





                            <td>


                                <span

                                className={
                                    `alert-severity ${alert.severity.toLowerCase()}`
                                }

                                >


                                    {alert.severity}


                                </span>



                            </td>





                            <td>

                                {alert.category}

                            </td>





                            <td>


                                <span

                                className={
                                    `alert-status ${alert.status.toLowerCase()}`
                                }

                                >


                                    {alert.status}


                                </span>


                            </td>





                            <td>

                                {alert.time}

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



export default AlertTable;