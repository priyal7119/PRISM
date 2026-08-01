// src/pages/Predictions.jsx
import { useEffect } from "react";
import usePredictionStore from "../store/predictionStore";
import PredictionSummaryCard from "../components/prediction/PredictionSummaryCard";
import PredictionTimeline from "../components/prediction/PredictionTimeline";
import FailureRiskTable from "../components/prediction/FailureRiskTable";
import DevicePredictionCard from "../components/prediction/DevicePredictionCard";
import ConfidenceOverview from "../components/prediction/ConfidenceOverview";
import RecommendationPanel from "../components/prediction/RecommendationPanel";
import "../styles/prediction.css";

function Predictions() {
    const { predictionData, loading, fetchPredictions } = usePredictionStore();

    useEffect(() => {
        fetchPredictions();
    }, []);

    if (loading) {
        return (
            <div className="prediction-page">
                <div className="prediction-header">
                    <h1>AI Predictions</h1>
                    <p>Predictive analytics for proactive network monitoring and failure prevention.</p>
                </div>
                <div className="dashboard-loading">
                    <div className="pulse-dot" style={{ width: 12, height: 12 }} />
                    Loading AI Predictions...
                </div>
                <div className="prediction-summary-grid">
                    {[1,2,3,4].map(i => <div key={i} className="skeleton skeleton-card" />)}
                </div>
            </div>
        );
    }

    if (!predictionData) {
        return (
            <div className="prediction-page">
                <div className="prediction-header"><h1>AI Predictions</h1></div>
                <div className="dashboard-loading">Unable to load prediction data.</div>
            </div>
        );
    }

    return (
        <div className="prediction-page">
            <div className="prediction-header">
                <h1>AI Predictions</h1>
                <p>Predictive analytics for proactive network monitoring and failure prevention.</p>
            </div>

            <div className="prediction-summary-grid">
                {predictionData.summary.map((item, index) => (
                    <PredictionSummaryCard key={index} title={item.title} value={item.value} color={item.color} />
                ))}
            </div>

            <div className="prediction-grid">
                <PredictionTimeline timeline={predictionData.timeline} />
                <ConfidenceOverview confidence={predictionData.confidence} />
            </div>

            <FailureRiskTable devices={predictionData.devices} />

            <div className="device-prediction-grid">
                {predictionData.devices.map((device, index) => (
                    <DevicePredictionCard key={index} device={device} />
                ))}
            </div>

            <RecommendationPanel recommendations={predictionData.recommendations} />
        </div>
    );
}

export default Predictions;