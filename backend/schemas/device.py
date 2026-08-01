from pydantic import BaseModel, ConfigDict
from datetime import datetime


class DeviceCreate(BaseModel):
    name: str
    ip_address: str
    mac_address: str | None = None
    device_type: str
    location: str


class DeviceUpdate(BaseModel):
    name: str | None = None
    ip_address: str | None = None
    mac_address: str | None = None
    device_type: str | None = None
    location: str | None = None
    status: str | None = None
    uptime_pct: float | None = None


class DeviceResponse(BaseModel):
    id: int
    name: str
    ip_address: str
    mac_address: str | None
    device_type: str
    location: str
    status: str
    uptime_pct: float
    last_seen: datetime
    created_at: datetime

    model_config = ConfigDict(from_attributes=True)