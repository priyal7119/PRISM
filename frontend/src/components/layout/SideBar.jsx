// src/components/layout/Sidebar.jsx
import { useState } from "react";
import { NavLink } from "react-router-dom";
import useNetworkStore from "../../store/networkStore";
import {
  LayoutDashboard,
  Activity,
  Brain,
  Bot,
  Monitor,
  TriangleAlert,
  FileBarChart,
  Settings,
  ShieldCheck,
  ChevronLeft,
  ChevronRight,
  LogOut
} from "lucide-react";

function Sidebar() {
  const [collapsed, setCollapsed] = useState(false);
  const fetchNetwork = useNetworkStore((state) => state.fetchNetwork);

  const navItems = [
    { label: "Dashboard", path: "/dashboard", icon: LayoutDashboard },
    { label: "Network Health", path: "/network", icon: Activity },
    { label: "AI Predictions", path: "/predictions", icon: Brain },
    { label: "AI Copilot", path: "/copilot", icon: Bot },
    { label: "Devices", path: "/devices", icon: Monitor },
    { label: "Alerts", path: "/alerts", icon: TriangleAlert },
    { label: "Reports", path: "/reports", icon: FileBarChart },
    { label: "Settings", path: "/settings", icon: Settings },
  ];

  return (
    <aside className={`dashboard-sidebar ${collapsed ? "collapsed" : ""}`}>
      <div className="sidebar-brand">
        <div className="brand-logo-icon">
          <ShieldCheck size={22} />
        </div>
        {!collapsed && (
          <div className="brand-text">
            <span className="sidebar-brand__logo">PRISM</span>
            <p className="sidebar-brand__subtitle">Observability Suite</p>
          </div>
        )}
        <button
          className="collapse-toggle-btn"
          onClick={() => setCollapsed(!collapsed)}
          title={collapsed ? "Expand Sidebar" : "Collapse Sidebar"}
        >
          {collapsed ? <ChevronRight size={16} /> : <ChevronLeft size={16} />}
        </button>
      </div>

      <nav className="sidebar-nav">
        {navItems.map((item) => {
          const Icon = item.icon;
          return (
            <NavLink
              key={item.label}
              to={item.path}
              className={({ isActive }) => `sidebar-link ${isActive ? "active" : ""}`}
              onMouseEnter={() => item.path === "/network" && fetchNetwork()}
              onFocus={() => item.path === "/network" && fetchNetwork()}
              title={collapsed ? item.label : undefined}
            >
              <Icon size={22} className="sidebar-icon" />
              {!collapsed && <span>{item.label}</span>}
            </NavLink>
          );
        })}
      </nav>

      <div className="sidebar-footer-status">
        <div className="status-indicator">
          <span className="pulse-dot green"></span>
          {!collapsed && <span>NOC Operational</span>}
        </div>
        {!collapsed && (
          <div className="sidebar-version-row">
            <small>v2.4.0 Enterprise</small>
            <LogOut size={14} className="logout-icon-btn" title="Open Access Mode" />
          </div>
        )}
      </div>
    </aside>
  );
}

export default Sidebar;