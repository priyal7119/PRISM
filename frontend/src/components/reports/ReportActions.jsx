// src/components/reports/ReportActions.jsx
import useReportsStore from "../../store/reportsStore";
import { PlusCircle, Shield, Download, Trash2, Info } from "lucide-react";

function ReportActions() {
    const { selectedReport, generate, loading } = useReportsStore();

    return (
        <div className="report-actions-card">
            <h3>Quick Actions</h3>

            {selectedReport && (
                <p style={{ fontSize: 13, color: "var(--text-muted)", padding: "8px 12px", background: "var(--bg-surface-secondary)", borderRadius: 8, border: "1px solid var(--border-subtle)", marginBottom: 12 }}>
                    Selected: <strong style={{ color: "var(--text-primary)" }}>{selectedReport.name || "-"}</strong>
                </p>
            )}

            <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
                <button
                    className="btn-primary"
                    style={{ width: "100%", justifyContent: "flex-start" }}
                    onClick={() => generate("Performance")}
                    disabled={!!loading}
                >
                    <PlusCircle size={16} />
                    <span>Gen Performance Report</span>
                </button>

                <button
                    className="btn-primary"
                    style={{ width: "100%", justifyContent: "flex-start" }}
                    onClick={() => generate("Security")}
                    disabled={!!loading}
                >
                    <Shield size={16} />
                    <span>Gen Security Report</span>
                </button>

                <button
                    className="btn-secondary"
                    style={{ width: "100%", justifyContent: "flex-start" }}
                    disabled
                    title="Coming Soon"
                >
                    <Download size={16} />
                    <span>Export Selected</span>
                </button>

                <button
                    className="btn-danger"
                    style={{ width: "100%", justifyContent: "flex-start" }}
                    disabled
                    title="Coming Soon"
                >
                    <Trash2 size={16} />
                    <span>Delete Selected</span>
                </button>
            </div>
        </div>
    );
}

export default ReportActions;