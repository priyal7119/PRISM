// src/components/prediction/PredictionTimeline.jsx

import {
    ResponsiveContainer,
    BarChart,
    Bar,
    XAxis,
    YAxis,
    CartesianGrid,
    Tooltip,
    Legend,
} from "recharts";

import "../../styles/prediction.css";

const COLORS = {
    cpu_spike: "#3b82f6",
    link_failure: "#ef4444",
    interface_error: "#f59e0b",
    packet_loss: "#10b981",
};

function CustomTooltip({ active, payload, label }) {
    if (!active || !payload || !payload.length) return null;

    const total = payload.reduce((sum, item) => sum + item.value, 0);

    return (
        <div className="prediction-tooltip">

            <h4>{label}</h4>

            <div className="tooltip-row">
                <span>Total Predicted Incidents</span>
                <strong>{total}</strong>
            </div>

            {payload.map((entry) => (
                <div
                    key={entry.dataKey}
                    className="tooltip-row"
                >
                    <span
                        style={{
                            display: "flex",
                            alignItems: "center",
                            gap: 8,
                        }}
                    >
                        <span
                            style={{
                                width: 10,
                                height: 10,
                                borderRadius: "50%",
                                background: entry.color,
                            }}
                        />

                        {entry.name}
                    </span>

                    <strong>{entry.value}</strong>
                </div>
            ))}

        </div>
    );
}

function PredictionTimeline({ timeline = [] }) {

    if (!timeline.length) {
        return (
            <div className="prediction-card">
                <div className="prediction-card-header">
                    <h2>AI Failure Forecast</h2>
                </div>

                <div className="prediction-empty">
                    No prediction data available.
                </div>
            </div>
        );
    }

    const peak = timeline.reduce((a, b) => {
        const ta =
            a.cpu_spike +
            a.link_failure +
            a.interface_error +
            a.packet_loss;

        const tb =
            b.cpu_spike +
            b.link_failure +
            b.interface_error +
            b.packet_loss;

        return tb > ta ? b : a;
    });

    const peakValue =
        peak.cpu_spike +
        peak.link_failure +
        peak.interface_error +
        peak.packet_loss;

    const totalEvents = timeline.reduce((sum, item) => {
        return (
            sum +
            item.cpu_spike +
            item.link_failure +
            item.interface_error +
            item.packet_loss
        );
    }, 0);

    return (
        <div className="prediction-card prediction-timeline-card">

            <div className="prediction-card-header">

                <div>

                    <h2>AI Failure Forecast</h2>

                    <p>
                        Predicted network failures grouped by
                        failure type over the next 48 hours.
                    </p>

                </div>

            </div>

            <div className="prediction-chart-wrapper">

                <ResponsiveContainer
                    width="100%"
                    height={340}
                >

                    <BarChart
                        data={timeline}
                        margin={{
                            top: 20,
                            right: 20,
                            left: 0,
                            bottom: 10,
                        }}
                    >

                        <CartesianGrid
                            strokeDasharray="3 3"
                            vertical={false}
                        />

                        <XAxis
                            dataKey="time"
                        />

                        <YAxis
                            allowDecimals={false}
                        />

                        <Tooltip
                            content={<CustomTooltip />}
                        />

                        <Legend />

                        <Bar
                            stackId="a"
                            dataKey="cpu_spike"
                            name="CPU Spike"
                            fill={COLORS.cpu_spike}
                            radius={[0, 0, 0, 0]}
                        />

                        <Bar
                            stackId="a"
                            dataKey="link_failure"
                            name="Link Failure"
                            fill={COLORS.link_failure}
                        />

                        <Bar
                            stackId="a"
                            dataKey="interface_error"
                            name="Interface Error"
                            fill={COLORS.interface_error}
                        />

                        <Bar
                            stackId="a"
                            dataKey="packet_loss"
                            name="Packet Loss"
                            fill={COLORS.packet_loss}
                            radius={[8, 8, 0, 0]}
                        />

                    </BarChart>

                </ResponsiveContainer>

            </div>

            <div className="timeline-summary">

                <div className="timeline-summary-item">

                    <span>Highest Risk Window</span>

                    <strong>{peak.time}</strong>

                </div>

                <div className="timeline-summary-item">

                    <span>Predicted Incidents</span>

                    <strong>{totalEvents}</strong>

                </div>

                <div className="timeline-summary-item">

                    <span>Peak Incident Count</span>

                    <strong>{peakValue}</strong>

                </div>

            </div>

        </div>
    );
}

export default PredictionTimeline;