from fastapi import APIRouter
from app.models.schemas import (
    InterviewStartRequest, InterviewStartResponse,
    EvaluationRequest, EvaluationResponse
)
from app.services.llm_engine import llm_engine_service
from app.services.evaluator import evaluator_service
import uuid

router = APIRouter(prefix="/api/v1/interview", tags=["Interview Engine"])

@router.post("/start", response_model=InterviewStartResponse)
async def start_interview(request: InterviewStartRequest):
    session_id = str(uuid.uuid4())
    questions = llm_engine_service.generate_interview_questions(
        interview_type=request.interview_type,
        role_target=request.role_target,
        experience_level=request.experience_level,
        skills=request.resume_skills
    )
    
    greeting = f"Welcome! I am your AI interviewer for this {request.interview_type} session focused on the {request.role_target} position. Let's begin when you are ready."

    return InterviewStartResponse(
        interview_id=session_id,
        questions=questions,
        initial_ai_greeting=greeting
    )

@router.post("/evaluate", response_model=EvaluationResponse)
async def evaluate_interview(request: EvaluationRequest):
    eval_res = evaluator_service.evaluate_session(
        interview_type=request.interview_type,
        transcripts=request.transcripts,
        code_submissions=request.code_submissions
    )
    return EvaluationResponse(
        overall_score=eval_res.overall_score,
        communication=eval_res.communication_score,
        technical=eval_res.technical_score,
        confidence=eval_res.culture_fit_score,
        grammar=95.0,
        strengths=eval_res.strengths,
        weaknesses=eval_res.weaknesses,
        recommendations=eval_res.key_recommendations
    )
