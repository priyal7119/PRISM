# backend/routers/alerts.py


from fastapi import APIRouter


from services.alert_services import (

    get_all_alerts,
    get_alert_by_id,
    get_alert_summary,
    resolve_alert

)



router = APIRouter(

    prefix="/alerts",

    tags=["Alerts"]

)





@router.get("/")
def fetch_alerts():


    return get_all_alerts()





@router.get("/summary")
def alert_summary():


    return get_alert_summary()





@router.get("/{alert_id}")
def fetch_alert(alert_id:int):


    return get_alert_by_id(alert_id)






@router.post("/{alert_id}/resolve")
def resolve(alert_id:int):


    return resolve_alert(alert_id)