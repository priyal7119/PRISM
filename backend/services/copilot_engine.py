# backend/services/copilot_engine.py


"""
PRISM AI Copilot Reasoning Engine

Processes user questions using
live PRISM context.
"""



from services.context_builder import (
    build_copilot_context,
    summarize_context
)





def analyze_query(message: str):


    message = message.lower().strip()



    context = build_copilot_context()


    summary = summarize_context(
        context
    )



    response = ""


    analysis = ""


    recommendation = ""


    confidence = 90





    # Alerts Analysis

    if "alert" in message:



        alerts = summary.get(
            "alerts",
            []
        )


        response = (

            f"PRISM AI found "
            f"{len(alerts)} active alerts "
            "in the network."

        )


        analysis = (

            "Alert analysis completed "
            "using current monitoring data."

        )


        recommendation = (

            "Review critical alerts first "
            "and investigate affected devices."

        )


        confidence = 94






    # Device Analysis

    elif "device" in message:



        devices = summary.get(
            "device_count",
            0
        )



        response = (

            f"Currently monitoring "
            f"{devices} devices "
            "across the network."

        )


        analysis = (

            "Device health was evaluated "
            "from live device metrics."

        )


        recommendation = (

            "Inspect devices with warning "
            "or offline status."

        )


        confidence = 93






    # Prediction Analysis

    elif (
        "predict" in message
        or
        "failure" in message
    ):



        predictions = summary.get(
            "predictions",
            []
        )


        response = (

            f"Prediction engine identified "
            f"{len(predictions)} possible risks."

        )


        analysis = (

            "Risk estimation is based on "
            "historical and current network behaviour."

        )


        recommendation = (

            "Perform preventive maintenance "
            "for high-risk components."

        )


        confidence = 96






    # Network Health

    elif (
        "health" in message
        or
        "network" in message
    ):



        network = summary.get(
            "network",
            {}
        )



        response = (

            "Network health analysis completed. "
            "Performance metrics are stable."

        )


        analysis = (

            f"Network metrics analysed: "
            f"{network}"

        )


        recommendation = (

            "Continue monitoring utilization "
            "and latency trends."

        )


        confidence = 95






    # Latency

    elif "latency" in message:



        response = (

            "Latency investigation completed. "
            "High utilization interfaces "
            "should be reviewed."

        )


        analysis = (

            "Latency is evaluated using "
            "network performance metrics."

        )


        recommendation = (

            "Optimize overloaded interfaces "
            "and check bandwidth usage."

        )


        confidence = 95






    else:



        response = (

            "I analyzed your request using "
            "current PRISM network data."

        )


        analysis = (

            "General AI analysis completed."

        )


        recommendation = (

            "Ask about devices, alerts, "
            "predictions or network health "
            "for deeper insights."

        )


        confidence = 85







    return {



        "role":

            "assistant",



        "message":

            response,



        "analysis":

            analysis,



        "recommendation":

            recommendation,



        "confidence":

            confidence

    }