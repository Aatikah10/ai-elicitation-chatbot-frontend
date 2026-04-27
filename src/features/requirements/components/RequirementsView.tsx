"use client";

import { Sidebar } from "../../layout/Sidebar";
import { TopBar } from "../../layout/TopBar";

export const RequirementsView = () => {
    const data = [
        { id: "REQ-001", desc: "User can authenticate via email and password", type: "Functional", conf: "0.97", emo: "😊 Satisfied", source: "Chat #1" },
        { id: "REQ-002", desc: "Personalized product recommendations based on purchase history", type: "Functional", conf: "0.92", emo: "😊 Satisfied", source: "Chat #1" },
        { id: "REQ-003", desc: "Real-time recommendations with hourly batch fallback", type: "Non-Func", conf: "0.85", emo: "😕 Uncertain", source: "Chat #1" },
        { id: "REQ-004", desc: "System must handle 500+ concurrent users without degradation", type: "Non-Func", conf: "0.91", emo: "😐 Neutral", source: "Chat #2" },
        { id: "REQ-005", desc: "Admin can manage product catalog via dashboard", type: "Functional", conf: "0.94", emo: "😊 Satisfied", source: "Chat #2" },
        { id: "REQ-006", desc: "System shall send email notifications for order updates", type: "Functional", conf: "0.88", emo: "😊 Satisfied", source: "Chat #3" },
    ];

    return (
        <>
            <Sidebar />
            <div className="app-main">
                <TopBar />
                <div id="page-requirements" className="page active">
                    <div className="page-content">
                        <div className="section-hdr">
                            <div>
                                <div className="section-title">Requirements</div>
                                <div className="page-sub">E-Commerce Recommendation System · PRJ-001</div>
                            </div>
                            <div style={{ display: "flex", gap: "10px", alignItems: "center" }}>
                                <select style={{ width: "160px" }}>
                                    <option>All Types</option>
                                    <option>Functional</option>
                                    <option>Non-Functional</option>
                                </select>
                                <button className="btn btn-success">⬇ Export SRS</button>
                            </div>
                        </div>
                        <div className="card" style={{ padding: 0, overflow: "hidden" }}>
                            <table className="data-table">
                                <thead>
                                    <tr>
                                        <th>ID</th>
                                        <th>Description</th>
                                        <th>Type</th>
                                        <th>Confidence</th>
                                        <th>Emotion</th>
                                        <th>Source</th>
                                        <th>Actions</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {data.map((r) => (
                                        <tr key={r.id}>
                                            <td><span className="req-id">{r.id}</span></td>
                                            <td>{r.desc}</td>
                                            <td><span className={`pill ${r.type === 'Functional' ? 'pill-func' : 'pill-nf'}`}>{r.type}</span></td>
                                            <td><span style={{ color: "var(--accent2)", fontFamily: "'Space Mono', monospace", fontSize: "12px" }}>{r.conf}</span></td>
                                            <td>{r.emo}</td>
                                            <td style={{ fontSize: "12px", color: "var(--text3)" }}>{r.source}</td>
                                            <td><button className="btn btn-ghost btn-sm">Edit</button></td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};
