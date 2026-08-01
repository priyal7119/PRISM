import "../../styles/network.css";
import {
    ResponsiveContainer,
    LineChart,
    Line,
    CartesianGrid,
    XAxis,
    YAxis,
    Tooltip,
    Legend,
} from "recharts";

function PerformanceChart({ performance }) {
    if (!performance) {
        return (
            <div className="network-card performance-card">
                <div className="card-header">
                    <div>
                        <h2>Network Performance</h2>
                        <p>Live bandwidth and latency trend</p>
                    </div>
                </div>

                <div className="empty-state">
                    <p>No performance data available.</p>
                    <span>Performance metrics will appear here.</span>
                </div>
            </div>
        );
    }

    const bandwidth = Array.isArray(performance.bandwidth)
        ? performance.bandwidth
        : [];

    const latency = Array.isArray(performance.latency)
        ? performance.latency
        : [];

    const labels = [
        "09:00",
        "10:00",
        "11:00",
        "12:00",
        "13:00",
        "14:00",
        "15:00",
    ];

    const chartData = labels.map((time, index) => ({
        time,
        bandwidth: bandwidth[index] ?? 0,
        latency: latency[index] ?? 0,
    }));

    return (
        <div className="network-card performance-card">
            <div className="card-header">
                <div>
                    <h2>Network Performance</h2>
                    <p>Bandwidth and latency trends across the network.</p>
                </div>
            </div>

            <div className="performance-chart">
                <ResponsiveContainer width="100%" height="100%">
                    <LineChart
                        data={chartData}
                        margin={{
                            top: 10,
                            right: 20,
                            left: 5,
                            bottom: 5,
                        }}
                    >
                        <CartesianGrid
                            strokeDasharray="4 4"
                            stroke="#273244"
                        />

                        <XAxis
                            dataKey="time"
                            axisLine={false}
                            tickLine={false}
                            tick={{ fill: "#94A3B8", fontSize: 12 }}
                        />

                        <YAxis
                            yAxisId="bandwidth"
                            axisLine={false}
                            tickLine={false}
                            tick={{ fill: "#60A5FA", fontSize: 12 }}
                            stroke="#60A5FA"
                            unit=" Gbps"
                        />

                        <YAxis
                            yAxisId="latency"
                            orientation="right"
                            axisLine={false}
                            tickLine={false}
                            tick={{ fill: "#A78BFA", fontSize: 12 }}
                            stroke="#A78BFA"
                            unit=" ms"
                        />

                        <Tooltip
                            contentStyle={{
                                background: "#131C2D",
                                border: "1px solid #2A3855",
                                borderRadius: 10,
                                color: "#fff",
                            }}
                            labelStyle={{
                                color: "#fff",
                            }}
                        />

                        <Legend
                            verticalAlign="top"
                            height={40}
                        />

                        <Line
                            yAxisId="bandwidth"
                            type="monotone"
                            dataKey="bandwidth"
                            name="Bandwidth"
                            stroke="#3B82F6"
                            strokeWidth={3}
                            dot={{
                                r: 4,
                                strokeWidth: 2,
                            }}
                            activeDot={{
                                r: 7,
                            }}
                        />

                        <Line
                            yAxisId="latency"
                            type="monotone"
                            dataKey="latency"
                            name="Latency"
                            stroke="#8B5CF6"
                            strokeWidth={3}
                            dot={{
                                r: 4,
                                strokeWidth: 2,
                            }}
                            activeDot={{
                                r: 7,
                            }}
                        />
                    </LineChart>
                </ResponsiveContainer>
            </div>

            <div className="performance-table">
                <div className="performance-header">
                    <span>Time</span>
                    <span>Bandwidth</span>
                    <span>Latency</span>
                </div>

                {chartData.map((item) => (
                    <div
                        key={item.time}
                        className="performance-row"
                    >
                        <span>{item.time}</span>
                        <span>{item.bandwidth.toFixed(1)} Gbps</span>
                        <span>{item.latency} ms</span>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default PerformanceChart;