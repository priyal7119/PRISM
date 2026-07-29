import "../../styles/prediction.css";

function ConfidenceOverview({

    confidence

}) {

    if (!confidence) return null;

    const total =

        confidence.high +

        confidence.medium +

        confidence.low;

    const highPercent = (confidence.high / total) * 100;

    const mediumPercent = (confidence.medium / total) * 100;

    const lowPercent = (confidence.low / total) * 100;

    return (

        <div className="prediction-card">

            <div className="prediction-card-header">

                <div>

                    <h2>

                        Prediction Confidence

                    </h2>

                    <p>

                        AI model confidence distribution

                    </p>

                </div>

            </div>

            <div className="confidence-overview">

                <div className="confidence-circle">

                    <h1>

                        96%

                    </h1>

                    <span>

                        Overall Confidence

                    </span>

                </div>

                <div className="confidence-details">

                    <div className="confidence-item">

                        <div className="confidence-label">

                            <span className="dot high"></span>

                            High Confidence

                        </div>

                        <strong>

                            {confidence.high}

                        </strong>

                    </div>

                    <div className="confidence-track">

                        <div

                            className="confidence-fill high"

                            style={{

                                width: `${highPercent}%`

                            }}

                        ></div>

                    </div>

                    <div className="confidence-item">

                        <div className="confidence-label">

                            <span className="dot medium"></span>

                            Medium Confidence

                        </div>

                        <strong>

                            {confidence.medium}

                        </strong>

                    </div>

                    <div className="confidence-track">

                        <div

                            className="confidence-fill medium"

                            style={{

                                width: `${mediumPercent}%`

                            }}

                        ></div>

                    </div>

                    <div className="confidence-item">

                        <div className="confidence-label">

                            <span className="dot low"></span>

                            Low Confidence

                        </div>

                        <strong>

                            {confidence.low}

                        </strong>

                    </div>

                    <div className="confidence-track">

                        <div

                            className="confidence-fill low"

                            style={{

                                width: `${lowPercent}%`

                            }}

                        ></div>

                    </div>

                </div>

            </div>

        </div>

    );

}

export default ConfidenceOverview;