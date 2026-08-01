// src/components/devices/DeviceDetailsCard.jsx
import { Info } from "lucide-react";
import useDevicesStore from "../../store/devicesStore";

function DeviceDetailsCard() {
    const { selectedDevice, loading, error } = useDevicesStore();

    if (loading) {
        return (
            <div className="device-details-card">
                <div className="device-details-header"><h3>Device Details</h3></div>
                <div className="empty-state"><p>Loading...</p></div>
            </div>
        );
    }

    if (!selectedDevice) {
        return (
            <div className="device-details-card">
                <div className="device-details-header"><h3>Device Details</h3></div>
                <div className="empty-state">
                    <Info size={28} style={{ color: "var(--text-disabled)", marginBottom: 4 }} />
                    <p>No device selected</p>
                    <span>Click a row in the table to view details.</span>
                </div>
            </div>
        );
    }

    const specs = [
        { label: "IP Address", value: selectedDevice.ip },
        { label: "Type", value: selectedDevice.type },
        { label: "Status", value: selectedDevice.status },
        { label: "Location", value: selectedDevice.location },
        { label: "Uptime", value: selectedDevice.uptime },
        { label: "Last Seen", value: selectedDevice.last_seen },
    ];

    return (
        <div className="device-details-card">
            <div className="device-details-header">
                <div>
                    <h3>{selectedDevice.name || "Device Details"}</h3>
                    <span className={`status-pill ${(selectedDevice.status || "unknown").toLowerCase()}`} style={{ marginTop: 6, display: "inline-flex" }}>
                        {selectedDevice.status || "Unknown"}
                    </span>
                </div>
            </div>
            <div className="device-spec-grid">
                {specs.map(spec => (
                    <div key={spec.label} className="spec-box">
                        <span>{spec.label}</span>
                        <strong>{spec.value || "-"}</strong>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default DeviceDetailsCard;