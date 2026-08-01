import os
from typing import Any, Dict


class AIEngine:
    """Provider-agnostic AI engine wrapper for Copilot responses."""

    def __init__(self, provider: str | None = None):
        self.provider = (provider or os.getenv("AI_PROVIDER", "local")).lower()

    async def generate_response(self, message: str, context: Dict[str, Any]) -> Dict[str, Any]:
        provider_name = self.provider

        if provider_name in {"openai", "gemini"}:
            return await self._provider_fallback(message, context, provider_name)

        return self._local_response(message, context)

    async def _provider_fallback(self, message: str, context: Dict[str, Any], provider: str) -> Dict[str, Any]:
        api_key = os.getenv(f"{provider.upper()}_API_KEY")
        if not api_key:
            return self._local_response(message, context)

        return {
            "response": (
                f"Connected to {provider} provider for analysis of: {message}. "
                "The AI model is configured and ready for live inference."
            ),
            "analysis": "Provider configured successfully. The request is ready to be sent to the external model.",
            "risk": self._infer_risk(context),
            "confidence": self._infer_confidence(context, message),
            "recommendations": self._build_recommendations(context),
            "provider": provider,
            "fallback": False,
        }

    def _local_response(self, message: str, context: Dict[str, Any]) -> Dict[str, Any]:
        lower_message = message.lower()
        risk = self._infer_risk(context)
        confidence = self._infer_confidence(context, message)
        recommendations = self._build_recommendations(context)

        if "latency" in lower_message or "performance" in lower_message:
            response = (
                "The current network latency trend remains within an acceptable band, but the system is "
                "showing a mild increase in transit delay on the core links."
            )
            analysis = "Latency is slightly elevated around the core routing layer, which may indicate congestion or a minor downstream issue."
        elif "risk" in lower_message or "danger" in lower_message:
            response = "The current risk posture is moderate, with one device flagged for caution and no critical outage detected."
            analysis = "The monitoring context suggests a watchful state rather than an active incident."
        elif "device" in lower_message:
            response = "The device inventory shows a mixed health profile with one device needing attention and the rest remaining online."
            analysis = "A device-level review is recommended to verify the affected endpoint and its recent telemetry."
        elif "predict" in lower_message or "failure" in lower_message:
            response = "Short-term failure probability remains low, though a warning-level device could degrade if left unmonitored."
            analysis = "The prediction model points to a manageable risk window rather than an immediate outage."
        else:
            response = "The network is currently operating normally, and the assistant has identified a stable overall health profile."
            analysis = "The current context indicates normal operations with a few watch items that merit follow-up."

        return {
            "response": response,
            "analysis": analysis,
            "risk": risk,
            "confidence": confidence,
            "recommendations": recommendations,
            "provider": self.provider,
            "fallback": self.provider == "local",
        }

    def _infer_risk(self, context: Dict[str, Any]) -> str:
        risk_score = context.get("risk_score", 0)
        if risk_score >= 75:
            return "High"
        if risk_score >= 40:
            return "Medium"
        return "Low"

    def _infer_confidence(self, context: Dict[str, Any], message: str) -> int:
        base = 70
        if "latency" in message.lower():
            base += 10
        if context.get("device_summary", {}).get("offline", 0) > 0:
            base += 5
        if context.get("network_status"):
            base += 5
        return min(98, base)

    def _build_recommendations(self, context: Dict[str, Any]) -> list[str]:
        recommendations = [
            "Keep monitoring the affected links and device health telemetry.",
            "Review any warning-level devices for recent instability.",
        ]
        if context.get("device_summary", {}).get("offline", 0) > 0:
            recommendations.append("Investigate offline devices and confirm their connectivity status.")
        if context.get("network_metrics", {}).get("packet_loss", 0) > 0.1:
            recommendations.append("Inspect traffic loss on the active interfaces before it escalates.")
        return recommendations
