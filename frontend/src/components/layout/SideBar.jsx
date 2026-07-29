// src/components/layout/SideBar.jsx
import { NavLink } from "react-router-dom";
import useNetworkStore from "../../store/networkStore";

function Sidebar() {
  const fetchNetwork = useNetworkStore((state) => state.fetchNetwork);

  const navItems = [
    { label: "Dashboard", path: "/dashboard" },
    { label: "Network Health", path: "/network" },
    { label: "AI Predictions", path: "/predictions" },
    { label: "AI Copilot", path: "/copilot" },
    { label: "Devices", path: "/devices" },
    { label: "Alerts", path: "/alerts" },
    { label: "Reports", path: "/reports" },
    { label: "Settings", path: "/settings" },
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

    </aside>
  );
}

export default Sidebar;