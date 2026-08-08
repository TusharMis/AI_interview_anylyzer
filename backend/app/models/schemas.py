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

class InterviewStartRequest(BaseModel):
    user_id: str
    interview_type: str  # HR, Technical, Behavioral, Coding
    role_target: str
    experience_level: str
    resume_skills: List[str] = []

class InterviewQuestion(BaseModel):
    id: str
    question: str
    category: str
    difficulty: str
    expected_key_points: List[str] = []

class InterviewStartResponse(BaseModel):
    interview_id: str
    questions: List[InterviewQuestion]
    initial_ai_greeting: str

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
    interview_type: str
    transcripts: List[Dict[str, Any]]
    code_submissions: Optional[List[Dict[str, Any]]] = []

class EvaluationResponse(BaseModel):
    overall_score: float
    communication: float
    technical: float
    confidence: float
    grammar: float
    strengths: List[str]
    weaknesses: List[str]
    recommendations: List[str]
