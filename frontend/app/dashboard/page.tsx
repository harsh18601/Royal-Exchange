"use client";

import { motion } from "framer-motion";
import { User, Heart, ShoppingBag, MessageSquare, Shield, Clock, ArrowRight, Settings } from "lucide-react";
import Link from "next/link";

export default function DashboardPage() {
  const stats = [
    { label: "Acquisitions", value: "12", icon: ShoppingBag, color: "text-luxury-ruby" },
    { label: "Private Inquiries", value: "4", icon: MessageSquare, color: "text-luxury-sapphire" },
    { label: "Wishlist Items", value: "8", icon: Heart, color: "text-luxury-gold" },
    { label: "Security Level", value: "Platinum", icon: Shield, color: "text-green-500" }
  ];

  return (
    <div className="pt-32 pb-24 bg-black min-h-screen">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center justify-between mb-12 gap-8">
          <div className="flex items-center gap-6">
            <div className="w-24 h-24 bg-zinc-900 rounded-[2rem] border border-white/10 flex items-center justify-center overflow-hidden">
               <User className="text-white/20 w-12 h-12" />
            </div>
            <div>
              <h1 className="text-3xl font-black text-white uppercase tracking-tighter">Alexander Sterling</h1>
              <p className="text-luxury-gold text-xs font-bold uppercase tracking-widest">Heritage Member since 2021</p>
            </div>
          </div>
          
          <div className="flex gap-4">
            <button className="bg-white/5 border border-white/10 p-4 rounded-2xl hover:bg-white/10 transition-all text-white">
              <Settings className="w-5 h-5" />
            </button>
            <button className="bg-luxury-ruby text-white font-bold px-8 py-4 rounded-2xl hover:bg-red-700 transition-all uppercase tracking-widest text-xs">
              Open Exchange
            </button>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-12">
          {stats.map((stat, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              className="bg-zinc-900/50 border border-white/5 p-6 rounded-3xl"
            >
              <stat.icon className={`w-8 h-8 ${stat.color} mb-4`} />
              <p className="text-[10px] text-gray-500 font-bold uppercase tracking-widest mb-1">{stat.label}</p>
              <p className="text-2xl text-white font-black">{stat.value}</p>
            </motion.div>
          ))}
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          {/* Recent Orders */}
          <div className="lg:col-span-8 space-y-6">
            <div className="flex items-center justify-between mb-2">
              <h2 className="text-xl font-bold text-white uppercase tracking-tighter">Recent Acquisitions</h2>
              <Link href="/orders" className="text-[10px] text-luxury-gold font-bold uppercase tracking-widest hover:text-white transition-colors">View All</Link>
            </div>
            
            <div className="space-y-4">
              {[1, 2].map((i) => (
                <div key={i} className="bg-zinc-900/30 border border-white/5 p-6 rounded-3xl flex items-center gap-6 hover:border-white/20 transition-all">
                  <div className="w-20 h-20 bg-zinc-800 rounded-2xl flex items-center justify-center shrink-0">
                    <img src={`/luxury_sapphire_gemstone_${i}_1774331732593.png`} alt="" className="w-full h-full object-cover rounded-2xl" />
                  </div>
                  <div className="flex-1">
                    <h4 className="text-white font-bold mb-1">Royal Blue Sapphire (5.12ct)</h4>
                    <p className="text-[10px] text-gray-500 font-bold uppercase tracking-widest mb-2">Delivered • Mar 12, 2024</p>
                    <div className="flex items-center gap-2">
                      <span className="text-xs font-mono text-white">$120,000</span>
                      <span className="w-1 h-1 bg-gray-700 rounded-full" />
                      <span className="text-[10px] text-luxury-gold font-bold uppercase tracking-widest">Insurance Active</span>
                    </div>
                  </div>
                  <button className="p-3 bg-white/5 rounded-xl hover:bg-white/10 transition-all text-white">
                    <ArrowRight className="w-5 h-5" />
                  </button>
                </div>
              ))}
            </div>
          </div>

          {/* Activity Sidebar */}
          <div className="lg:col-span-4 space-y-6">
            <h2 className="text-xl font-bold text-white uppercase tracking-tighter mb-2">Security Feed</h2>
            <div className="bg-zinc-900/80 border border-white/10 rounded-3xl p-6 space-y-6">
              {[
                { time: "2h ago", text: "Login detected from Geneva, Switzerland", type: "Security" },
                { time: "1d ago", text: "Vault access granted for appraisal", type: "Vault" },
                { time: "3d ago", text: "Digital certificate signed via E-Sign", type: "Asset" }
              ].map((feed, i) => (
                <div key={i} className="flex gap-4">
                  <div className="w-2 bg-white/10 rounded-full" />
                  <div>
                    <div className="flex items-center gap-2 mb-1">
                      <Clock className="w-3 h-3 text-gray-600" />
                      <span className="text-[10px] text-gray-600 font-bold uppercase tracking-widest">{feed.time}</span>
                    </div>
                    <p className="text-xs text-white/80 leading-relaxed font-light">{feed.text}</p>
                    <p className="text-[10px] text-luxury-ruby font-bold uppercase tracking-widest mt-1 opacity-50">{feed.type}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
