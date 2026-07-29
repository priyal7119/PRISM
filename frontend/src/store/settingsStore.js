// src/store/settingsStore.js


import {create} from "zustand";


import {

    getSettings,

    updateSettings,

    resetSettings

}

from "../api/settings";





const useSettingsStore = create(

(set)=>({


    settings:{

    profile:{},

    network:{},

    notifications:{},

    security:{},

    preferences:{}

},


    loading:false,





    loadSettings:async()=>{


        set({

            loading:true

        });



        const data =

        await getSettings();




        set({

            settings:data,

            loading:false

        });



    },







    saveSettings:async(data)=>{


        const response =

        await updateSettings(data);




        set({

            settings:

            response.settings

        });


    },








    reset:async()=>{


        const response =

        await resetSettings();




        set({

            settings:

            response.settings

        });


    }






})

);


export default useSettingsStore;