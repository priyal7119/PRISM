function StatCard({ title, value, note }) {
    return (
        <div className="stat-card">
            <div className="stat-card__accent" />
            <div className="stat-icon" aria-hidden="true">
                <span className="stat-icon__placeholder" />
            </div>

            <div className="stat-card__body">
                <p className="stat-title">{title}</p>
                <h2 className="stat-value">{value}</h2>
                {note ? <span className="stat-note">{note}</span> : null}
            </div>
        </div>
    );
}

export default StatCard;