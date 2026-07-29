import "../../styles/network.css";

function DeviceHealthTable({

    devices = []

}) {

    return (

        <div className="network-card">

            <div className="card-header">

                <div>

                    <h2>

                        Device Health

                    </h2>

                    <p>

                        Live device monitoring

                    </p>

                </div>

            </div>

            <table className="device-table">

                <thead>

                    <tr>

                        <th>Device</th>

                        <th>Type</th>

                        <th>Status</th>

                        <th>Latency</th>

                        <th>Uptime</th>

                    </tr>

                </thead>

                <tbody>

                    {

                        devices.map((device, index) => (

                            <tr key={index}>

                                <td>

                                    {device.name}

                                </td>

                                <td>

                                    {device.type}

                                </td>

                                <td>

                                    <span

                                        className={`status-pill ${device.status.toLowerCase()}`}

                                    >

                                        {device.status}

                                    </span>

                                </td>

                                <td>

                                    {device.latency}

                                </td>

                                <td>

                                    {device.uptime}

                                </td>

                            </tr>

                        ))

                    }

                </tbody>

            </table>

        </div>

    );

}

export default DeviceHealthTable;