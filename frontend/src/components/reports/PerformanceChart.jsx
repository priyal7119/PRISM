// src/components/reports/PerformanceChart.jsx

import {
    ResponsiveContainer,
    LineChart,
    Line,
    XAxis,
    YAxis,
    CartesianGrid,
    Tooltip
} from "recharts";

import useReportsStore from "../../store/reportsStore";

function PerformanceChart() {

    const reports = useReportsStore((state) => state.reports);

    if (!reports || reports.length === 0) {
        return (
            <div className="performance-chart-card">
                <h3>Performance Trend</h3>

                <div className="empty-state">
                    <p>No performance data available.</p>
                    <span>Reports will appear after generation.</span>
                </div>
            </div>
        );
    }

    const chartData = reports.map((report) => ({
        name: report.type,
        uptime: Number.parseFloat(report.uptime) || 0,
        incidents: report.incidents || 0
    }));

    return (
        <div className="performance-chart-card">

            <div className="card-header">
                <div>
                    <h3>Performance Trend</h3>
                    <p>Infrastructure uptime vs incidents</p>
                </div>

                <span className="card-heading__tag">
                    Live
                </span>
            </div>

            <ResponsiveContainer
                width="100%"
                height={320}
            >

                <LineChart
                    data={chartData}
                    margin={{
                        top: 10,
                        right: 20,
                        left: -15,
                        bottom: 5
                    }}
                >

                    <CartesianGrid
                        strokeDasharray="3 3"
                        vertical={false}
                    />

                    <XAxis
                        dataKey="name"
                        tickLine={false}
                        axisLine={false}
                    />

                    <YAxis
                        tickLine={false}
                        axisLine={false}
                    />

                    <Tooltip />

                    <Line
                        type="monotone"
                        dataKey="uptime"
                        stroke="var(--primary)"
                        strokeWidth={3}
                        dot={false}
                        activeDot={{ r: 5 }}
                    />

                    <Line
                        type="monotone"
                        dataKey="incidents"
                        stroke="var(--warning)"
                        strokeWidth={2}
                        dot={false}
                    />

                </LineChart>

            </ResponsiveContainer>

        </div>
    );
}

export default PerformanceChart;