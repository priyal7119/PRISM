import "../../styles/prediction.css";

function PredictionTimeline({

    timeline = []

}) {

    const maxValue = Math.max(

        ...timeline.map(item => item.value),

        1

    );

    return (

        <div className="prediction-card prediction-timeline-card">

            <div className="prediction-card-header">

                <div>

                    <h2>

                        Failure Prediction Timeline

                    </h2>

                    <p>

                        Predicted network incidents over the next 48 hours

                    </p>

                </div>

            </div>

            <div className="timeline-chart">

                {

                    timeline.map((item, index) => (

                        <div

                            key={index}

                            className="timeline-column"

                        >

                            <div

                                className="timeline-bar"

                                style={{

                                    height: `${(item.value / maxValue) * 220}px`

                                }}

                            >

                                <span className="timeline-value">

                                    {item.value}

                                </span>

                            </div>

                            <small>

                                {item.time}

                            </small>

                        </div>

                    ))

                }

            </div>

            <div className="timeline-summary">

                <div>

                    <strong>

                        Peak Risk

                    </strong>

                    <p>

                        12 Hours

                    </p>

                </div>

                <div>

                    <strong>

                        Predicted Events

                    </strong>

                    <p>

                        {

                            timeline.reduce(

                                (sum, item) => sum + item.value,

                                0

                            )

                        }

                    </p>

                </div>

                <div>

                    <strong>

                        Model Confidence

                    </strong>

                    <p>

                        96%

                    </p>

                </div>

            </div>

        </div>

    );

}

export default PredictionTimeline;