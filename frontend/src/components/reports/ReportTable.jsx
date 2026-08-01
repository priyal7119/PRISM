// src/components/reports/ReportTable.jsx
import useReportsStore from "../../store/reportsStore";

function ReportTable() {
    const { filteredReports, selectedReport, selectReport, loading } = useReportsStore();

    if (loading) {
        return (
            <div className="report-table-container">
                <table className="report-table">
                    <thead>
                        <tr>
                            <th>Report Name</th><th>Type</th><th>Period</th>
                            <th>Devices</th><th>Uptime</th><th>Status</th><th>Created</th>
                        </tr>
                    </thead>
                    <tbody>
                        {[1,2,3,4,5].map(i => (
                            <tr key={i}>
                                {[1,2,3,4,5,6,7].map(j => (
                                    <td key={j}><div className="skeleton" style={{ height: 13, borderRadius: 6 }} /></td>
                                ))}
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        );
    }

    if (!filteredReports || !filteredReports.length) {
        return (
            <div className="report-table-container">
                <div className="empty-state">
                    <p>No reports found</p>
                    <span>Try adjusting your filters.</span>
                </div>
            </div>
        );
    }

    return (
        <div className="report-table-container">
            <table className="report-table">
                <thead>
                    <tr>
                        <th>Report Name</th>
                        <th>Type</th>
                        <th>Period</th>
                        <th>Devices</th>
                        <th>Uptime</th>
                        <th>Status</th>
                        <th>Created</th>
                    </tr>
                </thead>
                <tbody>
                    {filteredReports.map((report) => {
                        const statusClass = (report.status || "unknown").toLowerCase();
                        const isSelected = selectedReport?.id === report.id;
                        return (
                            <tr
                                key={report.id ?? report.name}
                                onClick={() => selectReport(report)}
                                className={isSelected ? "selected-report-row" : ""}
                            >
                                <td style={{ fontWeight: 600 }}>{report.name || "-"}</td>
                                <td style={{ color: "var(--text-secondary)" }}>{report.type || "-"}</td>
                                <td style={{ color: "var(--text-secondary)" }}>{report.period || "-"}</td>
                                <td style={{ textAlign: "center" }}>{report.devices ?? "-"}</td>
                                <td>{report.uptime || "-"}</td>
                                <td>
                                    <span className={`status-pill ${statusClass}`}>
                                        {report.status || "Unknown"}
                                    </span>
                                </td>
                                <td style={{ color: "var(--text-muted)", fontSize: 13 }}>{report.created || "-"}</td>
                            </tr>
                        );
                    })}
                </tbody>
            </table>
        </div>
    );
}

export default ReportTable;