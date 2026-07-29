
from fastapi import APIRouter


from services.reports_service import (

    get_all_reports,

    get_report_by_id,

    get_report_summary,

    generate_report

)



router = APIRouter(

    prefix="/reports",

    tags=["Reports"]

)






@router.get("/")
def fetch_reports():


    return get_all_reports()







@router.get("/summary")
def reports_summary():


    return get_report_summary()







@router.get("/{report_id}")
def fetch_report(report_id:int):


    return get_report_by_id(report_id)








@router.post("/generate/{report_type}")
def create_report(report_type:str):


    return generate_report(report_type)