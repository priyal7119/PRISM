import { useEffect } from "react";
import useNetworkStore from "../store/networkStore";

import NetworkSummaryCard from "../components/network/NetworkSummaryCard";
import PerformanceChart from "../components/network/PerformanceChart";
import HealthDistribution from "../components/network/HealthDistribution";
import NetworkTopology from "../components/network/NetworkTopology";
import InterfaceTable from "../components/network/InterfaceTable";
import DeviceHealthTable from "../components/network/DeviceHealthTable";

import "../styles/network.css";

function NetworkHealth() {
    const {
        network,
        loading,
        fetchNetwork,
    } = useNetworkStore();

    useEffect(() => {
        fetchNetwork();
    }, [fetchNetwork]);

    if (loading) {
        return (
            <div className="network-page">
                <div className="network-header">
                    <div>
                        <h1>Network Health</h1>
                        <p>
                            Monitor infrastructure performance and
                            connectivity across the PRISM network.
                        </p>
                    </div>
                </div>

                <div className="dashboard-loading">
                    <div className="pulse-dot" />
                    Loading Network Health...
                </div>

                <div className="summary-grid">
                    {[1, 2, 3, 4].map((item) => (
                        <div
                            key={item}
                            className="skeleton skeleton-card"
                        />
                    ))}
                </div>
            </div>
        );
    }

    if (!network) {
        return (
            <div className="network-page">
                <div className="network-header">
                    <div>
                        <h1>Network Health</h1>
                        <p>Unable to load network information.</p>
                    </div>
                </div>

                <div className="empty-state">
                    <p>Network data unavailable.</p>
                    <span>Please try refreshing the page.</span>
                </div>
            </div>
        );
    }

    return (
        <div className="network-page">
            <div className="network-header">
                <div>
                    <h1>Network Health</h1>
                    <p>
                        Monitor infrastructure performance, connectivity,
                        utilization and device health across the PRISM
                        network.
                    </p>
                </div>
            </div>

            <div className="summary-grid">
                {network.summary.map((item, index) => (
                    <NetworkSummaryCard
                        key={`${item.title}-${index}`}
                        title={item.title}
                        value={item.value}
                        subtitle={item.subtitle}
                        color={item.color}
                    />
                ))}
            </div>

            <div className="network-grid">
                <PerformanceChart
                    performance={network.performance}
                />

                <HealthDistribution
                    distribution={network.health_distribution}
                />
            </div>

            <div className="network-grid">
                <NetworkTopology
                    topology={network.topology}
                />

                <InterfaceTable
                    interfaces={network.interfaces}
                />
            </div>

            <DeviceHealthTable
                devices={network.devices}
            />
        </div>
    );
}

export default NetworkHealth;