// src/pages/Devices.jsx
import { useEffect } from "react";
import useDevicesStore from "../store/devicesStore";
import DeviceSummaryCard from "../components/devices/DeviceSummaryCard";
import DeviceFilters from "../components/devices/DeviceFilters";
import DeviceTable from "../components/devices/DeviceTable";
import DeviceStatusChart from "../components/devices/DeviceStatusChart";
import DeviceDetailsCard from "../components/devices/DeviceDetailsCard";
import DeviceActions from "../components/devices/DeviceActions";
import "../styles/devices.css";

function Devices() {
    const { loadDevices, loadSummary, loading, error } = useDevicesStore();

    useEffect(() => {
        loadDevices();
        loadSummary();
    }, []);

    if (loading) {
        return (
            <div className="devices-page">
                <div className="devices-header">
                    <h1>Devices Management</h1>
                    <p>Manage and monitor all network devices</p>
                </div>
                <div className="dashboard-loading">Loading devices...</div>
            </div>
        );
    }

    if (error) {
        return (
            <div className="devices-page">
                <div className="dashboard-error">{error}</div>
            </div>
        );
    }

    return (
        <div className="devices-page">
            <div className="devices-header">
                <h1>Devices Management</h1>
                <p>Manage and monitor all network devices across your infrastructure.</p>
            </div>

            <DeviceSummaryCard />

            <div className="devices-section">
                <DeviceFilters />
            </div>

            <div className="devices-section device-table-section">
                <h2>Device Inventory</h2>
                <DeviceTable />
            </div>

            <div className="devices-grid">
                <DeviceStatusChart />
                <DeviceDetailsCard />
                <DeviceActions />
            </div>
        </div>
    );
}

export default Devices;