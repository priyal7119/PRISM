# backend/routers/settings.py


from fastapi import APIRouter


from services.settings_service import (

    get_settings,

    update_settings,

    reset_settings

)



router = APIRouter(

    prefix="/settings",

    tags=["Settings"]

)





@router.get("/")
def fetch_settings():


    return get_settings()





@router.put("/")
def save_settings(data:dict):


    return update_settings(data)






@router.post("/reset")
def reset():


    return reset_settings()