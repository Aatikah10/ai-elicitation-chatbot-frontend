"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

export const Sidebar = () => {
    const pathname = usePathname();

    const menuItems = [
        { name: "Dashboard", href: "/dashboard", icon: "⬡" },
        { name: "Projects", href: "/projects", icon: "◫" },
        { name: "Chat", href: "/chat", icon: "◎" },
    ];

    const dataItems = [
        { name: "Requirements", href: "/requirements", icon: "≡" },
        { name: "Analytics", href: "/analytics", icon: "◈" },
    ];

    const systemItems = [
        { name: "Admin Panel", href: "/admin", icon: "◧" },
    ];

    const isActive = (href: string) => pathname === href;

    return (
        <aside className="sidebar">
            <div className="sb-logo">
                <div className="sb-logo-mark">REQ·AI</div>
                <div className="sb-logo-sub">v1.0 · FYP 2025 · IIUI</div>
            </div>
            <nav className="sb-nav">
                <div className="sb-section">Main</div>
                {menuItems.map((item) => (
                    <Link
                        key={item.href}
                        href={item.href}
                        className={`sb-item ${isActive(item.href) ? "active" : ""}`}
                    >
                        <span className="sb-icon">{item.icon}</span>
                        {item.name}
                    </Link>
                ))}

                <div className="sb-section" style={{ marginTop: "8px" }}>Data</div>
                {dataItems.map((item) => (
                    <Link
                        key={item.href}
                        href={item.href}
                        className={`sb-item ${isActive(item.href) ? "active" : ""}`}
                    >
                        <span className="sb-icon">{item.icon}</span>
                        {item.name}
                    </Link>
                ))}

                <div className="sb-section" style={{ marginTop: "8px" }}>System</div>
                {systemItems.map((item) => (
                    <Link
                        key={item.href}
                        href={item.href}
                        className={`sb-item ${isActive(item.href) ? "active" : ""}`}
                    >
                        <span className="sb-icon">{item.icon}</span>
                        {item.name}
                    </Link>
                ))}
            </nav>
            <div className="sb-footer">
                <div className="avatar">A</div>
                <div style={{ flex: 1, minWidth: 0 }}>
                    <div className="sb-name">Ali Hassan</div>
                    <div className="sb-role">Stakeholder</div>
                </div>
                <Link
                    href="/"
                    className="logout-btn"
                    style={{ fontSize: "13px", color: "var(--text3)", cursor: "pointer", textDecoration: "none" }}
                    title="Logout"
                >
                    ⏏
                </Link>
            </div>
        </aside>
    );
};
