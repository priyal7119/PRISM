// src/components/devices/DeviceSummaryCard.jsx


import useDevicesStore from "../../store/devicesStore";


function DeviceSummaryCard(){


    const summary =
    useDevicesStore(
        (state)=>state.summary
    );



    const cards = [

        {
            title:"Total Devices",
            value:summary.total || 0,
            icon:"🖥️",
            type:"total"
        },


        {
            title:"Online Devices",
            value:summary.online || 0,
            icon:"🟢",
            type:"online"
        },


        {
            title:"Warning Devices",
            value:summary.warning || 0,
            icon:"⚠️",
            type:"warning"
        },


        {
            title:"Offline Devices",
            value:summary.offline || 0,
            icon:"🔴",
            type:"offline"
        }

    ];



    return (

        <div className="device-summary-grid">


            {
                cards.map(
                    (card)=>(
                    
                    <div
                    key={card.title}
                    className={`device-summary-card ${card.type}`}
                    >


                        <div className="device-summary-header">


                            <span className="device-summary-icon">
                                {card.icon}
                            </span>


                            <p>
                                {card.title}
                            </p>


                        </div>



                        <h2>
                            {card.value}
                        </h2>


                    </div>

                    )
                )
            }


        </div>

    );


}


export default DeviceSummaryCard;