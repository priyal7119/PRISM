import useDevicesStore from "../../store/devicesStore";

function DeviceFilters() {

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
                onChange={(e) => setSearch(e.target.value)}
            />

            <select
                value={statusFilter}
                onChange={(e) => setStatusFilter(e.target.value)}
            >

                <option value="All">All Status</option>
                <option value="Online">Online</option>
                <option value="Warning">Warning</option>
                <option value="Offline">Offline</option>

            </select>

            <select
                value={typeFilter}
                onChange={(e) => setTypeFilter(e.target.value)}
            >

                <option value="All">All Types</option>
                <option value="Router">Router</option>
                <option value="Switch">Switch</option>
                <option value="Server">Server</option>
                <option value="IoT">IoT</option>

            </select>

            <button
                type="button"
                onClick={resetFilters}
            >
                Reset Filters
            </button>

        </div>

    );

}

export default DeviceFilters;