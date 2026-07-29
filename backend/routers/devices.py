# backend/routers/devices.py

from fastapi import APIRouter

from services.devices_service import (
    get_all_devices,
    get_device_by_id,
    get_device_summary,
    restart_device
)


router = APIRouter(
    prefix="/devices",
    tags=["Devices"]
)



@router.get("/")
def fetch_devices():

    return get_all_devices()



@router.get("/summary")
def device_summary():

    return get_device_summary()



@router.get("/{device_id}")
def fetch_device(device_id:int):

    return get_device_by_id(device_id)



@router.post("/{device_id}/restart")
def restart(device_id:int):

    return restart_device(device_id)