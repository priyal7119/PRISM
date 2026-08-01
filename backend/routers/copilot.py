from fastapi import APIRouter, Depends, HTTPException
from pydantic import BaseModel
from sqlalchemy.ext.asyncio import AsyncSession

from database.session import get_db
from services.copilot_service import (
    clear_copilot_history,
    generate_copilot_response,
    get_copilot_dashboard_data,
    get_copilot_history,
    get_copilot_insights,
    get_copilot_status,
)


router = APIRouter(
    prefix="/copilot",
    tags=["AI Copilot"],
)


class CopilotQuery(BaseModel):
    message: str


@router.get("")
async def copilot_root():
    try:
        return get_copilot_dashboard_data()
    except Exception as exc:
        raise HTTPException(status_code=500, detail=str(exc)) from exc


@router.get("/status")
async def status():
    try:
        return get_copilot_status()
    except Exception as exc:
        raise HTTPException(status_code=500, detail=str(exc)) from exc


@router.post("/chat")
async def chat(query: CopilotQuery, db: AsyncSession = Depends(get_db)):
    try:
        return await generate_copilot_response(query.message, db_session=db)
    except HTTPException:
        raise
    except Exception as exc:
        raise HTTPException(status_code=500, detail=str(exc)) from exc


@router.get("/insights")
async def insights():
    try:
        return get_copilot_insights()
    except Exception as exc:
        raise HTTPException(status_code=500, detail=str(exc)) from exc


@router.get("/history")
async def history(db: AsyncSession = Depends(get_db)):
    try:
        return await get_copilot_history(db_session=db)
    except Exception as exc:
        raise HTTPException(status_code=500, detail=str(exc)) from exc


@router.delete("/history")
async def clear_history(db: AsyncSession = Depends(get_db)):
    try:
        return await clear_copilot_history(db_session=db)
    except Exception as exc:
        raise HTTPException(status_code=500, detail=str(exc)) from exc


@router.delete("/conversation")
async def clear_conversation(db: AsyncSession = Depends(get_db)):
    try:
        return await clear_copilot_history(db_session=db)
    except Exception as exc:
        raise HTTPException(status_code=500, detail=str(exc)) from exc