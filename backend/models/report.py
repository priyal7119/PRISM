from sqlalchemy import (
    Column,
    Integer,
    String,
    DateTime,
)

from datetime import datetime

from database.base import Base


class Report(Base):
    __tablename__ = "reports"

    id = Column(Integer, primary_key=True)

    title = Column(String(150))

    report_type = Column(String(50))

    status = Column(String(20))

    file_path = Column(String(255))

    created_at = Column(DateTime, default=datetime.utcnow)