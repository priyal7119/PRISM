// src/components/copilot/ChatInput.jsx
import { useState } from "react";
import useCopilotStore from "../../store/copilotStore";
import "../../styles/copilot.css";

function ChatInput() {
    const [message, setMessage] = useState("");
    const [localMessages, setLocalMessages] = useState([]);

    const handleSend = () => {
        if (!message.trim()) return;

        setLocalMessages((prev) => [
            ...prev,
            { role: "user", message },
            {
                role: "assistant",
                message: `PRISM AI: Analysing your query — "${message}". Processing network data...`,
            },
        ]);

        setMessage("");
    };

    const handleKeyDown = (e) => {
        if (e.key === "Enter") handleSend();
    };

    return (
        <div className="copilot-card chat-input-card">
            {localMessages.length > 0 && (
                <div className="chat-local-history">
                    {localMessages.map((m, i) => (
                        <div
                            key={i}
                            className={`chat-bubble ${m.role === "user" ? "chat-bubble--user" : "chat-bubble--assistant"}`}
                        >
                            <span className="chat-bubble__role">{m.role === "user" ? "You" : "PRISM AI"}</span>
                            <span>{m.message}</span>
                        </div>
                    ))}
                </div>
            )}

            <div className="chat-input-container">
                <input
                    type="text"
                    placeholder="Ask PRISM AI anything about your network..."
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    onKeyDown={handleKeyDown}
                    className="chat-input"
                />
                <button className="send-button" onClick={handleSend}>
                    Send
                </button>
            </div>
        </div>
    );
}

export default ChatInput;