import {
    Lightbulb,
    ShieldCheck,
    AlertTriangle
} from "lucide-react";

import "../../styles/copilot.css";


function InsightPanel({ insights = [] }) {

    const normalizedInsights = Array.isArray(insights) ? insights : [];

    return (

        <div className="copilot-card">


            <div className="copilot-card-header">


                <div>

                    <h2>
                        AI Insights
                    </h2>

                    <p>
                        Intelligent network observations
                    </p>

                </div>


                <Lightbulb
                    size={20}
                    className="header-icon"
                />


            </div>





            {
                normalizedInsights.length === 0 ?

                (

                    <div className="empty-insights">

                        <p>
                            AI insights will appear after analysis.
                        </p>

                    </div>

                )


                :

                (

                    <div className="insight-list">


                        {
                            normalizedInsights.map(
                                (insight,index)=>(


                                    <div

                                        key={index}

                                        className="insight-item"

                                    >


                                        <div className="insight-icon">


                                            {
                                                index === 0
                                                ?

                                                <AlertTriangle size={17}/>

                                                :

                                                <ShieldCheck size={17}/>

                                            }


                                        </div>



                                        <div className="insight-content">


                                            <h4>

                                                {typeof insight === "string"
                                                    ? `Insight ${index + 1}`
                                                    : insight.title || `Insight ${index + 1}`}

                                            </h4>


                                            <p>

                                                {typeof insight === "string"
                                                    ? insight
                                                    : insight.description || insight.value || "No details available."}

                                            </p>


                                        </div>



                                    </div>


                                )
                            )

                        }


                    </div>


                )

            }


        </div>

    );

}


export default InsightPanel;