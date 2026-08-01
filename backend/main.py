from contextlib import asynccontextmanager

from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware

from config import settings

from database.session import engine
from database.base import Base

import models

from routers.dashboard import router as dashboard_router
from routers.network import router as network_router
from routers.prediction import router as prediction_router
from routers.copilot import router as copilot_router
from routers import devices
from routers import alerts
from routers import reports
from routers import settings as settings_router


@asynccontextmanager
async def lifespan(app: FastAPI):
    async with engine.begin() as conn:
        await conn.run_sync(Base.metadata.create_all)
    yield


app = FastAPI(
    title=settings.PROJECT_NAME,
    version="1.0.0",
    lifespan=lifespan,
)


app.add_middleware(
    CORSMiddleware,
    allow_origins=[settings.CORS_ORIGINS],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)


@app.get("/")
async def root():
    return {"message": "PRISM Backend Running"}


@app.get("/health")
async def health():
    return {"status": "healthy"}


app.include_router(dashboard_router)
app.include_router(network_router)
app.include_router(prediction_router)
app.include_router(copilot_router)
app.include_router(devices.router)
app.include_router(alerts.router)
app.include_router(reports.router)
app.include_router(settings_router.router)