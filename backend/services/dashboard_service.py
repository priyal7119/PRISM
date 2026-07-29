def get_dashboard_data():
    return {

        "status": "Nominal",

        "risk": "Low",

        "stats": [

            {
                "title": "Devices",
                "value": 24
            },

            {
                "title": "Alerts",
                "value": 0
            },

            {
                "title": "Links",
                "value": 4
            },

            {
                "title": "Latency",
                "value": "18 ms"
            }

        ],

        "metrics": [

            {
                "name": "Bandwidth",
                "value": "9.6 Gbps",
                "progress": 96
            },

            {
                "name": "Packet Loss",
                "value": "0.2%",
                "progress": 98
            },

            {
                "name": "CPU Usage",
                "value": "34%",
                "progress": 66
            },

            {
                "name": "Memory Usage",
                "value": "5.9 GB",
                "progress": 74
            },

            {
                "name": "Temperature",
                "value": "42 °C",
                "progress": 60
            }

        ],

        "predictions": [

            {

                "device": "Mumbai Router",

                "prediction": "Healthy",

                "confidence": 97

            }

        ],

        "alerts": [

            {

                "title": "No Active Alerts",

                "message": "Network is operating normally.",

                "time": "Just now"

            }

        ],

        "quick_actions": [

            "Run Diagnostics",

            "View Network",

            "Open AI Copilot"

        ]

    }