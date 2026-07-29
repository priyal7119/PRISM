import { useEffect } from "react";

import useCopilotStore from "../store/copilotStore";

import AIStatusCard from "../components/copilot/AIStatusCard";
import SuggestedPrompts from "../components/copilot/SuggestedPrompts";
import ConversationHistory from "../components/copilot/ConversationHistory";
import ChatWindow from "../components/copilot/ChatWindow";
import ChatInput from "../components/copilot/ChatInput";
import InsightPanel from "../components/copilot/InsightPanel";

import "../styles/copilot.css";

function AICopilot() {

    const {

        copilotData,

        loading,

        fetchCopilot

    } = useCopilotStore();

    useEffect(() => {

        fetchCopilot();

    }, []);

    if (loading) {

        return (

            <div className="copilot-loading">

                Loading AI Copilot...

            </div>

        );

    }

    if (!copilotData) {

        return (

            <div className="copilot-loading">

                Unable to load AI Copilot.

            </div>

        );

    }

    return (

        <div className="copilot-page">

            {/* Header */}

            <div className="copilot-header">

                <div>

                    <h1>

                        AI Copilot

                    </h1>

                    <p>

                        Intelligent assistant for network monitoring, diagnostics, troubleshooting and recommendations.

                    </p>

                </div>

            </div>

            {/* Status + Suggested Prompts */}

            <div className="copilot-top-grid">

                <AIStatusCard

                    status={copilotData.status}

                />

                <SuggestedPrompts

                    prompts={copilotData.suggested_prompts}

                />

            </div>

            {/* Conversation History */}

            <ConversationHistory

                history={copilotData.conversation_history}

            />

            {/* Chat */}

            <ChatWindow

                messages={copilotData.conversation_history}

            />

            {/* Input */}

            <ChatInput />

            {/* AI Insights */}

            <InsightPanel

                insights={copilotData.insights}

            />

        </div>

    );

}

export default AICopilot;
