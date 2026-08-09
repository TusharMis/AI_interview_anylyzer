import os
import json
from typing import Dict, Any, List, Optional

class CurriculumService:
    def __init__(self):
        self.base_dir = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
        self.curriculum_path = os.path.join(self.base_dir, "data", "curriculum.json")
        self.candidates_path = os.path.join(self.base_dir, "data", "candidate_profiles.json")
        
        self.curriculum_data = self._load_json(self.curriculum_path, default={"modules": []})
        self.candidate_profiles = self._load_json(self.candidates_path, default=[])

    def _load_json(self, path: str, default: Any) -> Any:
        try:
            if os.path.exists(path):
                with open(path, "r", encoding="utf-8") as f:
                    return json.load(f)
        except Exception as e:
            print(f"Error loading {path}: {e}")
        return default

    def get_curriculum(self) -> Dict[str, Any]:
        return self.curriculum_data

    def get_candidates(self) -> List[Dict[str, Any]]:
        return self.candidate_profiles

    def get_candidate_by_id(self, candidate_id: str) -> Optional[Dict[str, Any]]:
        for cand in self.candidate_profiles:
            if cand.get("candidate_id") == candidate_id:
                return cand
        return self.candidate_profiles[0] if self.candidate_profiles else None

    def get_day_details(self, day_num: int) -> Optional[Dict[str, Any]]:
        for module in self.curriculum_data.get("modules", []):
            for day in module.get("days", []):
                if day.get("day") == day_num:
                    return {
                        "module_title": module.get("module_title"),
                        "day": day.get("day"),
                        "topic": day.get("topic"),
                        "learning_objectives": day.get("learning_objectives"),
                        "tools": day.get("tools")
                    }
        return None

curriculum_service = CurriculumService()
