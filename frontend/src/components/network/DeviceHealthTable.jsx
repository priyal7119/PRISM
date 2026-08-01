import "../../styles/network.css";

function DeviceHealthTable({ devices = [] }) {
    if (!devices.length) {
        return (
            <div className="network-card">
                <div className="card-header">
                    <div>
                        <h2>Device Health Monitor</h2>
                        <p>Live device monitoring</p>
                    </div>
                </div>

                <div className="empty-state">
                    <p>No device health data available.</p>
                    <span>Devices will appear once connected.</span>
                </div>
            </div>
        );
    }

    return (
        <div className="network-card">
            <div className="card-header">
                <div>
                    <h2>Device Health Monitor</h2>
                    <p>Live uptime, latency and operational status.</p>
                </div>

                <span className="card-heading__tag card-heading__tag--live">
                    Live
                </span>
            </div>

            <div
                style={{
                    overflowX: "auto",
                    border: "1px solid var(--border-color)",
                    borderRadius: 12,
                }}
            >
                <table className="device-health-table">
                    <thead>
                        <tr>
                            <th>Device Name</th>
                            <th>Type</th>
                            <th>Status</th>
                            <th>Latency</th>
                            <th>Uptime</th>
                        </tr>
                    </thead>

                    <tbody>
                        {devices.map((device) => (
                            <tr key={device.id || device.name}>
                                <td style={{ fontWeight: 600 }}>
                                    {device.name || "-"}
                                </td>

                                <td style={{ color: "var(--text-secondary)" }}>
                                    {device.type || "-"}
                                </td>

                                <td>
                                    <span
                                        className={`status-pill ${(
                                            device.status || "unknown"
                                        ).toLowerCase()}`}
                                    >
                                        {device.status || "Unknown"}
                                    </span>
                                </td>

                                <td
                                    style={{
                                        fontFamily: "monospace",
                                        fontWeight: 600,
                                    }}
                                >
                                    {device.latency || "-"}
                                </td>

                                <td style={{ color: "var(--text-secondary)" }}>
                                    {device.uptime || "-"}
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
}

export default DeviceHealthTable;