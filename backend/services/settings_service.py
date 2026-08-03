# backend/services/settings_service.py

from copy import deepcopy

DEFAULT_SETTINGS =  {
    "profile": {
        "name": "Admin User",
        "role": "Super Administrator",
        "email": "admin@prism.local",
    },
    "network": {
        "defaultView": "overview",
    },
    "notifications": {
        "enabled": True,
        "emailAlerts": True,
    },
    "security": {
        "openAccess": True,
    },
    "preferences": {
        "refreshInterval": 30,
        "autoRefresh": True,
    },
}

_settings = deepcopy(DEFAULT_SETTINGS)


def get_settings():
    return _settings


def update_settings(data):
    global _settings

    _settings = {
        **_settings,
        **data,
    }

    return {
        "message": "Settings updated successfully",
        "settings": _settings,
    }


def reset_settings():
    global _settings

    _settings = deepcopy(DEFAULT_SETTINGS)

    return {
        "message": "Settings reset successfully",
        "settings": _settings,
    }