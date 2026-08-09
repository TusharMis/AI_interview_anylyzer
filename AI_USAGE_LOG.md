# 🤖 AI Usage & Development Log — Enterprise AI Cohort Interview Agent

## 📌 Project & Team Information
* **Project Name**: AI Cohort Technical Interview Agent (`InterviewAI`)
* **Repository**: [https://github.com/TusharMis/AI_interview_anylyzer](https://github.com/TusharMis/AI_interview_anylyzer)
* **Live Demo Frontend**: [https://ai-interview-anylyzer.vercel.app](https://ai-interview-anylyzer.vercel.app)
* **Live Demo Backend API**: [https://ai-interview-anylyzer-1.onrender.com](https://ai-interview-anylyzer-1.onrender.com)
* **Hackathon**: 48-Hour Enterprise AI Engineering Vibe Coding Challenge

---

## 🎯 System Architecture Overview

The **InterviewAI Agent** is designed to conduct realistic, multi-turn technical interviews for participants of the 31-Day Enterprise AI Cohort. 

```
┌──────────────────────────────┐        ┌──────────────────────────────┐        ┌──────────────────────────────┐
│  React 19 + Vite Frontend    │ ─────> │ FastAPI Python Backend Engine│ ─────> │  Multi-Provider LLM Engine   │
│  (Monaco Sandbox & WebSockets)│        │ (Curriculum & Candidate DB)  │        │  (OpenAI, Gemini, Anthropic) │
└──────────────────────────────┘        └──────────────────────────────┘        └──────────────────────────────┘
```

### Core Architecture Components:
1. **Curriculum Dataset Engine** (`curriculum.json`): Structured catalog of the 31-day curriculum covering 5 core modules:
   - Module 1: Prompt Engineering & LLM Fundamentals (Days 1–5)
   - Module 2: RAG & Vector Databases (Days 6–12)
   - Module 3: Agentic AI & Tool Calling (Days 13–19)
   - Module 4: Model Context Protocol (MCP) (Days 20–25)
   - Module 5: AI Deployment, Evaluation & Production Systems (Days 26–31)
2. **Candidate Learning Signal Processor** (`candidate_profiles.json`): Analyzes participant progress, completed missions, skipped topics, and confidence signals to generate custom interview paths.
3. **Adaptive Multi-Turn Agent**: Generates **at least 8 technical questions spanning 4+ curriculum days**, evaluates candidate answers dynamically, generates conversational follow-ups, and tracks session context.
4. **Diagnostic Feedback Evaluator**: Produces structured diagnostic performance reports with competency radar metrics, STAR analysis, strengths, and recommendations.

---

## 🛠️ AI Development Log & Prompt Trajectory

### 1. Foundation & API Schema Design
* **Goal**: Define Pydantic schemas and FastAPI endpoints compliant with the Technical Specification.
* **AI Tooling Used**: Gemini 3.6 Flash / OpenAI GPT-4o-mini code generation.
* **Prompt Strategy**:
  > *"Design Pydantic models for an 8-question, 4-curriculum-day adaptive interview agent that accepts candidate progress signals, handles multi-turn conversation exchanges, and returns structured evaluation reports."*
* **Outcome**: Established clean contracts in `backend/app/models/schemas.py`.

---

### 2. Curriculum & Candidate Dataset Synthesis
* **Goal**: Build structured JSON databases for the 31-Day Enterprise AI Cohort.
* **AI Tooling Used**: Generative data synthesis with LLMs.
* **Prompt Strategy**:
  > *"Generate a 31-day Enterprise AI Cohort curriculum JSON including learning objectives, daily topics, and tools for Prompting, RAG, Agents, MCP, and LLM Evaluation."*
* **Outcome**: Created `backend/app/data/curriculum.json` and `backend/app/data/candidate_profiles.json`.

---

### 3. Adaptive Interview Agent Logic
* **Goal**: Implement adaptive question selection covering at least 4 distinct curriculum days across 8 interview turns.
* **AI Tooling Used**: Python LLM Engine orchestration (`llm_engine.py`).
* **Prompt Strategy**:
  > *"Build a Python service that selects 8 spread-out curriculum days from candidate completed missions, generates targeted technical questions on Vector DB HNSW, MCP, LangGraph, and Ragas, and produces dynamic follow-ups based on candidate answers."*
* **Outcome**: Implemented in `backend/app/services/llm_engine.py` and `backend/app/routers/interview.py`.

---

### 4. Full-Stack UI & Production Deployment
* **Goal**: Deploy React 19 SPA to Vercel and FastAPI backend to Render.
* **AI Tooling Used**: Build scripting, Vite configuration, and Render Blueprint (`render.yaml`).
* **Outcome**: 
  - Frontend: `https://ai-interview-anylyzer.vercel.app`
  - Backend: `https://ai-interview-anylyzer-1.onrender.com`

---

## 🔒 Verification & Compliance Summary

- ✅ **Stage 1 (Eligibility Verification)**: Public repository, working Live Demo URL, `AI_USAGE_LOG.md` included.
- ✅ **Stage 2 (Authenticity Review)**: Transparent commit history, modular architecture, verified AI prompt log.
- ✅ **Minimum Requirements Achieved**: Conversational 8-question interview spanning >= 4 curriculum days, dynamic follow-up generation, context retention, structured evaluation report.
