"use client";

import { motion } from "framer-motion";
import { Eye, ShieldAlert, BarChart3, Fingerprint } from "lucide-react";

export default function AMLPage() {
  return (
    <div className="pt-40 pb-24 bg-luxury-black min-h-screen text-white font-display">
      <div className="max-w-4xl mx-auto px-6">
        <motion.div
           initial={{ opacity: 0, y: 20 }}
           animate={{ opacity: 1, y: 0 }}
        >
          <div className="flex items-center gap-4 mb-8">
            <div className="p-3 bg-luxury-ruby/10 rounded-2xl">
              <ShieldAlert className="text-luxury-ruby w-8 h-8" />
            </div>
            <h1 className="text-4xl md:text-6xl font-black uppercase tracking-tight">AML <span className="text-luxury-gold italic">Guidelines</span></h1>
          </div>
          
          <p className="text-gray-400 text-lg mb-12 font-light leading-relaxed">
            Gemora maintains a zero-tolerance policy regarding money laundering and the financing of illicit activities. Our platform is strictly compliant with international gemstone trading regulations and Swiss AML laws.
          </p>

          <div className="space-y-6 mb-16">
            {[
              { icon: Eye, title: "Transaction Monitoring", desc: "Our GemAI automatically flags any transaction patterns that deviate from established high-net-worth client behavior." },
              { icon: BarChart3, title: "Threshold Reporting", desc: "All transactions exceeding $100,000 USD are subject to mandatory reporting to relevant financial intelligence units." },
              { icon: Fingerprint, title: "Identity Validation", desc: "Multi-factor identity verification is required for all transactional activity involving physical shipment of stones." }
            ].map((feature, i) => (
              <div key={i} className="glass-card p-8 flex gap-6 items-center">
                <div className="w-12 h-12 bg-white/5 rounded-2xl flex items-center justify-center shrink-0">
                  <feature.icon className="w-6 h-6 text-luxury-gold" />
                </div>
                <div>
                  <h4 className="text-white font-bold uppercase tracking-widest text-sm mb-1">{feature.title}</h4>
                  <p className="text-gray-500 text-xs font-light">{feature.desc}</p>
                </div>
              </div>
            ))}
          </div>

          <p className="text-xs text-gray-600 uppercase tracking-widest leading-loose text-center">
            LAST UPDATED: MARCH 2024 • COMPLIANCE OFFICER: GENEVA HQ
          </p>
        </motion.div>
      </div>
    </div>
  );
}
