import "../../styles/network.css";

function NetworkTopology({ topology = [] }) {
    if (!topology.length) {
        return (
            <div className="network-card">
                <div className="card-header">
                    <div>
                        <h2>Network Topology</h2>
                        <p>No topology data available.</p>
                    </div>
                </div>

                <div className="empty-state">
                    <p>No topology available.</p>
                    <span>Topology information will appear here.</span>
                </div>
            </div>
        );
    }

    return (
        <div className="network-card">
            <div className="card-header">
                <div>
                    <h2>Network Topology</h2>
                    <p>Current infrastructure connectivity</p>
                </div>
            </div>

            <div className="topology-container">
                {topology.map((device, index) => {
                    const status = (device.status || "Healthy").toLowerCase();

                    return (
                        <div
                            key={device.id || device.name || index}
                            className="topology-node"
                        >
                            <div className={`node-circle ${status}`}>
                                {device.name?.charAt(0) || "?"}
                            </div>

                            <div className="node-label">
                                {device.name || "-"}
                            </div>

                            <span className={`status-pill ${status}`}>
                                {device.status || "-"}
                            </span>

                            {index !== topology.length - 1 && (
                                <div className="topology-line" />
                            )}
                        </div>
                    );
                })}
            </div>
        </div>
    );
}

export default NetworkTopology;