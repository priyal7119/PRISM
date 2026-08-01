from sqlalchemy import (
    Column,
    Integer,
    String,
    Float,
    DateTime,
)

from datetime import datetime

from database.base import Base


class Device(Base):
    __tablename__ = "devices"

    id = Column(Integer, primary_key=True, index=True)

    name = Column(String(100), nullable=False)

    ip_address = Column(String(45), unique=True, nullable=False)

    mac_address = Column(String(17))

    device_type = Column(String(50), nullable=False)

    location = Column(String(100), nullable=False)

    status = Column(String(20), default="Online")

    uptime_pct = Column(Float, default=100.0)

    last_seen = Column(DateTime, default=datetime.utcnow)

    created_at = Column(DateTime, default=datetime.utcnow)