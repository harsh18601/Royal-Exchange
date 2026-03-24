"use client";

import { motion } from "framer-motion";
import { LayoutDashboard, Gem, Users, MessageSquare, Plus, TrendingUp, DollarSign, Package, ArrowRight, Edit, Trash } from "lucide-react";

export default function AdminDashboard() {
  const stats = [
    { label: "Total Gemstones", value: "142", icon: Gem, color: "text-luxury-ruby" },
    { label: "Active Users", value: "1,204", icon: Users, color: "text-luxury-sapphire" },
    { label: "Open Inquiries", value: "24", icon: MessageSquare, color: "text-luxury-gold" },
    { label: "Monthly Revenue", value: "$4.2M", icon: DollarSign, color: "text-green-500" }
  ];

  return (
    <div className="pt-32 pb-24 bg-black min-h-screen">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center justify-between mb-12 gap-8">
          <div>
            <h1 className="text-3xl font-black text-white uppercase tracking-tighter flex items-center gap-3">
              <LayoutDashboard className="text-luxury-ruby w-8 h-8" /> Control Center
            </h1>
            <p className="text-gray-500 text-xs font-bold uppercase tracking-widest mt-1">Platform Administrator Suite</p>
          </div>
          
          <button className="bg-luxury-ruby text-white font-bold px-8 py-4 rounded-2xl hover:bg-red-700 transition-all uppercase tracking-widest text-xs flex items-center gap-2">
            <Plus className="w-4 h-4" /> Add New Gemstone
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-12">
          {stats.map((stat, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              className="bg-zinc-900 border border-white/5 p-6 rounded-3xl"
            >
              <stat.icon className={`w-6 h-6 ${stat.color} mb-4`} />
              <p className="text-[10px] text-gray-500 font-bold uppercase tracking-widest mb-1">{stat.label}</p>
              <p className="text-2xl text-white font-black">{stat.value}</p>
            </motion.div>
          ))}
        </div>

        <div className="bg-zinc-900/50 border border-white/10 rounded-[2.5rem] overflow-hidden">
          <div className="p-8 border-b border-white/5 flex items-center justify-between">
            <h2 className="text-xl font-bold text-white uppercase tracking-tighter">Inventory Management</h2>
            <div className="flex gap-4">
               <button className="text-xs font-bold text-luxury-ruby uppercase tracking-widest border-b border-luxury-ruby">All Stones</button>
               <button className="text-xs font-bold text-gray-500 uppercase tracking-widest hover:text-white transition-colors">Sold</button>
               <button className="text-xs font-bold text-gray-500 uppercase tracking-widest hover:text-white transition-colors">Reserved</button>
            </div>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full text-left">
              <thead>
                <tr className="text-[10px] uppercase tracking-[0.2em] text-gray-500 border-b border-white/5">
                  <th className="px-8 py-6">Gemstone</th>
                  <th className="px-8 py-6">Origin</th>
                  <th className="px-8 py-6">Carat</th>
                  <th className="px-8 py-6">Price</th>
                  <th className="px-8 py-6">Status</th>
                  <th className="px-8 py-6 text-right">Actions</th>
                </tr>
              </thead>
              <tbody className="text-sm">
                {[
                  { name: "Imperial Ruby", origin: "Burma", carat: "3.42", price: "$85,000", status: "Available" },
                  { name: "Velvet Sapphire", origin: "Ceylon", carat: "5.12", price: "$120,000", status: "Reserved" },
                  { name: "Midnight Sapphire", origin: "Madagascar", carat: "4.85", price: "$65,000", status: "Available" }
                ].map((gem, i) => (
                  <tr key={i} className="border-b border-white/5 hover:bg-white/5 transition-colors">
                    <td className="px-8 py-6 font-bold text-white">{gem.name}</td>
                    <td className="px-8 py-6 text-gray-400">{gem.origin}</td>
                    <td className="px-8 py-6 text-gray-400 font-mono">{gem.carat}ct</td>
                    <td className="px-8 py-6 text-white font-mono">{gem.price}</td>
                    <td className="px-8 py-6">
                      <span className={`px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-widest ${
                        gem.status === "Available" ? "bg-green-500/10 text-green-500" : "bg-luxury-gold/10 text-luxury-gold"
                      }`}>
                        {gem.status}
                      </span>
                    </td>
                    <td className="px-8 py-6 text-right">
                      <div className="flex items-center justify-end gap-3 text-gray-500">
                        <button className="hover:text-white transition-colors"><Edit className="w-4 h-4" /></button>
                        <button className="hover:text-luxury-ruby transition-colors"><Trash className="w-4 h-4" /></button>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}
