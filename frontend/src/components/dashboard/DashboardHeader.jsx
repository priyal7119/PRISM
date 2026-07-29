function DashboardHeader({ title, description, statusCards = [] }) {
  return (
    <div className="dashboard-header">
      <div className="dashboard-header__content">
        <div className="dashboard-header__eyebrow">PRISM Network Intelligence</div>
        <h1>{title}</h1>
        <p>{description}</p>
      </div>

      <div className="dashboard-status-grid">
        {statusCards.map((card, index) => (
          <div key={index} className={`status-card status-card--${card.variant}`}>
            <span className="status-card__label">{card.label}</span>
            <strong className="status-card__value">{card.value}</strong>
          </div>
        ))}
      </div>
    </div>
  );
}

export default DashboardHeader;