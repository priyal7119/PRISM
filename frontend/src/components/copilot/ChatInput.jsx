import {
    useState
} from "react";


import {
    Send,
    Bot,
    User,
    Sparkles,
    Trash2
} from "lucide-react";


import useCopilotStore from "../../store/copilotStore";


import "../../styles/copilot.css";




function ChatInput(){



    const [message,setMessage] = useState("");



    const {

        send,

        sending,

        messages,

        clearChat

    } = useCopilotStore();







    const handleSend = async()=>{


        if(
            !message.trim() ||
            sending
        )
            return;



        await send(
            message.trim()
        );



        setMessage("");

    };








    const handleKeyDown=(e)=>{


        if(
            e.key==="Enter" &&
            !e.shiftKey
        ){

            e.preventDefault();

            handleSend();

        }


    };







    return (


        <div className="copilot-card chat-input-card">







            {
                messages.length > 0 &&


                <div className="chat-toolbar">


                    <div className="chat-status">


                        <Bot size={15}/>


                        <span>
                            PRISM AI Session Active
                        </span>


                    </div>





                    <button

                        className="clear-chat-btn"

                        onClick={clearChat}

                    >

                        <Trash2 size={14}/>


                        Clear


                    </button>



                </div>


            }










            <div className="chat-input-container">






                <div className="input-with-sparkle">



                    <Sparkles

                        size={17}

                        className="sparkle-icon"

                    />




                    <input


                        type="text"


                        className="chat-input"


                        placeholder="Ask PRISM AI about alerts, devices, failures, or network performance..."


                        value={message}


                        onChange={
                            (e)=>
                            setMessage(
                                e.target.value
                            )
                        }


                        onKeyDown={
                            handleKeyDown
                        }


                        disabled={sending}


                    />



                </div>








                <button


                    type="button"
                    className="btn-primary send-button"


                    onClick={handleSend}


                    disabled={
                        sending ||
                        !message.trim()
                    }


                >



                    <Send size={16}/>




                    <span>


                        {
                            sending
                            ?
                            "Analyzing..."
                            :
                            "Send"
                        }



                    </span>



                </button>







            </div>





            <div className="chat-hint">


                <User size={13}/>


                Press Enter to send • Shift + Enter for new line


            </div>





        </div>


    );


}



export default ChatInput;