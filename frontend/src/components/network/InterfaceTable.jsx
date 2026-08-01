import "../../styles/network.css";

function InterfaceTable({ interfaces = [] }) {
    if (!interfaces.length) {
        return (
            <div className="network-card">
                <div className="card-header">
                    <div>
                        <h2>Interface Utilization</h2>
                        <p>No interface data available.</p>
                    </div>
                </div>

                <div className="empty-state">
                    <p>No interfaces available.</p>
                    <span>Interface statistics will appear here.</span>
                </div>
            </div>
        );
    }

    return (
        <div className="network-card">
            <div className="card-header">
                <div>
                    <h2>Interface Utilization</h2>
                    <p>Bandwidth usage and operational status.</p>
                </div>
            </div>

            <div className="interface-table">
                <table>
                    <thead>
                        <tr>
                            <th>Interface</th>
                            <th>Utilization</th>
                            <th>Status</th>
                        </tr>
                    </thead>

                    <tbody>
                        {interfaces.map((item) => (
                            <tr key={item.id || item.name}>
                                <td>{item.name || "-"}</td>

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
                                                flex: 1,
                                                height: 8,
                                                background: "var(--bg-surface-secondary)",
                                                borderRadius: 999,
                                                overflow: "hidden",
                                            }}
                                        >
                                            <div
                                                style={{
                                                    width: `${item.utilization ?? 0}%`,
                                                    height: "100%",
                                                    background: "var(--primary)",
                                                    borderRadius: 999,
                                                }}
                                            />
                                        </div>

                                        <strong
                                            style={{
                                                minWidth: 42,
                                                textAlign: "right",
                                                fontSize: 13,
                                            }}
                                        >
                                            {item.utilization ?? 0}%
                                        </strong>
                                    </div>
                                </td>

                                <td>
                                    <span
                                        className={`status-pill ${(
                                            item.status || "unknown"
                                        ).toLowerCase()}`}
                                    >
                                        {item.status || "Unknown"}
                                    </span>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
}

export default InterfaceTable;