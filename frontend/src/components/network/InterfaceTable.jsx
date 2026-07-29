import "../../styles/network.css";

function InterfaceTable({ interfaces = [] }) {
  return (
    <div className="network-card">
      <div className="card-header">
        <div>
          <h2>Interface Utilization</h2>
          <p>Current status and bandwidth usage for key interfaces.</p>
        </div>
      </div>

      <table className="interface-table">
        <thead>
          <tr>
            <th>Interface</th>
            <th>Utilization</th>
            <th>Status</th>
          </tr>
        </thead>
        <tbody>
          {interfaces.map((item, index) => (
            <tr key={index}>
              <td>{item.name}</td>
              <td>
                <div className="utilization-wrapper">
                  <div className="utilization-bar">
                    <div
                      className="utilization-fill"
                      style={{ width: `${item.utilization}%` }}
                    />
                  </div>
                  <small>{item.utilization}%</small>
                </div>
              </td>
              <td>
                <span className={`status-pill ${item.status.toLowerCase()}`}>
                  {item.status}
                </span>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default InterfaceTable;
