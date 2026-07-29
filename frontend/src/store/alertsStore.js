// src/store/alertsStore.js


import {create} from "zustand";


import {

    getAlerts,
    getAlertSummary,
    resolveAlert

}

from "../api/alerts";





const useAlertsStore = create(

(set,get)=>(

{


    alerts:[],


    filteredAlerts:[],


    summary:{},


    selectedAlert:null,


    loading:false,



    search:"",


    severityFilter:"All",


    statusFilter:"All",






    loadAlerts:async()=>{


        set({

            loading:true

        });



        const data =
        await getAlerts();



        set({

            alerts:data,

            filteredAlerts:data,

            loading:false

        });


    },






    loadSummary:async()=>{


        const data =
        await getAlertSummary();



        set({

            summary:data

        });


    },







    applyFilters:()=>{


        const {

            alerts,
            search,
            severityFilter,
            statusFilter

        } = get();




        let result = alerts;





        if(search){


            result =
            result.filter(

                (alert)=>

                alert.title
                .toLowerCase()
                .includes(
                    search.toLowerCase()
                )

            );


        }






        if(severityFilter !== "All"){


            result =
            result.filter(

                (alert)=>

                alert.severity === severityFilter

            );


        }





        if(statusFilter !== "All"){


            result =
            result.filter(

                (alert)=>

                alert.status === statusFilter

            );


        }




        set({

            filteredAlerts:result

        });



    },







    setSearch:(value)=>{


        set({

            search:value

        });


        get().applyFilters();


    },







    setSeverityFilter:(value)=>{


        set({

            severityFilter:value

        });



        get().applyFilters();


    },







    setStatusFilter:(value)=>{


        set({

            statusFilter:value

        });



        get().applyFilters();


    },







    resetFilters:()=>{


        set({

            search:"",

            severityFilter:"All",

            statusFilter:"All",

            filteredAlerts:get().alerts

        });


    },







    selectAlert:(alert)=>{


        set({

            selectedAlert:alert

        });


    },







    resolve:async(id)=>{


        await resolveAlert(id);



        const updated =
        await getAlerts();



        set({

            alerts:updated,

            filteredAlerts:updated

        });



    }





}

)

);


export default useAlertsStore;