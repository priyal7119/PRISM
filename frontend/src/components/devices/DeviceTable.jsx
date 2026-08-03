// src/components/devices/DeviceTable.jsx
// PART 1

import {
    Server,
    Router,
    Monitor,
    Cpu,
} from "lucide-react";

import useDevicesStore from "../../store/devicesStore";

function DeviceTable() {
    const {
        filteredDevices,
        selectedDevice,
        selectDevice,
        loading,
        error,
    } = useDevicesStore();

    const getIcon = (type) => {
        switch ((type || "").toLowerCase()) {
            case "router":
                return <Router size={16} />;
            case "switch":
                return <Cpu size={16} />;
            case "server":
                return <Server size={16} />;
            default:
                return <Monitor size={16} />;
        }
    };

    if (loading) {
        return (
            <div className="device-table-container">
                <table className="device-table">
                    <thead>
                        <tr>
                            <th>Device</th>
                            <th>IP Address</th>
                            <th>Type</th>
                            <th>Status</th>
                            <th>Location</th>
                            <th>Uptime</th>
                        </tr>
                    </thead>

                    <tbody>
                        {[1, 2, 3, 4, 5].map((row) => (
                            <tr key={row}>
                                {[1, 2, 3, 4, 5, 6].map((cell) => (
                                    <td key={cell}>
                                        <div
                                            className="skeleton"
                                            style={{
                                                height: 14,
                                                borderRadius: 8,
                                            }}
                                        />
                                    </td>
                                ))}
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        );
    }

    if (error) {
        return (
            <div className="device-table-container">
                <div className="empty-state">
                    <p>Error loading devices</p>
                    <span>{error}</span>
                </div>
            </div>
        );
    }

    if (!filteredDevices.length) {
        return (
            <div className="device-table-container">
                <div className="empty-state">
                    <p>No devices found</p>
                    <span>Try changing your filters.</span>
                </div>
            </div>
        );
    }

    return (
        <div className="device-table-container">
            <table className="device-table">
                <thead>
                    <tr>
                        <th>Device</th>
                        <th>IP Address</th>
                        <th>Type</th>
                        <th>Status</th>
                        <th>Location</th>
                        <th>Uptime</th>
                    </tr>
                </thead>

                <tbody>
                                    {filteredDevices.map((device) => {
                    const status = (device.status || "Unknown").toLowerCase();
                    const selected = selectedDevice?.id === device.id;

                    return (
                        <tr
                            key={device.id}
                            className={selected ? "selected-device-row" : ""}
                            onClick={() => selectDevice(device)}
                        >
                            <td>
                                <div
                                    style={{
                                        display: "flex",
                                        alignItems: "center",
                                        gap: 12,
                                    }}
                                >
                                    <div
                                        style={{
                                            width: 38,
                                            height: 38,
                                            borderRadius: 10,
                                            background: "var(--bg-surface-secondary)",
                                            border: "1px solid var(--border-color)",
                                            display: "flex",
                                            alignItems: "center",
                                            justifyContent: "center",
                                            color: "var(--primary)",
                                            flexShrink: 0,
                                        }}
                                    >
                                        {getIcon(device.type)}
                                    </div>

                                    <div>
                                        <div
                                            style={{
                                                fontWeight: 600,
                                                color: "var(--text-primary)",
                                            }}
                                        >
                                            {device.name}
                                        </div>

                                        <div
                                            style={{
                                                fontSize: 12,
                                                color: "var(--text-muted)",
                                                marginTop: 2,
                                            }}
                                        >
                                            Last seen {device.last_seen}
                                        </div>
                                    </div>
                                </div>
                            </td>

                            <td
                                style={{
                                    fontFamily: "monospace",
                                    fontSize: 13,
                                }}
                            >
                                {device.ip}
                            </td>

                            <td>{device.type}</td>

                            <td>
                                <span className={`device-status ${status}`}>
                                    {device.status}
                                </span>
                            </td>

                            <td>{device.location}</td>

                            <td
                                style={{
                                    fontWeight: 600,
                                    color: "var(--success)",
                                }}
                            >
                                {device.uptime}
                            </td>
                        </tr>
                    );
                })}
            </tbody>
        </table>
    </div>
    );
}

export default DeviceTable;