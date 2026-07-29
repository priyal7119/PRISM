# backend/services/alerts_service.py


alerts = [

    {
        "id":1,
        "title":"High CPU Usage",
        "description":"Server CPU usage crossed 90%",
        "severity":"Critical",
        "device":"Database Server",
        "status":"Open",
        "time":"2 mins ago",
        "category":"Performance"
    },


    {
        "id":2,
        "title":"Network Delay",
        "description":"High latency detected in network",
        "severity":"Warning",
        "device":"Core Router",
        "status":"Open",
        "time":"10 mins ago",
        "category":"Network"
    },


    {
        "id":3,
        "title":"Device Offline",
        "description":"Security camera disconnected",
        "severity":"Critical",
        "device":"Security Camera",
        "status":"Resolved",
        "time":"1 hour ago",
        "category":"Device"
    },


    {
        "id":4,
        "title":"Software Update Required",
        "description":"Firmware update available",
        "severity":"Info",
        "device":"Office Switch",
        "status":"Open",
        "time":"3 hours ago",
        "category":"Maintenance"
    }

]




def get_all_alerts():

    return alerts





def get_alert_by_id(alert_id):


    for alert in alerts:


        if alert["id"] == alert_id:

            return alert


    return None





def get_alert_summary():


    total = len(alerts)


    critical = len(
        [
            alert for alert in alerts
            if alert["severity"]=="Critical"
        ]
    )



    warning = len(
        [
            alert for alert in alerts
            if alert["severity"]=="Warning"
        ]
    )



    resolved = len(
        [
            alert for alert in alerts
            if alert["status"]=="Resolved"
        ]
    )



    return {

        "total":total,
        "critical":critical,
        "warning":warning,
        "resolved":resolved

    }






def resolve_alert(alert_id):


    alert = get_alert_by_id(alert_id)



    if alert:


        alert["status"]="Resolved"


        return {

            "message":"Alert resolved successfully",

            "alert":alert

        }



    return {

        "message":"Alert not found"

    }