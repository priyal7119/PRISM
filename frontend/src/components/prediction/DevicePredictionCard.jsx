// src/components/prediction/DevicePredictionCard.jsx

import {
    Cpu,
    Clock3,
    ShieldAlert,
    ShieldCheck,
    ShieldQuestion,
} from "lucide-react";

import "../../styles/prediction.css";

function DevicePredictionCard({ device }) {
    if (!device) return null;

    const confidence = device.confidence ?? 0;

    const risk = (device.risk || "").toLowerCase();

    const getRiskClass = () => {
        switch (risk) {
            case "high":
                return "risk-high";
            case "medium":
                return "risk-medium";
            default:
                return "risk-low";
        }
    };

    const getRiskIcon = () => {
        switch (risk) {
            case "high":
                return <ShieldAlert size={18} />;
            case "medium":
                return <ShieldQuestion size={18} />;
            default:
                return <ShieldCheck size={18} />;
        }
    };

    return (
        <div className="device-pred-card">

            <div className="device-pred-card-header">

                <div className="device-title">

                    <div className="device-icon">
                        <Cpu size={18} />
                    </div>

                    <div>
                        <h3>{device.device || "-"}</h3>
                        <p>{device.prediction || "-"}</p>
                    </div>

                </div>

                <span className={`risk-badge ${getRiskClass()}`}>
                    {getRiskIcon()}
                    {device.risk}
                </span>

            </div>

            <div className="device-pred-body">

                <div className="device-pred-row">

                    <div className="device-row-title">
                        Confidence
                    </div>

                    <strong>{confidence}%</strong>

                </div>

                <div className="confidence-track">

                    <div
                        className={`confidence-fill ${risk}`}
                        style={{
                            width: `${confidence}%`,
                        }}
                    />

                </div>

                <div className="device-pred-row">

                    <div className="device-row-title">

                        <Clock3 size={15} />

                        Estimated Time to Failure

                    </div>

                    <strong>
                        {device.time_to_failure || "N/A"}
                    </strong>

                </div>

            </div>

        </div>
    );
}

export default DevicePredictionCard;