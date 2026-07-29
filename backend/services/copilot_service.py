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