// src/components/reports/ReportFilters.jsx


import useReportsStore from "../../store/reportsStore";



function ReportFilters(){


    const {

        search,

        typeFilter,

        statusFilter,

        setSearch,

        setTypeFilter,

        setStatusFilter,

        resetFilters


    } = useReportsStore();





    return (



        <div className="report-filters">





            <input


                type="text"


                placeholder="Search reports..."


                value={search}


                onChange={

                    (e)=>setSearch(e.target.value)

                }


                className="report-search"


            />








            <select


                value={typeFilter}


                onChange={

                    (e)=>setTypeFilter(e.target.value)

                }


                className="report-filter-select"


            >



                <option value="All">

                    All Types

                </option>




                <option value="Performance">

                    Performance

                </option>




                <option value="Security">

                    Security

                </option>




                <option value="Health">

                    Health

                </option>




                <option value="Infrastructure">

                    Infrastructure

                </option>




            </select>








            <select


                value={statusFilter}


                onChange={

                    (e)=>setStatusFilter(e.target.value)

                }


                className="report-filter-select"


            >




                <option value="All">

                    All Status

                </option>




                <option value="Completed">

                    Completed

                </option>




                <option value="Processing">

                    Processing

                </option>




            </select>








            <button


                className="report-reset-btn"


                onClick={resetFilters}


            >

                Reset


            </button>






        </div>



    );


}



export default ReportFilters;