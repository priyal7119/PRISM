# backend/services/prediction_service.py

def get_predictions():

    return {

        "summary": [

            {
                "title": "Devices Analysed",
                "value": 42,
                "color": "blue"
            },

            {
                "title": "High Risk",
                "value": 2,
                "color": "red"
            },

            {
                "title": "Medium Risk",
                "value": 5,
                "color": "orange"
            },

            {
                "title": "Average Confidence",
                "value": "96%",
                "color": "green"
            }

        ],

        # Stacked prediction timeline
        "timeline": [

            {
                "time": "Now",
                "cpu_spike": 2,
                "link_failure": 1,
                "interface_error": 1,
                "packet_loss": 1
            },

            {
                "time": "6 hrs",
                "cpu_spike": 3,
                "link_failure": 2,
                "interface_error": 2,
                "packet_loss": 1
            },

            {
                "time": "12 hrs",
                "cpu_spike": 3,
                "link_failure": 4,
                "interface_error": 3,
                "packet_loss": 2
            },

            {
                "time": "24 hrs",
                "cpu_spike": 2,
                "link_failure": 3,
                "interface_error": 2,
                "packet_loss": 2
            },

            {
                "time": "48 hrs",
                "cpu_spike": 1,
                "link_failure": 1,
                "interface_error": 1,
                "packet_loss": 1
            }

        ],

        "confidence": {

            "high": 31,
            "medium": 9,
            "low": 2

        },

        "devices": [

            {

                "device": "Mumbai Core Router",
                "prediction": "Stable",
                "risk": "Low",
                "confidence": 99,
                "time_to_failure": "N/A"

            },

            {

                "device": "Delhi Distribution Switch",
                "prediction": "CPU Spike Expected",
                "risk": "Medium",
                "confidence": 93,
                "time_to_failure": "18 Hours"

            },

            {

                "device": "Pune Distribution Switch",
                "prediction": "Stable",
                "risk": "Low",
                "confidence": 98,
                "time_to_failure": "N/A"

            },

            {

                "device": "Data Center Switch",
                "prediction": "Link Failure Possible",
                "risk": "High",
                "confidence": 97,
                "time_to_failure": "6 Hours"

            }

        ],

        "recommendations": [

            "Inspect uplink on Data Center Switch.",
            "Monitor CPU utilization on Delhi Distribution Switch.",
            "Run diagnostics on critical interfaces.",
            "Schedule preventive maintenance during off-peak hours."

        ]

    }