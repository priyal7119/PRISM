import {
    Server,
    Activity,
    Wifi,
    AlertTriangle,
    TrendingUp,
    Gauge,
    ShieldCheck,
    Timer,
} from "lucide-react";
import "../../styles/network.css";

function NetworkSummaryCard({
    title = "-",
    value = "-",
    subtitle = "",
    color = "blue",
}) {
    const colorClass = {
        green: "summary-green",
        blue: "summary-blue",
        purple: "summary-purple",
        orange: "summary-orange",
        red: "summary-red",
    }[color] || "summary-blue";

    const getIcon = () => {
        const text = title.toLowerCase();

        if (text.includes("status")) return <ShieldCheck size={22} />;
        if (text.includes("availability")) return <Wifi size={22} />;
        if (text.includes("latency")) return <Timer size={22} />;
        if (text.includes("packet")) return <Gauge size={22} />;
        if (text.includes("alert")) return <AlertTriangle size={22} />;
        if (text.includes("server") || text.includes("device")) return <Server size={22} />;
        if (text.includes("performance") || text.includes("trend")) return <TrendingUp size={22} />;

        return <Activity size={22} />;
    };

    return (
        <div className={`summary-card ${colorClass}`}>
            <div className="summary-icon">
                {getIcon()}
            </div>

            <div className="summary-content">
                <h4>{title}</h4>
                <h2>{value}</h2>
                {subtitle && <p>{subtitle}</p>}
            </div>
        </div>
    );
}

export default NetworkSummaryCard;