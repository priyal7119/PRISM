def get_copilot_data():

    return {

        "status": {

            "model": "PRISM AI v1.0",

            "health": "Online",

            "response_time": "0.8 sec",

            "knowledge_base": "Updated"

        },

        "suggested_prompts": [

            "Show devices with high latency",

            "Predict failures for the next 24 hours",

            "Summarize today's network health",

            "Generate optimization recommendations",

            "Explain why Device-14 is at risk"

        ],

        "conversation_history": [

            {

                "role": "user",

                "message": "Show today's critical alerts."

            },

            {

                "role": "assistant",

                "message": "2 critical alerts detected on Core Router and Distribution Switch."

            },

            {

                "role": "user",

                "message": "Predict failures."

            },

            {

                "role": "assistant",

                "message": "One high-risk link failure predicted within 6 hours."

            }

        ],

        "insights": [

            "Network utilization increased by 14% during peak hours.",

            "Core Router CPU usage is stable below 45%.",

            "Two interfaces require preventive maintenance.",

            "Overall network health score is 94%."

        ]

    }


def process_chat_message(data: dict):
    user_message = data.get("message", "").strip()

    if not user_message:
        return {"role": "assistant", "message": "Please provide a message."}

    # Simple rule-based responses
    msg_lower = user_message.lower()

    if "alert" in msg_lower:
        response = "Currently there are 3 open alerts: 2 critical and 1 warning. Would you like me to summarize them?"
    elif "latency" in msg_lower or "latency" in msg_lower:
        response = "Average network latency is 18ms. GigabitEthernet0/4 shows high utilization at 87%."
    elif "device" in msg_lower:
        response = "Monitoring 4 devices: 2 Online, 1 Warning, 1 Offline. Security Camera has been offline for 1 hour."
    elif "predict" in msg_lower or "failure" in msg_lower:
        response = "Prediction model shows Data Center Switch has a high risk of link failure within 6 hours (97% confidence)."
    elif "health" in msg_lower or "network" in msg_lower:
        response = "Overall network health is 94%. Network availability is 99.98% with average latency of 18ms."
    elif "recommendation" in msg_lower:
        response = "Recommendations: 1) Inspect uplink on Data Center Switch. 2) Monitor CPU on Delhi Distribution Switch. 3) Schedule preventive maintenance."
    elif "report" in msg_lower:
        response = "4 reports available: Network Performance, Security Analysis, Device Health, and Monthly Infrastructure. Shall I generate a new one?"
    else:
        response = f"I received your query: \"{user_message}\". Based on current network data, all systems are operating within normal parameters. Please ask a more specific question about alerts, devices, predictions, or network health."

    return {
        "role": "assistant",
        "message": response
    }