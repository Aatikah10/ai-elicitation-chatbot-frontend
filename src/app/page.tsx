"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { BrainCircuit, ArrowRight, MessageSquare, Sparkles, Zap, ShieldCheck } from "lucide-react";

export default function Home() {
  return (
    <div className="min-h-screen bg-white font-[family-name:var(--font-geist-sans)] selection:bg-indigo-600 selection:text-white">
      {/* ── NAVIGATION ────────────────────────────────────────── */}
      <nav className="h-24 flex items-center justify-between px-10 md:px-20 max-w-[1920px] mx-auto sticky top-0 bg-white/80 backdrop-blur-xl z-50">
        <div className="flex items-center gap-2.5">
          <div className="bg-slate-900 p-2 rounded-xl text-white shadow-lg shadow-slate-900/20">
            <BrainCircuit className="w-7 h-7" />
          </div>
          <span className="text-2xl font-black tracking-tighter text-slate-900">RequirementAI</span>
        </div>
        
        <div className="hidden md:flex items-center gap-10">
          <Link href="#" className="text-slate-500 font-bold text-sm tracking-wide hover:text-slate-900 transition-colors uppercase">Platform</Link>
          <Link href="#" className="text-slate-500 font-bold text-sm tracking-wide hover:text-slate-900 transition-colors uppercase">Pricing</Link>
          <Link href="#" className="text-slate-500 font-bold text-sm tracking-wide hover:text-slate-900 transition-colors uppercase">Enterprise</Link>
        </div>

        <div className="flex items-center gap-6">
          <Link href="/login" className="text-slate-900 font-bold text-sm px-6 py-2">Sign In</Link>
          <Link href="/signup" className="bg-slate-900 text-white rounded-xl py-3 px-8 text-sm font-bold active:scale-[0.98] transition-all shadow-xl shadow-slate-900/10">
            Get Started
          </Link>
        </div>
      </nav>

      {/* ── HERO SECTION ──────────────────────────────────────── */}
      <main className="max-w-[1920px] mx-auto px-10 md:px-20 pt-20 pb-40">
        <div className="flex flex-col items-center text-center max-w-5xl mx-auto space-y-12">
          <motion.div 
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className="inline-flex items-center gap-2 bg-indigo-50 border border-indigo-100 text-indigo-600 px-4 py-1.5 rounded-full text-xs font-black uppercase tracking-widest shadow-sm"
          >
            <Zap className="w-3 h-3 fill-current" />
            Empowering Modern Product Management
          </motion.div>

          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-6xl md:text-8xl font-black tracking-tight text-slate-900 leading-[0.95]"
          >
            Generate precise <span className="text-indigo-600">requirements</span> with AI.
          </motion.h1>

          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-xl md:text-2xl text-slate-500 font-medium max-w-3xl leading-relaxed"
          >
            Bridge the gap between vision and execution. Our elicitation agent talks through your features and builds high-quality, developer-ready docs instantly.
          </motion.p>

          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.3 }}
            className="flex flex-col sm:flex-row items-center gap-4 pt-6"
          >
            <Link href="/signup" className="group flex items-center gap-3 bg-indigo-600 border border-indigo-700 hover:bg-indigo-700 text-white px-10 py-5 rounded-2xl font-black text-lg transition-all shadow-2xl shadow-indigo-600/30">
              Start Free Trial
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1.5 transition-transform" />
            </Link>
            <div className="text-slate-400 font-bold px-10 py-5 cursor-pointer hover:text-slate-900 transition-colors flex items-center gap-2 group">
              <MessageSquare className="w-5 h-5 group-hover:fill-slate-100 transition-colors" />
              Watch Demo Video
            </div>
          </motion.div>
        </div>

        {/* Features Preview */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mt-40">
           <FeatureCard 
             icon={<Sparkles className="w-7 h-7 text-fuchsia-600" />} 
             title="Semantic Understanding" 
             desc="Deeply understands human language nuances for complex product logic." 
           />
           <FeatureCard 
             icon={<MessageSquare className="w-7 h-7 text-blue-600" />} 
             title="Conversational UI" 
             desc="Interactive guided sessions designed for stakeholders of all technical levels." 
           />
           <FeatureCard 
             icon={<ShieldCheck className="w-7 h-7 text-emerald-600" />} 
             title="Export & Compliance" 
             desc="Instantly generates standard Jira, PDF, or Markdown documentation." 
           />
        </div>
      </main>

      {/* Footer */}
      <footer className="py-20 border-t border-slate-100 px-10 md:px-20 max-w-[1920px] mx-auto flex flex-col items-center">
         <div className="text-slate-300 font-black text-4xl mb-6 tracking-tighter opacity-40">RAI©</div>
         <p className="text-slate-400 font-medium pb-2">Final Year Project Demo 2026</p>
         <div className="flex gap-6 mt-4 opacity-50 font-bold text-xs uppercase tracking-widest text-slate-400 cursor-default">
           <span>Terms</span>
           <span>Privacy</span>
           <span>Status</span>
         </div>
      </footer>
    </div>
  );
}

function FeatureCard({ icon, title, desc }: { icon: React.ReactNode, title: string, desc: string }) {
  return (
    <motion.div 
      whileHover={{ y: -8 }}
      className="bg-white border-2 border-slate-50 p-10 rounded-3xl transition-all shadow-sm hover:border-slate-100 hover:shadow-xl hover:shadow-slate-200/50"
    >
      <div className="mb-8">{icon}</div>
      <h3 className="text-2xl font-black text-slate-900 mb-4 tracking-tight">{title}</h3>
      <p className="text-slate-500 font-medium leading-relaxed">{desc}</p>
    </motion.div>
  );
}
