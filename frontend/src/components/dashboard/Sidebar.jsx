import { NavLink } from "react-router-dom";
import useNetworkStore from "../../store/networkStore";

function Sidebar() {
  const fetchNetwork = useNetworkStore((state) => state.fetchNetwork);

  const navItems = [
    { label: "Dashboard", path: "/dashboard" },
    { label: "Network", path: "/network" },
    { label: "Devices", path: "/devices" },
    { label: "Alerts", path: "/alerts" },
    { label: "Prediction", path: "/prediction" },
    { label: "Copilot", path: "/copilot" },
    { label: "Telemetry", path: "/telemetry" },
  ];

  return (
    <aside className="dashboard-sidebar">
      <div className="sidebar-brand">
        <span className="sidebar-brand__logo">PRISM</span>
        <p className="sidebar-brand__subtitle">Network Intelligence</p>
      </div>

      <div className="sidebar-nav">
        {navItems.map((item) => (
          <NavLink
            key={item.label}
            to={item.path}
            className={({ isActive }) => `sidebar-link ${isActive ? "active" : ""}`}
            onMouseEnter={() => item.path === "/network" && fetchNetwork()}
            onFocus={() => item.path === "/network" && fetchNetwork()}
          >
            <span className="sidebar-link__icon" />
            <span>{item.label}</span>
          </NavLink>
        ))}
      </div>

      <div className="sidebar-cta">
        <h4>Stay ahead of outages</h4>
        <p>Access critical intelligence and keep your network healthy with proactive alerts.</p>
        <NavLink to="/network" className="sidebar-cta__button" onMouseEnter={() => fetchNetwork()}>
          Get insights
        </NavLink>
      </div>
    </aside>
  );
}

export default Sidebar;
