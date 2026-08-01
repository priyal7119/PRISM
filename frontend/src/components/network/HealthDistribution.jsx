import "../../styles/network.css";
import {
    ResponsiveContainer,
    PieChart,
    Pie,
    Cell,
    Tooltip,
} from "recharts";

const COLORS = [
    "#22c55e",
    "#f59e0b",
    "#ef4444",
];

function HealthDistribution({ distribution }) {
    if (!distribution) {
        return (
            <div className="network-card">
                <div className="card-header">
                    <div>
                        <h2>Device Health Distribution</h2>
                        <p>No data available.</p>
                    </div>
                </div>

                <div className="empty-state">
                    <p>No health information available.</p>
                </div>
            </div>
        );
    }

    const healthy = distribution.healthy ?? 0;
    const warning = distribution.warning ?? 0;
    const critical = distribution.critical ?? 0;

    const total = healthy + warning + critical;

    const data = [
        {
            name: "Healthy",
            value: healthy,
            color: "#22c55e",
        },
        {
            name: "Warning",
            value: warning,
            color: "#f59e0b",
        },
        {
            name: "Critical",
            value: critical,
            color: "#ef4444",
        },
    ];

    return (
        <div className="network-card">
            <div className="card-header">
                <div>
                    <h2>Device Health Distribution</h2>
                    <p>Overall infrastructure health</p>
                </div>
            </div>

            <div className="health-chart">
                <ResponsiveContainer width="100%" height={230}>
                    <PieChart>
                        <Pie
                            data={data}
                            innerRadius={65}
                            outerRadius={90}
                            paddingAngle={4}
                            dataKey="value"
                            stroke="none"
                        >
                            {data.map((entry, index) => (
                                <Cell
                                    key={index}
                                    fill={COLORS[index]}
                                />
                            ))}
                        </Pie>

                        <Tooltip />
                    </PieChart>
                </ResponsiveContainer>

                <div className="health-center">
                    <h2>{total}</h2>
                    <span>Total Devices</span>
                </div>
            </div>

            <div className="health-list">
                {data.map((item) => (
                    <div key={item.name}>
                        <div className="health-row">
                            <div className="health-label">
                                <span
                                    className="health-dot"
                                    style={{
                                        background: item.color,
                                    }}
                                />
                                {item.name}
                            </div>

                            <strong>{item.value}</strong>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default HealthDistribution;