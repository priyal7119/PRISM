from sqlalchemy import select
from sqlalchemy.ext.asyncio import AsyncSession

from models.device import Device
from schemas.device import DeviceCreate, DeviceUpdate


class DeviceRepository:

    @staticmethod
    async def get_all(db: AsyncSession):
        result = await db.execute(select(Device))
        return result.scalars().all()

    @staticmethod
    async def get_by_id(db: AsyncSession, device_id: int):
        result = await db.execute(
            select(Device).where(Device.id == device_id)
        )
        return result.scalar_one_or_none()

    @staticmethod
    async def create(db: AsyncSession, device: DeviceCreate):
        new_device = Device(**device.model_dump())

        db.add(new_device)

        await db.flush()
        await db.refresh(new_device)

        return new_device

    @staticmethod
    async def update(
        db: AsyncSession,
        device: Device,
        updates: DeviceUpdate
    ):
        for key, value in updates.model_dump(exclude_unset=True).items():
            setattr(device, key, value)

        await db.flush()
        await db.refresh(device)

        return device

    @staticmethod
    async def delete(
        db: AsyncSession,
        device: Device
    ):
        await db.delete(device)