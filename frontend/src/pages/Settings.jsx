// src/pages/Settings.jsx

import { useEffect, useState } from "react";
import {
  User,
  Shield,
  Bell,
  Sliders,
  CheckCircle2,
  RotateCcw,
  Lock,
} from "lucide-react";

import useSettingsStore from "../store/settingsStore";

import "../styles/settings.css";

function Settings() {
  const {
    settings,
    loading,
    loadSettings,
    updateLocalSetting,
    saveSettings,
    reset,
  } = useSettingsStore();

  const [activeTab, setActiveTab] = useState("general");
  const [savedNotice, setSavedNotice] = useState(false);

  useEffect(() => {
    loadSettings();
  }, []);

  const tabs = [
    {
      id: "general",
      label: "General",
      icon: Sliders,
    },
    {
      id: "notifications",
      label: "Notifications",
      icon: Bell,
    },
    {
      id: "security",
      label: "Security",
      icon: Shield,
    },
    {
      id: "profile",
      label: "Profile",
      icon: User,
    },
  ];

  const handleSave = async () => {
    const success = await saveSettings();

    if (success) {
      setSavedNotice(true);

      setTimeout(() => {
        setSavedNotice(false);
      }, 3000);
    }
  };

  if (loading) {
    return (
      <div className="settings-page">
        <div className="settings-loading">
          Loading settings...
        </div>
      </div>
    );
  }

  return (
    <div className="settings-page">
      <div className="page-header">
        <div>
          <h1>Enterprise Settings</h1>
          <p>
            Manage system preferences, security configuration and operational
            settings.
          </p>
        </div>

        {savedNotice && (
          <div className="saved-toast">
            <CheckCircle2 size={16} />
            <span>Settings saved successfully</span>
          </div>
        )}
      </div>

      <div className="settings-layout">
        <aside className="settings-nav">
          {tabs.map((tab) => {
            const Icon = tab.icon;

            return (
              <button
                key={tab.id}
                className={`settings-nav-item ${
                  activeTab === tab.id ? "active" : ""
                }`}
                onClick={() => setActiveTab(tab.id)}
              >
                <Icon size={18} />
                <span>{tab.label}</span>
              </button>
            );
          })}
        </aside>

        <div className="settings-content">
          {activeTab === "general" && (
            <div className="settings-section">
              <h3 className="settings-section-title">
                General Preferences
              </h3>

              <div className="settings-form-group">
                <label>Refresh Interval</label>

                <input
                  className="form-input"
                  type="number"
                  value={settings.preferences.refreshInterval}
                  onChange={(e) =>
                    updateLocalSetting(
                      "preferences",
                      "refreshInterval",
                      Number(e.target.value)
                    )
                  }
                />
              </div>

              <div className="settings-form-group">
                <label>Default Dashboard</label>

                <select
                  className="form-select"
                  value={settings.network.defaultView}
                  onChange={(e) =>
                    updateLocalSetting(
                      "network",
                      "defaultView",
                      e.target.value
                    )
                  }
                >
                  <option value="overview">
                    Executive Overview
                  </option>

                  <option value="detailed">
                    Detailed Monitoring
                  </option>

                  <option value="topology">
                    Network Topology
                  </option>
                </select>
              </div>

              <div className="settings-form-group checkbox-group">
                <label className="switch-label">
                  <input
                    type="checkbox"
                    checked={settings.preferences.autoRefresh}
                    onChange={(e) =>
                      updateLocalSetting(
                        "preferences",
                        "autoRefresh",
                        e.target.checked
                      )
                    }
                  />

                  <span className="switch-text">
                    Enable Auto Refresh
                  </span>
                </label>
              </div>
            </div>
          )}

          {activeTab === "notifications" && (
            <div className="settings-section">
              <h3 className="settings-section-title">
                Notifications
              </h3>

              <div className="settings-form-group checkbox-group">
                <label className="switch-label">
                  <input
                    type="checkbox"
                    checked={settings.notifications.enabled}
                    onChange={(e) =>
                      updateLocalSetting(
                        "notifications",
                        "enabled",
                        e.target.checked
                      )
                    }
                  />

                  <span className="switch-text">
                    Enable Notifications
                  </span>
                </label>
              </div>

              <div className="settings-form-group checkbox-group">
                <label className="switch-label">
                  <input
                    type="checkbox"
                    checked={settings.notifications.emailAlerts}
                    onChange={(e) =>
                      updateLocalSetting(
                        "notifications",
                        "emailAlerts",
                        e.target.checked
                      )
                    }
                  />

                  <span className="switch-text">
                    Email Critical Alerts
                  </span>
                </label>
              </div>
            </div>
          )}

          {activeTab === "security" && (
            <div className="settings-section">
              <h3 className="settings-section-title">
                Security
              </h3>

              <div className="security-banner">
                <Lock size={18} />

                <div>
                  <strong>Open Access Mode</strong>

                  <p>
                    Authentication is disabled. Administrative
                    privileges are granted to all users.
                  </p>
                </div>
              </div>
            </div>
          )}

          {activeTab === "profile" && (
            <div className="settings-section">
              <h3 className="settings-section-title">
                Operator Profile
              </h3>

              <div className="settings-form-group">
                <label>Name</label>

                <input
                  className="form-input"
                  value={settings.profile.name}
                  readOnly
                />
              </div>

              <div className="settings-form-group">
                <label>Role</label>

                <input
                  className="form-input"
                  value={settings.profile.role}
                  readOnly
                />
              </div>

              <div className="settings-form-group">
                <label>Email</label>

                <input
                  className="form-input"
                  value={settings.profile.email}
                  readOnly
                />
              </div>
            </div>
          )}

          <div className="settings-actions-bar">
            <button
              className="btn-primary"
              onClick={handleSave}
            >
              <CheckCircle2 size={16} />
              <span>Save Settings</span>
            </button>

            <button
              className="btn-secondary"
              onClick={reset}
            >
              <RotateCcw size={16} />
              <span>Reset Defaults</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Settings;