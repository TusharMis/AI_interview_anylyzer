from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from config import settings
from app.routers import resume, interview, code_runner, websocket
from app.models.schemas import HealthCheckResponse

app = FastAPI(
    title=settings.APP_NAME,
    description="Production-Ready AI Interview Platform Engine providing HR, Technical, Behavioral & Live Coding Simulations with Multi-Provider LLM Integration.",
    version="1.0.0",
    docs_url="/docs",
    redoc_url="/redoc"
)

# CORS configuration
origins = [origin.strip() for origin in settings.ALLOWED_ORIGINS.split(",")] if settings.ALLOWED_ORIGINS != "*" else ["*"]

app.add_middleware(
    CORSMiddleware,
    allow_origins=origins,
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

# Include API Routers
app.include_router(resume.router)
app.include_router(interview.router)
app.include_router(code_runner.router)
app.include_router(websocket.router)

@app.get("/health", response_model=HealthCheckResponse, tags=["Health & System"])
def health_check():
    return HealthCheckResponse(
        status="healthy",
        app_name=settings.APP_NAME,
        environment=settings.ENVIRONMENT,
        version="1.0.0"
    )

@app.get("/version", tags=["Health & System"])
def version_check():
    return {
        "version": "1.0.0",
        "app_name": settings.APP_NAME,
        "ai_provider": settings.ENVIRONMENT
    }

@app.get("/", tags=["Health & System"])
def read_root():
    return {
        "status": "online",
        "app_name": settings.APP_NAME,
        "docs_url": "/docs",
        "health_url": "/health"
    }

if __name__ == "__main__":
    import uvicorn
    uvicorn.run("main:app", host="0.0.0.0", port=8000, reload=True)
