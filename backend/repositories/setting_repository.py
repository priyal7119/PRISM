from sqlalchemy import select
from sqlalchemy.ext.asyncio import AsyncSession

from models.setting import Setting
from schemas.setting import SettingUpdate


class SettingRepository:

    @staticmethod
    async def get(db: AsyncSession):
        result = await db.execute(
            select(Setting)
        )

        return result.scalar_one_or_none()

    @staticmethod
    async def update(
        db: AsyncSession,
        setting: Setting,
        updates: SettingUpdate
    ):
        for key, value in updates.model_dump().items():
            setattr(setting, key, value)

        await db.flush()
        await db.refresh(setting)

        return setting