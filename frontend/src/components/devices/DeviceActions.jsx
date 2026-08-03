// src/components/devices/DeviceActions.jsx

import {
    RefreshCcw,
    Activity,
    FileText,
    Shield,
    Terminal,
    Info,
} from "lucide-react";

import useDevicesStore from "../../store/devicesStore";

function DeviceActions() {
    const {
        selectedDevice,
        restart,
        loading,
    } = useDevicesStore();

    if (!selectedDevice) {
        return (
            <div className="device-actions-card">
                <h3>Quick Actions</h3>

                <div className="empty-state">
                    <Info
                        size={36}
                        color="var(--text-muted)"
                    />

                    <h4>Select a Device</h4>

                    <p>
                        Choose a device from the inventory to
                        perform management actions.
                    </p>
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

            <div
                style={{
                    padding: 16,
                    borderRadius: 14,
                    border: "1px solid var(--border-color)",
                    background: "var(--bg-surface-secondary)",
                    marginBottom: 18,
                }}
            >
                <div
                    style={{
                        fontWeight: 700,
                        color: "var(--text-primary)",
                        marginBottom: 4,
                    }}
                >
                    {selectedDevice.name}
                </div>

                <div
                    style={{
                        fontSize: 13,
                        color: "var(--text-secondary)",
                    }}
                >
                    {selectedDevice.ip}
                </div>
            </div>

            <div
                style={{
                    display: "grid",
                    gap: 12,
                }}
            >

                            <button
                    className="btn-primary"
                    onClick={handleRestart}
                    disabled={loading}
                    style={{
                        justifyContent: "flex-start",
                        display: "flex",
                        alignItems: "center",
                        gap: 10,
                    }}
                >
                    <RefreshCcw size={18} />
                    {loading ? "Restarting Device..." : "Restart Device"}
                </button>

                <button
                    className="btn-secondary"
                    disabled
                    style={{
                        justifyContent: "flex-start",
                        display: "flex",
                        alignItems: "center",
                        gap: 10,
                    }}
                >
                    <Activity size={18} />
                    Run Diagnostics
                </button>

                <button
                    className="btn-secondary"
                    disabled
                    style={{
                        justifyContent: "flex-start",
                        display: "flex",
                        alignItems: "center",
                        gap: 10,
                    }}
                >
                    <Terminal size={18} />
                    Open Console
                </button>

                <button
                    className="btn-secondary"
                    disabled
                    style={{
                        justifyContent: "flex-start",
                        display: "flex",
                        alignItems: "center",
                        gap: 10,
                    }}
                >
                    <FileText size={18} />
                    View Logs
                </button>

                <button
                    className="btn-danger"
                    disabled
                    style={{
                        justifyContent: "flex-start",
                        display: "flex",
                        alignItems: "center",
                        gap: 10,
                    }}
                >
                    <Shield size={18} />
                    Isolate Device
                </button>
            </div>
        </div>
    );
}

export default DeviceActions;