from sqlalchemy import select
from sqlalchemy.ext.asyncio import AsyncSession

from models.prediction import Prediction


class PredictionRepository:

    @staticmethod
    async def get_all(db: AsyncSession):
        result = await db.execute(
            select(Prediction)
        )

        return result.scalars().all()

    @staticmethod
    async def get_by_device(
        db: AsyncSession,
        device_id: int
    ):
        result = await db.execute(
            select(Prediction).where(
                Prediction.device_id == device_id
            )
        )

        return result.scalars().all()