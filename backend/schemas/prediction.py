from pydantic import BaseModel, ConfigDict
from datetime import datetime


class PredictionResponse(BaseModel):
    id: int
    device_id: int
    prediction_type: str
    risk_level: str
    confidence_score: float
    estimated_time_to_failure: str | None
    recommended_actions: list | None
    created_at: datetime

    model_config = ConfigDict(from_attributes=True)