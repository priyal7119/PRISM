import {
    Sparkles
} from "lucide-react";

import "../../styles/copilot.css";


function TypingIndicator() {


    return (

        <div className="typing-indicator">


            <div className="typing-avatar">

                <Sparkles size={15}/>

            </div>



            <div className="typing-content">


                <span></span>

                <span></span>

                <span></span>


                <p>
                    PRISM AI is analyzing...
                </p>


            </div>


        </div>

    );

}


export default TypingIndicator;