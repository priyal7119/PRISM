import "../../styles/network.css";

function HealthDistribution({

    distribution

}) {

    if (!distribution) {

        return (

            <div className="network-card">

                <h2>

                    Device Health Distribution

                </h2>

                <p>No data available.</p>

            </div>

        );

    }

    const healthy = distribution.healthy;

    const warning = distribution.warning;

    const critical = distribution.critical;

    const total = healthy + warning + critical;

    return (

        <div className="network-card">

            <div className="card-header">

                <div>

                    <h2>

                        Device Health Distribution

                    </h2>

                    <p>

                        Overall infrastructure health

                    </p>

                </div>

            </div>

            <div className="health-summary">

                <div className="health-circle">

                    <h1>

                        {total}

                    </h1>

                    <span>

                        Devices

                    </span>

                </div>

            </div>

            <div className="health-list">

                <div className="health-row">

                    <div className="health-label">

                        <span className="health-dot healthy"></span>

                        Healthy

                    </div>

                    <strong>

                        {healthy}

                    </strong>

                </div>

                <div className="progress-track">

                    <div

                        className="progress-fill healthy"

                        style={{

                            width: `${(healthy / total) * 100}%`

                        }}

                    ></div>

                </div>

                <div className="health-row">

                    <div className="health-label">

                        <span className="health-dot warning"></span>

                        Warning

                    </div>

                    <strong>

                        {warning}

                    </strong>

                </div>

                <div className="progress-track">

                    <div

                        className="progress-fill warning"

                        style={{

                            width: `${(warning / total) * 100}%`

                        }}

                    ></div>

                </div>

                <div className="health-row">

                    <div className="health-label">

                        <span className="health-dot critical"></span>

                        Critical

                    </div>

                    <strong>

                        {critical}

                    </strong>

                </div>

                <div className="progress-track">

                    <div

                        className="progress-fill critical"

                        style={{

                            width: `${(critical / total) * 100}%`

                        }}

                    ></div>

                </div>

            </div>

        </div>

    );

}

export default HealthDistribution;