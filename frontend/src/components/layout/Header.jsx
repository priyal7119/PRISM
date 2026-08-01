// src/components/layout/Header.jsx
import { useState, useEffect } from "react";
import { Search, Bell, Sun, Moon, ShieldCheck, User, ChevronRight } from "lucide-react";

function Header() {
    const [theme, setTheme] = useState(() => localStorage.getItem("prism_theme") || "dark");

    useEffect(() => {
        document.documentElement.setAttribute("data-theme", theme);
        localStorage.setItem("prism_theme", theme);
    }, [theme]);

    const toggleTheme = () => {
        setTheme((prev) => (prev === "dark" ? "light" : "dark"));
    };

    return (
        <header className="header">
            <div className="header-left">
                <div className="header-breadcrumbs">
                    <span className="breadcrumb-root">PRISM</span>
                    <ChevronRight size={14} className="breadcrumb-sep" />
                    <span className="breadcrumb-current">NOC Operations</span>
                </div>
            </div>

            <div className="header-center">
                <div className="header-search-bar">
                    <Search size={18} className="search-icon" />
                    <input type="text" placeholder="Search devices, alerts, telemetry metrics, IP addresses..." />
                    <kbd>⌘K</kbd>
                </div>
            </div>

            <div className="header-actions">
                <button
                    className="icon-btn-header"
                    title="System Notifications"
                    aria-label="Notifications"
                >
                    <Bell size={20} />
                    <span className="notification-badge-dot"></span>
                </button>

                <button
                    className="icon-btn-header"
                    onClick={toggleTheme}
                    title={`Switch to ${theme === "dark" ? "Light" : "Dark"} Mode`}
                    aria-label="Toggle theme"
                >
                    {theme === "dark" ? <Sun size={20} /> : <Moon size={20} />}
                </button>

                <div className="header-user-badge">
                    <div className="user-avatar-box">
                        <User size={18} />
                    </div>
                    <div className="user-info">
                        <span className="user-name">Admin User</span>
                        <span className="user-role">Super Admin</span>
                    </div>
                    <ShieldCheck size={16} className="user-shield-icon" />
                </div>
            </div>
        </header>
    );
}

export default Header;