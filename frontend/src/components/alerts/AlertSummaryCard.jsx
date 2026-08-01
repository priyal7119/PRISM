// src/components/alerts/AlertSummaryCard.jsx
import { Bell, AlertTriangle, AlertOctagon, CheckCircle2 } from "lucide-react";
import useAlertsStore from "../../store/alertsStore";

function AlertSummaryCard() {
    const { summary, loading } = useAlertsStore();

    const cards = [
        { title: "Total Alerts", value: summary?.total ?? 0, icon: Bell, type: "total" },
        { title: "Critical", value: summary?.critical ?? 0, icon: AlertOctagon, type: "critical" },
        { title: "Warnings", value: summary?.warning ?? 0, icon: AlertTriangle, type: "warning" },
        { title: "Resolved", value: summary?.resolved ?? 0, icon: CheckCircle2, type: "resolved" },
    ];

    if (loading) {
        return (
            <div className="alert-summary-grid">
                {[1,2,3,4].map(i => (
                    <div key={i} className="alert-summary-card">
                        <div className="skeleton" style={{ width: 44, height: 44, borderRadius: 12, flexShrink: 0 }} />
                        <div style={{ flex: 1, display: "flex", flexDirection: "column", gap: 8 }}>
                            <div className="skeleton" style={{ height: 12, width: "60%" }} />
                            <div className="skeleton" style={{ height: 28, width: "40%" }} />
                        </div>
                    </div>
                ))}
            </div>
        );
    }

    return (
        <div className="alert-summary-grid">
            {cards.map((card) => {
                const Icon = card.icon;
                return (
                    <div key={card.title} className={`alert-summary-card ${card.type}`}>
                        <div className="alert-summary-header">
                            <div className="alert-summary-icon">
                                <Icon size={20} />
                            </div>
                            <div>
                                <p>{card.title}</p>
                                <h2>{card.value}</h2>
                            </div>
                        </div>
                    </div>
                );
            })}
        </div>
    );
}

export default AlertSummaryCard;