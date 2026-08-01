import {
    PieChart,
    Pie,
    Cell,
    Tooltip,
    ResponsiveContainer,
    Legend
} from "recharts";

import useDevicesStore from "../../store/devicesStore";

const COLORS = [
    "#22c55e",
    "#f59e0b",
    "#ef4444"
];

function DeviceStatusChart() {

    const {
        summary,
        loading
    } = useDevicesStore();

    if (loading) {
        return (
            <div className="device-chart-card">
                <h3>Device Status</h3>
                <p>Loading chart...</p>
            </div>
        );
    }

    const data = [
        {
            name: "Online",
            value: summary.online || 0
        },
        {
            name: "Warning",
            value: summary.warning || 0
        },
        {
            name: "Offline",
            value: summary.offline || 0
        }
    ];

    return (
        <div className="device-chart-card">
            <h3>Device Status</h3>

            <ResponsiveContainer
                width="100%"
                height={260}
            >
                <PieChart>

                    <Pie
                        data={data}
                        dataKey="value"
                        nameKey="name"
                        cx="50%"
                        cy="50%"
                        outerRadius={80}
                        label
                    >
                        {data.map((entry, index) => (
                            <Cell
                                key={entry.name}
                                fill={COLORS[index]}
                            />
                        ))}
                    </Pie>

                    <Tooltip />

                    <Legend />

                </PieChart>
            </ResponsiveContainer>
        </div>
    );
}

export default DeviceStatusChart;