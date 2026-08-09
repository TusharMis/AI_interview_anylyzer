from pydantic import BaseModel, Field
from typing import List, Optional, Dict, Any

class HealthCheckResponse(BaseModel):
    status: str = "healthy"
    app_name: str
    environment: str
    version: str = "1.0.0"

class ATSAnalysisRequest(BaseModel):
    target_role: str = "Full Stack Engineer"
    parsed_json: Dict[str, Any]

class ATSAnalysisResponse(BaseModel):
    ats_score: float
    keyword_match_percentage: float
    strong_skills: List[str]
    missing_skills: List[str]
    weak_skills: List[str]
    summary: str
    improvement_suggestions: List[str]

class ResumeParseResponse(BaseModel):
    name: str
    email: str
    phone: str
    skills: List[str]
    projects: List[Dict[str, Any]]
    education: List[Dict[str, Any]]
    experience: List[Dict[str, Any]]
    certifications: List[str]
    github: str
    linkedin: str
    portfolio: str

# --- AI Cohort Hackathon Schemas ---

class CurriculumDay(BaseModel):
    day: int
    topic: str
    learning_objectives: List[str]
    tools: List[str]

class CurriculumModule(BaseModel):
    module_id: str
    module_title: str
    days_range: str
    days: List[CurriculumDay]

class CandidateProfile(BaseModel):
    candidate_id: str
    name: str
    target_role: str
    experience_level: str
    completed_days: List[int]
    skipped_topics: List[int]
    confidence_signals: Dict[str, str]
    key_missions_completed: List[str]

class InterviewStartRequest(BaseModel):
    user_id: Optional[str] = "user_demo"
    candidate_id: Optional[str] = "cand_01"
    interview_type: str = "Technical"  # Technical, RAG & Vector DBs, Agentic AI, MCP Protocols, AI Production Systems
    role_target: Optional[str] = "Senior AI Systems Engineer"
    experience_level: Optional[str] = "Senior (5+ yrs)"
    resume_skills: List[str] = []

class InterviewQuestion(BaseModel):
    id: str
    question_number: int
    curriculum_day: int
    module_title: str
    topic: str
    question: str
    difficulty: str
    expected_key_points: List[str] = []

class InterviewStartResponse(BaseModel):
    session_id: str
    candidate_name: str
    target_role: str
    total_questions: int = 8
    curriculum_days_covered: List[int]
    questions: List[InterviewQuestion]
    initial_ai_greeting: str

class ChatMessageRequest(BaseModel):
    session_id: str
    candidate_answer: str
    question_index: int = 0

class ChatMessageResponse(BaseModel):
    session_id: str
    speaker: str = "ai"
    content: str
    followup_generated: bool = True
    current_question_index: int
    completed: bool = False
    curriculum_day_badge: str

class CodeExecutionRequest(BaseModel):
    interview_id: str
    problem_id: str
    language: str
    code: str

class TestCaseResult(BaseModel):
    test_id: int
    input: str
    expected_output: str
    actual_output: str
    passed: bool

class CodeExecutionResponse(BaseModel):
    status: str
    passed_count: int
    total_count: int
    results: List[TestCaseResult]
    ai_feedback: Optional[str] = None
    execution_time_ms: float = 0.0

class EvaluationRequest(BaseModel):
    interview_id: str
    interview_type: Optional[str] = "Technical"
    transcripts: List[Dict[str, Any]]
    code_submissions: Optional[List[Dict[str, Any]]] = []

class EvaluationResponse(BaseModel):
    overall_score: float
    communication: float
    technical: float
    confidence: float
    grammar: float
    curriculum_coverage_score: float = 95.0
    days_assessed: List[int] = [8, 14, 22, 28]
    strengths: List[str]
    weaknesses: List[str]
    recommendations: List[str]
