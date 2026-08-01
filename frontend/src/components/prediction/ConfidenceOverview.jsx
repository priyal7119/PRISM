// src/components/prediction/ConfidenceOverview.jsx

import "../../styles/prediction.css";

function ConfidenceOverview({ confidence }) {
    if (!confidence) return null;

    const high = confidence.high ?? 0;
    const medium = confidence.medium ?? 0;
    const low = confidence.low ?? 0;

    const total = high + medium + low || 1;

    const overall = Math.round(
        ((high * 100) + (medium * 75) + (low * 45)) / total
    );

    return (
        <div className="prediction-card confidence-card">

            <div className="prediction-card-header">
                <div>
                    <h2>Prediction Confidence</h2>
                    <p>AI model confidence distribution</p>
                </div>
            </div>

            <div className="confidence-overview">

                <div className="confidence-circle">

                    <div className="confidence-score">
                        {overall}%
                    </div>

                    <div className="confidence-text">
                        Overall Confidence
                    </div>

                </div>

                <div className="confidence-details">

                    <div className="confidence-row">

                        <div className="confidence-info">
                            <span className="confidence-dot high"></span>
                            <span>High Confidence</span>
                        </div>

                        <strong>{high}</strong>

                    </div>

                    <div className="confidence-track">
                        <div
                            className="confidence-fill high"
                            style={{
                                width: `${(high / total) * 100}%`,
                            }}
                        />
                    </div>

                    <div className="confidence-row">

                        <div className="confidence-info">
                            <span className="confidence-dot medium"></span>
                            <span>Medium Confidence</span>
                        </div>

                        <strong>{medium}</strong>

                    </div>

                    <div className="confidence-track">
                        <div
                            className="confidence-fill medium"
                            style={{
                                width: `${(medium / total) * 100}%`,
                            }}
                        />
                    </div>

                    <div className="confidence-row">

                        <div className="confidence-info">
                            <span className="confidence-dot low"></span>
                            <span>Low Confidence</span>
                        </div>

                        <strong>{low}</strong>

                    </div>

                    <div className="confidence-track">
                        <div
                            className="confidence-fill low"
                            style={{
                                width: `${(low / total) * 100}%`,
                            }}
                        />
                    </div>

                </div>

            </div>

        </div>
    );
}

export default ConfidenceOverview;