// src/components/settings/SettingsActions.jsx

import {
  CheckCircle2,
  RotateCcw
} from "lucide-react";

import useSettingsStore from "../../store/settingsStore";

function SettingsActions() {
  const {
    saveSettings,
    reset,
    saving
  } = useSettingsStore();

  const handleSave = async () => {
    await saveSettings();
  };

  return (
    <div className="settings-actions-bar">
      <button
        className="btn-primary"
        onClick={handleSave}
        disabled={saving}
      >
        <CheckCircle2 size={16} />
        <span>
          {saving ? "Saving..." : "Save Settings"}
        </span>
      </button>

      <button
        className="btn-secondary"
        onClick={reset}
      >
        <RotateCcw size={16} />
        <span>Reset Defaults</span>
      </button>
    </div>
  );
}

export default SettingsActions;