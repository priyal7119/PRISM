def get_network_health():

    return {

        "summary": [

            {
                "title": "Overall Status",
                "value": "Nominal",
                "subtitle": "All systems operational",
                "color": "green"
            },

            {
                "title": "Network Availability",
                "value": "99.98%",
                "subtitle": "Excellent",
                "color": "blue"
            },

            {
                "title": "Average Latency",
                "value": "18 ms",
                "subtitle": "Excellent",
                "color": "purple"
            },

            {
                "title": "Packet Loss",
                "value": "0.12%",
                "subtitle": "Very Good",
                "color": "orange"
            },

            {
                "title": "Active Alerts",
                "value": "0",
                "subtitle": "No active alerts",
                "color": "red"
            }

        ],

        "performance": {

            "bandwidth": [
                8.2,
                8.8,
                9.0,
                8.7,
                9.4,
                9.8,
                9.6
            ],

            "latency": [
                19,
                17,
                18,
                16,
                19,
                18,
                18
            ]

        },

        "topology": [

            {
                "name": "Mumbai Core Router",
                "status": "Healthy"
            },

            {
                "name": "Delhi Dist. Switch",
                "status": "Healthy"
            },

            {
                "name": "Pune Dist. Switch",
                "status": "Healthy"
            },

            {
                "name": "Data Center Switch",
                "status": "Warning"
            }

        ],

        "interfaces": [

            {
                "name": "GigabitEthernet0/1",
                "utilization": 45,
                "status": "Up"
            },

            {
                "name": "GigabitEthernet0/2",
                "utilization": 62,
                "status": "Up"
            },

            {
                "name": "GigabitEthernet0/3",
                "utilization": 18,
                "status": "Up"
            },

            {
                "name": "GigabitEthernet0/4",
                "utilization": 87,
                "status": "High"
            }

        ],

        "health_distribution": {

            "healthy": 36,

            "warning": 4,

            "critical": 2

        },

        "devices": [

            {

                "name": "Mumbai Core Router",

                "type": "Router",

                "status": "Healthy",

                "uptime": "25d 14h",

                "latency": "12 ms"

            },

            {

                "name": "Delhi Dist. Switch",

                "type": "Switch",

                "status": "Healthy",

                "uptime": "18d 7h",

                "latency": "15 ms"

            },

            {

                "name": "Pune Dist. Switch",

                "type": "Switch",

                "status": "Healthy",

                "uptime": "18d 7h",

                "latency": "16 ms"

            },

            {

                "name": "Data Center Switch",

                "type": "Switch",

                "status": "Warning",

                "uptime": "4d 2h",

                "latency": "28 ms"

            }

        ]

    }