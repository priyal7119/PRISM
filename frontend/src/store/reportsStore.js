// src/store/reportsStore.js


import {create} from "zustand";


import {

    getReports,

    getReportSummary,

    generateReport

}

from "../api/reports";







const useReportsStore = create(

(set,get)=>(

{


    reports:[],


    filteredReports:[],


    summary:{},


    selectedReport:null,


    loading:false,



    search:"",


    typeFilter:"All",


    statusFilter:"All",








    loadReports:async()=>{


        set({

            loading:true

        });



        const data =

        await getReports();




        set({

            reports:data,

            filteredReports:data,

            loading:false

        });


    },








    loadSummary:async()=>{


        const data =

        await getReportSummary();




        set({

            summary:data

        });


    },









    applyFilters:()=>{


        const {

            reports,

            search,

            typeFilter,

            statusFilter


        } = get();




        let result = reports;





        if(search){


            result =

            result.filter(

                (report)=>

                report.name

                .toLowerCase()

                .includes(

                    search.toLowerCase()

                )

            );


        }






        if(typeFilter !== "All"){


            result =

            result.filter(

                (report)=>

                report.type === typeFilter

            );


        }






        if(statusFilter !== "All"){


            result =

            result.filter(

                (report)=>

                report.status === statusFilter

            );


        }





        set({

            filteredReports:result

        });


    },








    setSearch:(value)=>{


        set({

            search:value

        });


        get().applyFilters();


    },








    setTypeFilter:(value)=>{


        set({

            typeFilter:value

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

            typeFilter:"All",

            statusFilter:"All",

            filteredReports:get().reports

        });


    },








    selectReport:(report)=>{


        set({

            selectedReport:report

        });


    },








    generate:async(type)=>{

        await generateReport(type);

        const updated =

        await getReports();


        set({

            reports:updated,

            filteredReports:updated

        });

        await get().loadSummary();

    }





}

)

);



export default useReportsStore;