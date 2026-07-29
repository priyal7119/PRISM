// src/components/settings/SettingsActions.jsx
import useSettingsStore from "../../store/settingsStore";

function SettingsActions(){
    const {
        settings,
        saveSettings,
        reset
    } = useSettingsStore();

    return (
        <div className="settings-actions">
            <button
                className="settings-save-btn"
                onClick={() => saveSettings(settings)}
            >
                Save Changes
            </button>

            <button
                className="settings-reset-btn"
                onClick={reset}
            >
                Reset Settings
            </button>
        </div>
    );
}

export default SettingsActions;