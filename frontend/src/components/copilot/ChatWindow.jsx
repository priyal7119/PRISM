import {
    Bot,
    User,
    Sparkles
} from "lucide-react";

import useCopilotStore from "../../store/copilotStore";

import TypingIndicator from "./TypingIndicator";
import ConfidenceBadge from "./ConfidenceBadge";

import "../../styles/copilot.css";



function ChatWindow({ messages = [] }) {


    const {
        typing
    } = useCopilotStore();




    return (

        <div className="copilot-card chat-window">


            <div className="copilot-card-header">


                <div>

                    <h2>
                        AI Conversation
                    </h2>


                    <p>
                        Real-time PRISM AI network analysis
                    </p>

                </div>



                <Sparkles
                    size={20}
                    className="header-icon"
                />


            </div>






            <div className="chat-messages">


                {
                    messages.length === 0 ?


                    (

                        <div className="empty-chat">


                            <h3>
                                Start analyzing your network
                            </h3>


                            <p>
                                Ask about devices, alerts,
                                failures or performance.
                            </p>


                        </div>


                    )

                    :

                    (

                        messages.map(
                            (message,index)=>(


                                <div

                                    key={index}

                                    className={
                                        `chat-message ${
                                            message.role === "assistant"
                                            ?
                                            "assistant"
                                            :
                                            "user"
                                        }`
                                    }

                                >





                                    <div className="chat-avatar">


                                        {
                                            message.role === "assistant"

                                            ?

                                            <Bot size={16}/>

                                            :

                                            <User size={16}/>

                                        }


                                    </div>







                                    <div className="chat-message-content">


                                        <div className="chat-bubble">


                                            <p>

                                                {
                                                    message.message
                                                }

                                            </p>


                                        </div>







                                        {
                                            message.role === "assistant"
                                            &&
                                            message.confidence
                                            &&

                                            <ConfidenceBadge

                                                confidence={
                                                    message.confidence
                                                }

                                            />

                                        }





                                        {
                                            message.analysis
                                            &&

                                            <div className="chat-analysis">


                                                <strong>
                                                    AI Analysis
                                                </strong>


                                                <p>
                                                    {
                                                        message.analysis
                                                    }
                                                </p>


                                            </div>

                                        }






                                        {
                                            message.recommendation
                                            &&

                                            <div className="chat-recommendation">


                                                <strong>
                                                    Recommendation
                                                </strong>


                                                <p>
                                                    {
                                                        message.recommendation
                                                    }
                                                </p>


                                            </div>

                                        }



                                    </div>




                                </div>


                            )

                        )

                    )

                }







                {
                    typing &&

                    <TypingIndicator/>

                }



            </div>



        </div>

    );

}


export default ChatWindow;