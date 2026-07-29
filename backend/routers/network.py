from fastapi import APIRouter

from services.network_service import get_network_health

router = APIRouter(

    prefix="/network",

    tags=["Network Health"]

)


@router.get("")
def network_health():

    return get_network_health()