import {
    Cpu,
    Activity,
    Clock,
    Database,
    Sparkles
} from "lucide-react";

import "../../styles/copilot.css";


function AIStatusCard({ status }) {


    if (!status) return null;

    const normalizedStatus = typeof status === "string"
        ? {
            model: "PRISM AI",
            health: status,
            response_time: "Live",
            knowledge_base: "Connected"
        }
        : status;



    const items = [

        {
            icon: <Cpu size={18}/>,
            label: "Model",
            value: normalizedStatus.model || "PRISM AI"
        },

        {
            icon: <Activity size={18}/>,
            label: "Health",
            value: normalizedStatus.health || "Online",
            className:"online"
        },

        {
            icon: <Clock size={18}/>,
            label: "Response Time",
            value: normalizedStatus.response_time || "Live"
        },

        {
            icon: <Database size={18}/>,
            label: "Knowledge Base",
            value: normalizedStatus.knowledge_base || "Connected"
        }

    ];



    return (

        <div className="copilot-card">


            <div className="copilot-card-header">

                <div>

                    <h2>
                        AI Status
                    </h2>

                    <p>
                        Real-time Copilot availability
                    </p>

                </div>


                <Sparkles
                    size={20}
                    className="header-icon"
                />

            </div>




            <div className="ai-status-grid">


                {
                    items.map((item,index)=>(

                        <div
                            key={index}
                            className="status-box"
                        >

                            <div className="status-icon">
                                {item.icon}
                            </div>


                            <div>

                                <span>
                                    {item.label}
                                </span>


                                <strong
                                    className={
                                        item.className || ""
                                    }
                                >

                                    {item.value}

                                </strong>

                            </div>


                        </div>

                    ))
                }


            </div>


        </div>

    );

}


export default AIStatusCard;