// src/components/devices/DeviceFilters.jsx


import useDevicesStore from "../../store/devicesStore";


function DeviceFilters(){


    const {
        search,
        statusFilter,
        typeFilter,
        setSearch,
        setStatusFilter,
        setTypeFilter,
        resetFilters

    } = useDevicesStore();



    return (

        <div className="device-filters">


            <input
                type="text"
                placeholder="Search devices..."
                value={search}
                onChange={
                    (e)=>setSearch(e.target.value)
                }
                className="device-search"
            />



            <select
                value={statusFilter}
                onChange={
                    (e)=>setStatusFilter(e.target.value)
                }
                className="device-filter-select"
            >

                <option value="All">
                    All Status
                </option>

                <option value="Online">
                    Online
                </option>

                <option value="Warning">
                    Warning
                </option>

                <option value="Offline">
                    Offline
                </option>


            </select>




            <select
                value={typeFilter}
                onChange={
                    (e)=>setTypeFilter(e.target.value)
                }
                className="device-filter-select"
            >

                <option value="All">
                    All Types
                </option>

                <option value="Router">
                    Router
                </option>

                <option value="Switch">
                    Switch
                </option>

                <option value="Server">
                    Server
                </option>

                <option value="IoT">
                    IoT
                </option>


            </select>




            <button
                className="device-reset-btn"
                onClick={resetFilters}
            >

                Reset

            </button>


        </div>

    );

}


export default DeviceFilters;