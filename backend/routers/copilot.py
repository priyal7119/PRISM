from fastapi import APIRouter
from services.copilot_service import get_copilot_data, process_chat_message

router = APIRouter(
    prefix="/copilot",
    tags=["AI Copilot"]
)


@router.get("")
def copilot():
    return get_copilot_data()


@router.post("/chat")
def chat(data: dict):
    return process_chat_message(data)