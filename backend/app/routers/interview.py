import uuid
from fastapi import APIRouter, HTTPException
from typing import List, Dict, Any
from app.models.schemas import (
    InterviewStartRequest, InterviewStartResponse,
    ChatMessageRequest, ChatMessageResponse,
    EvaluationRequest, EvaluationResponse
)
from app.services.curriculum_service import curriculum_service
from app.services.llm_engine import llm_engine_service
from app.services.evaluator import evaluator_service

router = APIRouter(prefix="/api/v1/interview", tags=["AI Cohort Interview Engine"])

@router.get("/curriculum", tags=["Cohort Data"])
async def get_curriculum_data():
    return curriculum_service.get_curriculum()

@router.get("/candidates", tags=["Cohort Data"])
async def get_candidates_data():
    return curriculum_service.get_candidates()

@router.post("/start", response_model=InterviewStartResponse)
async def start_cohort_interview(request: InterviewStartRequest):
    session_id = str(uuid.uuid4())
    candidate_id = request.candidate_id or "cand_01"
    candidate = curriculum_service.get_candidate_by_id(candidate_id)
    
    questions = llm_engine_service.generate_cohort_interview_questions(candidate_id)
    curriculum_days = sorted(list(set([q.curriculum_day for q in questions])))

    greeting = (
        f"Welcome {candidate['name']}! I am your AI Interview Evaluator for the 31-Day Enterprise AI Cohort. "
        f"Today we will conduct a personalized 8-question technical interview covering key milestones in your journey, "
        f"including RAG, Agentic AI, MCP, and AI Production Systems across Days {', '.join(map(str, curriculum_days[:4]))}. "
        f"Let's begin with Question 1."
    )

    return InterviewStartResponse(
        session_id=session_id,
        candidate_name=candidate["name"],
        target_role=candidate["target_role"],
        total_questions=len(questions),
        curriculum_days_covered=curriculum_days,
        questions=questions,
        initial_ai_greeting=greeting
    )

@router.post("/chat", response_model=ChatMessageResponse)
async def chat_interview_turn(request: ChatMessageRequest):
    if not request.candidate_answer.strip():
        raise HTTPException(status_code=400, detail="Candidate answer cannot be empty")

    ai_reply = llm_engine_service.generate_chat_response([], request.candidate_answer)
    next_index = request.question_index + 1
    is_completed = next_index >= 8

    curriculum_day_badges = [4, 8, 10, 14, 16, 21, 24, 28]
    current_day = curriculum_day_badges[min(request.question_index, len(curriculum_day_badges)-1)]

    return ChatMessageResponse(
        session_id=request.session_id,
        speaker="ai",
        content=ai_reply,
        followup_generated=True,
        current_question_index=next_index,
        completed=is_completed,
        curriculum_day_badge=f"Day {current_day} Curriculum Milestone"
    )

@router.post("/evaluate", response_model=EvaluationResponse)
async def evaluate_interview_session(request: EvaluationRequest):
    eval_res = evaluator_service.evaluate_session(
        interview_type=request.interview_type or "Technical",
        transcripts=request.transcripts,
        code_submissions=request.code_submissions
    )

    return EvaluationResponse(
        overall_score=eval_res.overall_score,
        communication=eval_res.communication_score,
        technical=eval_res.technical_score,
        confidence=eval_res.culture_fit_score,
        grammar=96.0,
        curriculum_coverage_score=98.0,
        days_assessed=[4, 8, 14, 21, 28],
        strengths=[
            "Demonstrated strong architectural understanding of Vector DB HNSW indexing parameters",
            "Articulated clear distinction between stdio and SSE transport protocols in MCP servers",
            "Implemented robust LangGraph state machine with explicit cycle termination guardrails"
        ],
        weaknesses=[
            "Elaborate further on cross-encoder reranking latency trade-offs in high-concurrency settings",
            "Provide quantitative metrics on Ragas Faithfulness improvements during RAG evaluation"
        ],
        recommendations=[
            "Practice benchmarking Cohere Rerank vs BGE-Reranker inference latency on GPU clusters",
            "Deepen knowledge on OAuth2 security scopes when exposing MCP tools in enterprise environments"
        ]
    )
