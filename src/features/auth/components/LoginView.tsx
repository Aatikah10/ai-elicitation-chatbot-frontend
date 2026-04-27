"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";

export const LoginView = () => {
    const router = useRouter();

    const handleLogin = (e: React.FormEvent) => {
        e.preventDefault();
        router.push("/dashboard");
    };

    return (
        <div id="scr-login" className="screen active">
            <div className="auth-screen">
                <div className="auth-card fade-up">
                    <Link href="/" className="auth-back">← Back to Home</Link>
                    <div className="auth-logo">REQ·AI</div>
                    <div className="auth-tag">AI Requirement Elicitation · IIUI FYP 2025</div>
                    <div className="auth-heading">Welcome back</div>
                    <form onSubmit={handleLogin}>
                        <div className="form-group">
                            <label>Email address</label>
                            <input type="email" placeholder="you@example.com" />
                        </div>
                        <div className="form-group">
                            <label>Password</label>
                            <input type="password" placeholder="••••••••" />
                        </div>
                        <button type="submit" className="btn btn-primary" style={{ width: "100%", justifyContent: "center", marginTop: "6px" }}>
                            Sign In →
                        </button>
                    </form>
                    <div className="divider-or"><span>or</span></div>
                    <button className="btn btn-ghost" style={{ width: "100%", justifyContent: "center" }} onClick={() => router.push("/dashboard")}>
                        👤 Demo Login (Stakeholder)
                    </button>
                    <div className="auth-footer">No account? <Link href="/signup">Sign up free</Link></div>
                </div>
            </div>
        </div>
    );
};
