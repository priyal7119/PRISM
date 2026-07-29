import "../../styles/copilot.css";

function ChatWindow({

    messages = []

}) {

    return (

        <div className="copilot-card chat-window">

            <div className="copilot-card-header">

                <div>

                    <h2>

                        AI Conversation

                    </h2>

                    <p>

                        Interact with the PRISM AI assistant

                    </p>

                </div>

            </div>

            <div className="chat-messages">

                {

                    messages.length === 0 ?

                    (

                        <div className="empty-chat">

                            <h3>

                                No conversation yet

                            </h3>

                            <p>

                                Start by selecting a suggested prompt or typing your own question.

                            </p>

                        </div>

                    )

                    :

                    (

                        messages.map((message, index) => (

                            <div

                                key={index}

                                className={`chat-message ${message.role}`}

                            >

                                <div className="chat-avatar">

                                    {

                                        message.role === "assistant"

                                        ?

                                        "AI"

                                        :

                                        "You"

                                    }

                                </div>

                                <div className="chat-bubble">

                                    <p>

                                        {message.message}

                                    </p>

                                </div>

                            </div>

                        ))

                    )

                }

            </div>

        </div>

    );

}

export default ChatWindow;