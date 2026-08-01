// src/components/devices/DeviceSummaryCard.jsx
import { Monitor, Wifi, AlertTriangle, WifiOff } from "lucide-react";
import useDevicesStore from "../../store/devicesStore";

function DeviceSummaryCard() {
    const { summary } = useDevicesStore();

    const cards = [
        { title: "Total Devices", value: summary.total ?? 0, icon: Monitor, color: "blue" },
        { title: "Online", value: summary.online ?? 0, icon: Wifi, color: "green" },
        { title: "Warning", value: summary.warning ?? 0, icon: AlertTriangle, color: "orange" },
        { title: "Offline", value: summary.offline ?? 0, icon: WifiOff, color: "red" },
    ];

    const iconBg = {
        blue: "var(--primary-light)", green: "var(--success-bg)",
        orange: "var(--warning-bg)", red: "var(--critical-bg)"
    };
    const iconColor = {
        blue: "var(--primary)", green: "var(--success)",
        orange: "var(--warning)", red: "var(--critical)"
    };

    return (
        <div className="device-summary-grid">
            {cards.map((card) => {
                const Icon = card.icon;
                return (
                    <div key={card.title} className="device-summary-card">
                        <div style={{
                            width: 44, height: 44, borderRadius: 12, flexShrink: 0,
                            background: iconBg[card.color], color: iconColor[card.color],
                            display: "flex", alignItems: "center", justifyContent: "center"
                        }}>
                            <Icon size={20} />
                        </div>
                        <div>
                            <p style={{ fontSize: 12, color: "var(--text-muted)", fontWeight: 600, textTransform: "uppercase", letterSpacing: "0.04em" }}>
                                {card.title}
                            </p>
                            <h2 style={{ fontSize: "1.625rem", fontWeight: 800, color: "var(--text-primary)", letterSpacing: "-0.03em", lineHeight: 1, marginTop: 4 }}>
                                {card.value}
                            </h2>
                        </div>
                    </div>
                );
            })}
        </div>
    );
}

export default DeviceSummaryCard;