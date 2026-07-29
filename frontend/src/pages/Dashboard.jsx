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

    const {
        dashboard,
        loading,
        fetchDashboard
    } = useDashboardStore();

    useEffect(() => {
        fetchDashboard();
    }, [fetchDashboard]);

    if (loading) {
        return <div className="dashboard-loading">Loading Dashboard...</div>;
    }

    const statusCards = [
        {
            label: "Network Status",
            value: dashboard?.status || "Nominal",
            variant: "success"
        },
        {
            label: "AI Confidence",
            value: `${dashboard?.ai_confidence ?? 97}%`,
            variant: "info"
        },
        {
            label: "Risk Level",
            value: dashboard?.risk || "Low",
            variant: "warning"
        },
        {
            label: "Last Scan",
            value: dashboard?.last_scan || "2 min ago",
            variant: "neutral"
        }
    ];

    return (

          <main className="dashboard" style={{ padding: 0 }}>
            <DashboardHeader
              title="Network Intelligence Dashboard"
              description="Real-time overview of your network performance and AI insights."
              statusCards={statusCards}
            />

            <div className="stats-grid">
              {dashboard?.stats?.map((item, index) => (
                <StatCard
                  key={index}
                  title={item.title}
                  value={item.value}
                  note={item.note}
                />
              ))}
            </div>

            <div className="dashboard-grid">
              <MetricsCard
                title="Network Metrics"
                data={dashboard?.metrics ?? []}
              />

              <PredictionCard
                predictions={dashboard?.predictions ?? []}
              />
            </div>

            <div className="dashboard-grid dashboard-bottom-row">
              <RecentAlerts
                alerts={dashboard?.alerts ?? []}
              />

              <QuickActions
                actions={dashboard?.quick_actions ?? []}
              />
            </div>
          </main>

    );

}

export default Dashboard;