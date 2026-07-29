from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from routers.dashboard import router as dashboard_router
from routers.network import router as network_router
from routers.prediction import router as prediction_router
from routers.copilot import router as copilot_router
from routers import devices
from routers import alerts

app = FastAPI(
    title="PRISM API",
    version="1.0.0"
)

app.add_middleware(
    CORSMiddleware,
    allow_origins=["http://localhost:5173", "http://127.0.0.1:5173"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

app.include_router(dashboard_router)

@app.get("/")
def root():
    return {
        "message": "PRISM Backend Running"
    }

@app.get("/health")
def health():
    return {
        "status": "healthy"
    }



app.include_router(network_router)
app.include_router(prediction_router)
app.include_router(copilot_router)

app.include_router(devices.router)
app.include_router(alerts.router)