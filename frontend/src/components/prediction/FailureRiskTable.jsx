import "../../styles/prediction.css";

function FailureRiskTable({

    devices = []

}) {

    const getRiskClass = (risk) => {

        switch (risk.toLowerCase()) {

            case "high":
                return "risk-high";

            case "medium":
                return "risk-medium";

            case "low":
                return "risk-low";

            default:
                return "";

        }

    };

    return (

        <div className="prediction-card">

            <div className="prediction-card-header">

                <div>

                    <h2>

                        Failure Risk Assessment

                    </h2>

                    <p>

                        AI analysis of network devices

                    </p>

                </div>

            </div>

            <table className="risk-table">

                <thead>

                    <tr>

                        <th>Device</th>

                        <th>Prediction</th>

                        <th>Risk</th>

                        <th>Confidence</th>

                        <th>Time to Failure</th>

                    </tr>

                </thead>

                <tbody>

                    {

                        devices.map((device, index) => (

                            <tr key={index}>

                                <td>

                                    {device.device}

                                </td>

                                <td>

                                    {device.prediction}

                                </td>

                                <td>

                                    <span

                                        className={`risk-badge ${getRiskClass(device.risk)}`}

                                    >

                                        {device.risk}

                                    </span>

                                </td>

                                <td>

                                    <div className="confidence-cell">

                                        <div className="confidence-track">

                                            <div

                                                className="confidence-fill"

                                                style={{

                                                    width: `${device.confidence}%`

                                                }}

                                            ></div>

                                        </div>

                                        <span>

                                            {device.confidence}%

                                        </span>

                                    </div>

                                </td>

                                <td>

                                    {device.time_to_failure}

                                </td>

                            </tr>

                        ))

                    }

                </tbody>

            </table>

        </div>

    );

}

export default FailureRiskTable;