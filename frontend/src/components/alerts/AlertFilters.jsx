// src/components/alerts/AlertFilters.jsx
import useAlertsStore from "../../store/alertsStore";
import { Search, Filter, RotateCcw } from "lucide-react";

function AlertFilters() {
    const {
        search,
        statusFilter,
        severityFilter,
        setSearch,
        setStatusFilter,
        setSeverityFilter
    } = useAlertsStore();

    const handleReset = () => {
        setSearch("");
        setStatusFilter("ALL");
        setSeverityFilter("ALL");
    };

    return (
        <div className="alert-filters-card">
            <div className="search-input-wrap">
                <Search size={16} className="filter-icon" />
                <input
                    type="text"
                    placeholder="Search alerts by title or device..."
                    value={search || ""}
                    onChange={(e) => setSearch(e.target.value)}
                    className="form-input"
                />
            </div>

            <div className="filter-selects-group">
                <div className="select-with-icon">
                    <Filter size={14} className="select-icon" />
                    <select
                        value={statusFilter || "ALL"}
                        onChange={(e) => setStatusFilter(e.target.value)}
                        className="form-select"
                    >
                        <option value="ALL">All Statuses</option>
                        <option value="ACTIVE">Active</option>
                        <option value="RESOLVED">Resolved</option>
                    </select>
                </div>

                <div className="select-with-icon">
                    <Filter size={14} className="select-icon" />
                    <select
                        value={severityFilter || "ALL"}
                        onChange={(e) => setSeverityFilter(e.target.value)}
                        className="form-select"
                    >
                        <option value="ALL">All Severities</option>
                        <option value="CRITICAL">Critical</option>
                        <option value="WARNING">Warning</option>
                        <option value="INFO">Info</option>
                    </select>
                </div>

                <button
                    className="btn-secondary btn-icon-only"
                    onClick={handleReset}
                    title="Reset Filters"
                >
                    <RotateCcw size={16} />
                </button>
            </div>
        </div>
    );
}

export default AlertFilters;