# backend/services/devices_service.py

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
    },
    {
        "id": 5,
        "name": "Mumbai Core Router",
        "ip": "10.0.0.1",
        "type": "Router",
        "status": "Online",
        "location": "Mumbai DC",
        "uptime": "99.98%",
        "last_seen": "5 sec ago"
    },
    {
        "id": 6,
        "name": "Delhi Distribution Switch",
        "ip": "10.0.1.14",
        "type": "Switch",
        "status": "Warning",
        "location": "Delhi Branch",
        "uptime": "97.42%",
        "last_seen": "1 min ago"
    },
    {
        "id": 7,
        "name": "Bangalore Edge Router",
        "ip": "10.0.2.1",
        "type": "Router",
        "status": "Online",
        "location": "Bangalore Office",
        "uptime": "99.91%",
        "last_seen": "8 sec ago"
    },
    {
        "id": 8,
        "name": "Pune Access Switch",
        "ip": "10.0.3.21",
        "type": "Switch",
        "status": "Online",
        "location": "Pune Office",
        "uptime": "98.77%",
        "last_seen": "14 sec ago"
    },
    {
        "id": 9,
        "name": "Hyderabad Database Server",
        "ip": "10.0.4.10",
        "type": "Server",
        "status": "Warning",
        "location": "Hyderabad DC",
        "uptime": "96.83%",
        "last_seen": "2 mins ago"
    },
    {
        "id": 10,
        "name": "Chennai Firewall",
        "ip": "10.0.5.2",
        "type": "Server",
        "status": "Online",
        "location": "Chennai DC",
        "uptime": "99.94%",
        "last_seen": "6 sec ago"
    },
    {
        "id": 11,
        "name": "Kolkata CCTV Gateway",
        "ip": "10.0.6.30",
        "type": "IoT",
        "status": "Offline",
        "location": "Kolkata Office",
        "uptime": "84.55%",
        "last_seen": "2 hours ago"
    },
    {
        "id": 12,
        "name": "Ahmedabad Edge Switch",
        "ip": "10.0.7.18",
        "type": "Switch",
        "status": "Online",
        "location": "Ahmedabad Branch",
        "uptime": "99.51%",
        "last_seen": "12 sec ago"
    },
    {
        "id": 13,
        "name": "Nagpur Access Point",
        "ip": "10.0.8.40",
        "type": "IoT",
        "status": "Online",
        "location": "Nagpur Office",
        "uptime": "98.63%",
        "last_seen": "18 sec ago"
    },
    {
        "id": 14,
        "name": "Noida Edge Firewall",
        "ip": "10.0.9.5",
        "type": "Server",
        "status": "Online",
        "location": "Noida DC",
        "uptime": "99.81%",
        "last_seen": "7 sec ago"
    },
    {
        "id": 15,
        "name": "Jaipur Distribution Switch",
        "ip": "10.0.10.16",
        "type": "Switch",
        "status": "Warning",
        "location": "Jaipur Branch",
        "uptime": "95.97%",
        "last_seen": "4 mins ago"
    },
    {
        "id": 16,
        "name": "Kochi Backup Server",
        "ip": "10.0.11.9",
        "type": "Server",
        "status": "Offline",
        "location": "Kochi DC",
        "uptime": "73.44%",
        "last_seen": "5 hours ago"
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

    online = len([d for d in devices if d["status"] == "Online"])
    warning = len([d for d in devices if d["status"] == "Warning"])
    offline = len([d for d in devices if d["status"] == "Offline"])

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