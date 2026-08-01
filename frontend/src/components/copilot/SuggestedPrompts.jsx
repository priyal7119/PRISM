import {
    Sparkles,
    ArrowRight
} from "lucide-react";

import useCopilotStore from "../../store/copilotStore";

import "../../styles/copilot.css";


function SuggestedPrompts({ prompts = [] }) {


    const {
        send,
        sending
    } = useCopilotStore();



    const handlePromptClick = (prompt)=>{

        if(
            sending ||
            !prompt
        )
            return;


        send(prompt);

    };



    return (

        <div className="copilot-card">


            <div className="copilot-card-header">


                <div>

                    <h2>
                        Suggested Actions
                    </h2>


                    <p>
                        Ask PRISM AI about your network
                    </p>

                </div>


                <Sparkles
                    size={20}
                    className="header-icon"
                />


            </div>




            <div className="prompt-list">


                {
                    prompts.length === 0 ?

                    (

                        <div className="empty-prompts">

                            No suggestions available

                        </div>

                    )

                    :

                    (

                        prompts.map(
                            (prompt,index)=>(

                                <button

                                    key={index}

                                    className="prompt-button"

                                    onClick={()=>
                                        handlePromptClick(prompt)
                                    }

                                    disabled={sending}

                                >

                                    <span>
                                        {prompt}
                                    </span>


                                    <ArrowRight
                                        size={15}
                                    />

                                </button>

                            )
                        )

                    )

                }


            </div>


        </div>

    );

}


export default SuggestedPrompts;