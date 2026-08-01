// src/components/reports/ReportSummaryCard.jsx
import { FileText, CheckCircle2, Clock, TrendingUp } from "lucide-react";
import useReportsStore from "../../store/reportsStore";

function ReportSummaryCard() {
    const summary = useReportsStore((state) => state.summary);

    const cards = [
        { title: "Total Reports", value: summary.total || 0, icon: FileText, color: "var(--primary)", bg: "var(--primary-light)" },
        { title: "Completed", value: summary.completed || 0, icon: CheckCircle2, color: "var(--success)", bg: "var(--success-bg)" },
        { title: "Processing", value: summary.processing || 0, icon: Clock, color: "var(--warning)", bg: "var(--warning-bg)" },
        { title: "System Uptime", value: summary.uptime || "0%", icon: TrendingUp, color: "var(--cyan-accent)", bg: "var(--info-bg)" },
    ];

    return (
        <div className="report-summary-grid">
            {cards.map((card) => {
                const Icon = card.icon;
                return (
                    <div key={card.title} className="report-summary-card">
                        <div style={{
                            width: 44, height: 44, borderRadius: 12, flexShrink: 0,
                            background: card.bg, color: card.color,
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

export default ReportSummaryCard;