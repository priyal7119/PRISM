from fastapi import FastAPI

app = FastAPI(
    title="PRISM API",
    version="1.0.0"
)

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