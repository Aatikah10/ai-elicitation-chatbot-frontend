"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { useSelector, useDispatch } from "react-redux";
import { logoutUser } from "@/redux/authSlice";
import { AppDispatch, RootState } from "@/redux/store";
import API from "@/services/api";
import { Loader2 } from "lucide-react";

export default function ProtectedRoute({ children }: { children: React.ReactNode }) {
  const router = useRouter();
  const dispatch = useDispatch<AppDispatch>();
  const { token, isAuthenticated } = useSelector((state: RootState) => state.auth);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const checkAuth = async () => {
      const storedToken = localStorage.getItem("token");
      
      if (!storedToken && !token) {
        router.push("/login");
        return;
      }

      try {
        // Optional: verify the token with an endpoint like /auth/me
        await API.get("/auth/me");
        setLoading(false);
      } catch (err) {
        // If /auth/me fails, the token is likely invalid or expired
        dispatch(logoutUser());
        router.push("/login");
      }
    };

    checkAuth();
  }, [token, isAuthenticated, router, dispatch]);

  if (loading) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center bg-slate-50 gap-4">
        <Loader2 className="w-12 h-12 text-indigo-600 animate-spin" />
        <p className="text-slate-500 font-medium animate-pulse">Verifying Session...</p>
      </div>
    );
  }

  return <>{children}</>;
}
