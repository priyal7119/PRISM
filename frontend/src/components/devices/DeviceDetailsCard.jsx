// src/components/devices/DeviceDetailsCard.jsx

import {
    Info,
    Router,
    Cpu,
    Server,
    Monitor,
    MapPin,
    Clock,
    Wifi,
} from "lucide-react";

import useDevicesStore from "../../store/devicesStore";

function DeviceDetailsCard() {
    const { selectedDevice, loading } = useDevicesStore();

    const getIcon = () => {
        switch ((selectedDevice?.type || "").toLowerCase()) {
            case "router":
                return <Router size={22} />;
            case "switch":
                return <Cpu size={22} />;
            case "server":
                return <Server size={22} />;
            default:
                return <Monitor size={22} />;
        }
    };

    if (loading) {
        return (
            <div className="device-details-card">
                <h3>Device Details</h3>
                <div className="empty-state">
                    <p>Loading...</p>
                </div>
            </div>
        );
    }

    if (!selectedDevice) {
        return (
            <div className="device-details-card">
                <h3>Device Details</h3>

                <div className="empty-state">
                    <Info
                        size={36}
                        color="var(--text-muted)"
                    />

                    <h4>Select a Device</h4>

                    <p>
                        Click any row in the inventory table to
                        inspect its configuration and health.
                    </p>
                </div>
            </div>
        );
    }

    return (
        <div className="device-details-card">

            <div
                style={{
                    display: "flex",
                    alignItems: "center",
                    gap: 16,
                    marginBottom: 22,
                }}
            >
                <div
                    style={{
                        width: 54,
                        height: 54,
                        borderRadius: 14,
                        background: "var(--primary-light)",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        color: "var(--primary)",
                    }}
                >
                    {getIcon()}
                </div>

                <div>
                    <h3 style={{ marginBottom: 4 }}>
                        {selectedDevice.name}
                    </h3>

                    <span
                        className={`device-status ${selectedDevice.status.toLowerCase()}`}
                    >
                        {selectedDevice.status}
                    </span>
                </div>
            </div>

            <div className="device-spec-grid">
                           <div className="spec-box">
                    <span>
                        <Wifi size={14} style={{ marginRight: 6 }} />
                        IP Address
                    </span>
                    <strong>{selectedDevice.ip}</strong>
                </div>

                <div className="spec-box">
                    <span>
                        <Monitor size={14} style={{ marginRight: 6 }} />
                        Device Type
                    </span>
                    <strong>{selectedDevice.type}</strong>
                </div>

                <div className="spec-box">
                    <span>
                        <MapPin size={14} style={{ marginRight: 6 }} />
                        Location
                    </span>
                    <strong>{selectedDevice.location}</strong>
                </div>

                <div className="spec-box">
                    <span>
                        <Clock size={14} style={{ marginRight: 6 }} />
                        Uptime
                    </span>
                    <strong>{selectedDevice.uptime}</strong>
                </div>

                <div className="spec-box">
                    <span>
                        <Clock size={14} style={{ marginRight: 6 }} />
                        Last Seen
                    </span>
                    <strong>{selectedDevice.last_seen}</strong>
                </div>

                <div className="spec-box">
                    <span>
                        <Info size={14} style={{ marginRight: 6 }} />
                        Status
                    </span>
                    <strong>{selectedDevice.status}</strong>
                </div>
            </div>
        </div>
    );
}

export default DeviceDetailsCard;    