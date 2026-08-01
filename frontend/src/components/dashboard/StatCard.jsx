// src/components/dashboard/StatCard.jsx
import { Activity, Server, AlertTriangle, Cpu, Wifi, TrendingUp } from "lucide-react";

function StatCard({ title = "-", value = "-", note }) {
    const getIcon = () => {
        const lower = (title || "").toLowerCase();
        if (lower.includes("device") || lower.includes("server")) return <Server size={18} />;
        if (lower.includes("alert") || lower.includes("risk")) return <AlertTriangle size={18} />;
        if (lower.includes("cpu") || lower.includes("memory")) return <Cpu size={18} />;
        if (lower.includes("uptime") || lower.includes("online")) return <Wifi size={18} />;
        if (lower.includes("trend") || lower.includes("throughput")) return <TrendingUp size={18} />;
        return <Activity size={18} />;
    };

    return (
        <div className="stat-card">
            <div className="stat-card__header">
                <span className="stat-title">{title}</span>
                <div className="stat-icon-wrapper">{getIcon()}</div>
            </div>
            <div className="stat-card__body">
                <h2 className="stat-value">{value ?? "-"}</h2>
                {note ? <span className="stat-note">{note}</span> : null}
            </div>
        </div>
    );
}

export default StatCard;