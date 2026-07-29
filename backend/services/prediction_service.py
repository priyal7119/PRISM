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

        "timeline": [

            {
                "time": "Now",
                "value": 5
            },

            {
                "time": "6 hrs",
                "value": 8
            },

            {
                "time": "12 hrs",
                "value": 12
            },

            {
                "time": "24 hrs",
                "value": 9
            },

            {
                "time": "48 hrs",
                "value": 4
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