// src/components/devices/DeviceDetailsCard.jsx


import useDevicesStore from "../../store/devicesStore";


function DeviceDetailsCard(){


    const device =
    useDevicesStore(
        (state)=>state.selectedDevice
    );



    if(!device){

        return (

            <div className="device-details-card">


                <h3>
                    Device Details
                </h3>


                <p>
                    Select a device to view details
                </p>


            </div>

        );

    }




    return (

        <div className="device-details-card">


            <h3>
                {device.name}
            </h3>



            <div className="device-detail-item">

                <span>
                    IP Address
                </span>

                <b>
                    {device.ip}
                </b>

            </div>



            <div className="device-detail-item">

                <span>
                    Device Type
                </span>

                <b>
                    {device.type}
                </b>

            </div>




            <div className="device-detail-item">

                <span>
                    Status
                </span>

                <b>
                    {device.status}
                </b>

            </div>




            <div className="device-detail-item">

                <span>
                    Location
                </span>

                <b>
                    {device.location}
                </b>

            </div>




            <div className="device-detail-item">

                <span>
                    Last Seen
                </span>

                <b>
                    {device.last_seen}
                </b>

            </div>



        </div>

    );


}


export default DeviceDetailsCard;