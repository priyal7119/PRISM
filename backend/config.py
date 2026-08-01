import os
from pathlib import Path

from pydantic_settings import BaseSettings


class Settings(BaseSettings):
    PROJECT_NAME: str
    ENVIRONMENT: str
    DATABASE_URL: str
    CORS_ORIGINS: str

    class Config:
        env_file = str(Path(__file__).resolve().parent / ".env")
        extra = "ignore"


settings = Settings()