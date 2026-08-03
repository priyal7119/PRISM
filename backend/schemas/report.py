# backend/schemas/report.py

from datetime import datetime

from pydantic import BaseModel, ConfigDict


class ReportResponse(BaseModel):
    id: int
    name: str
    type: str
    period: str
    status: str
    devices: int
    uptime: str
    incidents: int
    created: str

    model_config = ConfigDict(from_attributes=True)


class ReportCreate(BaseModel):
    name: str
    type: str
    period: str
    status: str = "Processing"
    devices: int = 0
    uptime: float = 0.0
    incidents: int = 0


class ReportDB(BaseModel):
    id: int
    name: str
    type: str
    period: str
    status: str
    devices: int
    uptime: float
    incidents: int
    created_at: datetime

    model_config = ConfigDict(from_attributes=True)