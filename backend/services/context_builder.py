"""
PRISM AI Context Builder

Collects live data from PRISM modules
for AI Copilot reasoning.
"""


def safe_call(function):

    try:
        return function()

    except Exception as e:

        return {
            "error": str(e)
        }





def build_copilot_context():


    context = {


        "dashboard": {},

        "devices": [],

        "alerts": [],

        "network": {},

        "predictions": {}

    }





    # Dashboard

    try:

        from services.dashboard_service import (
            get_dashboard_data
        )


        context["dashboard"] = safe_call(
            get_dashboard_data
        )


    except Exception as e:

        context["dashboard"] = {
            "error": str(e)
        }








    # Devices

    try:

        from services.devices_service import (
            get_all_devices
        )


        context["devices"] = safe_call(
            get_all_devices
        )


    except Exception as e:

        context["devices"] = {
            "error": str(e)
        }








    # Alerts

    try:

        from services.alert_services import (
            get_all_alerts
        )


        context["alerts"] = safe_call(
            get_all_alerts
        )


    except Exception as e:

        context["alerts"] = {
            "error": str(e)
        }








    # Network Health

    try:

        from services.network_service import (
            get_network_health
        )


        context["network"] = safe_call(
            get_network_health
        )


    except Exception as e:

        context["network"] = {
            "error": str(e)
        }








    # Predictions

    try:

        from services.prediction_service import (
            get_predictions
        )


        context["predictions"] = safe_call(
            get_predictions
        )


    except Exception as e:

        context["predictions"] = {
            "error": str(e)
        }





    return context







def summarize_context(context):


    devices = context.get(
        "devices",
        []
    )


    alerts = context.get(
        "alerts",
        []
    )


    predictions = context.get(
        "predictions",
        {}
    )





    return {


        "device_count":

            len(devices)
            if isinstance(devices,list)
            else 0,



        "alert_count":

            len(alerts)
            if isinstance(alerts,list)
            else 0,



        "prediction_data":

            predictions,



        "network_health":

            context.get(
                "network",
                {}
            )

    }