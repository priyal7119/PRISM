// src/components/devices/DeviceTable.jsx
import useDevicesStore from "../../store/devicesStore";

function DeviceTable() {
    const { filteredDevices, selectedDevice, selectDevice, loading, error } = useDevicesStore();

    if (loading) {
        return (
            <div className="device-table-container">
                <table className="device-table">
                    <thead>
                        <tr>
                            <th>Device</th><th>IP Address</th><th>Type</th>
                            <th>Status</th><th>Location</th><th>Uptime</th>
                        </tr>
                    </thead>
                    <tbody>
                        {[1,2,3,4,5].map(i => (
                            <tr key={i}>
                                {[1,2,3,4,5,6].map(j => (
                                    <td key={j}><div className="skeleton" style={{ height: 14, borderRadius: 6 }} /></td>
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
                <div className="empty-state"><p>Error loading devices</p><span>{error}</span></div>
            </div>
        );
    }

    if (!filteredDevices.length) {
        return (
            <div className="device-table-container">
                <div className="empty-state">
                    <p>No devices found</p>
                    <span>Try adjusting your filters.</span>
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
                        const statusClass = (device.status || "unknown").toLowerCase();
                        const isSelected = selectedDevice?.id === device.id;
                        return (
                            <tr
                                key={device.id}
                                onClick={() => selectDevice(device)}
                                className={isSelected ? "selected-device-row" : ""}
                            >
                                <td style={{ fontWeight: 600 }}>{device.name || "-"}</td>
                                <td style={{ fontFamily: "monospace", fontSize: 13 }}>{device.ip || "-"}</td>
                                <td style={{ color: "var(--text-secondary)" }}>{device.type || "-"}</td>
                                <td>
                                    <span className={`device-status ${statusClass}`}>
                                        {device.status || "Unknown"}
                                    </span>
                                </td>
                                <td style={{ color: "var(--text-secondary)" }}>{device.location || "-"}</td>
                                <td style={{ color: "var(--text-muted)", fontSize: 13 }}>{device.uptime || "-"}</td>
                            </tr>
                        );
                    })}
                </tbody>
            </table>
        </div>
    );
}

export default DeviceTable;