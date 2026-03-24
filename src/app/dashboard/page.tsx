"use client";

import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useRouter } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { 
  BarChart3, 
  MessageSquareCode, 
  Users, 
  LogOut, 
  Settings, 
  Bell, 
  Search,
  LayoutDashboard,
  BrainCircuit,
  Plus
} from "lucide-react";
import { toast } from "react-hot-toast";

import { AppDispatch, RootState, logoutUser } from "@/redux/authSlice";
import ProtectedRoute from "@/components/auth/ProtectedRoute";
import API from "@/services/api";

export default function DashboardPage() {
  const dispatch = useDispatch<AppDispatch>();
  const router = useRouter();
  const [userData, setUserData] = useState<any>(null);
  const [isRefreshing, setIsRefreshing] = useState(false);

  useEffect(() => {
    // Fetch profile on mount
    const fetchProfile = async () => {
      try {
        const res = await API.get("/auth/me");
        setUserData(res.data);
      } catch (err) {
        console.error("Profile fetch error:", err);
      }
    };
    fetchProfile();
  }, []);

  const handleLogout = () => {
    dispatch(logoutUser());
    toast.success("Logged out successfully");
    router.push("/login"); // Fixed to /login as per logout logic
  };

  return (
    <ProtectedRoute>
      <div className="flex min-h-screen bg-slate-50 font-[family-name:var(--font-geist-sans)]">
        {/* ── SIDEBAR ────────────────────────────────────────── */}
        <aside className="w-72 bg-slate-900 text-slate-400 p-6 flex flex-col hidden lg:flex border-r border-slate-800">
          <div className="flex items-center gap-3 mb-10 text-white">
            <div className="bg-indigo-600 p-2 rounded-lg">
              <BrainCircuit className="w-6 h-6" />
            </div>
            <span className="text-xl font-bold tracking-tight">RequirementAI</span>
          </div>

          <nav className="flex-1 space-y-2">
            <SidebarItem icon={<LayoutDashboard className="w-5 h-5" />} label="Dashboard" active />
            <SidebarItem icon={<MessageSquareCode className="w-5 h-5" />} label="Elicitation Sessions" />
            <SidebarItem icon={<Users className="w-5 h-5" />} label="Team Collaboration" />
            <SidebarItem icon={<BarChart3 className="w-5 h-5" />} label="Analytics & Stats" />
            <div className="pt-8 mb-2">
              <span className="text-xs font-bold text-slate-500 uppercase px-3">System</span>
            </div>
            <SidebarItem icon={<Settings className="w-5 h-5" />} label="Project Settings" />
            <SidebarItem icon={<Bell className="w-5 h-5" />} label="Notifications" badge="3" />
          </nav>

          <div className="mt-auto pt-6 border-t border-slate-800">
            <button 
              onClick={handleLogout}
              className="flex items-center gap-3 w-full p-3 rounded-xl hover:bg-rose-500/10 hover:text-rose-400 transition-all font-medium group"
            >
              <LogOut className="w-5 h-5 group-hover:-translate-x-1 transition-transform" />
              <span>Logout Session</span>
            </button>
          </div>
        </aside>

        {/* ── MAIN CONTENT ───────────────────────────────────── */}
        <main className="flex-1 flex flex-col">
          {/* Top Bar */}
          <header className="h-20 bg-white border-b border-slate-200 flex items-center justify-between px-8 sticky top-0 z-10">
            <div className="relative w-96 hidden md:block group">
              <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400 group-focus-within:text-indigo-600 transition-colors" />
              <input 
                type="text" 
                placeholder="Search requirements, sessions..." 
                className="w-full pl-10 pr-4 py-2 bg-slate-100 border-none rounded-lg outline-none focus:ring-2 focus:ring-indigo-600/10 focus:bg-white transition-all text-sm"
              />
            </div>

            <div className="flex items-center gap-6">
              <div className="text-right flex flex-col items-end">
                <span className="text-sm font-bold text-slate-900 leading-none mb-1">
                  {userData?.name || "User"}
                </span>
                <span className="text-[10px] font-bold uppercase tracking-wider text-indigo-600 px-1.5 py-0.5 bg-indigo-50 rounded">
                  {userData?.role || "Viewer"}
                </span>
              </div>
              <div className="w-10 h-10 rounded-full bg-indigo-100 border-2 border-white shadow-sm flex items-center justify-center text-indigo-700 font-bold overflow-hidden">
                {userData?.name?.charAt(0) || "U"}
              </div>
            </div>
          </header>

          <div className="p-8 max-w-7xl mx-auto w-full">
            <div className="flex items-center justify-between mb-10">
              <div>
                <h1 className="text-3xl font-extrabold text-slate-900 mb-1">Project Overview</h1>
                <p className="text-slate-500">Welcome back! Here's what's happening today.</p>
              </div>
              <button className="bg-indigo-600 hover:bg-indigo-700 active:scale-95 transition-all text-white px-5 py-2.5 rounded-xl font-bold flex items-center gap-2 shadow-lg shadow-indigo-600/20">
                <Plus className="w-5 h-5" />
                Start New Session
              </button>
            </div>

            {/* Grid of Cards */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
              <StatCard title="Active Sessions" value="12" sub="4 in progress" />
              <StatCard title="Requirements Found" value="158" sub="+24 this week" />
              <StatCard title="Review Status" value="92%" sub="Efficiency Score" />
            </div>

            {/* Welcome Illustration Section */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="bg-slate-900 rounded-3xl p-10 flex flex-col md:flex-row items-center gap-10 overflow-hidden relative"
            >
              <div className="absolute top-0 right-0 p-20 opacity-20 pointer-events-none">
                <BrainCircuit className="w-64 h-64 text-indigo-400 -rotate-12 translate-x-20 -translate-y-20" />
              </div>

              <div className="flex-1 z-10 relative">
                <h2 className="text-3xl font-bold text-white mb-4">Start your next session</h2>
                <p className="text-slate-400 text-lg mb-8 max-w-lg leading-relaxed font-light">
                  Use our AI assistant to talk through product features and automatically generate high-quality requirement documentation.
                </p>
                <button className="bg-white text-slate-900 px-8 py-3 rounded-xl font-bold hover:bg-indigo-50 transition-colors">
                  Open Chatbot
                </button>
              </div>

              <div className="flex-shrink-0 w-64 h-64 bg-slate-800 rounded-2xl flex items-center justify-center border border-slate-700 rotate-3 z-10 transition-transform hover:rotate-0 duration-500">
                <MessageSquareCode className="w-32 h-32 text-indigo-500" />
              </div>
            </motion.div>
          </div>
        </main>
      </div>
    </ProtectedRoute>
  );
}

// ── HELPERS ───────────────────────────────────────────────────

function SidebarItem({ icon, label, active, badge }: { icon: React.ReactNode, label: string, active?: boolean, badge?: string }) {
  return (
    <div className={`flex items-center justify-between p-3 rounded-xl transition-all cursor-pointer group ${active ? 'bg-indigo-600 text-white' : 'hover:bg-slate-800'}`}>
      <div className="flex items-center gap-3">
        {icon}
        <span className="font-medium">{label}</span>
      </div>
      {badge && (
        <span className="bg-indigo-500/20 text-indigo-300 text-[10px] font-black px-2 py-1 rounded-lg">
          {badge}
        </span>
      )}
    </div>
  );
}

function StatCard({ title, value, sub }: { title: string, value: string, sub: string }) {
  return (
    <div className="bg-white p-7 rounded-2xl border border-slate-200 shadow-sm transition-all hover:shadow-md group">
      <span className="text-slate-500 font-bold uppercase text-[10px] tracking-[0.15em] mb-4 block">
        {title}
      </span>
      <h3 className="text-4xl font-extrabold text-slate-900 mb-2 tracking-tight group-hover:scale-[1.02] transition-transform origin-left">
        {value}
      </h3>
      <span className="text-emerald-600 text-sm font-bold flex items-center gap-1 bg-emerald-50 w-fit px-2 py-1 rounded-lg">
        {sub}
      </span>
    </div>
  );
}
