// src/components/prediction/FailureRiskTable.jsx
import "../../styles/prediction.css";

function FailureRiskTable({ devices = [] }) {
    const getRiskClass = (risk) => {
        const map = { high: "risk-high", medium: "risk-medium", low: "risk-low" };
        return map[(risk || "").toLowerCase()] || "";
    };

    return (
        <div className="prediction-card">
            <div className="prediction-card-header">
                <div>
                    <h2>Failure Risk Assessment</h2>
                    <p style={{ fontSize: 13, color: "var(--text-muted)", marginTop: 2 }}>AI-driven device failure probability analysis</p>
                </div>
                <span className="card-heading__tag card-heading__tag--accent">AI</span>
            </div>

            {!devices.length ? (
                <div className="empty-state">
                    <p>No device predictions available</p>
                </div>
            ) : (
                <div className="risk-table-container">
                    <table className="risk-table">
                        <thead>
                            <tr>
                                <th>Device</th>
                                <th>Prediction</th>
                                <th>Risk Level</th>
                                <th>Confidence</th>
                                <th>Time to Failure</th>
                            </tr>
                        </thead>
                        <tbody>
                            {devices.map((device, index) => {
                                const confidence = device.confidence ?? 0;
                                return (
                                    <tr key={device.device || index}>
                                        <td style={{ fontWeight: 600 }}>{device.device || "-"}</td>
                                        <td style={{ color: "var(--text-secondary)" }}>{device.prediction || "-"}</td>
                                        <td>
                                            <span className={`risk-badge ${getRiskClass(device.risk)}`}>
                                                {device.risk || "-"}
                                            </span>
                                        </td>
                                        <td>
                                            <div className="confidence-cell">
                                                <div className="confidence-track">
                                                    <div
                                                        className="confidence-fill"
                                                        style={{ width: `${Math.min(Math.max(confidence, 0), 100)}%` }}
                                                    />
                                                </div>
                                                <span className="confidence-label">{confidence}%</span>
                                            </div>
                                        </td>
                                        <td style={{ color: "var(--text-muted)", fontSize: 13 }}>{device.time_to_failure || "N/A"}</td>
                                    </tr>
                                );
                            })}
                        </tbody>
                    </table>
                </div>
            )}
        </div>
    );
}

export default FailureRiskTable;