# backend/routers/settings.py

from fastapi import APIRouter, Body

from services.settings_service import (
    get_settings,
    update_settings,
    reset_settings,
)

router = APIRouter(
    prefix="/settings",
    tags=["Settings"],
)


@router.get("/")
def read_settings():
    return get_settings()


@router.put("/")
def save_settings(data: dict = Body(...)):
    return update_settings(data)


@router.post("/reset")
def restore_defaults():
    return reset_settings()