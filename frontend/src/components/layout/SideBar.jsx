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
          <svg viewBox="0 0 64 64" aria-hidden="true" className="brand-mark">
            <defs>
              <linearGradient id="prism-mark-gradient" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#ffffff" />
                <stop offset="100%" stopColor="#d8c7ff" />
              </linearGradient>
            </defs>
            <rect x="6" y="6" width="52" height="52" rx="16" fill="url(#prism-mark-gradient)" />
            <path d="M32 14 46 24v16L32 50 18 40V24l14-10Z" fill="none" stroke="#6d28d9" strokeWidth="4" strokeLinejoin="round" />
            <path d="M32 14v36" stroke="#6d28d9" strokeWidth="3.5" strokeLinecap="round" />
            <path d="M18 24l14 8 14-8" stroke="#6d28d9" strokeWidth="3.5" strokeLinecap="round" strokeLinejoin="round" />
            <path d="M18 40l14-8 14 8" stroke="#6d28d9" strokeWidth="3.5" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
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