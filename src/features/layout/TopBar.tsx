"use client";

import { usePathname } from "next/navigation";

export const TopBar = () => {
    const pathname = usePathname();

    const getTitle = () => {
        switch (pathname) {
            case "/dashboard": return "Dashboard";
            case "/projects": return "Projects";
            case "/chat": return "Chat";
            case "/requirements": return "Requirements";
            case "/analytics": return "Analytics";
            case "/admin": return "Admin Panel";
            default: return "Dashboard";
        }
    };

    return (
        <header className="topbar">
            <div className="topbar-title">{getTitle()}</div>
            <div className="topbar-right">
                <span className="badge badge-live">Live</span>
                <span style={{ fontSize: "13px", color: "var(--text2)" }}>EcomRec · PRJ-001</span>
                <div className="avatar" style={{ width: "28px", height: "28px", fontSize: "11px", cursor: "pointer" }}>
                    A
                </div>
            </div>
        </header>
    );
};
