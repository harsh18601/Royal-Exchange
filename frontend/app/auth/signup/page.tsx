"use client";

import { motion } from "framer-motion";
import { User, Mail, ShieldCheck, Sparkles, ArrowRight } from "lucide-react";
import Link from "next/link";

export default function SignupPage() {
  return (
    <div className="pt-32 pb-24 bg-black min-h-screen flex items-center justify-center px-6">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="w-full max-w-lg bg-zinc-900/50 border border-white/10 rounded-[2.5rem] p-10 backdrop-blur-sm"
      >
        <div className="text-center mb-10">
          <div className="w-16 h-16 bg-luxury-sapphire rounded-2xl flex items-center justify-center mx-auto mb-6">
            <ShieldCheck className="text-white w-8 h-8" />
          </div>
          <h1 className="text-3xl font-bold text-white mb-2 uppercase tracking-tighter text-center">Membership Request</h1>
          <p className="text-gray-500 text-sm font-light">Join the world's most exclusive gemstone network</p>
        </div>

        <form className="space-y-6">
          <div className="grid grid-cols-2 gap-6">
            <div className="space-y-2">
              <label className="text-[10px] uppercase tracking-widest text-gray-400 font-bold ml-4">Full Name</label>
              <input 
                type="text" 
                className="w-full bg-black/40 border border-white/5 rounded-2xl px-6 py-4 focus:outline-none focus:border-luxury-sapphire text-white text-sm transition-all"
                placeholder="John Sterling"
              />
            </div>
            <div className="space-y-2">
              <label className="text-[10px] uppercase tracking-widest text-gray-400 font-bold ml-4">Email Address</label>
              <input 
                type="email" 
                className="w-full bg-black/40 border border-white/5 rounded-2xl px-6 py-4 focus:outline-none focus:border-luxury-sapphire text-white text-sm transition-all"
                placeholder="concierge@royal.com"
              />
            </div>
          </div>

          <div className="space-y-2">
            <label className="text-[10px] uppercase tracking-widest text-gray-400 font-bold ml-4">Professional Role</label>
            <select className="w-full bg-black/40 border border-white/5 rounded-2xl px-6 py-4 focus:outline-none focus:border-luxury-sapphire text-white text-sm transition-all appearance-none">
              <option>Gemstone Collector</option>
              <option>Jewellery Manufacturer</option>
              <option>B2B Wholesale Buyer</option>
              <option>Professional Investor</option>
            </select>
          </div>

          <div className="space-y-2 text-center py-4 bg-white/5 rounded-2xl border border-white/5">
             <p className="text-[10px] text-luxury-gold font-bold uppercase tracking-widest mb-1 italic">Security Advisory</p>
             <p className="text-[11px] text-gray-400 px-8">All membership requests undergo a 24-hour verification process to maintain the integrity of our marketplace.</p>
          </div>

          <button className="w-full bg-luxury-sapphire text-white font-bold py-5 rounded-2xl hover:bg-blue-800 transition-all uppercase tracking-widest text-xs flex items-center justify-center gap-2 shadow-xl shadow-blue-900/20">
            Submit Application <ArrowRight className="w-4 h-4" />
          </button>

          <p className="text-center text-[10px] text-gray-500 uppercase tracking-widest font-bold pt-4">
            Already a Member? <Link href="/auth/login" className="text-white hover:text-luxury-sapphire transition-colors">Client Login</Link>
          </p>
        </form>
      </motion.div>
    </div>
  );
}
