# backend/services/devices_service.py

from datetime import datetime


devices = [
    {
        "id": 1,
        "name": "Core Router",
        "ip": "192.168.1.1",
        "type": "Router",
        "status": "Online",
        "location": "Server Room",
        "uptime": "99.9%",
        "last_seen": "2 mins ago"
    },
    {
        "id": 2,
        "name": "Office Switch",
        "ip": "192.168.1.20",
        "type": "Switch",
        "status": "Online",
        "location": "Floor 2",
        "uptime": "98.7%",
        "last_seen": "1 min ago"
    },
    {
        "id": 3,
        "name": "Database Server",
        "ip": "192.168.1.50",
        "type": "Server",
        "status": "Warning",
        "location": "Data Center",
        "uptime": "96.4%",
        "last_seen": "10 mins ago"
    },
    {
        "id": 4,
        "name": "Security Camera",
        "ip": "192.168.1.80",
        "type": "IoT",
        "status": "Offline",
        "location": "Entrance",
        "uptime": "80.2%",
        "last_seen": "1 hour ago"
    }
]


def get_all_devices():

    return devices



def get_device_by_id(device_id):

    for device in devices:

        if device["id"] == device_id:
            return device

    return None



def get_device_summary():

    total = len(devices)

    online = len(
        [
            d for d in devices
            if d["status"] == "Online"
        ]
    )

    warning = len(
        [
            d for d in devices
            if d["status"] == "Warning"
        ]
    )

    offline = len(
        [
            d for d in devices
            if d["status"] == "Offline"
        ]
    )


    return {

        "total": total,
        "online": online,
        "warning": warning,
        "offline": offline

    }



def restart_device(device_id):

    device = get_device_by_id(device_id)


    if device:

        device["status"] = "Online"
        device["last_seen"] = "Just now"

        return {

            "message": "Device restarted successfully",
            "device": device

        }


    return {

        "message": "Device not found"

    }