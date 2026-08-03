// src/components/devices/DeviceFilters.jsx

import { Search, RotateCcw, Filter } from "lucide-react";
import useDevicesStore from "../../store/devicesStore";

function DeviceFilters() {
    const {
        search,
        statusFilter,
        typeFilter,
        setSearch,
        setStatusFilter,
        setTypeFilter,
        resetFilters,
    } = useDevicesStore();

    return (
        <div className="device-filters">
            <div
                style={{
                    position: "relative",
                    flex: 1,
                    minWidth: 320,
                }}
            >
                <Search
                    size={18}
                    style={{
                        position: "absolute",
                        left: 14,
                        top: "50%",
                        transform: "translateY(-50%)",
                        color: "var(--text-muted)",
                    }}
                />

                <input
                    type="text"
                    placeholder="Search devices, IP address, location..."
                    value={search}
                    onChange={(e) => setSearch(e.target.value)}
                    style={{
                        width: "100%",
                        paddingLeft: 42,
                    }}
                />
            </div>

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
                onClick={resetFilters}
                style={{
                    display: "flex",
                    alignItems: "center",
                    gap: 8,
                }}
            >
                <RotateCcw size={16} />
                Reset
            </button>

            <div
                style={{
                    display: "flex",
                    alignItems: "center",
                    gap: 8,
                    marginLeft: "auto",
                    color: "var(--text-muted)",
                    fontSize: 13,
                    fontWeight: 500,
                }}
            >
                <Filter size={16} />
                Smart Filters
            </div>
        </div>
    );
}

export default DeviceFilters;