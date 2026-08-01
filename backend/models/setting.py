from sqlalchemy import (
    Column,
    Integer,
    String,
    Boolean,
)

from database.base import Base


class Setting(Base):
    __tablename__ = "system_settings"

    id = Column(Integer, primary_key=True)

    theme = Column(String(20), default="dark")

    refresh_interval = Column(Integer, default=10)

    email_alerts = Column(Boolean, default=True)

    slack_webhook = Column(String(255))