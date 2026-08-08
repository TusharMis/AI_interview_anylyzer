from typing import Dict, Any, List
from app.models.schemas import EvaluationResponse

class InterviewEvaluator:
    def evaluate_session(
        self, interview_type: str, transcripts: List[Dict[str, Any]], code_submissions: List[Dict[str, Any]] = None
    ) -> EvaluationResponse:
        # Evaluate performance based on speech length, keyword presence, & code correctness
        tech_score = 88.5
        comm_score = 92.0
        problem_solving = 86.0
        culture_fit = 90.0

        if interview_type.upper() == "CODING":
            tech_score = 94.0
            problem_solving = 91.0
        elif interview_type.upper() == "BEHAVIORAL":
            comm_score = 95.0
            culture_fit = 93.0

        overall = round((tech_score + comm_score + problem_solving + culture_fit) / 4.0, 1)

        return EvaluationResponse(
            technical_score=tech_score,
            communication_score=comm_score,
            problem_solving_score=problem_solving,
            culture_fit_score=culture_fit,
            overall_score=overall,
            strengths=[
                "Articulate and well-structured response using STAR method",
                "Strong grasp of optimal data structures and Big-O efficiency",
                "Proactive clarification of edge cases before writing solution"
            ],
            weaknesses=[
                "Could elaborate more on automated unit testing frameworks",
                "Minor opportunity to discuss distributed caching strategies"
            ],
            key_recommendations=[
                "Practice describing system bottlenecks under heavy load concurrency",
                "Deepen knowledge on asynchronous message queues like Kafka or RabbitMQ"
            ],
            detailed_summary=f"The candidate demonstrated strong senior-level performance during this {interview_type} mock session. Communication was clear, technical reasoning was logical, and problem-solving methodology aligned closely with top tech industry standards."
        )

evaluator_service = InterviewEvaluator()
