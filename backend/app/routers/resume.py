from fastapi import APIRouter, UploadFile, File, HTTPException
from app.models.schemas import ResumeParseResponse, ATSAnalysisRequest, ATSAnalysisResponse
from app.services.pdf_parser import parser_service
from app.services.ats_analyzer import ats_service

router = APIRouter(prefix="/api/v1/resume", tags=["Resume & ATS Engine"])

MAX_FILE_SIZE_BYTES = 10 * 1024 * 1024 # 10MB limit

@router.post("/parse", response_model=ResumeParseResponse)
async def parse_resume_file(file: UploadFile = File(...)):
    filename = file.filename.lower()
    if not (filename.endswith(".pdf") or filename.endswith(".docx")):
        raise HTTPException(status_code=400, detail="Unsupported file type. Only PDF (.pdf) and Microsoft Word (.docx) files are supported.")
    
    contents = await file.read()
    if len(contents) > MAX_FILE_SIZE_BYTES:
        raise HTTPException(status_code=400, detail="File size exceeds maximum allowed 10MB limit.")

    parsed_data = parser_service.parse_resume_bytes(contents, file.filename)
    return ResumeParseResponse(**parsed_data)

@router.post("/ats-analyze", response_model=ATSAnalysisResponse)
async def analyze_resume_ats(request: ATSAnalysisRequest):
    analysis = ats_service.analyze_resume(request.parsed_json, request.target_role)
    return ATSAnalysisResponse(**analysis)
