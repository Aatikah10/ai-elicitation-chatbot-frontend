"use client";

import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { LogIn, Mail, Lock, Loader2, Sparkles, AlertCircle } from "lucide-react";
import { toast } from "react-hot-toast";

import { loginUser, clearAuthError } from "@/redux/authSlice";
import { AppDispatch, RootState } from "@/redux/store";

export default function LoginPage() {
  const [form, setForm] = useState({ email: "", password: "" });
  const [isSubmitting, setIsSubmitting] = useState(false);
  
  const dispatch = useDispatch<AppDispatch>();
  const router = useRouter();
  
  const { loading, error, isAuthenticated } = useSelector((state: RootState) => state.auth);

  useEffect(() => {
    // If already authenticated, redirect to dashboard
    if (isAuthenticated) {
      router.push("/dashboard");
    }
  }, [isAuthenticated, router]);

  useEffect(() => {
    // Clear any previous auth errors on mount
    dispatch(clearAuthError());
  }, [dispatch]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!form.email || !form.password) {
      toast.error("Please fill in all fields");
      return;
    }

    setIsSubmitting(true);
    const result = await dispatch(loginUser(form));
    setIsSubmitting(false);

    if (loginUser.fulfilled.match(result)) {
      toast.success("Welcome back!");
      router.push("/dashboard");
    } else if (result.payload) {
        toast.error(result.payload as string);
    }
  };

  return (
    <div className="min-h-screen grid lg:grid-cols-2 bg-slate-50 font-[family-name:var(--font-geist-sans)]">
      {/* ── LEFT SIDE: CONTENT ─────────────────────────────────── */}
      <div className="hidden lg:flex flex-col justify-center items-center p-12 bg-gradient-to-tr from-indigo-700 via-violet-600 to-fuchsia-500 relative overflow-hidden">
        {/* Abstract background shapes */}
        <div className="absolute top-0 left-0 w-full h-full opacity-10 pointer-events-none">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-white rounded-full blur-[100px]" />
          <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-fuchsia-400 rounded-full blur-[100px]" />
        </div>
        
        <motion.div 
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          className="text-white relative z-10 max-w-md text-center"
        >
          <div className="inline-flex p-3 rounded-2xl bg-white/10 backdrop-blur-xl mb-6 items-center justify-center border border-white/20">
            <Sparkles className="w-8 h-8 text-fuchsia-200" />
          </div>
          <h1 className="text-5xl font-bold tracking-tight mb-6 bg-clip-text text-white">
            Requirement Chatbot
          </h1>
          <p className="text-xl text-indigo-50/80 leading-relaxed font-light">
            Empower your development process with AI-driven elicitation. Streamline workflows and bridge the gap between stakeholders.
          </p>
        </motion.div>
      </div>

      {/* ── RIGHT SIDE: FORM ───────────────────────────────────── */}
      <div className="flex flex-col justify-center items-center p-6 md:p-12">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="w-full max-w-md space-y-8"
        >
          <div className="text-center">
            <h2 className="text-4xl font-extrabold text-slate-900 mb-2">Login</h2>
            <p className="text-slate-500">Sign in to your dashboard</p>
          </div>

          <AnimatePresence>
            {error && (
              <motion.div 
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: 'auto' }}
                exit={{ opacity: 0, height: 0 }}
                className="bg-rose-50 border-l-4 border-rose-500 p-4 flex items-start gap-3 rounded-r-lg"
              >
                <AlertCircle className="w-5 h-5 text-rose-500 shrink-0 mt-0.5" />
                <p className="text-sm text-rose-700 leading-tight">{error}</p>
              </motion.div>
            )}
          </AnimatePresence>

          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="space-y-4">
              {/* Email field */}
              <div className="space-y-1">
                <label className="text-sm font-semibold text-slate-700 ml-1">Email Address</label>
                <div className="relative group">
                  <Mail className="absolute left-3.5 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-400 group-focus-within:text-violet-500 transition-colors" />
                  <input
                    type="email"
                    required
                    placeholder="you@example.com"
                    value={form.email}
                    onChange={(e) => setForm({ ...form, email: e.target.value })}
                    className="w-full pl-11 pr-4 py-3.5 bg-white border border-slate-200 rounded-xl outline-none focus:ring-2 focus:ring-violet-500/20 focus:border-violet-500 transition-all text-slate-900 placeholder:text-slate-400 shadow-sm"
                  />
                </div>
              </div>

              {/* Password field */}
              <div className="space-y-1">
                <div className="flex justify-between items-center ml-1">
                  <label className="text-sm font-semibold text-slate-700">Password</label>
                  <Link href="#" className="text-xs font-medium text-violet-600 hover:text-violet-500 transition-colors">
                    Forgot password?
                  </Link>
                </div>
                <div className="relative group">
                  <Lock className="absolute left-3.5 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-400 group-focus-within:text-violet-500 transition-colors" />
                  <input
                    type="password"
                    required
                    placeholder="••••••••"
                    value={form.password}
                    onChange={(e) => setForm({ ...form, password: e.target.value })}
                    className="w-full pl-11 pr-4 py-3.5 bg-white border border-slate-200 rounded-xl outline-none focus:ring-2 focus:ring-violet-500/20 focus:border-violet-500 transition-all text-slate-900 placeholder:text-slate-400 shadow-sm"
                  />
                </div>
              </div>
            </div>

            <button
              disabled={isSubmitting || loading}
              type="submit"
              className="w-full bg-slate-900 hover:bg-slate-800 disabled:bg-slate-300 transform transition-all active:scale-[0.98] text-white py-3.5 rounded-xl font-bold flex items-center justify-center gap-2 group shadow-xl shadow-slate-900/10"
            >
              {(isSubmitting || loading) ? (
                <Loader2 className="w-5 h-5 animate-spin" />
              ) : (
                <>
                  <LogIn className="w-5 h-5 group-hover:translate-x-0.5 transition-transform" />
                  Sign In
                </>
              )}
            </button>
          </form>

          <div className="text-center pt-4">
            <p className="text-slate-500 text-sm">
              Don&apos;t have an account?{" "}
              <Link href="/signup" className="text-violet-600 font-bold hover:underline transition-all">
                Create Account
              </Link>
            </p>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
