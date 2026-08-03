// src/pages/Reports.jsx

import { useEffect } from "react";
import { FilePlus2, Download, CalendarClock } from "lucide-react";

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

            {/* ======================================================
                PAGE HEADER
            ====================================================== */}

            <div className="page-header">

                <div className="page-header-text">
                    <h1>Reports Management</h1>
                    <p>
                        Analyze infrastructure performance, generate compliance
                        reports and monitor operational trends.
                    </p>
                </div>

                <div className="page-header-actions">

                    <button className="btn-secondary">
                        <CalendarClock size={16} />
                        Schedule
                    </button>

                    <button className="btn-secondary">
                        <Download size={16} />
                        Export
                    </button>

                    <button className="btn-primary">
                        <FilePlus2 size={16} />
                        Generate Report
                    </button>

                </div>

            </div>

            {/* ======================================================
                SUMMARY CARDS
            ====================================================== */}

            <ReportSummaryCard />

            {/* ======================================================
                FILTER TOOLBAR
            ====================================================== */}

            <section className="report-toolbar-card">
                <ReportFilters />
            </section>

            {/* ======================================================
                ANALYTICS
            ====================================================== */}

            <section className="reports-top-grid">

                <div className="reports-chart-section">
                    <PerformanceChart />
                </div>

                <div className="reports-actions-section">
                    <ReportActions />
                </div>

            </section>

            {/* ======================================================
                REPORT TABLE
            ====================================================== */}

            <section className="report-card">

                <div className="card-header">
                    <h2>Reports Log</h2>

                    <span className="card-heading__tag card-heading__tag--accent">
                        Live Data
                    </span>
                </div>

                <ReportTable />

            </section>

            {/* ======================================================
                DETAILS
            ====================================================== */}

            <section className="reports-bottom-grid">

                <div className="reports-details-section">
                    <ReportDetailsCard />
                </div>

                <div className="reports-info-panel">

                    <div className="report-info-card">

                        <div className="card-header">
                            <h3>Reporting Insights</h3>
                        </div>

                        <div className="report-info-list">

                            <div className="report-info-item">
                                <span>Total Categories</span>
                                <strong>4</strong>
                            </div>

                            <div className="report-info-item">
                                <span>Available Templates</span>
                                <strong>12</strong>
                            </div>

                            <div className="report-info-item">
                                <span>Auto Scheduling</span>
                                <strong>Enabled</strong>
                            </div>

                            <div className="report-info-item">
                                <span>Export Formats</span>
                                <strong>PDF / CSV / XLSX</strong>
                            </div>

                        </div>

                    </div>

                </div>

            </section>

        </div>
    );
}

export default Reports;