from pydantic import BaseModel, ConfigDict
from datetime import datetime


class AlertCreate(BaseModel):
    device_id: int
    title: str
    description: str
    severity: str
    category: str


class AlertResponse(BaseModel):
    id: int
    device_id: int
    title: str
    description: str
    severity: str
    category: str
    status: str
    resolved_at: datetime | None
    created_at: datetime

    model_config = ConfigDict(from_attributes=True)