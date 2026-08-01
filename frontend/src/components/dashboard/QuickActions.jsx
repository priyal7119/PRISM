// src/components/dashboard/QuickActions.jsx
import useDashboardStore from "../../store/dashboardStore";
import { RefreshCcw, Activity, ShieldCheck } from "lucide-react";

function QuickActions({ actions = [] }) {
  const fetchDashboard = useDashboardStore((state) => state.fetchDashboard);

  const getIcon = (title) => {
    const lower = (title || "").toLowerCase();
    if (lower.includes("diagnostics") || lower.includes("scan")) return <RefreshCcw size={16} />;
    if (lower.includes("view") || lower.includes("network")) return <Activity size={16} />;
    return <ShieldCheck size={16} />;
  };

  const handleActionClick = async (actionTitle) => {
    if (actionTitle?.toLowerCase().includes("diagnostics")) {
      await fetchDashboard();
    }
  };

  return (
    <div className="quick-actions-card">
      <div className="card-heading">
        <h3>Quick Actions</h3>
      </div>

      <div className="quick-actions-grid">
        {actions.length === 0 ? (
          <p className="empty-state">No quick actions available.</p>
        ) : (
          actions.map((action, index) => (
            <button
              key={action.title || index}
              className="action-btn"
              onClick={() => handleActionClick(action.title)}
            >
              {getIcon(action.title)}
              <span>{action.title || "-"}</span>
            </button>
          ))
        )}
      </div>
    </div>
  );
}

export default QuickActions;