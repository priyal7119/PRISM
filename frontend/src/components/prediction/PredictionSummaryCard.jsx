// src/components/prediction/PredictionSummaryCard.jsx
import { Brain, CheckCircle2, AlertTriangle, TrendingDown } from "lucide-react";
import "../../styles/prediction.css";

function PredictionSummaryCard({ title = "-", value = "-", color = "" }) {
    const getClass = () => {
        const map = { blue: "prediction-blue", green: "prediction-green", orange: "prediction-orange", red: "prediction-red" };
        return map[color] || "prediction-blue";
    };

    const getIcon = () => {
        const lower = (title || "").toLowerCase();
        if (lower.includes("healthy") || lower.includes("normal")) return <CheckCircle2 size={20} />;
        if (lower.includes("risk") || lower.includes("warn")) return <AlertTriangle size={20} />;
        if (lower.includes("fail") || lower.includes("critical")) return <TrendingDown size={20} />;
        return <Brain size={20} />;
    };

    return (
        <div className={`prediction-summary-card ${getClass()}`}>
            <div className="prediction-icon-box">
                {getIcon()}
            </div>
            <div className="prediction-content">
                <h4>{title}</h4>
                <h2>{value ?? "-"}</h2>
            </div>
        </div>
    );
}

export default PredictionSummaryCard;