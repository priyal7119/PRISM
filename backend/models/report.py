from datetime import datetime

from sqlalchemy import (
    Column,
    DateTime,
    Float,
    Integer,
    String,
)

from database.base import Base


class Report(Base):
    __tablename__ = "reports"

    id = Column(
        Integer,
        primary_key=True,
        index=True,
    )

    name = Column(
        String(150),
        nullable=False,
    )

    type = Column(
        String(50),
        nullable=False,
    )

    period = Column(
        String(100),
        nullable=False,
    )

    status = Column(
        String(30),
        nullable=False,
        default="Processing",
    )

    devices = Column(
        Integer,
        nullable=False,
        default=0,
    )

    uptime = Column(
        Float,
        nullable=False,
        default=0.0,
    )

    incidents = Column(
        Integer,
        nullable=False,
        default=0,
    )

    created_at = Column(
        DateTime,
        default=datetime.utcnow,
        nullable=False,
    )