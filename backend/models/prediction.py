from sqlalchemy import (
    Column,
    Integer,
    String,
    Float,
    ForeignKey,
    JSON,
    DateTime,
)

from datetime import datetime

from database.base import Base


class Prediction(Base):
    __tablename__ = "predictions"

    id = Column(Integer, primary_key=True)

    device_id = Column(Integer, ForeignKey("devices.id"))

    prediction_type = Column(String(100))

    risk_level = Column(String(20))

    confidence_score = Column(Float)

    estimated_time_to_failure = Column(String(50))

    recommended_actions = Column(JSON)

    created_at = Column(DateTime, default=datetime.utcnow)