// src/components/reports/ReportDetailsCard.jsx

import { Info } from "lucide-react";
import useReportsStore from "../../store/reportsStore";

function ReportDetailsCard() {

    const selectedReport = useReportsStore(
        (state) => state.selectedReport
    );

    if (!selectedReport) {

        return (

            <div className="report-details-card">

                <div className="card-header">
                    <h3>Report Details</h3>
                </div>

                <div className="empty-state">

                    <Info
                        size={34}
                        style={{
                            color: "var(--text-muted)"
                        }}
                    />

                    <p>No Report Selected</p>

                    <span>
                        Select a report from the table to
                        inspect its details.
                    </span>

                </div>

            </div>

        );

    }

    return (

        <div className="report-details-card">

            <div className="card-header">

                <div>

                    <h3>{selectedReport.name}</h3>

                    <p>
                        Detailed report information
                    </p>

                </div>

                <span
                    className={`status-pill ${selectedReport.status.toLowerCase()}`}
                >
                    {selectedReport.status}
                </span>

            </div>

            <div className="report-detail-item">
                <span>Type</span>
                <strong>{selectedReport.type}</strong>
            </div>

            <div className="report-detail-item">
                <span>Reporting Period</span>
                <strong>{selectedReport.period}</strong>
            </div>

            <div className="report-detail-item">
                <span>Devices Covered</span>
                <strong>{selectedReport.devices}</strong>
            </div>

            <div className="report-detail-item">
                <span>Network Uptime</span>
                <strong>{selectedReport.uptime}</strong>
            </div>

            <div className="report-detail-item">
                <span>Incidents</span>
                <strong>{selectedReport.incidents}</strong>
            </div>

            <div className="report-detail-item">
                <span>Generated On</span>
                <strong>{selectedReport.created}</strong>
            </div>

        </div>

    );

}

export default ReportDetailsCard;