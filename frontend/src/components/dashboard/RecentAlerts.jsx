function RecentAlerts({ alerts = [] }) {
  const hasAlerts = Array.isArray(alerts) && alerts.length > 0;

  return (
    <div className="alerts-card">
      <div className="card-heading">
        <h3>Recent Alerts</h3>
        <span className={`card-heading__tag ${hasAlerts ? "card-heading__tag--warning" : "card-heading__tag--success"}`}>
          {hasAlerts ? `${alerts.length} Active` : "Healthy"}
        </span>
      </div>

      {hasAlerts ? (
        <div className="alerts-list">
          {alerts.map((alert, index) => (
            <div key={alert.id ?? index} className="alert-item">
              <div className="alert-item__content">
                <strong>{alert.title || "-"}</strong>
                <p>{alert.description || alert.message || "-"}</p>
              </div>
              <small>{alert.time || "-"}</small>
            </div>
          ))}
        </div>
      ) : (
        <div className="empty-state empty-state--success">
          <p>No recent alerts</p>
          <span>Everything looks healthy right now.</span>
        </div>
      )}
    </div>
  );
}

export default RecentAlerts;