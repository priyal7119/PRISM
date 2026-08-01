// src/components/alerts/AlertDetailsCard.jsx
import useAlertsStore from "../../store/alertsStore";
import { Info } from "lucide-react";

function AlertDetailsCard() {
    const { selectedAlert, loading } = useAlertsStore();

    if (loading) {
        return (
            <div className="alert-details-card">
                <h3>Alert Details</h3>
                <div className="empty-state"><p>Loading...</p></div>
            </div>
        );
    }

    if (!selectedAlert) {
        return (
            <div className="alert-details-card">
                <h3>Alert Details</h3>
                <div className="empty-state">
                    <Info size={28} style={{ color: "var(--text-disabled)", marginBottom: 4 }} />
                    <p>No alert selected</p>
                    <span>Click a row in the table to view details.</span>
                </div>
            </div>
        );
    }

    const rows = [
        { label: "Description", value: selectedAlert.description },
        { label: "Device", value: selectedAlert.device },
        { label: "Severity", value: selectedAlert.severity },
        { label: "Category", value: selectedAlert.category },
        { label: "Status", value: selectedAlert.status },
        { label: "Time", value: selectedAlert.time },
    ];

    return (
        <div className="alert-details-card">
            <h3>{selectedAlert.title || "Alert Details"}</h3>
            {rows.map(row => (
                <div key={row.label} className="alert-detail-item">
                    <span>{row.label}</span>
                    <b>{row.value || "-"}</b>
                </div>
            ))}
        </div>
    );
}

export default AlertDetailsCard;