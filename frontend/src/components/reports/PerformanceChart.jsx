// src/components/reports/PerformanceChart.jsx

import {
    LineChart,
    Line,
    XAxis,
    YAxis,
    CartesianGrid,
    Tooltip,
    ResponsiveContainer
} from "recharts";

import useReportsStore from "../../store/reportsStore";

function PerformanceChart() {
    const reports = useReportsStore((state) => state.reports);

    if (!reports || !reports.length) {
        return (
            <div className="performance-chart-card">
                <h3>Performance Overview</h3>
                <p style={{ padding: "1rem", opacity: 0.6 }}>No report data for chart.</p>
            </div>
        );
    }

    const data = reports.map((report) => ({
        name: report.type || "-",
        uptime: parseFloat(report.uptime) || 0,
        incidents: report.incidents ?? 0
    }));

    return (
        <div className="performance-chart-card">
            <h3>Performance Overview</h3>

            <ResponsiveContainer width="100%" height={250}>
                <LineChart data={data}>
                    <CartesianGrid />
                    <XAxis dataKey="name" />
                    <YAxis />
                    <Tooltip />
                    <Line type="monotone" dataKey="uptime" />
                    <Line type="monotone" dataKey="incidents" />
                </LineChart>
            </ResponsiveContainer>
        </div>
    );
}

export default PerformanceChart;