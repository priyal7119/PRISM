import {
    History,
    User,
    Bot
} from "lucide-react";

import "../../styles/copilot.css";


function ConversationHistory({ history = [] }) {


    return (

        <div className="copilot-card">


            <div className="copilot-card-header">


                <div>

                    <h2>
                        Conversation History
                    </h2>

                    <p>
                        Previous PRISM AI interactions
                    </p>

                </div>


                <History
                    size={20}
                    className="header-icon"
                />


            </div>




            {
                history.length === 0 ?

                (

                    <div className="empty-history">

                        No previous conversations.

                    </div>

                )


                :

                (

                    <div className="history-list">


                        {
                            history.map(
                                (item,index)=>(


                                    <div

                                        key={index}

                                        className="history-item"

                                    >


                                        <div className="history-role">


                                            {
                                                item.role === "assistant"
                                                ?

                                                <Bot size={14}/>

                                                :

                                                <User size={14}/>

                                            }


                                            <span>

                                                {
                                                    item.role === "assistant"
                                                    ?
                                                    "PRISM AI"
                                                    :
                                                    "You"
                                                }

                                            </span>


                                        </div>




                                        <div className="history-content">

                                            <p>
                                                {
                                                    item.message
                                                }
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


export default ConversationHistory;