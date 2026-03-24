"use client";

import { useAuth } from "@/context/AuthContext";
import { useRouter } from "next/navigation";
import { useEffect } from "react";
import { ShieldAlert } from "lucide-react";

export default function AdminPage() {
  const { user, isLoggedIn, isLoading } = useAuth();
  const router = useRouter();

  useEffect(() => {
    if (!isLoading && (!isLoggedIn || user?.role !== 'admin')) {
      router.push("/");
    }
  }, [isLoading, isLoggedIn, user, router]);

  if (isLoading || !isLoggedIn || user?.role !== 'admin') {
    return (
      <div className="min-h-screen bg-luxury-black flex items-center justify-center">
        <div className="text-white uppercase tracking-[0.5em] text-[10px] font-black animate-pulse">
          Authenticating Admin Access...
        </div>
      </div>
    );
  }

  return (
    <div className="pt-32 pb-24 bg-luxury-black min-h-screen">
      <div className="max-w-7xl mx-auto px-6">
        <div className="glass-card p-12 text-center">
          <ShieldAlert className="w-16 h-16 text-luxury-ruby mx-auto mb-8" />
          <h1 className="text-4xl font-black text-white uppercase tracking-tighter mb-4">Institutional Oversight</h1>
          <p className="text-gray-500 text-xs font-bold uppercase tracking-[0.4em] max-w-md mx-auto mb-12">
            You have accessed the administrative terminal. Inventory management and user auditing protocols are active.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-left">
             <div className="bg-white/5 p-8 rounded-[2rem] border border-white/5">
                <p className="text-gray-500 text-[10px] font-black uppercase tracking-widest mb-1">Total Assets</p>
                <h3 className="text-2xl font-black text-white font-mono">142 Items</h3>
             </div>
             <div className="bg-white/5 p-8 rounded-[2rem] border border-white/5">
                <p className="text-gray-500 text-[10px] font-black uppercase tracking-widest mb-1">Active Inquiries</p>
                <h3 className="text-2xl font-black text-white font-mono">12 Pending</h3>
             </div>
             <div className="bg-white/5 p-8 rounded-[2rem] border border-white/5">
                <p className="text-gray-500 text-[10px] font-black uppercase tracking-widest mb-1">Client Base</p>
                <h3 className="text-2xl font-black text-white font-mono">1,024 Members</h3>
             </div>
          </div>
        </div>
      </div>
    </div>
  );
}
