import "../../styles/network.css";

function NetworkTopology({

    topology = []

}) {

    return (

        <div className="network-card topology-card">

            <div className="card-header">

                <div>

                    <h2>

                        Network Topology

                    </h2>

                    <p>

                        Current infrastructure connectivity

                    </p>

                </div>

            </div>

            <div className="topology-container">

                {

                    topology.map((device, index) => (

                        <div
                            key={index}
                            className="topology-node"
                        >

                            <div

                                className={`node-status ${device.status.toLowerCase()}`}

                            ></div>

                            <div className="node-circle">

                                {device.name.charAt(0)}

                            </div>

                            <h4>

                                {device.name}

                            </h4>

                            <span>

                                {device.status}

                            </span>

                            {

                                index !== topology.length - 1 && (

                                    <div className="topology-line"></div>

                                )

                            }

                        </div>

                    ))

                }

            </div>

        </div>

    );

}

export default NetworkTopology;