"use client";

import { motion } from "framer-motion";
import { Mail, Lock, Sparkles, ArrowRight } from "lucide-react";
import Link from "next/link";

export default function LoginPage() {
  return (
    <div className="pt-32 pb-24 bg-black min-h-screen flex items-center justify-center px-6">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="w-full max-w-md bg-zinc-900/50 border border-white/10 rounded-[2.5rem] p-10 backdrop-blur-sm"
      >
        <div className="text-center mb-10">
          <div className="w-16 h-16 bg-luxury-ruby rounded-2xl flex items-center justify-center mx-auto mb-6">
            <Lock className="text-white w-8 h-8" />
          </div>
          <h1 className="text-3xl font-bold text-white mb-2 uppercase tracking-tighter">Client Login</h1>
          <p className="text-gray-500 text-sm font-light">Access your private gemstone collection</p>
        </div>

        <form className="space-y-6">
          <div className="space-y-2">
            <label className="text-[10px] uppercase tracking-widest text-gray-400 font-bold ml-4">Email Address</label>
            <div className="relative">
              <Mail className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-600" />
              <input 
                type="email" 
                className="w-full bg-black/40 border border-white/5 rounded-2xl pl-12 pr-6 py-4 focus:outline-none focus:border-luxury-ruby text-white text-sm transition-all"
                placeholder="concierge@royal-exchange.com"
              />
            </div>
          </div>

          <div className="space-y-2">
            <label className="text-[10px] uppercase tracking-widest text-gray-400 font-bold ml-4">Access Key</label>
            <div className="relative">
              <Lock className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-600" />
              <input 
                type="password" 
                className="w-full bg-black/40 border border-white/5 rounded-2xl pl-12 pr-6 py-4 focus:outline-none focus:border-luxury-ruby text-white text-sm transition-all"
                placeholder="••••••••"
              />
            </div>
          </div>

          <div className="flex items-center justify-between text-[10px] uppercase tracking-widest font-bold px-2">
            <label className="flex items-center gap-2 text-gray-500 cursor-pointer">
              <input type="checkbox" className="w-4 h-4 rounded border-white/10 bg-black/40 accent-luxury-ruby" />
              Remember Me
            </label>
            <Link href="/auth/forgot" className="text-luxury-ruby hover:text-white transition-colors">Recover Access</Link>
          </div>

          <button className="w-full bg-luxury-ruby text-white font-bold py-5 rounded-2xl hover:bg-red-700 transition-all uppercase tracking-widest text-xs flex items-center justify-center gap-2 shadow-xl shadow-red-900/20">
            Authorize Entry <ArrowRight className="w-4 h-4" />
          </button>

          <p className="text-center text-[10px] text-gray-500 uppercase tracking-widest font-bold pt-4">
            New Prospect? <Link href="/auth/signup" className="text-white hover:text-luxury-ruby transition-colors">Request Membership</Link>
          </p>
        </form>
      </motion.div>
    </div>
  );
}
