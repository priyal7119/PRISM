from sqlalchemy import (
    Column,
    Integer,
    String,
    ForeignKey,
    Text,
    DateTime,
)

from datetime import datetime

from database.base import Base


class Alert(Base):
    __tablename__ = "alerts"

    id = Column(Integer, primary_key=True)

    device_id = Column(Integer, ForeignKey("devices.id"))

    title = Column(String(150), nullable=False)

    description = Column(Text)

    severity = Column(String(20))

    category = Column(String(50))

    status = Column(String(20), default="Open")

    resolved_at = Column(DateTime)

    created_at = Column(DateTime, default=datetime.utcnow)