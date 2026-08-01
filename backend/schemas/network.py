from pydantic import BaseModel


class NetworkHealth(BaseModel):
    network_status: str
    latency: float
    bandwidth: float
    packet_loss: float