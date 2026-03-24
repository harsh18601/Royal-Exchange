"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Mail, Phone, MapPin } from "lucide-react";
import { getSiteConfig } from "@/lib/contentful";

export default function ContactPage() {
  const [siteConfig, setSiteConfig] = useState<any>(null);

  useEffect(() => {
    getSiteConfig().then(setSiteConfig);
  }, []);

  return (
    <div className="pt-32 pb-24 bg-black min-h-screen">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-16">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
        >
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-8 uppercase tracking-tighter">Get in Touch</h1>
          <p className="text-gray-400 text-lg mb-12 font-light">
            Our gemstone specialists are available to assist you with sourcing, investment strategies, and technical specifications.
          </p>

          <div className="space-y-8">
            <div className="flex items-start gap-4 group">
              <div className="p-3 bg-luxury-ruby/10 rounded-xl group-hover:bg-luxury-ruby/20 transition-colors">
                <Mail className="text-luxury-ruby w-6 h-6" />
              </div>
              <div>
                <h4 className="text-white font-bold mb-1 uppercase text-xs tracking-widest">Email Our Desk</h4>
                <p className="text-gray-400 font-light">{siteConfig?.fields?.email || "concierge@gemora.com"}</p>
              </div>
            </div>
            <div className="flex items-start gap-4 group">
              <div className="p-3 bg-luxury-ruby/10 rounded-xl group-hover:bg-luxury-ruby/20 transition-colors">
                <Phone className="text-luxury-ruby w-6 h-6" />
              </div>
              <div>
                <h4 className="text-white font-bold mb-1 uppercase text-xs tracking-widest">Direct Wholesale Line</h4>
                <p className="text-gray-400 font-light">{siteConfig?.fields?.phone || "+1 (800) GEMORA-1"}</p>
              </div>
            </div>
            <div className="flex items-start gap-4 group">
              <div className="p-3 bg-luxury-ruby/10 rounded-xl group-hover:bg-luxury-ruby/20 transition-colors">
                <MapPin className="text-luxury-ruby w-6 h-6" />
              </div>
              <div>
                <h4 className="text-white font-bold mb-1 uppercase text-xs tracking-widest">Sourcing HQ</h4>
                <p className="text-gray-400 font-light whitespace-pre-line">{siteConfig?.fields?.address || "77 Diamond Tower, Geneva, Switzerland"}</p>
              </div>
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          className="bg-zinc-900/50 border border-white/10 rounded-3xl p-8 backdrop-blur-sm"
        >
          <form className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <label className="text-xs uppercase tracking-widest text-gray-500 font-bold">Name</label>
                <input type="text" className="w-full bg-black/50 border border-white/10 rounded-xl px-4 py-3 focus:outline-none focus:border-luxury-ruby text-white" />
              </div>
              <div className="space-y-2">
                <label className="text-xs uppercase tracking-widest text-gray-500 font-bold">Email</label>
                <input type="email" className="w-full bg-black/50 border border-white/10 rounded-xl px-4 py-3 focus:outline-none focus:border-luxury-ruby text-white" />
              </div>
            </div>
            <div className="space-y-2">
              <label className="text-xs uppercase tracking-widest text-gray-500 font-bold">Subject</label>
              <input type="text" className="w-full bg-black/50 border border-white/10 rounded-xl px-4 py-3 focus:outline-none focus:border-luxury-ruby text-white" />
            </div>
            <div className="space-y-2">
              <label className="text-xs uppercase tracking-widest text-gray-500 font-bold">Message</label>
              <textarea rows={5} className="w-full bg-black/50 border border-white/10 rounded-xl px-4 py-3 focus:outline-none focus:border-luxury-ruby text-white"></textarea>
            </div>
            <button className="w-full bg-luxury-ruby text-white font-bold py-4 rounded-xl hover:bg-red-700 transition-colors uppercase tracking-[0.2em] text-sm">
              Send Inquiry
            </button>
          </form>
        </motion.div>
      </div>
    </div>
  );
}
