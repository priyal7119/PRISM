from sqlalchemy import select
from sqlalchemy.ext.asyncio import AsyncSession

from models.report import Report


class ReportRepository:

    @staticmethod
    async def get_all(db: AsyncSession):
        result = await db.execute(
            select(Report)
        )

        return result.scalars().all()