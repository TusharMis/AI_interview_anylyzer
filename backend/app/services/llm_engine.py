import json
from typing import List, Dict, Any
from app.models.schemas import InterviewQuestion

class LLMEngine:
    def __init__(self):
        pass

    def generate_interview_questions(
        self, interview_type: str, role_target: str, experience_level: str, skills: List[str]
    ) -> List[InterviewQuestion]:
        # Intelligent contextual fallback / generator engine
        if interview_type.upper() == "CODING":
            return [
                InterviewQuestion(
                    id="q1",
                    question="Two Sum Optimization: Given an array of integers `nums` and an integer `target`, return indices of the two numbers such that they add up to `target`.",
                    category="Algorithms",
                    difficulty="Easy",
                    expected_key_points=["Hash map approach for O(n) time complexity", "Edge case handling for empty input", "Space-time trade-off explanation"]
                ),
                InterviewQuestion(
                    id="q2",
                    question="LRU Cache Implementation: Design a data structure that follows the constraints of a Least Recently Used (LRU) cache.",
                    category="Data Structures",
                    difficulty="Medium",
                    expected_key_points=["Doubly linked list + Hash Map design", "O(1) get and put operations", "Eviction logic handling"]
                )
            ]
        elif interview_type.upper() == "TECHNICAL":
            return [
                InterviewQuestion(
                    id="q1",
                    question=f"Can you walk me through how you design high-scale REST & WebSocket architectures for modern {role_target} applications?",
                    category="System Design",
                    difficulty="Medium",
                    expected_key_points=["Load balancing", "Caching with Redis", "Stateless auth with JWT", "Real-time socket handling"]
                ),
                InterviewQuestion(
                    id="q2",
                    question=f"How do you optimize state management and rendering performance in frontend applications using {', '.join(skills[:3]) if skills else 'React'}?",
                    category="Frontend Engineering",
                    difficulty="Hard",
                    expected_key_points=["Memoization", "Code splitting", "Virtualization", "State normalization"]
                )
            ]
        elif interview_type.upper() == "BEHAVIORAL":
            return [
                InterviewQuestion(
                    id="q1",
                    question="Describe a situation where a technical project encountered a major deadline block or disagreement. How did you resolve it?",
                    category="Conflict & Ownership",
                    difficulty="Medium",
                    expected_key_points=["STAR method structure", "Clear personal contribution", "Focus on positive resolution and team alignment"]
                ),
                InterviewQuestion(
                    id="q2",
                    question="Tell me about a time you took initiative to refactor legacy code or improve infrastructure without explicit product management request.",
                    category="Proactivity",
                    difficulty="Medium",
                    expected_key_points=["Measuring impact", "Risk mitigation", "Communication with stakeholders"]
                )
            ]
        else: # HR
            return [
                InterviewQuestion(
                    id="q1",
                    question=f"Tell me about yourself, your technical background as a {role_target}, and why you are interested in this position.",
                    category="Background",
                    difficulty="Easy",
                    expected_key_points=["Concise career summary", "Key accomplishments", "Alignment with company mission"]
                ),
                InterviewQuestion(
                    id="q2",
                    question="Where do you see your career evolving in the next 3 to 5 years in terms of leadership or technical mastery?",
                    category="Career Goals",
                    difficulty="Easy",
                    expected_key_points=["Growth mindset", "Mentorship ambition", "Depth in system architecture"]
                )
            ]

    def generate_chat_response(self, transcript_history: List[Dict[str, str]], user_input: str) -> str:
        # High quality response generator simulating dynamic AI interviewer persona
        if "hello" in user_input.lower() or "hi" in user_input.lower():
            return "Hello! Welcome to your AI interview session today. I've reviewed your candidate profile and I'm excited to speak with you. To start off, could you give a brief overview of your background?"
        elif "project" in user_input.lower() or "experience" in user_input.lower():
            return "That sounds like a impactful experience! Could you elaborate specifically on your individual architectural role and what key trade-offs you evaluated during implementation?"
        else:
            return f"Thank you for sharing that insight. That clearly highlights your approach to problem solving. Moving forward, how do you handle testing and reliability in complex scenarios?"

llm_engine_service = LLMEngine()
