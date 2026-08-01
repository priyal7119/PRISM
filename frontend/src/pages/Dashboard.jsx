// src/pages/Dashboard.jsx
import { useEffect } from "react";
import DashboardHeader from "../components/dashboard/DashboardHeader";
import StatCard from "../components/dashboard/StatCard";
import MetricsCard from "../components/dashboard/MetricsCard";
import PredictionCard from "../components/dashboard/PredictionCard";
import RecentAlerts from "../components/dashboard/RecentAlerts";
import QuickActions from "../components/dashboard/QuickActions";
import useDashboardStore from "../store/dashboardStore";
import "../styles/dashboard.css";

function Dashboard() {
    const { dashboard, loading, error, fetchDashboard } = useDashboardStore();

    useEffect(() => {
        fetchDashboard();
    }, []);

    if (loading) {
        return (
            <div className="dashboard">
                <div className="dashboard-loading">
                    <div className="pulse-dot" style={{ width: 12, height: 12 }} />
                    Loading Dashboard...
                </div>
                <div className="stats-grid">
                    {[1,2,3,4].map(i => <div key={i} className="skeleton skeleton-card" />)}
                </div>
            </div>
        );
    }

    if (error) {
        return <div className="dashboard-error">{error}</div>;
    }

    if (!dashboard) {
        return <div className="dashboard-loading">No dashboard data found.</div>;
    }

    const statusCards = [
        { label: "Network Status", value: dashboard.status, variant: "success" },
        { label: "Risk Level", value: dashboard.risk, variant: "warning" },
    ];

    return (
        <main className="dashboard">
            <DashboardHeader
                title="Network Intelligence Dashboard"
                description="Real-time NOC overview — AI-powered infrastructure telemetry."
                statusCards={statusCards}
            />

            <div className="stats-grid">
                {dashboard.stats.map((item) => (
                    <StatCard key={item.title} title={item.title} value={item.value} />
                ))}
            </div>

            <div className="dashboard-grid">
                <MetricsCard title="Network Metrics" data={dashboard.metrics} />
                <PredictionCard predictions={dashboard.predictions} />
            </div>

            <div className="dashboard-grid">
                <RecentAlerts alerts={dashboard.alerts} />
                <QuickActions actions={dashboard.quick_actions} />
            </div>
        </main>
    );
}

export default Dashboard;