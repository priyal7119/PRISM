# backend/routers/reports.py

from fastapi import APIRouter, Depends
from sqlalchemy.ext.asyncio import AsyncSession

from database.session import get_db

from services.reports_service import (
    get_all_reports,
    get_report_by_id,
    get_report_summary,
    generate_report,
    download_report,
)

router = APIRouter(
    prefix="/reports",
    tags=["Reports"],
)


@router.get("/")
async def fetch_reports(
    db: AsyncSession = Depends(get_db),
):
    return await get_all_reports(db)


@router.get("/summary")
async def reports_summary(
    db: AsyncSession = Depends(get_db),
):
    return await get_report_summary(db)


@router.get("/{report_id}")
async def fetch_report(
    report_id: int,
    db: AsyncSession = Depends(get_db),
):
    return await get_report_by_id(
        report_id,
        db,
    )


@router.post("/generate/{report_type}")
async def create_report(
    report_type: str,
    db: AsyncSession = Depends(get_db),
):
    return await generate_report(
        report_type,
        db,
    )


@router.get("/download/{report_id}")
async def download_report_pdf(
    report_id: int,
    db: AsyncSession = Depends(get_db),
):
    return await download_report(
        report_id,
        db,
    )