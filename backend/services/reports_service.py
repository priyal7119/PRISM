# backend/services/reports_service.py

from datetime import datetime

from sqlalchemy import func, select
from sqlalchemy.ext.asyncio import AsyncSession

from models.report import Report
# Add these imports at the top of backend/services/reports_service.py

from io import BytesIO

from fastapi.responses import StreamingResponse

from reportlab.lib.styles import getSampleStyleSheet
from reportlab.platypus import Paragraph, SimpleDocTemplate


def _format_report(report: Report):
    return {
        "id": report.id,
        "name": report.name,
        "type": report.type,
        "period": report.period,
        "status": report.status,
        "devices": report.devices,
        "uptime": f"{report.uptime:.1f}%",
        "incidents": report.incidents,
        "created": report.created_at.strftime("%d %b %Y %I:%M %p"),
    }


async def get_all_reports(db: AsyncSession):

    result = await db.execute(
        select(Report).order_by(Report.created_at.desc())
    )

    reports = result.scalars().all()

    return [_format_report(report) for report in reports]


async def get_report_by_id(report_id: int, db: AsyncSession):

    report = await db.get(Report, report_id)

    if not report:
        return None

    return _format_report(report)


async def get_report_summary(db: AsyncSession):

    total = await db.scalar(
        select(func.count()).select_from(Report)
    )

    completed = await db.scalar(
        select(func.count())
        .select_from(Report)
        .where(Report.status == "Completed")
    )

    processing = await db.scalar(
        select(func.count())
        .select_from(Report)
        .where(Report.status == "Processing")
    )

    avg_uptime = await db.scalar(
        select(func.avg(Report.uptime))
    )

    return {
        "total": total or 0,
        "completed": completed or 0,
        "processing": processing or 0,
        "uptime": (
            f"{avg_uptime:.1f}%"
            if avg_uptime is not None
            else "0%"
        ),
    }


async def generate_report(
    report_type: str,
    db: AsyncSession,
):

    report = Report(
        name=f"{report_type} Report",
        type=report_type,
        period="Custom",
        status="Processing",
        devices=0,
        uptime=0.0,
        incidents=0,
        created_at=datetime.utcnow(),
    )

    db.add(report)

    await db.flush()
    await db.refresh(report)

    return {
        "message": "Report generation started",
        "report": _format_report(report),
    }

# Add this function at the end of backend/services/reports_service.py

async def download_report(
    report_id: int,
    db: AsyncSession,
):
    report = await db.get(Report, report_id)

    if not report:
        return None

    buffer = BytesIO()

    document = SimpleDocTemplate(buffer)

    styles = getSampleStyleSheet()

    story = []

    story.append(
        Paragraph("<b>PRISM Report</b>", styles["Title"])
    )

    story.append(
        Paragraph(f"<b>Name:</b> {report.name}", styles["BodyText"])
    )

    story.append(
        Paragraph(f"<b>Type:</b> {report.type}", styles["BodyText"])
    )

    story.append(
        Paragraph(f"<b>Period:</b> {report.period}", styles["BodyText"])
    )

    story.append(
        Paragraph(f"<b>Status:</b> {report.status}", styles["BodyText"])
    )

    story.append(
        Paragraph(f"<b>Devices:</b> {report.devices}", styles["BodyText"])
    )

    story.append(
        Paragraph(f"<b>Uptime:</b> {report.uptime:.1f}%", styles["BodyText"])
    )

    story.append(
        Paragraph(f"<b>Incidents:</b> {report.incidents}", styles["BodyText"])
    )

    story.append(
        Paragraph(
            f"<b>Created:</b> {report.created_at.strftime('%d %b %Y %I:%M %p')}",
            styles["BodyText"],
        )
    )

    document.build(story)

    buffer.seek(0)

    return StreamingResponse(
        buffer,
        media_type="application/pdf",
        headers={
            "Content-Disposition": f'attachment; filename="{report.name}.pdf"'
        },
    )