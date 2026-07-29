import "../../styles/copilot.css";

function AIStatusCard({

    status

}) {

    if (!status) return null;

    return (

        <div className="copilot-card">

            <div className="copilot-card-header">

                <div>

                    <h2>

                        AI Status

                    </h2>

                    <p>

                        Current AI assistant status

                    </p>

                </div>

            </div>

            <div className="ai-status-grid">

                <div className="status-box">

                    <span>

                        Model

                    </span>

                    <strong>

                        {status.model}

                    </strong>

                </div>

                <div className="status-box">

                    <span>

                        Health

                    </span>

                    <strong className="online">

                        ● {status.health}

                    </strong>

                </div>

                <div className="status-box">

                    <span>

                        Response Time

                    </span>

                    <strong>

                        {status.response_time}

                    </strong>

                </div>

                <div className="status-box">

                    <span>

                        Knowledge Base

                    </span>

                    <strong>

                        {status.knowledge_base}

                    </strong>

                </div>

            </div>

        </div>

    );

}

export default AIStatusCard;