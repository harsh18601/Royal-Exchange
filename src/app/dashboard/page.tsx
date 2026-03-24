"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { useAuth } from "@/context/AuthContext";
import { useRouter } from "next/navigation";
import { 
  Wallet, 
  Clock, 
  MessageSquare, 
  Settings, 
  LogOut, 
  ChevronRight, 
  TrendingUp, 
  ShieldCheck,
  CreditCard,
  ShoppingBag
} from "lucide-react";

export default function DashboardPage() {
  const { user, isLoggedIn, isLoading, logout } = useAuth();
  const router = useRouter();
  const [activeTab, setActiveTab ] = useState("overview");

  useEffect(() => {
    if (!isLoading && !isLoggedIn) {
      router.push("/auth/login");
    }
  }, [isLoading, isLoggedIn, router]);

  if (isLoading || !isLoggedIn) {
    return (
      <div className="min-h-screen bg-luxury-black flex items-center justify-center">
        <div className="text-white uppercase tracking-[0.5em] text-[10px] font-black animate-pulse">
          Establishing Secure Connection...
        </div>
      </div>
    );
  }

  return (
    <div className="pt-32 pb-24 bg-luxury-black min-h-screen">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          {/* Sidebar */}
          <div className="lg:col-span-3">
             <div className="glass-card p-8 sticky top-32">
                <div className="flex items-center gap-4 mb-10">
                   <div className="w-12 h-12 bg-luxury-ruby rounded-2xl flex items-center justify-center font-black text-white">
                      {user?.name?.substring(0, 2).toUpperCase()}
                   </div>
                   <div>
                      <h4 className="text-white font-bold uppercase text-xs tracking-widest">{user?.name}</h4>
                      <p className="text-gray-500 text-[10px] font-bold uppercase tracking-widest">{user?.role === 'admin' ? 'Administrator' : 'Elite Member'}</p>
                   </div>
                </div>

                <nav className="space-y-2">
                   {[
                     { id: "overview", icon: Wallet, label: "Overview" },
                     { id: "transactions", icon: Clock, label: "Ledger" },
                     { id: "inquiries", icon: MessageSquare, label: "Inquiries" },
                     { id: "settings", icon: Settings, label: "Security" }
                   ].map((item) => (
                     <button
                        key={item.id}
                        onClick={() => setActiveTab(item.id)}
                        className={`w-full flex items-center justify-between p-4 rounded-xl transition-all ${
                          activeTab === item.id ? "bg-luxury-ruby text-white" : "text-gray-500 hover:bg-white/5"
                        }`}
                     >
                        <div className="flex items-center gap-3">
                           <item.icon className="w-4 h-4" />
                           <span className="text-[10px] font-black uppercase tracking-widest">{item.label}</span>
                        </div>
                        <ChevronRight className={`w-3 h-3 ${activeTab === item.id ? "opacity-100" : "opacity-0"}`} />
                     </button>
                   ))}
                   <button 
                     onClick={logout}
                     className="w-full flex items-center gap-3 p-4 rounded-xl text-gray-500 hover:text-red-500 transition-all mt-8"
                   >
                      <LogOut className="w-4 h-4" />
                      <span className="text-[10px] font-black uppercase tracking-widest">Log Out</span>
                   </button>
                </nav>
             </div>
          </div>

          {/* Main Content */}
          <div className="lg:col-span-9 space-y-8">
             {/* Header Stat Cards */}
             <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="glass-card p-8 group">
                   <div className="flex justify-between items-start mb-6">
                      <div className="p-3 bg-luxury-gold/10 rounded-xl group-hover:bg-luxury-gold/20 transition-colors">
                         <Wallet className="text-luxury-gold w-6 h-6" />
                      </div>
                      <TrendingUp className="text-green-500 w-4 h-4" />
                   </div>
                   <p className="text-gray-500 text-[10px] font-black uppercase tracking-widest mb-1">Available Capital</p>
                   <h2 className="text-3xl font-black text-white font-display uppercase">$1,240,500</h2>
                </div>
                <div className="glass-card p-8 group">
                   <div className="flex justify-between items-start mb-6">
                      <div className="p-3 bg-luxury-ruby/10 rounded-xl group-hover:bg-luxury-ruby/20 transition-colors">
                         <ShieldCheck className="text-luxury-ruby w-6 h-6" />
                      </div>
                      <p className="text-[10px] text-luxury-gold font-bold">Lvl 4</p>
                   </div>
                   <p className="text-gray-500 text-[10px] font-black uppercase tracking-widest mb-1">Trust Score</p>
                   <h2 className="text-3xl font-black text-white font-display uppercase">Verified</h2>
                </div>
                <div className="glass-card p-8 group">
                   <div className="flex justify-between items-start mb-6">
                      <div className="p-3 bg-luxury-sapphire/10 rounded-xl group-hover:bg-luxury-sapphire/20 transition-colors">
                         <CreditCard className="text-luxury-sapphire w-6 h-6" />
                      </div>
                   </div>
                   <p className="text-gray-500 text-[10px] font-black uppercase tracking-widest mb-1">Stones in Vault</p>
                   <h2 className="text-3xl font-black text-white font-display uppercase">12 Units</h2>
                </div>
             </div>

             {/* Dynamic Content */}
             <motion.div
                key={activeTab}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                className="glass-card p-10 min-h-[500px]"
             >
                 {activeTab === "overview" && (
                   <div className="flex flex-col items-center justify-center py-20 text-center">
                     <div className="w-20 h-20 bg-white/5 rounded-full flex items-center justify-center mb-8 border border-white/10 group animate-pulse">
                        <ShoppingBag className="w-8 h-8 text-gray-500 group-hover:text-luxury-ruby transition-colors" />
                     </div>
                     <h3 className="text-white font-bold text-xl uppercase tracking-widest mb-4">No Active Acquisitions</h3>
                     <p className="text-gray-500 text-xs font-medium max-w-sm mb-10 leading-relaxed uppercase tracking-widest">Your private vault is currently empty. Explore our investment-grade collection to start building your legacy.</p>
                     <a 
                       href="/catalog"
                       className="px-10 py-4 bg-luxury-ruby text-white text-[10px] font-black uppercase tracking-[0.3em] rounded-full hover:bg-red-700 transition-all shadow-xl shadow-red-900/20"
                     >
                       Browse Catalog
                     </a>
                   </div>
                 )}
                {activeTab !== "overview" && (
                   <div className="flex flex-col items-center justify-center h-80 opacity-20">
                      <Clock className="w-12 h-12 mb-4" />
                      <p className="uppercase tracking-[0.5em] text-xs font-black">Decrypting Secure Ledger...</p>
                   </div>
                )}
             </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
}
