from fastapi import APIRouter
from app.models.schemas import CodeExecutionRequest, CodeExecutionResponse
from app.services.sandbox_runner import sandbox_service

router = APIRouter(prefix="/api/v1/code", tags=["Code Execution"])

@router.post("/execute", response_model=CodeExecutionResponse)
async def execute_code(request: CodeExecutionRequest):
    return sandbox_service.execute_code(
        language=request.language,
        code=request.code,
        problem_id=request.problem_id
    )
