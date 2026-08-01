// src/pages/Settings.jsx
import { useState } from "react";
import useSettingsStore from "../store/settingsStore";
import {
  User,
  Shield,
  Bell,
  Sliders,
  RotateCcw,
  CheckCircle2,
  Lock,
  Globe
} from "lucide-react";
import "../styles/settings.css";

function Settings() {
  const { settings, updateSetting, resetSettings } = useSettingsStore();
  const [activeTab, setActiveTab] = useState("general");
  const [savedNotice, setSavedNotice] = useState(false);

  const tabs = [
    { id: "general", label: "General & NOC", icon: Sliders },
    { id: "notifications", label: "Notifications", icon: Bell },
    { id: "security", label: "Security & SOC", icon: Shield },
    { id: "profile", label: "User Profile", icon: User },
  ];

  const handleSave = () => {
    setSavedNotice(true);
    setTimeout(() => setSavedNotice(false), 3000);
  };

  return (
    <div className="settings-page">
      <div className="page-header">
        <div>
          <h1>Enterprise Settings</h1>
          <p>Manage system preferences, SOC alert thresholds, and NOC operational settings.</p>
        </div>
        {savedNotice && (
          <div className="saved-toast">
            <CheckCircle2 size={16} />
            <span>Settings saved successfully!</span>
          </div>
        )}
      </div>

      <div className="settings-layout">
        <div className="settings-nav">
          {tabs.map((tab) => {
            const Icon = tab.icon;
            return (
              <button
                key={tab.id}
                className={`settings-nav-item ${activeTab === tab.id ? "active" : ""}`}
                onClick={() => setActiveTab(tab.id)}
              >
                <Icon size={16} />
                <span>{tab.label}</span>
              </button>
            );
          })}
        </div>

        <div className="settings-content">
          {activeTab === "general" && (
            <div className="settings-section">
              <h3 className="settings-section-title">NOC System Preferences</h3>

              <div className="settings-form-group">
                <label>Refresh Interval (Seconds)</label>
                <p>Controls auto-polling frequency across live monitoring dashboards.</p>
                <input
                  type="number"
                  className="form-input"
                  value={settings?.refreshInterval ?? 30}
                  onChange={(e) => updateSetting("refreshInterval", parseInt(e.target.value) || 30)}
                />
              </div>

              <div className="settings-form-group">
                <label>Default Telemetry View</label>
                <p>Initial data view when opening network health charts.</p>
                <select
                  className="form-select"
                  value={settings?.defaultView || "overview"}
                  onChange={(e) => updateSetting("defaultView", e.target.value)}
                >
                  <option value="overview">Executive Overview</option>
                  <option value="detailed">NOC Detailed Telemetry</option>
                  <option value="topology">Network Topology Focus</option>
                </select>
              </div>

              <div className="settings-form-group checkbox-group">
                <label className="switch-label">
                  <input
                    type="checkbox"
                    checked={!!settings?.autoRefresh}
                    onChange={(e) => updateSetting("autoRefresh", e.target.checked)}
                  />
                  <span className="switch-text">Enable Automatic Background Refresh</span>
                </label>
              </div>
            </div>
          )}

          {activeTab === "notifications" && (
            <div className="settings-section">
              <h3 className="settings-section-title">Notification & Alert Rules</h3>

              <div className="settings-form-group checkbox-group">
                <label className="switch-label">
                  <input
                    type="checkbox"
                    checked={!!settings?.notificationsEnabled}
                    onChange={(e) => updateSetting("notificationsEnabled", e.target.checked)}
                  />
                  <span className="switch-text">Enable System & SOC Notifications</span>
                </label>
              </div>

              <div className="settings-form-group checkbox-group">
                <label className="switch-label">
                  <input
                    type="checkbox"
                    checked={!!settings?.emailAlerts}
                    onChange={(e) => updateSetting("emailAlerts", e.target.checked)}
                  />
                  <span className="switch-text">Send Critical Incident Email Escalations</span>
                </label>
              </div>
            </div>
          )}

          {activeTab === "security" && (
            <div className="settings-section">
              <h3 className="settings-section-title">Security & Open Access Mode</h3>
              <div className="security-banner">
                <Lock size={18} />
                <div>
                  <strong>Open Access Mode Active</strong>
                  <p>All authentication features have been removed. Full administrative access is granted.</p>
                </div>
              </div>
            </div>
          )}

          {activeTab === "profile" && (
            <div className="settings-section">
              <h3 className="settings-section-title">Operator Profile</h3>
              <div className="settings-form-group">
                <label>Operator Name</label>
                <input type="text" className="form-input" value="Admin Operator" readOnly />
              </div>
              <div className="settings-form-group">
                <label>Role & Permissions</label>
                <input type="text" className="form-input" value="Super Administrator (Full NOC Access)" readOnly />
              </div>
            </div>
          )}

          <div className="settings-actions-bar">
            <button className="btn-primary" onClick={handleSave}>
              <CheckCircle2 size={16} />
              <span>Save Settings</span>
            </button>
            <button className="btn-secondary" onClick={() => resetSettings()}>
              <RotateCcw size={16} />
              <span>Reset to Defaults</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Settings;