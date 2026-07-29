// src/pages/Settings.jsx


import { useEffect } from "react";


import useSettingsStore from "../store/settingsStore";


import SettingsSection 
from "../components/settings/SettingsSection";


import SettingsActions 
from "../components/settings/SettingsActions";


import "../styles/settings.css";





function Settings(){



    const {

        settings,

        loadSettings,

        saveSettings


    } = useSettingsStore();







    useEffect(()=>{


        loadSettings();


    },[]);








    const updateField = (

        section,

        field,

        value

    )=>{



        useSettingsStore.setState((state)=>({



            settings:{



                ...state.settings,



                [section]:{



                    ...state.settings[section],



                    [field]:value



                }



            }



        }));



    };










    const sections=[



        {

            title:"Profile Settings",

            key:"profile",

            fields:[


                {

                    name:"name",

                    label:"Name"

                },


                {

                    name:"email",

                    label:"Email"

                },


                {

                    name:"role",

                    label:"Role"

                }


            ]

        },







        {

            title:"Network Configuration",

            key:"network",

            fields:[


                {

                    name:"ip_range",

                    label:"IP Range"

                },


                {

                    name:"dns",

                    label:"DNS"

                },


                {

                    name:"connection_mode",

                    label:"Connection Mode"

                }


            ]

        },







        {

            title:"Notification Preferences",

            key:"notifications",

            fields:[


                {

                    name:"email_alerts",

                    label:"Email Alerts",

                    type:"checkbox"

                },


                {

                    name:"system_alerts",

                    label:"System Alerts",

                    type:"checkbox"

                },


                {

                    name:"critical_alerts",

                    label:"Critical Alerts",

                    type:"checkbox"

                }


            ]

        },







        {

            title:"Security Settings",

            key:"security",

            fields:[


                {

                    name:"session_timeout",

                    label:"Session Timeout"

                },


                {

                    name:"two_factor",

                    label:"Two Factor Authentication",

                    type:"checkbox"

                }


            ]

        },







        {

            title:"System Preferences",

            key:"preferences",

            fields:[


                {

                    name:"theme",

                    label:"Theme"

                },


                {

                    name:"language",

                    label:"Language"

                }


            ]

        }



    ];









    return (



        <div className="settings-page">






            <div className="settings-header">



                <h1>

                    Settings

                </h1>




                <p>

                    Manage system configuration and preferences

                </p>



            </div>









            {

            sections.map((section)=>(



                <SettingsSection



                    key={section.key}



                    title={section.title}



                    fields={section.fields}



                    values={

                        settings[section.key] || {}

                    }



                    onChange={

                        (field,value)=>

                        updateField(

                            section.key,

                            field,

                            value

                        )

                    }



                />



            ))

            }









            <SettingsActions />







        </div>



    );


}



export default Settings;