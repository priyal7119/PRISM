from pydantic import BaseModel, ConfigDict


class SettingUpdate(BaseModel):
    theme: str
    refresh_interval: int
    email_alerts: bool
    slack_webhook: str | None = None


class SettingResponse(BaseModel):
    id: int
    theme: str
    refresh_interval: int
    email_alerts: bool
    slack_webhook: str | None

    model_config = ConfigDict(from_attributes=True)