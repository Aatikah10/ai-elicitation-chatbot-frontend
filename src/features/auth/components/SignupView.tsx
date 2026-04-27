"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";

export const SignupView = () => {
    const router = useRouter();

    const handleSignup = (e: React.FormEvent) => {
        e.preventDefault();
        router.push("/dashboard");
    };

    return (
        <div id="scr-signup" className="screen active">
            <div className="auth-screen">
                <div className="auth-card fade-up">
                    <Link href="/" className="auth-back">← Back to Home</Link>
                    <div className="auth-logo">REQ·AI</div>
                    <div className="auth-tag">Create your account — it&apos;s free</div>
                    <div className="auth-heading">Get started today</div>
                    <form onSubmit={handleSignup}>
                        <div className="form-group">
                            <label>Full Name</label>
                            <input placeholder="Ali Hassan" />
                        </div>
                        <div className="form-group">
                            <label>Email address</label>
                            <input type="email" placeholder="you@example.com" />
                        </div>
                        <div className="form-group">
                            <label>Role</label>
                            <select><option>Stakeholder</option><option>Business Analyst</option><option>Viewer</option></select>
                        </div>
                        <div className="form-group">
                            <label>Password</label>
                            <input type="password" placeholder="Min 8 characters" />
                        </div>
                        <div className="form-group">
                            <label>Confirm Password</label>
                            <input type="password" placeholder="Repeat password" />
                        </div>
                        <button type="submit" className="btn btn-success" style={{ width: "100%", justifyContent: "center", marginTop: "6px" }}>
                            Create Account
                        </button>
                    </form>
                    <div className="auth-footer">Already have an account? <Link href="/login">Sign in</Link></div>
                </div>
            </div>
        </div>
    );
};
