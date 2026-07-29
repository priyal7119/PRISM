import { useState } from "react";

import "../../styles/copilot.css";

function ChatInput() {

    const [message, setMessage] = useState("");

    const handleSend = () => {

        if (!message.trim()) return;

        console.log("User Message:", message);

        // Later:
        // Connect to backend AI endpoint

        setMessage("");
    };

    const handleKeyDown = (e) => {

        if (e.key === "Enter") {

            handleSend();

        }

    };

    return (

        <div className="copilot-card chat-input-card">

            <div className="chat-input-container">

                <input

                    type="text"

                    placeholder="Ask PRISM AI anything about your network..."

                    value={message}

                    onChange={(e) => setMessage(e.target.value)}

                    onKeyDown={handleKeyDown}

                    className="chat-input"

                />

                <button

                    className="send-button"

                    onClick={handleSend}

                >

                    Send

                </button>

            </div>

        </div>

    );

}

export default ChatInput;