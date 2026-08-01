from datetime import datetime

from sqlalchemy import delete, select
from sqlalchemy.ext.asyncio import AsyncSession

from models.copilot import CopilotConversation
from services.ai_engine import AIEngine
from services.copilot_context_service import CopilotContextService


class CopilotService:
    def __init__(self):
        self.ai_engine = AIEngine()
        self.context_service = CopilotContextService()

    def get_status(self) -> dict:
        return {
            "status": "Online",
            "mode": "AI Network Assistant",
            "availability": "99.9%",
            "model_status": "Local reasoning engine ready",
            "last_updated": datetime.now().isoformat(),
        }

    async def generate_response(self, message: str, db_session: AsyncSession | None = None, user_id: str | None = None) -> dict:
        try:
            context = self.context_service.build_context()
            ai_result = await self.ai_engine.generate_response(message, context)
        except Exception:
            ai_result = {
                "response": "AI service temporarily unavailable. Showing system analysis.",
                "analysis": "The backend could not reach the AI provider, so a deterministic fallback analysis is being displayed.",
                "risk": "Medium",
                "confidence": 62,
                "recommendations": [
                    "Review the current alert timeline.",
                    "Inspect the most recent device health events.",
                ],
                "provider": "local",
                "fallback": True,
            }

        risk_level = ai_result.get("risk", "Low")
        confidence = ai_result.get("confidence", 0)
        response_text = ai_result.get("response", "No analysis available.")
        analysis_text = ai_result.get("analysis", "No analysis available.")
        recommendations = ai_result.get("recommendations", [])
        recommendation_text = recommendations[0] if recommendations else "Continue monitoring network performance."

        payload = {
            "response": response_text,
            "message": response_text,
            "analysis": analysis_text,
            "risk": risk_level,
            "confidence": confidence,
            "recommendation": recommendation_text,
            "recommendations": recommendations,
            "timestamp": datetime.now().isoformat(),
            "fallback": ai_result.get("fallback", False),
            "role": "assistant",
        }

        if db_session is not None:
            conversation = CopilotConversation(
                user_id=user_id,
                user_message=message,
                ai_response=response_text,
                confidence=float(confidence),
                risk_level=risk_level,
            )
            db_session.add(conversation)
            await db_session.commit()

        return payload

    def get_insights(self) -> dict:
        context = self.context_service.build_context()
        network_metrics = context.get("network_metrics", {})
        recommendations = [
            "Inspect the core routing path for elevated latency.",
            "Verify warning-level devices before the next peak window.",
        ]

        return {
            "status": "Online",
            "analysis": "The system shows a stable baseline with manageable risk around one warning-level device.",
            "recommendation": recommendations[0],
            "confidence": 92,
            "risk": "Medium",
            "suggested_prompts": [
                "Why is latency increasing?",
                "Are there any network risks?",
                "Which devices need attention?",
                "Predict possible failures",
                "Explain current network health",
            ],
            "insights": [
                {
                    "title": "Network Health",
                    "value": context.get("network_status", "Nominal"),
                    "description": f"Latest latency is {network_metrics.get('latency', 0)} ms with packet loss at {network_metrics.get('packet_loss', 0)}%.",
                },
                {
                    "title": "Device Summary",
                    "value": f"{context.get('device_summary', {}).get('online', 0)} online / {context.get('device_summary', {}).get('offline', 0)} offline",
                    "description": "The current device footprint is mostly healthy with a small offline count.",
                },
                {
                    "title": "Prediction",
                    "value": "Low Failure Probability",
                    "description": "Short-term predictions remain stable with a warning-level device to monitor.",
                },
            ],
            "recommendations": recommendations,
            "predictions": [
                {
                    "title": "Failure Outlook",
                    "value": "Stable",
                    "description": "No immediate outage is expected within the next operational window.",
                }
            ],
        }

    def get_dashboard_data(self) -> dict:
        insights = self.get_insights()
        return {
            "status": "PRISM AI Active",
            "analysis": insights["analysis"],
            "recommendation": insights["recommendation"],
            "confidence": insights["confidence"],
            "recommendations": insights["recommendations"],
            "suggested_prompts": insights["suggested_prompts"],
            "insights": insights["insights"],
            "conversation_history": [],
        }

    async def get_history(self, db_session: AsyncSession | None = None) -> dict:
        if db_session is None:
            return {"history": []}

        result = await db_session.execute(select(CopilotConversation).order_by(CopilotConversation.created_at.desc()))
        conversations = result.scalars().all()
        history = [
            {
                "role": "assistant",
                "message": conversation.ai_response,
                "timestamp": conversation.created_at.isoformat(),
                "confidence": conversation.confidence,
                "analysis": "Stored conversation context",
                "recommendation": "Review the latest network conditions",
            }
            for conversation in conversations
        ]
        return {"history": history}

    async def clear_history(self, db_session: AsyncSession | None = None) -> dict:
        if db_session is not None:
            await db_session.execute(delete(CopilotConversation))
            await db_session.commit()
        return {"message": "Conversation history cleared"}


copilot_service = CopilotService()


def get_copilot_status() -> dict:
    return copilot_service.get_status()


async def generate_copilot_response(message: str, db_session: AsyncSession | None = None, user_id: str | None = None) -> dict:
    return await copilot_service.generate_response(message, db_session=db_session, user_id=user_id)


def get_copilot_insights() -> dict:
    return copilot_service.get_insights()


def get_copilot_dashboard_data() -> dict:
    return copilot_service.get_dashboard_data()


async def get_copilot_history(db_session: AsyncSession | None = None) -> dict:
    return await copilot_service.get_history(db_session)


async def clear_copilot_history(db_session: AsyncSession | None = None) -> dict:
    return await copilot_service.clear_history(db_session)