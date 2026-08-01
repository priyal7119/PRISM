// src/components/devices/DeviceActions.jsx
import useDevicesStore from "../../store/devicesStore";
import { RefreshCcw, Activity, FileText, Slash, Info } from "lucide-react";

function DeviceActions() {
    const { selectedDevice, restart, loading } = useDevicesStore();

    if (!selectedDevice) {
        return (
            <div className="device-actions-card">
                <h3>Quick Actions</h3>
                <div className="empty-state">
                    <Info size={28} style={{ color: "var(--text-disabled)", marginBottom: 4 }} />
                    <p>No device selected</p>
                    <span>Select a device to execute actions.</span>
                </div>
            </div>
        );
    }

    const handleRestart = async () => {
        await restart(selectedDevice.id);
    };

    return (
        <div className="device-actions-card">
            <h3>Quick Actions</h3>

            <p style={{ fontSize: 13, color: "var(--text-muted)", padding: "8px 12px", background: "var(--bg-surface-secondary)", borderRadius: 8, border: "1px solid var(--border-subtle)" }}>
                Target: <strong style={{ color: "var(--text-primary)" }}>{selectedDevice.name || "-"}</strong>
                <br /><span style={{ fontSize: 12 }}>{selectedDevice.ip || "-"}</span>
            </p>

            <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
                <button
                    className="btn-primary"
                    style={{ width: "100%", justifyContent: "flex-start" }}
                    onClick={handleRestart}
                    disabled={loading}
                >
                    <RefreshCcw size={16} />
                    {loading ? "Restarting..." : "Restart Device"}
                </button>

                <button
                    className="btn-secondary"
                    style={{ width: "100%", justifyContent: "flex-start" }}
                    disabled
                    title="Coming Soon"
                >
                    <Activity size={16} />
                    Ping Device
                </button>

                <button
                    className="btn-secondary"
                    style={{ width: "100%", justifyContent: "flex-start" }}
                    disabled
                    title="Coming Soon"
                >
                    <FileText size={16} />
                    View Logs
                </button>

                <button
                    className="btn-danger"
                    style={{ width: "100%", justifyContent: "flex-start" }}
                    disabled
                    title="Coming Soon"
                >
                    <Slash size={16} />
                    Disable Device
                </button>
            </div>
        </div>
    );
}

export default DeviceActions;