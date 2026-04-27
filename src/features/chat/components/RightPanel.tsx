"use client";

interface Requirement {
    id: string;
    type: string;
    text: string;
    conf: string;
}

export const RightPanel = ({ requirements }: { requirements: Requirement[] }) => {
    return (
        <div className="chat-panel">
            <div className="panel-title">Extracted Requirements</div>
            <div id="req-panel">
                {requirements.map((req, i) => (
                    <div key={i} className="req-chip">
                        <div className="req-chip-id">{req.id} · {req.type}</div>
                        <div className="req-chip-text">{req.text}</div>
                        <div className="req-chip-conf">conf: {req.conf}</div>
                    </div>
                ))}
            </div>
            <div className="divider"></div>
            <div className="panel-title">Session</div>
            <div style={{ fontSize: "12px", color: "var(--text2)", lineHeight: 2 }}>
                <div>📁 E-Commerce Rec. · PRJ-001</div>
                <div>🕐 Duration: 14 min</div>
                <div>📊 {requirements.length} reqs extracted</div>
                <div>👤 Ali Hassan</div>
            </div>
            <button className="btn btn-ghost btn-sm" style={{ width: "100%", justifyContent: "center", marginTop: "14px" }}>
                View All Requirements →
            </button>
        </div>
    );
};
