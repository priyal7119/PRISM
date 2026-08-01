// src/components/reports/ReportDetailsCard.jsx
import { Info } from "lucide-react";
import useReportsStore from "../../store/reportsStore";

function ReportDetailsCard() {
    const selectedReport = useReportsStore((state) => state.selectedReport);

    if (!selectedReport) {
        return (
            <div className="report-details-card">
                <h3>Report Details</h3>
                <div className="empty-state">
                    <Info size={28} style={{ color: "var(--text-disabled)", marginBottom: 4 }} />
                    <p>No report selected</p>
                    <span>Click a report row to view parameters.</span>
                </div>
            </div>
        );
    }

    const details = [
        { label: "Type", value: selectedReport.type },
        { label: "Period", value: selectedReport.period },
        { label: "Devices", value: selectedReport.devices },
        { label: "Uptime", value: selectedReport.uptime },
        { label: "Incidents", value: selectedReport.incidents },
        { label: "Status", value: selectedReport.status }
    ];

    return (
        <div className="report-details-card">
            <h3>{selectedReport.name || "Report Details"}</h3>
            {details.map(item => (
                <div key={item.label} className="report-detail-item">
                    <span>{item.label}</span>
                    <strong>{item.value ?? "-"}</strong>
                </div>
            ))}
        </div>
    );
}

export default ReportDetailsCard;