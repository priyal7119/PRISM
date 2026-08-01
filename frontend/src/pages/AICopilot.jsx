import {
    useEffect
} from "react";


import {
    Sparkles,
    AlertCircle
} from "lucide-react";


import useCopilotStore from "../store/copilotStore";


import AIStatusCard from "../components/copilot/AIStatusCard";
import SuggestedPrompts from "../components/copilot/SuggestedPrompts";
import ChatWindow from "../components/copilot/ChatWindow";
import ChatInput from "../components/copilot/ChatInput";
import ConversationHistory from "../components/copilot/ConversationHistory";
import InsightPanel from "../components/copilot/InsightPanel";
import AIReasoningCard from "../components/copilot/AIReasoningCard";
import RecommendationCard from "../components/copilot/RecommendationCard";


import "../styles/copilot.css";



function AICopilot(){



    const {

        copilotData,

        messages,

        loading,

        fetchCopilot

    } = useCopilotStore();





    useEffect(()=>{

        fetchCopilot();

    },[fetchCopilot]);







    if(loading){


        return (

            <div className="copilot-page">


                <div className="copilot-loading">


                    <Sparkles size={28}/>


                    Loading PRISM AI...


                </div>


            </div>

        );

    }







    if(!copilotData){


        return (

            <div className="copilot-page">


                <div className="copilot-error">


                    <AlertCircle size={22}/>


                    Unable to load AI Copilot


                </div>


            </div>

        );


    }







    return (


        <div className="copilot-page">





            <div className="copilot-header">


                <div>

                    <h1>
                        AI Copilot
                    </h1>


                    <p>
                        Intelligent assistant for
                        network monitoring and automation.
                    </p>


                </div>




                <div className="copilot-ai-badge">


                    <Sparkles size={16}/>


                    PRISM AI Active


                </div>


            </div>








            <div className="copilot-dashboard-grid">


                <AIStatusCard

                    status={
                        copilotData.status
                    }

                />



                <SuggestedPrompts

                    prompts={
                        copilotData.suggested_prompts
                    }

                />


            </div>







            <ChatWindow

                messages={messages}

            />



            <ChatInput/>








            <div className="copilot-bottom-grid">


                <InsightPanel

                    insights={
                        copilotData.insights
                    }

                />



                <ConversationHistory

                    history={messages}

                />


            </div>








            <div className="copilot-bottom-grid">


                <AIReasoningCard

                    analysis={
                        copilotData.analysis
                    }

                    recommendation={
                        copilotData.recommendation
                    }

                    confidence={
                        copilotData.confidence
                    }

                />



                <RecommendationCard

                    recommendations={
                        copilotData.recommendations || []
                    }

                />


            </div>





        </div>


    );


}


export default AICopilot;