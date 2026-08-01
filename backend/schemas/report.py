from pydantic import BaseModel, ConfigDict
from datetime import datetime


class ReportResponse(BaseModel):
    id: int
    title: str
    report_type: str
    status: str
    file_path: str | None
    created_at: datetime

    model_config = ConfigDict(from_attributes=True)