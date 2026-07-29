import "../../styles/copilot.css";

function InsightPanel({

    insights = []

}) {

    return (

        <div className="copilot-card">

            <div className="copilot-card-header">

                <div>

                    <h2>

                        AI Insights

                    </h2>

                    <p>

                        Intelligent observations generated from network analysis

                    </p>

                </div>

            </div>

            {

                insights.length === 0 ?

                (

                    <div className="empty-insights">

                        <h3>

                            No insights available

                        </h3>

                        <p>

                            AI insights will appear here after analyzing your network.

                        </p>

                    </div>

                )

                :

                (

                    <div className="insight-list">

                        {

                            insights.map((insight, index) => (

                                <div

                                    key={index}

                                    className="insight-item"

                                >

                                    <div className="insight-icon">

                                        AI

                                    </div>

                                    <div className="insight-content">

                                        <h4>

                                            Insight {index + 1}

                                        </h4>

                                        <p>

                                            {insight}

                                        </p>

                                    </div>

                                </div>

                            ))

                        }

                    </div>

                )

            }

        </div>

    );

}

export default InsightPanel;