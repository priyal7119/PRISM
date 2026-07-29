import "../../styles/network.css";

function PerformanceChart({

    performance

}) {

    if (!performance) {

        return (

            <div className="network-card">

                <h2 className="card-title">

                    Network Performance

                </h2>

                <p>No performance data available.</p>

            </div>

        );

    }

    const bandwidth = performance.bandwidth || [];

    const latency = performance.latency || [];

    const labels = [

        "09:00",

        "10:00",

        "11:00",

        "12:00",

        "13:00",

        "14:00",

        "15:00"

    ];

    return (

        <div className="network-card performance-card">

            <div className="card-header">

                <div>

                    <h2>

                        Network Performance

                    </h2>

                    <p>

                        Live bandwidth and latency trend

                    </p>

                </div>

            </div>

            <div className="performance-table">

                <div className="performance-header">

                    <span>Time</span>

                    <span>Bandwidth</span>

                    <span>Latency</span>

                </div>

                {

                    labels.map((time, index) => (

                        <div

                            key={index}

                            className="performance-row"

                        >

                            <span>

                                {time}

                            </span>

                            <span>

                                {bandwidth[index]} Gbps

                            </span>

                            <span>

                                {latency[index]} ms

                            </span>

                        </div>

                    ))

                }

            </div>

            <div className="performance-bars">

                {

                    bandwidth.map((value, index) => (

                        <div

                            key={index}

                            className="bar-group"

                        >

                            <div

                                className="bandwidth-bar"

                                style={{

                                    height: `${value * 18}px`

                                }}

                            ></div>

                            <div

                                className="latency-bar"

                                style={{

                                    height: `${latency[index] * 4}px`

                                }}

                            ></div>

                            <small>

                                {labels[index]}

                            </small>

                        </div>

                    ))

                }

            </div>

            <div className="chart-legend">

                <div>

                    <span className="legend bandwidth"></span>

                    Bandwidth

                </div>

                <div>

                    <span className="legend latency"></span>

                    Latency

                </div>

            </div>

        </div>

    );

}

export default PerformanceChart;