import {
    CheckCircle,
    ArrowRight
} from "lucide-react";

import "../../styles/copilot.css";


function RecommendationCard({

    recommendations = []

}) {



    return (

        <div className="recommendation-card">


            <div className="recommendation-header">


                <CheckCircle size={18}/>


                <h3>
                    AI Recommendations
                </h3>


            </div>





            {
                recommendations.length === 0 ?

                (

                    <p className="recommendation-empty">

                        No recommendations available.

                    </p>

                )

                :

                (

                    <div className="recommendation-list">


                        {
                            recommendations.map(
                                (item,index)=>(


                                    <div

                                        className="recommendation-item"

                                        key={index}

                                    >


                                        <ArrowRight size={15}/>


                                        <span>
                                            {item}
                                        </span>


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


export default RecommendationCard;