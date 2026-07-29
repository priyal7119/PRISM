# backend/services/settings_service.py


settings = {

    "profile": {

        "name": "Admin User",

        "email": "admin@prism.com",

        "role": "Administrator"

    },


    "network": {

        "ip_range": "192.168.1.0/24",

        "dns": "8.8.8.8",

        "connection_mode": "Auto"

    },


    "notifications": {

        "email_alerts": True,

        "system_alerts": True,

        "critical_alerts": True

    },


    "security": {

        "session_timeout": "30 minutes",

        "two_factor": False

    },


    "preferences": {

        "theme": "Light",

        "language": "English"

    }

}




def get_settings():

    return settings





def update_settings(data):


    for section in data:


        if section in settings:


            settings[section].update(

                data[section]

            )



    return {


        "message":"Settings updated successfully",

        "settings":settings

    }




def reset_settings():


    return {


        "message":"Settings reset",

        "settings":settings

    }