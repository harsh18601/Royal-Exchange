"use client";

import { motion } from "framer-motion";
import { ShieldCheck, FileText, UserCheck, Lock } from "lucide-react";

export default function KYCPage() {
  return (
    <div className="pt-40 pb-24 bg-luxury-black min-h-screen text-white">
      <div className="max-w-4xl mx-auto px-6">
        <motion.div
           initial={{ opacity: 0, y: 20 }}
           animate={{ opacity: 1, y: 0 }}
        >
          <div className="flex items-center gap-4 mb-8">
            <div className="p-3 bg-luxury-ruby/10 rounded-2xl">
              <ShieldCheck className="text-luxury-ruby w-8 h-8" />
            </div>
            <h1 className="text-4xl md:text-6xl font-black uppercase font-display tracking-tight">KYC <span className="text-luxury-gold italic">Protocol</span></h1>
          </div>
          
          <p className="text-gray-400 text-lg mb-12 font-light leading-relaxed">
            To maintain the integrity of our high-value gemstone exchange, all clients must undergo a rigorous Know Your Customer (KYC) verification process before initiating acquisitions or trades.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
            <div className="glass-card p-10">
              <FileText className="text-luxury-gold w-10 h-10 mb-6" />
              <h3 className="text-xl font-bold uppercase mb-4 tracking-wide font-display">Individual Clients</h3>
              <ul className="space-y-4 text-gray-400 text-sm font-light">
                <li className="flex gap-2"><span>•</span> Government-issued Passport (Valid)</li>
                <li className="flex gap-2"><span>•</span> Proof of Residence (Last 3 Months)</li>
                <li className="flex gap-2"><span>•</span> Source of Wealth Declaration</li>
                <li className="flex gap-2"><span>•</span> Biometric Verification</li>
              </ul>
            </div>
            <div className="glass-card p-10">
              <UserCheck className="text-luxury-ruby w-10 h-10 mb-6" />
              <h3 className="text-xl font-bold uppercase mb-4 tracking-wide font-display">Corporate Entities</h3>
              <ul className="space-y-4 text-gray-400 text-sm font-light">
                <li className="flex gap-2"><span>•</span> Certificate of Incorporation</li>
                <li className="flex gap-2"><span>•</span> Articles of Association</li>
                <li className="flex gap-2"><span>•</span> Register of Directors & Shareholders</li>
                <li className="flex gap-2"><span>•</span> Proof of Corporate Address</li>
              </ul>
            </div>
          </div>

          <div className="p-8 bg-zinc-900/50 border border-white/5 rounded-3xl flex items-start gap-6">
            <Lock className="text-gray-500 w-6 h-6 shrink-0 mt-1" />
            <div>
              <p className="text-white font-bold uppercase text-xs tracking-widest mb-2">Secure Processing</p>
              <p className="text-gray-500 text-xs leading-relaxed">
                All uploaded documents are encrypted using AES-256 standards and processed by our secure compliance department in Geneva. Data is never shared with third parties except as required by Swiss financial regulations.
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
