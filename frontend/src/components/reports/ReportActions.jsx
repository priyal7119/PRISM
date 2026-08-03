// src/components/reports/ReportActions.jsx

import {
    FilePlus2,
    Shield,
    Download,
    Trash2
} from "lucide-react";

import useReportsStore from "../../store/reportsStore";
import { downloadReport } from "../../api/reports";

const openDownloadUrl = (reportId, reportName) => {
    const link = document.createElement("a");
    link.href = `http://localhost:8000/reports/download/${reportId}`;
    link.download = `${reportName}.pdf`;
    link.target = "_blank";
    link.rel = "noopener noreferrer";
    link.style.display = "none";
    document.body.appendChild(link);
    link.click();
    link.remove();
};

function ReportActions() {

    const {
        selectedReport,
        generate,
        loading
    } = useReportsStore();

    const handleDownload = async () => {

        if (!selectedReport) return;

        try {
            openDownloadUrl(selectedReport.id, selectedReport.name);
        } catch (error) {

            console.error("Download failed:", error);

        }

    };

    return (

        <div className="report-actions-card">

            <div className="card-header">

                <div>

                    <h3>Quick Actions</h3>

                    <p>
                        Generate and manage reports
                    </p>

                </div>

            </div>

            {selectedReport && (

                <div
                    style={{
                        padding: "12px",
                        borderRadius: 10,
                        background: "var(--bg-surface-secondary)",
                        border: "1px solid var(--border-color)"
                    }}
                >

                    <span
                        style={{
                            color: "var(--text-muted)",
                            fontSize: 12
                        }}
                    >
                        Selected Report
                    </span>

                    <div
                        style={{
                            marginTop: 4,
                            fontWeight: 600
                        }}
                    >
                        {selectedReport.name}
                    </div>

                </div>

            )}

            <button
                className="btn-primary"
                onClick={() => generate("Performance")}
                disabled={loading}
            >

                <FilePlus2 size={17} />

                Generate Performance Report

            </button>

            <button
                className="btn-primary"
                onClick={() => generate("Security")}
                disabled={loading}
            >

                <Shield size={17} />

                Generate Security Report

            </button>

            <button
                className="btn-secondary"
                onClick={handleDownload}
                disabled={!selectedReport}
            >

                <Download size={17} />

                Export Selected Report

            </button>

            <button
                className="btn-danger"
                disabled
            >

                <Trash2 size={17} />

                Delete Selected Report

            </button>

        </div>

    );

}

export default ReportActions;