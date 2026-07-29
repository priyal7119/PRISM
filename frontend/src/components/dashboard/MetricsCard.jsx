function MetricsCard({ title, data = [] }) {

    return (

        <div className="metrics-card dashboard-card">
            <div className="card-heading">
                <h2 className="card-title">{title}</h2>
                <span className="card-heading__tag">Live</span>
            </div>

            {

                data.length === 0 ?

                (

                    <p className="empty-text">No metrics available</p>

                )

                :

                (

                    <div className="metrics-list">

                        {

                            data.map((metric, index) => (

                                <div
                                    key={index}
                                    className="metric-item"
                                >

                                    <div>
                                        <span className="metric-item__label">{metric.name}</span>
                                        <strong className="metric-item__value">{metric.value}</strong>
                                    </div>

                                    {typeof metric.progress === "number" ? (
                                        <div className="metric-progress">
                                            <div className="metric-progress__fill" style={{ width: `${metric.progress}%` }} />
                                        </div>
                                    ) : null}

                                </div>

                            ))

                        }

                    </div>

                )

            }

        </div>

    );

}

export default MetricsCard;