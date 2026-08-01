// src/components/dashboard/MetricsCard.jsx
import { BarChart2 } from "lucide-react";

function MetricsCard({ title = "Network Metrics", data = [] }) {
    return (
        <div className="metrics-card dashboard-card">
            <div className="card-heading">
                <h2 className="card-title">
                    <span style={{ display: "flex", alignItems: "center", gap: 8 }}>
                        <BarChart2 size={16} style={{ color: "var(--primary)" }} />
                        {title}
                    </span>
                </h2>
                <span className="card-heading__tag card-heading__tag--live">Live</span>
            </div>

            {!data || data.length === 0 ? (
                <div className="empty-state">
                    <p>No metrics available</p>
                </div>
            ) : (
                <div className="metrics-list">
                    {data.map((metric, index) => (
                        <div key={metric.id || metric.name || index} className="metric-item">
                            <div>
                                <span className="metric-item__label">{metric.name || "-"}</span>
                                <strong className="metric-item__value">{metric.value ?? "-"}</strong>
                            </div>
                            {typeof metric.progress === "number" && (
                                <div className="metric-progress">
                                    <div
                                        className="metric-progress__fill"
                                        style={{ width: `${Math.min(Math.max(metric.progress, 0), 100)}%` }}
                                    />
                                </div>
                            )}
                        </div>
                    ))}
                </div>
            )}
        </div>
    );
}

export default MetricsCard;