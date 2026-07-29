// src/components/devices/DeviceStatusChart.jsx


import {
    PieChart,
    Pie,
    Cell,
    Tooltip,
    ResponsiveContainer

} from "recharts";


import useDevicesStore from "../../store/devicesStore";



function DeviceStatusChart(){


    const summary =
    useDevicesStore(
        (state)=>state.summary
    );



    const data = [

        {
            name:"Online",
            value:summary.online || 0
        },


        {
            name:"Warning",
            value:summary.warning || 0
        },


        {
            name:"Offline",
            value:summary.offline || 0
        }

    ];



    return (

        <div className="device-chart-card">


            <h3>
                Device Status
            </h3>



            <ResponsiveContainer
                width="100%"
                height={250}
            >


                <PieChart>


                    <Pie

                        data={data}

                        dataKey="value"

                        nameKey="name"

                        cx="50%"

                        cy="50%"

                        outerRadius={80}

                        label

                    >

                        {
                            data.map(
                                (entry,index)=>(

                                    <Cell
                                    key={index}
                                    />

                                )
                            )
                        }


                    </Pie>


                    <Tooltip />


                </PieChart>


            </ResponsiveContainer>



        </div>

    );


}


export default DeviceStatusChart;