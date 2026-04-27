"use client";

import { Sidebar } from "../../layout/Sidebar";
import { TopBar } from "../../layout/TopBar";

export const AdminView = () => {
    return (
        <>
            <Sidebar />
            <div className="app-main">
                <TopBar />
                <div id="page-admin" className="page active">
                    <div className="page-content">
                        <div className="section-title">Admin Panel</div>
                        <div className="page-sub">System management, users, and configuration</div>
                        <div className="admin-grid">
                            <div className="card">
                                <div className="card-title" style={{ marginBottom: "16px" }}>User Management</div>
                                <div className="user-row">
                                    <div className="avatar" style={{ width: "36px", height: "36px", fontSize: "13px" }}>A</div>
                                    <div style={{ flex: 1 }}><div className="user-name">Ali Hassan</div><div className="user-email">ali@fyp.iiui.edu.pk</div></div>
                                    <span className="pill pill-stakeholder">Stakeholder</span>
                                </div>
                                <div className="user-row">
                                    <div className="avatar" style={{ width: "36px", height: "36px", fontSize: "13px", background: "linear-gradient(135deg,#f59e0b,#f06565)" }}>S</div>
                                    <div style={{ flex: 1 }}><div className="user-name">Sara Khan</div><div className="user-email">sara@fyp.iiui.edu.pk</div></div>
                                    <span className="pill pill-analyst">Analyst</span>
                                </div>
                                <div className="user-row">
                                    <div className="avatar" style={{ width: "36px", height: "36px", fontSize: "13px", background: "linear-gradient(135deg,#f06565,#a78bfa)" }}>M</div>
                                    <div style={{ flex: 1 }}><div className="user-name">Muhammad Ali</div><div className="user-email">admin@fyp.iiui.edu.pk</div></div>
                                    <span className="pill pill-admin">Admin</span>
                                </div>
                                <button className="btn btn-ghost btn-sm" style={{ marginTop: "16px" }}>+ Add User</button>
                            </div>
                            <div className="card">
                                <div className="card-title" style={{ marginBottom: "16px" }}>Knowledge Base Upload</div>
                                <div className="upload-zone">
                                    <div style={{ fontSize: "36px", marginBottom: "12px" }}>📄</div>
                                    <div style={{ fontSize: "14px", color: "var(--text2)" }}>Drop documents here to upload</div>
                                    <div style={{ fontSize: "12px", color: "var(--text3)", marginTop: "5px" }}>PDF, DOCX, TXT supported</div>
                                </div>
                                <button className="btn btn-primary" style={{ width: "100%", justifyContent: "center", marginTop: "13px" }}>⬆ Upload to RAG</button>
                            </div>
                            <div className="card">
                                <div className="card-title" style={{ marginBottom: "16px" }}>System Status</div>
                                <div className="info-row"><span className="lbl">AI Model</span><span className="badge badge-green">● Online</span></div>
                                <div className="info-row"><span className="lbl">Vector Database</span><span className="badge badge-green">● Connected</span></div>
                                <div className="info-row"><span className="lbl">API Gateway</span><span className="badge badge-green">● Healthy</span></div>
                                <div className="info-row"><span className="lbl">Emotion Engine</span><span className="badge badge-green">● Running</span></div>
                                <div className="info-row"><span className="lbl">Model Version</span><span style={{ fontFamily: "'Space Mono', monospace", fontSize: "12px", color: "var(--accent)" }}>v1.0.3</span></div>
                            </div>
                            <div className="card">
                                <div className="card-title" style={{ marginBottom: "16px" }}>Uploaded Documents</div>
                                <div className="info-row"><span>IEEE_SRS_Template.pdf</span><span style={{ fontSize: "11px", color: "var(--text3)" }}>2.1 MB</span></div>
                                <div className="info-row"><span>Requirements_Guide.docx</span><span style={{ fontSize: "11px", color: "var(--text3)" }}>840 KB</span></div>
                                <div className="info-row"><span>Domain_Glossary.txt</span><span style={{ fontSize: "11px", color: "var(--text3)" }}>120 KB</span></div>
                                <div className="info-row"><span>SWEBOK_v3_Extract.pdf</span><span style={{ fontSize: "11px", color: "var(--text3)" }}>1.4 MB</span></div>
                                <div style={{ marginTop: "13px", fontSize: "12px", color: "var(--text2)" }}>4 documents · All indexed in RAG ✓</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};
