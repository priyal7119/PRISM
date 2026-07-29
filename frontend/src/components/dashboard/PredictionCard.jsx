function PredictionCard({ predictions = [] }) {
    const primary = predictions[0] || {};

    return (

        <div className="prediction-card dashboard-card">
            <div className="card-heading">
                <h2 className="card-title">AI Predictions</h2>
                <span className="card-heading__tag card-heading__tag--accent">Forecast</span>
            </div>

            {

                predictions.length === 0 ?

                (

                    <p className="empty-text">No predictions available</p>

                )

                :

                (

                    <>
                        <div className="prediction-summary">
                            <div className="confidence-ring">
                                <span>{primary.confidence ?? 0}%</span>
                            </div>
                            <div className="prediction-summary__text">
                                <h3>{primary.device || "Unknown Device"}</h3>
                                <p>{primary.prediction || "No issues predicted"}</p>
                            </div>
                        </div>

                        <div className="prediction-detail">
                            <p>{primary.description || "The device is operating normally with optimal performance parameters."}</p>
                            <span className="confidence-pill">{primary.confidence ?? 0}% Confidence</span>
                        </div>
                    </>

                )

            }

        </div>

    );

}

export default PredictionCard;