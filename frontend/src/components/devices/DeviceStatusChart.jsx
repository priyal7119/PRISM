// src/components/devices/DeviceStatusChart.jsx

import {
    ResponsiveContainer,
    PieChart,
    Pie,
    Cell,
    Tooltip,
} from "recharts";

import useDevicesStore from "../../store/devicesStore";

const COLORS = [
    "#22c55e",
    "#f59e0b",
    "#ef4444",
];

function DeviceStatusChart() {
    const { summary, loading } = useDevicesStore();

    if (loading) {
        return (
            <div className="device-chart-card">
                <h3>Device Health Overview</h3>
                <p>Loading chart...</p>
            </div>
        );
    }

    const data = [
        {
            name: "Online",
            value: summary.online || 0,
        },
        {
            name: "Warning",
            value: summary.warning || 0,
        },
        {
            name: "Offline",
            value: summary.offline || 0,
        },
    ];

    const total =
        (summary.online || 0) +
        (summary.warning || 0) +
        (summary.offline || 0);

    return (
        <div className="device-chart-card">
            <div className="prediction-card-header">
                <div>
                    <h2>Device Health Overview</h2>
                    <p>Current operational status of all monitored devices</p>
                </div>
            </div>

            <div
                style={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-between",
                    gap: 24,
                    marginTop: 20,
                    flexWrap: "wrap",
                }}
            >
                <div
                    style={{
                        width: 260,
                        height: 260,
                        position: "relative",
                    }}
                >
                    <ResponsiveContainer width="100%" height="100%">
                        <PieChart>
                            <Pie
                                data={data}
                                dataKey="value"
                                innerRadius={70}
                                outerRadius={95}
                                paddingAngle={3}
                                strokeWidth={2}
                            >
                                {data.map((entry, index) => (
                                    <Cell
                                        key={entry.name}
                                        fill={COLORS[index]}
                                    />
                                ))}
                            </Pie>

                            <Tooltip />
                        </PieChart>
                    </ResponsiveContainer>

                    <div
                        style={{
                            position: "absolute",
                            inset: 0,
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "center",
                            flexDirection: "column",
                            pointerEvents: "none",
                        }}
                    >
                        <span
                            style={{
                                fontSize: 34,
                                fontWeight: 800,
                                color: "var(--text-primary)",
                            }}
                        >
                            {total}
                        </span>

                        <span
                            style={{
                                fontSize: 13,
                                color: "var(--text-muted)",
                            }}
                        >
                            Total Devices
                        </span>
                    </div>
                </div>

                <div
                    style={{
                        flex: 1,
                        display: "flex",
                        flexDirection: "column",
                        gap: 18,
                        minWidth: 220,
                    }}
                >
                    {data.map((item, index) => (
                        <div
                            key={item.name}
                            style={{
                                display: "flex",
                                justifyContent: "space-between",
                                alignItems: "center",
                                padding: "14px 16px",
                                border: "1px solid var(--border-color)",
                                borderRadius: 12,
                                background: "var(--bg-surface-secondary)",
                            }}
                        >
                            <div
                                style={{
                                    display: "flex",
                                    alignItems: "center",
                                    gap: 12,
                                }}
                            >
                                <div
                                    style={{
                                        width: 12,
                                        height: 12,
                                        borderRadius: "50%",
                                        background: COLORS[index],
                                    }}
                                />

                                <span
                                    style={{
                                        fontWeight: 600,
                                        color: "var(--text-primary)",
                                    }}
                                >
                                    {item.name}
                                </span>
                            </div>

                            <strong
                                style={{
                                    fontSize: 20,
                                    color: "var(--text-primary)",
                                }}
                            >
                                {item.value}
                            </strong>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}

export default DeviceStatusChart;