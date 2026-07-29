import { useNavigate } from "react-router-dom";

function QuickActions({ actions = [] }) {
    const navigate = useNavigate();

    const handleAction = (action) => {
        switch (action) {
            case "Run Diagnostics":
                alert("Diagnostics started.");
                break;
            case "View Network":
                navigate("/network");
                break;
            case "Open AI Copilot":
                navigate("/copilot");
                break;
            case "Generate Report":
                alert("Report generation initialized.");
                break;
            default:
                alert(action);
        }
    };

    return (
        <div className="dashboard-card quick-actions">
            <div className="card-heading">
                <h2 className="card-title">Quick Actions</h2>
                <span className="card-heading__tag">Tasks</span>
            </div>

            <div className="quick-actions-grid">
                {actions.length === 0 ? (
                    <p className="empty-text">No quick actions available</p>
                ) : (
                    actions.map((action, index) => (
                        <button
                            key={index}
                            className="action-btn"
                            onClick={() => handleAction(action)}
                        >
                            {action}
                        </button>
                    ))
                )}
            </div>
        </div>
    );
}

export default QuickActions;