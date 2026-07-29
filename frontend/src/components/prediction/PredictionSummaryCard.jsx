import "../../styles/prediction.css";

function PredictionSummaryCard({

    title,

    value,

    color

}) {

    const getClass = () => {

        switch (color) {

            case "blue":
                return "prediction-blue";

            case "green":
                return "prediction-green";

            case "orange":
                return "prediction-orange";

            case "red":
                return "prediction-red";

            default:
                return "";

        }

    };

    return (

        <div className={`prediction-summary-card ${getClass()}`}>

            <div className="prediction-top">

                <div className="prediction-icon">

                    <div className="prediction-circle"></div>

                </div>

                <div className="prediction-trend">

                    ▲

                </div>

            </div>

            <div className="prediction-content">

                <h4>

                    {title}

                </h4>

                <h2>

                    {value}

                </h2>

                <p>

                    AI Generated Insight

                </p>

            </div>

            <div className="prediction-mini-chart">

                <span></span>

                <span></span>

                <span></span>

                <span></span>

                <span></span>

                <span></span>

                <span></span>

            </div>

        </div>

    );

}

export default PredictionSummaryCard;