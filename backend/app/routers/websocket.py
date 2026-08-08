import json
from fastapi import APIRouter, WebSocket, WebSocketDisconnect
from app.services.llm_engine import llm_engine_service

router = APIRouter(tags=["WebSocket"])

@router.websocket("/api/v1/interview/ws/{session_id}")
async def interview_websocket_endpoint(websocket: WebSocket, session_id: str):
    await websocket.accept()
    try:
        # Send initial confirmation message
        await websocket.send_json({
            "type": "connection_established",
            "session_id": session_id,
            "message": "Connected to InterviewAI Real-Time Audio/Text Stream"
        })
        
        while True:
            data = await websocket.receive_text()
            try:
                message_obj = json.loads(data)
                user_text = message_obj.get("content", "")
            except Exception:
                user_text = data
            
            # Generate AI Response
            ai_reply = llm_engine_service.generate_chat_response([], user_text)
            
            await websocket.send_json({
                "type": "ai_response",
                "speaker": "ai",
                "content": ai_reply,
                "timestamp": "now"
            })

    except WebSocketDisconnect:
        print(f"Client disconnected from interview session: {session_id}")
