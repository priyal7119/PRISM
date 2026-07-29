// src/store/devicesStore.js


import { create } from "zustand";


import {
    getDevices,
    getDeviceSummary,
    restartDevice
}
from "../api/devices";



const useDevicesStore = create(

(set,get)=>({


    devices: [],

    filteredDevices: [],

    summary:{},

    selectedDevice:null,


    loading:false,


    search:"",

    statusFilter:"All",

    typeFilter:"All",




    loadDevices:async()=>{


        set({
            loading:true
        });



        const data =
        await getDevices();



        set({

            devices:data,

            filteredDevices:data,

            loading:false

        });


    },




    loadSummary:async()=>{


        const data =
        await getDeviceSummary();



        set({

            summary:data

        });


    },




    applyFilters:()=>{


        const {
            devices,
            search,
            statusFilter,
            typeFilter

        } = get();



        let result = devices;



        if(search){

            result =
            result.filter(
                (device)=>

                device.name
                .toLowerCase()
                .includes(
                    search.toLowerCase()
                )

            );

        }



        if(statusFilter !== "All"){


            result =
            result.filter(
                (device)=>
                device.status === statusFilter
            );


        }



        if(typeFilter !== "All"){


            result =
            result.filter(
                (device)=>
                device.type === typeFilter
            );


        }



        set({

            filteredDevices:result

        });


    },




    setSearch:(value)=>{


        set({

            search:value

        });


        get().applyFilters();

    },




    setStatusFilter:(value)=>{


        set({

            statusFilter:value

        });


        get().applyFilters();

    },




    setTypeFilter:(value)=>{


        set({

            typeFilter:value

        });


        get().applyFilters();

    },




    resetFilters:()=>{


        set({

            search:"",
            statusFilter:"All",
            typeFilter:"All",
            filteredDevices:get().devices

        });


    },





    selectDevice:(device)=>{


        set({

            selectedDevice:device

        });


    },





    restart:async(id)=>{

        await restartDevice(id);

        const updated =
        await getDevices();

        const updatedDevice = updated.find((d) => d.id === id);

        set({

            devices:updated,

            filteredDevices:updated,

            selectedDevice:updatedDevice || null

        });

        await get().loadSummary();

    }



})

);


export default useDevicesStore;