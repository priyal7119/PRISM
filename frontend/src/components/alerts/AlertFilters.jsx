// src/components/alerts/AlertFilters.jsx


import useAlertsStore from "../../store/alertsStore";



function AlertFilters(){


    const {

        search,

        severityFilter,

        statusFilter,

        setSearch,

        setSeverityFilter,

        setStatusFilter,

        resetFilters


    } = useAlertsStore();





    return (


        <div className="alert-filters">





            <input

                type="text"

                placeholder="Search alerts..."

                value={search}

                onChange={
                    (e)=>setSearch(e.target.value)
                }

                className="alert-search"

            />







            <select

                value={severityFilter}

                onChange={
                    (e)=>setSeverityFilter(e.target.value)
                }

                className="alert-filter-select"

            >


                <option value="All">

                    All Severity

                </option>



                <option value="Critical">

                    Critical

                </option>



                <option value="Warning">

                    Warning

                </option>



                <option value="Info">

                    Info

                </option>



            </select>







            <select

                value={statusFilter}

                onChange={
                    (e)=>setStatusFilter(e.target.value)
                }

                className="alert-filter-select"

            >


                <option value="All">

                    All Status

                </option>



                <option value="Open">

                    Open

                </option>



                <option value="Resolved">

                    Resolved

                </option>



            </select>








            <button

                className="alert-reset-btn"

                onClick={resetFilters}

            >

                Reset


            </button>





        </div>


    );


}



export default AlertFilters;