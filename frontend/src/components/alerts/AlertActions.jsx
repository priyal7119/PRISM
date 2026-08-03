import {
    CheckCircle2,
    Bell,
    ArrowUpCircle,
    Info
} from "lucide-react";

import useAlertsStore from "../../store/alertsStore";

function AlertActions() {

    const {
        selectedAlert,
        resolve,
        acknowledge,
        escalate,
        loading
    } = useAlertsStore();

    if (!selectedAlert) {

        return (

            <div className="alert-actions-card">

                <h3>Incident Actions</h3>

                <div className="empty-state">

                    <Info
                        size={28}
                        style={{
                            color: "var(--text-disabled)",
                            marginBottom: 4
                        }}
                    />

                    <p>No alert selected</p>

                    <span>
                        Select an alert to perform actions.
                    </span>

                </div>

            </div>

        );

    }

    return (

        <div className="alert-actions-card">

            <h3>Incident Actions</h3>

            <div
                style={{
                    padding: 14,
                    borderRadius: 10,
                    background: "var(--bg-surface-secondary)",
                    border: "1px solid var(--border-color)",
                    marginBottom: 16
                }}
            >

                <strong>{selectedAlert.title}</strong>

                <div
                    style={{
                        marginTop: 6,
                        fontSize: 13,
                        color: "var(--text-secondary)"
                    }}
                >

                    {selectedAlert.device}

                </div>

            </div>

            <div
                style={{
                    display: "flex",
                    flexDirection: "column",
                    gap: 10
                }}
            >

                <button
                    className="btn-primary"
                    disabled={
                        loading ||
                        selectedAlert.status === "Resolved"
                    }
                    onClick={() => resolve(selectedAlert.id)}
                >

                    <CheckCircle2 size={16} />

                    Resolve Incident

                </button>

                <button
                    className="btn-secondary"
                    disabled={loading}
                    onClick={() => acknowledge(selectedAlert.id)}
                >

                    <Bell size={16} />

                    Acknowledge

                </button>

                <button
                    className="btn-danger"
                    disabled={loading}
                    onClick={() => escalate(selectedAlert.id)}
                >

                    <ArrowUpCircle size={16} />

                    Escalate

                </button>

            </div>

        </div>

    );

}

export default AlertActions;