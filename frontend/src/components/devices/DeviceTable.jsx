// src/components/devices/DeviceTable.jsx


import useDevicesStore from "../../store/devicesStore";


function DeviceTable(){


    const {
        filteredDevices,
        selectDevice

    } = useDevicesStore();



    return (

        <div className="device-table-container">


            <table className="device-table">


                <thead>

                    <tr>

                        <th>
                            Device
                        </th>

                        <th>
                            IP Address
                        </th>

                        <th>
                            Type
                        </th>

                        <th>
                            Status
                        </th>

                        <th>
                            Location
                        </th>

                        <th>
                            Uptime
                        </th>


                    </tr>


                </thead>



                <tbody>


                {
                    filteredDevices.map(

                        (device)=>(


                        <tr
                        key={device.id}
                        onClick={
                            ()=>selectDevice(device)
                        }
                        >


                            <td>

                                {device.name}

                            </td>


                            <td>

                                {device.ip}

                            </td>


                            <td>

                                {device.type}

                            </td>


                            <td>


                                <span
                                className={
                                    `device-status ${device.status.toLowerCase()}`
                                }
                                >

                                    {device.status}

                                </span>


                            </td>



                            <td>

                                {device.location}

                            </td>



                            <td>

                                {device.uptime}

                            </td>



                        </tr>


                        )


                    )
                }


                </tbody>


            </table>


        </div>

    );


}


export default DeviceTable;