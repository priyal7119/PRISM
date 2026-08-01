// src/components/alerts/AlertTimeline.jsx

import useAlertsStore from "../../store/alertsStore";

function AlertTimeline() {
    const alerts = useAlertsStore((state) => state.alerts);

    return (
        <div className="alert-timeline-card">
            <h3>Alert Timeline</h3>

            <div className="alert-timeline">
                {!alerts || alerts.length === 0 ? (
                    <p style={{ padding: "1rem", opacity: 0.6 }}>No alerts to display.</p>
                ) : (
                    alerts.map((alert) => (
                        <div className="timeline-item" key={alert.id ?? alert.title}>
                            <div className="timeline-dot"></div>
                            <div className="timeline-content">
                                <h4>{alert.title || "-"}</h4>
                                <p>{alert.device || "-"}</p>
                                <span>{alert.time || "-"}</span>
                            </div>
                        </div>
                    ))
                )}
            </div>
        </div>
    );
}

export default AlertTimeline;