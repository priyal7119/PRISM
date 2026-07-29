// src/components/reports/ReportActions.jsx


import useReportsStore from "../../store/reportsStore";



function ReportActions(){


    const {

        selectedReport,

        generate


    } = useReportsStore();







    return (



        <div className="report-actions-card">






            <h3>

                Quick Actions

            </h3>







            <button


                className="report-action-btn"


                onClick={

                    ()=>generate("Performance")

                }


            >

                Generate Performance Report

            </button>








            <button


                className="report-action-btn"


                onClick={

                    ()=>generate("Security")

                }


            >

                Generate Security Report

            </button>









            <button


                className="report-action-btn"


            >

                Export Report

            </button>









            <button


                className="report-action-btn danger"


            >

                Delete Report

            </button>







            {

                selectedReport &&

                <p className="selected-report-name">


                    Selected:

                    {" "}

                    {selectedReport.name}


                </p>


            }








        </div>



    );


}



export default ReportActions;