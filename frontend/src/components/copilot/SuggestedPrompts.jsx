import "../../styles/copilot.css";

function SuggestedPrompts({

    prompts = []

}) {

    const handlePromptClick = (prompt) => {

        console.log("Selected Prompt:", prompt);

        // Later:
        // Auto-fill ChatInput
        // or send directly to AI backend

    };

    return (

        <div className="copilot-card">

            <div className="copilot-card-header">

                <div>

                    <h2>

                        Suggested Prompts

                    </h2>

                    <p>

                        Quickly start a conversation with PRISM AI

                    </p>

                </div>

            </div>

            <div className="prompt-list">

                {

                    prompts.length === 0 ?

                    (

                        <div className="empty-prompts">

                            No prompts available

                        </div>

                    )

                    :

                    (

                        prompts.map((prompt, index) => (

                            <button

                                key={index}

                                className="prompt-button"

                                onClick={() => handlePromptClick(prompt)}

                            >

                                {prompt}

                            </button>

                        ))

                    )

                }

            </div>

        </div>

    );

}

export default SuggestedPrompts;