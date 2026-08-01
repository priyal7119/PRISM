from datetime import datetime

from pydantic import BaseModel, ConfigDict


class ChatCreate(BaseModel):
    title: str


class MessageCreate(BaseModel):
    role: str
    content: str


class ChatResponse(BaseModel):
    id: int
    title: str
    created_at: datetime

    model_config = ConfigDict(from_attributes=True)


class MessageResponse(BaseModel):
    id: int
    chat_id: int
    role: str
    content: str
    created_at: datetime

    model_config = ConfigDict(from_attributes=True)


class CopilotConversationResponse(BaseModel):
    id: int
    user_id: str | None = None
    user_message: str
    ai_response: str
    confidence: float
    risk_level: str
    created_at: datetime

    model_config = ConfigDict(from_attributes=True)


class CopilotChatResponse(BaseModel):
    response: str
    message: str
    analysis: str
    risk: str
    confidence: int
    recommendation: str
    recommendations: list[str]
    timestamp: str
    fallback: bool
    role: str