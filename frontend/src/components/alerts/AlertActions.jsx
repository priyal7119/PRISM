// src/components/alerts/AlertActions.jsx
import useAlertsStore from "../../store/alertsStore";
import { CheckCircle2, ShieldAlert, Trash2, Info } from "lucide-react";

function AlertActions() {
    const { selectedAlert, resolveAlert, loading } = useAlertsStore();

    if (!selectedAlert) {
        return (
            <div className="alert-actions-card">
                <h3>Incident Actions</h3>
                <div className="empty-state">
                    <Info size={28} style={{ color: "var(--text-disabled)", marginBottom: 4 }} />
                    <p>No alert selected</p>
                    <span>Select a row to execute actions.</span>
                </div>
            </div>
        );
    }

    const isResolved = (selectedAlert.status || "").toUpperCase() === "RESOLVED";

    return (
        <div className="alert-actions-card">
            <h3>Incident Actions</h3>

            <p style={{ fontSize: 13, color: "var(--text-muted)", padding: "8px 12px", background: "var(--bg-surface-secondary)", borderRadius: 8, border: "1px solid var(--border-subtle)" }}>
                Target: <strong style={{ color: "var(--text-primary)" }}>{selectedAlert.title || "-"}</strong>
                <br /><span style={{ fontSize: 12 }}>{selectedAlert.device || "-"}</span>
            </p>

            <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
                <button
                    className="btn-primary"
                    style={{ width: "100%", justifyContent: "flex-start" }}
                    onClick={() => resolveAlert(selectedAlert.id)}
                    disabled={isResolved || loading}
                >
                    <CheckCircle2 size={16} />
                    {isResolved ? "Already Resolved" : "Resolve Incident"}
                </button>

                <button
                    className="btn-secondary"
                    style={{ width: "100%", justifyContent: "flex-start" }}
                    disabled
                    title="Coming Soon"
                >
                    <ShieldAlert size={16} />
                    Escalate to SOC
                </button>

                <button
                    className="btn-danger"
                    style={{ width: "100%", justifyContent: "flex-start" }}
                    disabled
                    title="Coming Soon"
                >
                    <Trash2 size={16} />
                    Dismiss Alert
                </button>
            </div>
        </div>
    );
}

export default AlertActions;