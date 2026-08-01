import {
    Brain,
    CheckCircle,
    Target
} from "lucide-react";

import "../../styles/copilot.css";


function AIReasoningCard({

    analysis = "",
    recommendation = "",
    confidence = null

}) {


    return (

        <div className="ai-reasoning-card">


            <div className="reasoning-header">


                <Brain size={18}/>


                <h3>
                    AI Analysis
                </h3>


            </div>





            {
                analysis &&

                <div className="reasoning-section">


                    <span>
                        Analysis
                    </span>


                    <p>
                        {analysis}
                    </p>


                </div>

            }






            {
                recommendation &&

                <div className="reasoning-section">


                    <span>
                        Recommendation
                    </span>


                    <p>
                        {recommendation}
                    </p>


                </div>

            }







            {
                confidence &&

                <div className="confidence-badge">


                    <Target size={15}/>


                    Confidence:

                    <strong>
                        {confidence}%
                    </strong>


                </div>

            }





            {
                !analysis &&
                !recommendation &&

                <div className="reasoning-empty">

                    <CheckCircle size={16}/>

                    Waiting for AI analysis

                </div>

            }



        </div>

    );

}


export default AIReasoningCard;