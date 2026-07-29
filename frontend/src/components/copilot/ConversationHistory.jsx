import "../../styles/copilot.css";

function ConversationHistory({

    history = []

}) {

    return (

        <div className="copilot-card">

            <div className="copilot-card-header">

                <div>

                    <h2>

                        Conversation History

                    </h2>

                    <p>

                        Previous interactions with PRISM AI

                    </p>

                </div>

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

                            history.map((item, index) => (

                                <div

                                    key={index}

                                    className="history-item"

                                >

                                    <div className={`history-role ${item.role}`}>

                                        {

                                            item.role === "assistant"

                                            ?

                                            "AI"

                                            :

                                            "You"

                                        }

                                    </div>

                                    <div className="history-content">

                                        <p>

                                            {item.message}

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

export default ConversationHistory;