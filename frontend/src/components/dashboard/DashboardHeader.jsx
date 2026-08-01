// src/components/dashboard/DashboardHeader.jsx
import { ShieldCheck, Activity, AlertTriangle } from "lucide-react";

function DashboardHeader({ title, description, statusCards = [] }) {
  return (
    <div className="dashboard-header">
      <div className="header-text-block">
        <div className="header-badge-title">
          <ShieldCheck size={20} className="header-title-icon" />
          <h1>{title || "Network Intelligence Dashboard"}</h1>
        </div>
        <p>{description || "Real-time NOC overview and AI infrastructure telemetry."}</p>
      </div>

      <div className="dashboard-header-right">
        {statusCards.map((card, idx) => (
          <div key={idx} className={`status-pill ${card.variant || "success"}`}>
            {card.variant === "warning" ? <AlertTriangle size={14} /> : <Activity size={14} />}
            <span>{card.label}:</span>
            <strong>{card.value || "Normal"}</strong>
          </div>
        ))}
        <div className="system-status-indicator">
          <span className="status-dot"></span>
          <span>System Operational</span>
        </div>
      </div>
    </div>
  );
}

export default DashboardHeader;