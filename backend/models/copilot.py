from datetime import datetime

from sqlalchemy import Column, DateTime, Float, ForeignKey, Integer, String, Text

from database.base import Base


class CopilotChat(Base):
    __tablename__ = "copilot_chats"

    id = Column(Integer, primary_key=True)
    title = Column(String(255))
    created_at = Column(DateTime, default=datetime.utcnow)


class CopilotMessage(Base):
    __tablename__ = "copilot_messages"

    id = Column(Integer, primary_key=True)
    chat_id = Column(Integer, ForeignKey("copilot_chats.id"))
    role = Column(String(20))
    content = Column(Text)
    created_at = Column(DateTime, default=datetime.utcnow)


class CopilotConversation(Base):
    __tablename__ = "copilot_conversations"

    id = Column(Integer, primary_key=True, index=True)
    user_id = Column(String(255), nullable=True)
    user_message = Column(Text, nullable=False)
    ai_response = Column(Text, nullable=False)
    confidence = Column(Float, nullable=False, default=0.0)
    risk_level = Column(String(20), nullable=False, default="Low")
    created_at = Column(DateTime, default=datetime.utcnow, nullable=False)