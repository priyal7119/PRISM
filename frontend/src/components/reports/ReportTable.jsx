// src/components/reports/ReportTable.jsx

import useReportsStore from "../../store/reportsStore";

function ReportTable() {

    const {
        filteredReports,
        selectedReport,
        selectReport,
        loading
    } = useReportsStore();

    if (loading) {

        return (

            <div className="report-table-container">

                <table className="report-table">

                    <thead>

                        <tr>
                            <th>Report</th>
                            <th>Type</th>
                            <th>Period</th>
                            <th>Devices</th>
                            <th>Uptime</th>
                            <th>Status</th>
                            <th>Created</th>
                        </tr>

                    </thead>

                    <tbody>

                        {[1,2,3,4,5].map((row)=>(

                            <tr key={row}>

                                {[1,2,3,4,5,6,7].map((col)=>(

                                    <td key={col}>
                                        <div
                                            className="skeleton"
                                            style={{
                                                height:14,
                                                borderRadius:8
                                            }}
                                        />
                                    </td>

                                ))}

                            </tr>

                        ))}

                    </tbody>

                </table>

            </div>

        );

    }

    if (!filteredReports.length) {

        return (

            <div className="report-table-container">

                <div className="empty-state">

                    <p>No reports found.</p>

                    <span>
                        Try changing the current filters.
                    </span>

                </div>

            </div>

        );

    }

    return (

        <div className="report-table-container">

            <table className="report-table">

                <thead>

                    <tr>

                        <th>Report</th>
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

                        const selected =
                            selectedReport?.id === report.id;

                        return (

                            <tr

                                key={report.id}

                                className={
                                    selected
                                        ? "selected-report-row"
                                        : ""
                                }

                                onClick={() =>
                                    selectReport(report)
                                }

                            >

                                <td>

                                    <div
                                        style={{
                                            display:"flex",
                                            flexDirection:"column",
                                            gap:3
                                        }}
                                    >

                                        <strong>

                                            {report.name}

                                        </strong>

                                        <span
                                            style={{
                                                color:"var(--text-muted)",
                                                fontSize:12
                                            }}
                                        >

                                            Network Report

                                        </span>

                                    </div>

                                </td>

                                <td>{report.type}</td>

                                <td>{report.period}</td>

                                <td>{report.devices}</td>

                                <td>{report.uptime}</td>

                                <td>

                                    <span
                                        className={`status-pill ${report.status.toLowerCase()}`}
                                    >

                                        {report.status}

                                    </span>

                                </td>

                                <td>{report.created}</td>

                            </tr>

                        );

                    })}

                </tbody>

            </table>

        </div>

    );

}

export default ReportTable;