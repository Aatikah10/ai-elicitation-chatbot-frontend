"use client";

import Link from "next/link";

export default function LandingPage() {
    return (
        <div id="scr-landing" className="screen active" style={{ width: '100%' }}>
            <nav className="land-nav">
                <div className="land-logo">REQ·AI</div>
                <div className="land-links">
                    <a href="#how-it-works">How It Works</a>
                    <a href="#features">Features</a>
                    <a href="#about">About</a>
                </div>
                <div className="land-nav-right">
                    <Link href="/login" className="btn btn-ghost btn-sm">Log In</Link>
                    <Link href="/signup" className="btn btn-primary btn-sm">Get Started →</Link>
                </div>
            </nav>

            {/* HERO */}
            <section className="hero">
                <div className="hero-mesh"></div>
                <div className="hero-grid"></div>
                <div className="hero-content">
                    <div className="hero-eyebrow fade-up">⚡ FYP · BSSE 2025 · IIUI · FCIT</div>
                    <h1 className="hero-title fade-up-1">
                        Elicit Requirements<br />with <span className="hl-blue">AI-Powered</span><br /><span className="hl-green">Conversation</span>
                    </h1>
                    <p className="hero-sub fade-up-2">
                        Stop struggling with incomplete, ambiguous requirements. Our AI chatbot guides stakeholders through natural conversations to extract, classify, and document system requirements — automatically.
                    </p>
                    <div className="hero-btns fade-up-3">
                        <Link href="/signup" className="btn btn-primary btn-xl">Start Eliciting Free →</Link>
                        <Link href="/login" className="btn btn-ghost btn-xl">Sign In</Link>
                    </div>
                    <div className="hero-stats fade-up-4">
                        <div>
                            <div className="hstat-num" style={{ color: "var(--accent)" }}>91%</div>
                            <div className="hstat-lbl">Avg. Confidence</div>
                        </div>
                        <div>
                            <div className="hstat-num" style={{ color: "var(--accent2)" }}>3.9×</div>
                            <div className="hstat-lbl">Faster Elicitation</div>
                        </div>
                        <div>
                            <div className="hstat-num" style={{ color: "var(--accent3)" }}>RAG</div>
                            <div className="hstat-lbl">Knowledge-Grounded</div>
                        </div>
                        <div>
                            <div className="hstat-num" style={{ color: "var(--purple)" }}>IEEE</div>
                            <div className="hstat-lbl">SRS Auto-Export</div>
                        </div>
                    </div>
                </div>
            </section>

            {/* HOW IT WORKS */}
            <section className="land-section" id="how-it-works">
                <div className="sec-eyebrow">Process</div>
                <h2 className="sec-heading">How It Works</h2>
                <p className="sec-sub">Four simple steps from conversation to a complete, documented SRS — no technical jargon needed.</p>
                <div className="steps-grid">
                    <div className="step-card">
                        <div className="step-num-row"><span className="step-num">01</span><span className="step-num-line"></span></div>
                        <div className="step-icon">💬</div>
                        <div className="step-title">Natural Conversation</div>
                        <div className="step-desc">Stakeholders describe their system in plain language. No forms. No templates. Just talk.</div>
                    </div>
                    <div className="step-card">
                        <div className="step-num-row"><span className="step-num">02</span><span className="step-num-line"></span></div>
                        <div className="step-icon">🧠</div>
                        <div className="step-title">AI Extraction</div>
                        <div className="step-desc">The AI identifies, classifies (functional / non-functional), and scores each requirement in real time.</div>
                    </div>
                    <div className="step-card">
                        <div className="step-num-row"><span className="step-num">03</span><span className="step-num-line"></span></div>
                        <div className="step-icon">😊</div>
                        <div className="step-title">Emotion Detection</div>
                        <div className="step-desc">Stakeholder sentiment is tracked to flag confusion or frustration — ensuring nothing is missed.</div>
                    </div>
                    <div className="step-card">
                        <div className="step-num-row"><span className="step-num">04</span><span className="step-num-line"></span></div>
                        <div className="step-icon">📄</div>
                        <div className="step-title">Export IEEE SRS</div>
                        <div className="step-desc">One-click IEEE-format Software Requirements Specification document from all verified requirements.</div>
                    </div>
                </div>
            </section>

            {/* FEATURES */}
            <section className="land-section features-bg" id="features">
                <div className="sec-eyebrow">Capabilities</div>
                <h2 className="sec-heading">Everything You Need</h2>
                <p className="sec-sub">Purpose-built for requirements engineering — not a generic chatbot.</p>
                <div className="feat-grid">
                    <div className="feat-card">
                        <div className="feat-icon">🤖</div>
                        <div className="feat-title">AI-Powered Elicitation</div>
                        <div className="feat-desc">Conversational AI asks smart follow-up questions to surface hidden and implicit requirements automatically.</div>
                    </div>
                    <div className="feat-card">
                        <div className="feat-icon">📚</div>
                        <div className="feat-title">RAG Knowledge Base</div>
                        <div className="feat-desc">Upload domain documents, templates, and standards. The AI grounds all responses in your actual context.</div>
                    </div>
                    <div className="feat-card">
                        <div className="feat-icon">🎯</div>
                        <div className="feat-title">Confidence Scoring</div>
                        <div className="feat-desc">Every extracted requirement includes a confidence score — analysts know exactly what needs human verification.</div>
                    </div>
                    {/* ... other features can go here ... */}
                </div>
            </section>

            <footer className="land-footer">
                <div style={{ fontFamily: "'Space Mono', monospace", color: "var(--accent)", fontWeight: 700, fontSize: "13px", letterSpacing: "2px" }}>REQ·AI</div>
                <div>FYP 2025 · BSSE · International Islamic University Islamabad · FCIT</div>
                <div>Built with ❤ for AI-driven RE</div>
            </footer>
        </div>
    );
}
