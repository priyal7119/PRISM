import "../../styles/prediction.css";

function DevicePredictionCard({

    device

}) {

    if (!device) return null;

    const getRiskClass = () => {

        switch (device.risk.toLowerCase()) {

            case "high":
                return "risk-high";

            case "medium":
                return "risk-medium";

            default:
                return "risk-low";

        }

    };

    return (

        <div className="device-prediction-card">

            <div className="device-card-header">

                <div>

                    <h3>

                        {device.device}

                    </h3>

                    <p>

                        {device.prediction}

                    </p>

                </div>

                <span className={`risk-badge ${getRiskClass()}`}>

                    {device.risk}

                </span>

            </div>

            <div className="device-card-body">

                <div className="device-stat">

                    <span>

                        Confidence

                    </span>

                    <strong>

                        {device.confidence}%

                    </strong>

                </div>

                <div className="confidence-progress">

                    <div

                        className="confidence-progress-fill"

                        style={{

                            width: `${device.confidence}%`

                        }}

                    ></div>

                </div>

                <div className="device-stat">

                    <span>

                        Estimated Time to Failure

                    </span>

                    <strong>

                        {device.time_to_failure}

                    </strong>

                </div>

            </div>

        </div>

    );

}

export default DevicePredictionCard;