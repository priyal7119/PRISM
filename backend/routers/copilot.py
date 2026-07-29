from fastapi import APIRouter

from services.copilot_service import get_copilot_data

router = APIRouter(

    prefix="/copilot",

    tags=["AI Copilot"]

)


@router.get("")
def copilot():

    return get_copilot_data()