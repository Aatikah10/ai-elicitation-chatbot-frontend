"use client";

import { Sidebar } from "../../features/layout/Sidebar";
import { TopBar } from "../../features/layout/TopBar";
import Link from "next/link";

export default function DashboardPage() {
  return (
    <>
      <Sidebar />
      <div className="app-main">
        <TopBar />
        <div id="page-dashboard" className="page active">
          <div className="page-content">
            <div style={{ marginBottom: "22px" }}>
              <div className="section-title">Dashboard</div>
              <div className="page-sub">
                Welcome back, Ali — here&apos;s your project overview.
              </div>
            </div>
            <div className="stat-grid">
              <div className="card">
                <div className="card-title">Active Projects</div>
                <div className="card-value" style={{ color: "var(--accent)" }}>
                  3
                </div>
                <div className="card-sub">↑ 1 added this week</div>
              </div>
              <div className="card">
                <div className="card-title">Requirements Extracted</div>
                <div className="card-value" style={{ color: "var(--accent2)" }}>
                  47
                </div>
                <div className="card-sub">Across all projects</div>
              </div>
              <div className="card">
                <div className="card-title">Avg. Confidence</div>
                <div className="card-value" style={{ color: "var(--accent3)" }}>
                  91%
                </div>
                <div className="card-sub">Model accuracy score</div>
              </div>
            </div>

            <div
              style={{
                display: "grid",
                gridTemplateColumns: "2fr 1fr",
                gap: "18px",
                marginBottom: "22px",
              }}
            >
              <div className="card">
                <div className="section-hdr">
                  <div className="card-title" style={{ margin: 0 }}>
                    Recent Projects
                  </div>
                  <Link href="/projects" className="btn btn-ghost btn-sm">
                    View all →
                  </Link>
                </div>
                <div className="info-row">
                  <span>E-Commerce Recommendation System</span>
                  <span className="badge badge-blue">18 REQs</span>
                </div>
                <div className="info-row">
                  <span>Library Management System</span>
                  <span className="badge badge-green">21 REQs</span>
                </div>
                <div className="info-row">
                  <span>Hospital Scheduling System</span>
                  <span className="badge badge-orange">8 REQs</span>
                </div>
              </div>
              <div className="card">
                <div className="card-title">Emotion Summary</div>
                <div style={{ marginTop: "10px" }}>
                  <div className="emo-bar">
                    <div className="emo-label">
                      <span>😊 Satisfied</span>
                      <span>45%</span>
                    </div>
                    <div className="bar-track">
                      <div
                        className="bar-fill"
                        style={{ width: "45%", background: "var(--accent2)" }}
                      ></div>
                    </div>
                  </div>
                  <div className="emo-bar">
                    <div className="emo-label">
                      <span>😕 Confused</span>
                      <span>28%</span>
                    </div>
                    <div className="bar-track">
                      <div
                        className="bar-fill"
                        style={{ width: "28%", background: "var(--accent3)" }}
                      ></div>
                    </div>
                  </div>
                  <div className="emo-bar">
                    <div className="emo-label">
                      <span>😤 Frustrated</span>
                      <span>15%</span>
                    </div>
                    <div className="bar-track">
                      <div
                        className="bar-fill"
                        style={{ width: "15%", background: "var(--danger)" }}
                      ></div>
                    </div>
                  </div>
                  <div className="emo-bar">
                    <div className="emo-label">
                      <span>😐 Neutral</span>
                      <span>12%</span>
                    </div>
                    <div className="bar-track">
                      <div
                        className="bar-fill"
                        style={{ width: "12%", background: "var(--text3)" }}
                      ></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="card" style={{ marginBottom: "22px" }}>
              <div className="card-title" style={{ marginBottom: "14px" }}>
                Completeness by Project
              </div>
              <div
                style={{
                  display: "grid",
                  gridTemplateColumns: "repeat(3, 1fr)",
                  gap: "18px",
                }}
              >
                <div>
                  <div
                    style={{
                      fontSize: "13px",
                      fontWeight: 600,
                      marginBottom: "8px",
                    }}
                  >
                    E-Commerce Rec.
                  </div>
                  <div className="bar-track" style={{ height: "8px" }}>
                    <div
                      className="bar-fill"
                      style={{ width: "88%", background: "var(--accent)" }}
                    ></div>
                  </div>
                  <div
                    style={{
                      fontSize: "11px",
                      color: "var(--accent)",
                      marginTop: "5px",
                      fontFamily: "'Space Mono', monospace",
                    }}
                  >
                    88%
                  </div>
                </div>
                <div>
                  <div
                    style={{
                      fontSize: "13px",
                      fontWeight: 600,
                      marginBottom: "8px",
                    }}
                  >
                    Library Mgmt. System
                  </div>
                  <div className="bar-track" style={{ height: "8px" }}>
                    <div
                      className="bar-fill"
                      style={{ width: "76%", background: "var(--accent2)" }}
                    ></div>
                  </div>
                  <div
                    style={{
                      fontSize: "11px",
                      color: "var(--accent2)",
                      marginTop: "5px",
                      fontFamily: "'Space Mono', monospace",
                    }}
                  >
                    76%
                  </div>
                </div>
                <div>
                  <div
                    style={{
                      fontSize: "13px",
                      fontWeight: 600,
                      marginBottom: "8px",
                    }}
                  >
                    Hospital Scheduling
                  </div>
                  <div className="bar-track" style={{ height: "8px" }}>
                    <div
                      className="bar-fill"
                      style={{ width: "41%", background: "var(--accent3)" }}
                    ></div>
                  </div>
                  <div
                    style={{
                      fontSize: "11px",
                      color: "var(--accent3)",
                      marginTop: "5px",
                      fontFamily: "'Space Mono', monospace",
                    }}
                  >
                    41%
                  </div>
                </div>
              </div>
            </div>

            <div>
              <div className="section-title" style={{ marginBottom: "13px" }}>
                Quick Actions
              </div>
              <div style={{ display: "flex", gap: "12px", flexWrap: "wrap" }}>
                <Link href="/chat" className="btn btn-primary">
                  💬 Start New Chat
                </Link>
                <Link href="/requirements" className="btn btn-ghost">
                  📋 View Requirements
                </Link>
                <Link href="/analytics" className="btn btn-ghost">
                  📊 Analytics
                </Link>
                <Link href="/projects" className="btn btn-ghost">
                  ◫ All Projects
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
