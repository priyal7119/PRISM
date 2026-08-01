// src/components/alerts/AlertTable.jsx
import useAlertsStore from "../../store/alertsStore";

function AlertTable() {
    const { filteredAlerts, selectedAlert, selectAlert, loading } = useAlertsStore();

    if (loading) {
        return (
            <div className="alert-table-container">
                <table className="alert-table">
                    <thead>
                        <tr>
                            <th>Alert</th><th>Device</th><th>Severity</th>
                            <th>Category</th><th>Status</th><th>Time</th>
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

    if (!filteredAlerts.length) {
        return (
            <div className="alert-table-container">
                <div className="empty-state">
                    <p>No alerts found</p>
                    <span>Try adjusting your filters or check back later.</span>
                </div>
            </div>
        );
    }

    return (
        <div className="alert-table-container">
            <table className="alert-table">
                <thead>
                    <tr>
                        <th>Alert</th>
                        <th>Device</th>
                        <th>Severity</th>
                        <th>Category</th>
                        <th>Status</th>
                        <th>Time</th>
                    </tr>
                </thead>
                <tbody>
                    {filteredAlerts.map((alert) => {
                        const isSelected = selectedAlert?.id === alert.id;
                        const severity = (alert.severity || "unknown").toLowerCase();
                        const status = (alert.status || "unknown").toLowerCase();
                        return (
                            <tr
                                key={alert.id}
                                onClick={() => selectAlert(alert)}
                                className={isSelected ? "selected-alert-row" : ""}
                            >
                                <td>
                                    <span className="cell-primary">{alert.title || "-"}</span>
                                    <span className="cell-secondary">{alert.description || "-"}</span>
                                </td>
                                <td style={{ fontWeight: 500 }}>{alert.device || "-"}</td>
                                <td>
                                    <span className={`alert-severity ${severity}`}>{alert.severity || "-"}</span>
                                </td>
                                <td style={{ color: "var(--text-secondary)" }}>{alert.category || "-"}</td>
                                <td>
                                    <span className={`alert-status ${status}`}>{alert.status || "-"}</span>
                                </td>
                                <td style={{ color: "var(--text-muted)", fontSize: 13 }}>{alert.time || "-"}</td>
                            </tr>
                        );
                    })}
                </tbody>
            </table>
        </div>
    );
}

export default AlertTable;