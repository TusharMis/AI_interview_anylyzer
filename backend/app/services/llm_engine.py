import json
from typing import List, Dict, Any
from app.models.schemas import InterviewQuestion
from app.services.curriculum_service import curriculum_service

class LLMEngine:
    def __init__(self):
        pass

    def generate_cohort_interview_questions(self, candidate_id: str) -> List[InterviewQuestion]:
        candidate = curriculum_service.get_candidate_by_id(candidate_id)
        completed_days = candidate.get("completed_days", [4, 8, 14, 21, 28])
        
        # Ensure at least 4 distinct curriculum days are selected across 8 questions
        target_days = [4, 8, 10, 14, 16, 21, 24, 28]
        
        # Override with candidate completed days if available
        if len(completed_days) >= 4:
          # Select 8 spread-out days
          step = max(1, len(completed_days) // 8)
          selected_days = completed_days[::step][:8]
          if len(selected_days) < 8:
              while len(selected_days) < 8:
                  selected_days.append(selected_days[-1] + 1)
          target_days = selected_days

        questions: List[InterviewQuestion] = []
        
        cohort_questions_pool = {
            4: {
                "topic": "Structured Outputs & JSON Mode",
                "module": "Module 1: Prompt Engineering & LLM Fundamentals",
                "question": "How do you enforce deterministic JSON output schemas from LLMs in production, and how do you handle Pydantic validation retries when model output is malformed?",
                "difficulty": "Medium",
                "points": ["Pydantic schema definition", "Instructor / Outlines library", "Retry parser middleware", "Fallback default handling"]
            },
            8: {
                "topic": "Vector Database Indexing & HNSW",
                "module": "Module 2: RAG & Vector Databases",
                "question": "In your RAG missions, how did you configure HNSW index parameters (m and ef_construction) in Pinecone/Qdrant, and what trade-offs did you evaluate between recall accuracy and query latency?",
                "difficulty": "Hard",
                "points": ["HNSW graph construction parameters", "Latency vs recall trade-off", "Payload filtering with namespaces", "Cosine vs Inner Product metrics"]
            },
            10: {
                "topic": "Re-Ranking & Cross-Encoders",
                "module": "Module 2: RAG & Vector Databases",
                "question": "Walk me through how implementing Cohere Rerank or a Cross-Encoder improved precision@k over standard vector similarity search in your RAG pipeline.",
                "difficulty": "Medium-Hard",
                "points": ["Two-stage retrieval architecture", "Bi-encoder vs Cross-encoder differences", "Precision@k improvement metrics", "Latency impact of reranking"]
            },
            14: {
                "topic": "Function Calling & OpenAPI Schemas",
                "module": "Module 3: Agentic AI & Tool Calling",
                "question": "Explain how you format OpenAPI function schemas for LLM tool binding, and how your agent validates tool argument types before execution.",
                "difficulty": "Medium",
                "points": ["JSON Schema format for tool definitions", "Validation with Pydantic", "Tool execution error propagation", "Type safety enforcement"]
            },
            16: {
                "topic": "Stateful Multi-Agent Orchestration",
                "module": "Module 3: Agentic AI & Tool Calling",
                "question": "Describe how you built a multi-agent system using LangGraph. How did you manage shared state transitions and prevent circular routing loops between agents?",
                "difficulty": "Hard",
                "points": ["LangGraph StateGraph definition", "Conditional edge routing", "Cycle detection & recursion limits", "State immutability"]
            },
            21: {
                "topic": "Building Custom MCP Servers",
                "module": "Module 4: Model Context Protocol (MCP)",
                "question": "How does the Model Context Protocol (MCP) standardize context injection compared to legacy custom APIs? Walk me through how you built a custom MCP server with stdio/SSE transports.",
                "difficulty": "Hard",
                "points": ["MCP Client-Server architecture", "JSON-RPC 2.0 transport specification", "Exposing resources, tools, and prompts", "stdio vs SSE transport selection"]
            },
            24: {
                "topic": "MCP Client Integration with Claude & IDEs",
                "module": "Module 4: Model Context Protocol (MCP)",
                "question": "When connecting custom MCP servers to Claude Desktop or VS Code, how do you manage authentication, sandboxing, and dynamic tool schema updates?",
                "difficulty": "Medium-Hard",
                "points": ["mcpServers configuration JSON", "API Key / OAuth authentication", "Process isolation & sandboxing", "Dynamic capability discovery"]
            },
            28: {
                "topic": "Systematic LLM Benchmarking & Evaluation Pipelines",
                "module": "Module 5: AI Deployment, Evaluation & Production Systems",
                "question": "How did you design your LLM-as-a-Judge evaluation suite using Ragas or TruLens? What specific metrics (Faithfulness, Context Recall, Answer Relevance) did you monitor?",
                "difficulty": "Hard",
                "points": ["Ragas evaluation framework", "Faithfulness & Context Recall math", "Synthetic test dataset generation", "LLM-as-a-Judge bias mitigation"]
            }
        }

        for idx, day_num in enumerate(target_days):
            pool_data = cohort_questions_pool.get(day_num, {
                "topic": f"Curriculum Day {day_num} Concept",
                "module": "Enterprise AI Engineering",
                "question": f"Day {day_num}: Can you explain your engineering decisions and trade-offs when implementing topics from Day {day_num} of the AI Cohort?",
                "difficulty": "Medium",
                "points": ["Key technical trade-offs", "Production deployment readiness", "Error handling"]
            })

            questions.append(InterviewQuestion(
                id=f"q_{idx+1}",
                question_number=idx + 1,
                curriculum_day=day_num,
                module_title=pool_data["module"],
                topic=pool_data["topic"],
                question=pool_data["question"],
                difficulty=pool_data["difficulty"],
                expected_key_points=pool_data["points"]
            ))

        return questions

    def generate_chat_response(self, transcript_history: List[Dict[str, str]], user_input: str, current_q: Dict[str, Any] = None) -> str:
        input_lower = user_input.lower()

        # Follow-up reasoning engine
        if "hnsw" in input_lower or "index" in input_lower or "vector" in input_lower:
            return "That's a very clear explanation of vector indexing! You correctly identified the balance between graph depth and recall accuracy. Following up on that: how do you handle vector deletion and incremental index updates without causing performance degradation?"
        
        elif "mcp" in input_lower or "protocol" in input_lower or "transport" in input_lower:
            return "Great technical depth on the Model Context Protocol architecture! Your emphasis on standardizing JSON-RPC tool definitions is spot on. Can you elaborate on how you handle security sandboxing when an MCP tool requires database write privileges?"

        elif "ragas" in input_lower or "eval" in input_lower or "faithfulness" in input_lower:
            return "Excellent breakdown of LLM evaluation pipelines! Measuring Faithfulness vs Answer Relevance is critical in production. How do you prevent judge LLM bias when evaluating complex multi-hop reasoning outputs?"

        elif "agent" in input_lower or "langgraph" in input_lower or "tool" in input_lower:
            return "Solid architecture overview of agentic workflows! LangGraph's state persistence solves many recursion pitfalls. What fallback strategy do you employ when a tool call returns a 500 error or times out during agent execution?"

        elif len(user_input.split()) < 10:
            return "Thank you for that response. To help me evaluate your technical depth for this cohort mission: could you expand with specific engineering trade-offs, metrics, or tools you used during implementation?"

        else:
            topic_name = current_q.get("topic", "the AI Cohort curriculum") if current_q else "the system design"
            return f"Excellent overview of your implementation strategy for {topic_name}. Your architectural decisions clearly align with production AI best practices. Let's move on to the next concept in your learning path."

llm_engine_service = LLMEngine()
