import "./../../styles/network.css";

function NetworkSummaryCard({

    title,

    value,

    subtitle,

    color

}) {

    const getClass = () => {

        switch (color) {

            case "green":
                return "summary-green";

            case "blue":
                return "summary-blue";

            case "purple":
                return "summary-purple";

            case "orange":
                return "summary-orange";

            case "red":
                return "summary-red";

            default:
                return "";
        }

    };

    return (

        <div className={`summary-card ${getClass()}`}>

            <div className="summary-icon">

                <div className="icon-circle"></div>

            </div>

            <div className="summary-content">

                <h4>

                    {title}

                </h4>

                <h2>

                    {value}

                </h2>

                <p>

                    {subtitle}

                </p>

            </div>

            <div className="summary-chart">

                <div className="mini-line">

                    <span></span>
                    <span></span>
                    <span></span>
                    <span></span>
                    <span></span>
                    <span></span>
                    <span></span>

                </div>

            </div>

        </div>

    );

}

export default NetworkSummaryCard;