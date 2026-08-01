import {
    Gauge
} from "lucide-react";

import "../../styles/copilot.css";


function ConfidenceBadge({
    confidence = 0
}) {


    return (

        <div className="confidence-badge">


            <Gauge size={15}/>


            <span>
                AI Confidence
            </span>


            <strong>
                {confidence}%
            </strong>


        </div>

    );

}


export default ConfidenceBadge;