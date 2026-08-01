from services.dashboard_service import get_dashboard_data
from services.devices_service import get_device_summary
from services.network_service import get_network_health
from services.prediction_service import get_predictions


class CopilotContextService:
    """Builds a structured context snapshot from the existing PRISM services."""

    def __init__(self):
        self.dashboard = get_dashboard_data()
        self.device_summary = get_device_summary()
        self.network_health = get_network_health()
        self.predictions = get_predictions()

    def build_context(self) -> dict:
        network_metrics = self.network_health.get("performance", {})
        latency_values = network_metrics.get("latency", [])
        bandwidth_values = network_metrics.get("bandwidth", [])

        latest_latency = latency_values[-1] if latency_values else 18
        latest_bandwidth = bandwidth_values[-1] if bandwidth_values else 9.6
        packet_loss = 0.12

        risk_score = 20
        if self.device_summary.get("offline", 0) > 0:
            risk_score += 30
        if latest_latency > 20:
            risk_score += 20
        if packet_loss > 0.1:
            risk_score += 20

        return {
            "dashboard": self.dashboard,
            "device_summary": self.device_summary,
            "network_status": self.network_health.get("summary", [{}])[0].get("value", "Nominal"),
            "network_metrics": {
                "latency": latest_latency,
                "bandwidth": latest_bandwidth,
                "packet_loss": packet_loss,
            },
            "predictions": self.predictions,
            "risk_score": min(100, risk_score),
            "alerts": self.dashboard.get("alerts", []),
        }
