"use client";

import { motion } from "framer-motion";
import { 
  Users, 
  Database, 
  ShieldCheck, 
  BarChart, 
  Plus, 
  Search,
  ArrowUpRight
} from "lucide-react";

export default function AdminPage() {
  return (
    <div className="pt-32 pb-24 bg-luxury-black min-h-screen">
      <div className="max-w-7xl mx-auto px-6">
        <header className="flex flex-col md:flex-row justify-between items-end mb-16 gap-8">
           <div>
              <p className="text-luxury-ruby font-black uppercase tracking-[0.4em] text-[10px] mb-2">Central Management</p>
              <h1 className="text-5xl font-black text-white uppercase font-display tracking-tight">Admin <span className="text-luxury-gold italic">Intelligence</span></h1>
           </div>
           <div className="flex gap-4 w-full md:w-auto">
              <div className="relative flex-1 md:w-64">
                 <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-500" />
                 <input type="text" placeholder="Search Global Inventory" className="w-full bg-white/5 border border-white/10 rounded-xl px-12 py-4 text-xs focus:outline-none focus:border-luxury-gold" />
              </div>
              <button className="bg-luxury-gold text-black px-8 py-4 rounded-xl font-black text-xs uppercase hover:bg-white transition-all flex items-center gap-2">
                 <Plus className="w-4 h-4" /> New Listing
              </button>
           </div>
        </header>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
           {[
             { label: "Active Users", val: "12.8k", icon: Users, color: "text-blue-500" },
             { label: "Vault Value", val: "$482M", icon: Database, color: "text-luxury-ruby" },
             { label: "KYC Pending", val: "142", icon: ShieldCheck, color: "text-luxury-gold" },
             { label: "Avg. Price", val: "$52,400", icon: BarChart, color: "text-green-500" }
           ].map((stat, i) => (
             <div key={i} className="glass-card p-8">
                <div className="flex justify-between items-start mb-4">
                   <p className="text-gray-500 text-[10px] font-black uppercase tracking-widest">{stat.label}</p>
                   <stat.icon className={`w-5 h-5 ${stat.color}`} />
                </div>
                <h2 className="text-3xl font-black text-white font-display">{stat.val}</h2>
             </div>
           ))}
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
           <div className="lg:col-span-2 glass-card p-10">
              <div className="flex justify-between items-center mb-10">
                 <h3 className="text-white font-bold text-xl uppercase tracking-tighter font-display">Recent Inventory Arrivals</h3>
                 <button className="text-luxury-gold text-[10px] font-black uppercase tracking-widest hover:text-white transition-colors">View All Archive</button>
              </div>
              <div className="space-y-4">
                 {[
                   { id: "RX-102", name: "Star of Burma Ruby", weight: "5.2ct", origin: "Myanmar", status: "Listed" },
                   { id: "RX-103", name: "Imperial Ceylon Sapphire", weight: "8.1ct", origin: "Sri Lanka", status: "Pending" },
                   { id: "RX-104", name: "Mozambique Flame Ruby", weight: "3.2ct", origin: "Mozambique", status: "Sold" }
                 ].map((gem, i) => (
                   <div key={i} className="flex items-center justify-between p-6 bg-white/5 rounded-2xl hover:bg-white/10 transition-all group">
                      <div className="flex gap-6 items-center">
                         <div className="w-12 h-12 bg-zinc-800 rounded-xl"></div>
                         <div>
                            <p className="text-blue-500 text-[8px] font-black uppercase mb-1 tracking-widest">{gem.id}</p>
                            <h4 className="text-white font-bold text-sm uppercase">{gem.name}</h4>
                            <p className="text-gray-500 text-[10px] uppercase font-bold tracking-widest">{gem.weight} • {gem.origin}</p>
                         </div>
                      </div>
                      <div className="flex items-center gap-8">
                        <span className={`text-[8px] font-black uppercase tracking-widest px-3 py-1 rounded-full ${
                          gem.status === 'Listed' ? 'bg-green-500/10 text-green-500' : 
                          gem.status === 'Pending' ? 'bg-luxury-gold/10 text-luxury-gold' : 
                          'bg-white/5 text-gray-500'
                        }`}>{gem.status}</span>
                        <ArrowUpRight className="w-4 h-4 text-gray-700 group-hover:text-white transition-colors" />
                      </div>
                   </div>
                 ))}
              </div>
           </div>

           <div className="glass-card p-10">
              <h3 className="text-white font-bold text-xl uppercase tracking-tighter mb-10 font-display">System Integrity</h3>
              <div className="space-y-6">
                 {[
                   { label: "Blockchain Sync", val: "100%", status: "online" },
                   { label: "GemAI API", val: "Operational", status: "online" },
                   { label: "Market Data Feed", val: "Syncing", status: "process" },
                   { label: "SSL Certificate", val: "Valid", status: "online" }
                 ].map((sys, i) => (
                   <div key={i} className="flex items-center justify-between border-b border-white/5 pb-4">
                      <div>
                         <p className="text-white text-xs font-bold uppercase mb-1">{sys.label}</p>
                         <p className="text-gray-500 text-[10px] uppercase tracking-widest font-bold">{sys.val}</p>
                      </div>
                      <div className={`w-2 h-2 rounded-full ${sys.status === 'online' ? 'bg-green-500' : 'bg-luxury-gold animate-pulse'}`} />
                   </div>
                 ))}
              </div>
           </div>
        </div>
      </div>
    </div>
  );
}
