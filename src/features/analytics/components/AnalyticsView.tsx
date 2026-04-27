"use client";

import { Sidebar } from "../../layout/Sidebar";
import { TopBar } from "../../layout/TopBar";

export const AnalyticsView = () => {
    return (
        <>
            <Sidebar />
            <div className="app-main">
                <TopBar />
                <div id="page-analytics" className="page active">
                    <div className="page-content">
                        <div className="section-title">Analytics</div>
                        <div className="page-sub">Insight across all projects and elicitation sessions</div>
                        <div className="stat-grid">
                            <div className="card"><div className="card-title">Total Requirements</div><div className="card-value" style={{ color: "var(--accent)" }}>47</div><div className="card-sub">Functional: 31 · Non-func: 16</div></div>
                            <div className="card"><div className="card-title">Completeness Score</div><div className="card-value" style={{ color: "var(--accent2)" }}>78%</div><div className="card-sub">Based on IEEE SRS template</div></div>
                            <div className="card"><div className="card-title">Chat Sessions</div><div className="card-value" style={{ color: "var(--accent3)" }}>12</div><div className="card-sub">Avg. 3.9 reqs / session</div></div>
                        </div>
                        <div className="analytics-grid" style={{ marginBottom: "18px" }}>
                            <div className="card">
                                <div className="card-title" style={{ marginBottom: "16px" }}>Emotion Distribution</div>
                                <div className="emo-bar"><div className="emo-label"><span>😊 Satisfied</span><span>45%</span></div><div className="bar-track"><div className="bar-fill" style={{ width: "45%", background: "var(--accent2)" }}></div></div></div>
                                <div className="emo-bar"><div className="emo-label"><span>😕 Confused</span><span>28%</span></div><div className="bar-track"><div className="bar-fill" style={{ width: "28%", background: "var(--accent3)" }}></div></div></div>
                                <div className="emo-bar"><div className="emo-label"><span>😤 Frustrated</span><span>15%</span></div><div className="bar-track"><div className="bar-fill" style={{ width: "15%", background: "var(--danger)" }}></div></div></div>
                                <div className="emo-bar"><div className="emo-label"><span>😐 Neutral</span><span>12%</span></div><div className="bar-track"><div className="bar-fill" style={{ width: "12%", background: "var(--text3)" }}></div></div></div>
                            </div>
                            <div className="card">
                                <div className="card-title" style={{ marginBottom: "16px" }}>Confidence Distribution</div>
                                <div className="emo-bar"><div className="emo-label"><span>High ≥ 0.90</span><span>62%</span></div><div className="bar-track"><div className="bar-fill" style={{ width: "62%", background: "var(--accent)" }}></div></div></div>
                                <div className="emo-bar"><div className="emo-label"><span>Medium 0.75 – 0.90</span><span>28%</span></div><div className="bar-track"><div className="bar-fill" style={{ width: "28%", background: "var(--accent3)" }}></div></div></div>
                                <div className="emo-bar"><div className="emo-label"><span>Low &lt; 0.75</span><span>10%</span></div><div className="bar-track"><div className="bar-fill" style={{ width: "10%", background: "var(--danger)" }}></div></div></div>
                            </div>
                            <div className="card">
                                <div className="card-title" style={{ marginBottom: "16px" }}>Completeness by Project</div>
                                <div className="info-row"><span>E-Commerce Recommendation</span><span style={{ fontFamily: "'Space Mono', monospace", fontSize: "12px", color: "var(--accent2)" }}>88%</span></div>
                                <div className="info-row"><span>Library Management System</span><span style={{ fontFamily: "'Space Mono', monospace", fontSize: "12px", color: "var(--accent2)" }}>76%</span></div>
                                <div className="info-row"><span>Hospital Scheduling System</span><span style={{ fontFamily: "'Space Mono', monospace", fontSize: "12px", color: "var(--accent3)" }}>41%</span></div>
                            </div>
                            <div className="card">
                                <div className="card-title" style={{ marginBottom: "16px" }}>Requirement Types</div>
                                <div className="info-row"><span>Functional</span><span className="badge badge-blue">31 (66%)</span></div>
                                <div className="info-row"><span>Non-Functional</span><span className="badge badge-orange">16 (34%)</span></div>
                                <div className="divider"></div>
                                <div style={{ fontSize: "12px", color: "var(--text2)" }}>Top categories: Auth, Performance, Data Management</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};
