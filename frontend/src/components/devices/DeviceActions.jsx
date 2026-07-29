// src/components/devices/DeviceActions.jsx


import useDevicesStore from "../../store/devicesStore";


function DeviceActions(){


    const {
        selectedDevice,
        restart

    } = useDevicesStore();



    if(!selectedDevice){

        return (

            <div className="device-actions-card">


                <h3>
                    Quick Actions
                </h3>


                <p>
                    Select a device first
                </p>


            </div>

        );

    }



    return (

        <div className="device-actions-card">


            <h3>
                Quick Actions
            </h3>



            <button

                className="device-action-btn"

                onClick={
                    ()=>restart(selectedDevice.id)
                }

            >

                Restart Device

            </button>




            <button

                className="device-action-btn"

            >

                Ping Device

            </button>





            <button

                className="device-action-btn"

            >

                View Logs

            </button>




            <button

                className="device-action-btn danger"

            >

                Disable Device

            </button>



        </div>

    );


}


export default DeviceActions;