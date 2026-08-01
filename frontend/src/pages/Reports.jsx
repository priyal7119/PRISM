// src/pages/Reports.jsx
import { useEffect } from "react";
import useReportsStore from "../store/reportsStore";
import ReportSummaryCard from "../components/reports/ReportSummaryCard";
import ReportFilters from "../components/reports/ReportFilters";
import ReportTable from "../components/reports/ReportTable";
import PerformanceChart from "../components/reports/PerformanceChart";
import ReportDetailsCard from "../components/reports/ReportDetailsCard";
import ReportActions from "../components/reports/ReportActions";
import "../styles/reports.css";

function Reports() {
    const { loadReports, loadSummary } = useReportsStore();

    useEffect(() => {
        loadReports();
        loadSummary();
    }, []);

    return (
        <div className="reports-page">
            <div className="reports-header">
                <h1>Reports Management</h1>
                <p>Analyze system performance trends and generate compliance reports.</p>
            </div>

            <ReportSummaryCard />

            <div className="reports-section">
                <ReportFilters />
            </div>

            <div className="reports-section report-card">
                <h2>Reports Log</h2>
                <ReportTable />
            </div>

            <div className="reports-grid">
                <PerformanceChart />
                <ReportDetailsCard />
                <ReportActions />
            </div>
        </div>
    );
}

export default Reports;