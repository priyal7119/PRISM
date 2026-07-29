from fastapi import APIRouter

from services.prediction_service import get_predictions

router = APIRouter(

    prefix="/predictions",

    tags=["AI Predictions"]

)


@router.get("")
def predictions():

    return get_predictions()