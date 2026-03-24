"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { Sparkles, ArrowRight, ShieldCheck, Gem, Globe } from "lucide-react";
import Testimonials from "@/components/Testimonials";

export default function Home() {
  return (
    <main className="min-h-screen bg-luxury-black overflow-x-hidden">
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center pt-20">
        <div className="absolute inset-0 z-0 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-luxury-black/50 to-luxury-black z-10" />
          <motion.div 
            initial={{ scale: 1.2, opacity: 0 }}
            animate={{ scale: 1, opacity: 0.4 }}
            transition={{ duration: 2 }}
            className="w-full h-full bg-[url('/luxury_ruby_gemstone_1774331709105.png')] bg-cover bg-center blur-sm animate-pulse-slow font-display" 
          />
        </div>

        <div className="relative z-20 text-center px-6 max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="flex items-center justify-center gap-3 mb-8">
              <span className="h-px w-12 bg-luxury-gold/50" />
              <span className="text-luxury-gold tracking-[0.6em] text-[10px] font-black uppercase font-display">Est. 1924 • Heritage & Trust</span>
              <span className="h-px w-12 bg-luxury-gold/50" />
            </div>
            
            <h1 className="text-6xl md:text-9xl font-black text-white mb-8 tracking-tighter leading-[0.85] font-display uppercase">
              The Sovereign <br />
              <span className="text-gradient-gold">Collection</span>
            </h1>
            
            <p className="text-gray-400 text-lg md:text-2xl max-w-3xl mx-auto mb-12 leading-relaxed font-light">
              Acquire investment-grade, ethically sourced Rubies and Sapphires through our AI-curated private exchange.
            </p>

            <div className="flex flex-col md:flex-row items-center justify-center gap-6">
              <Link href="/catalog">
                <motion.button
                  whileHover={{ scale: 1.02, y: -2 }}
                  whileTap={{ scale: 0.98 }}
                  className="bg-luxury-ruby text-white px-12 py-6 rounded-full font-black text-xs tracking-[0.3em] uppercase hover:bg-red-700 transition-all shadow-2xl shadow-red-900/40 flex items-center gap-3"
                >
                  Enter Exchange <ArrowRight className="w-4 h-4" />
                </motion.button>
              </Link>
              <Link href="/about">
                <motion.button
                  whileHover={{ scale: 1.02, y: -2 }}
                  whileTap={{ scale: 0.98 }}
                  className="glass-button text-white px-12 py-6 rounded-full font-black text-xs tracking-[0.3em] uppercase"
                >
                  Our Heritage
                </motion.button>
              </Link>
            </div>

            <div className="mt-20 flex flex-wrap justify-center gap-12 opacity-50 grayscale transition-all hover:grayscale-0">
               <div className="flex items-center gap-2">
                 <ShieldCheck className="w-5 h-5 text-luxury-gold" />
                 <span className="text-[10px] font-bold text-white uppercase tracking-widest">GIA Certified Vaults</span>
               </div>
               <div className="flex items-center gap-2">
                 <Globe className="w-5 h-5 text-luxury-gold" />
                 <span className="text-[10px] font-bold text-white uppercase tracking-widest">Global Secure Logistics</span>
               </div>
               <div className="flex items-center gap-2">
                 <Sparkles className="w-5 h-5 text-luxury-gold" />
                 <span className="text-[10px] font-bold text-white uppercase tracking-widest">GemAI Intelligence</span>
               </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Verification & Trust Section */}
      <section className="py-32 bg-luxury-black border-y border-white/5 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-luxury-ruby/5 blur-[120px] -z-10 animate-pulse-slow" />
        
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
            <motion.div
               initial={{ opacity: 0, x: -30 }}
               whileInView={{ opacity: 1, x: 0 }}
               viewport={{ once: true }}
            >
              <p className="text-luxury-ruby font-black uppercase tracking-[0.4em] mb-4 text-xs">Unmatched Credibility</p>
              <h2 className="text-4xl md:text-6xl font-black text-white mb-8 tracking-tighter uppercase font-display leading-tight">
                Beyond the <br />Standard <span className="text-luxury-gold italic">Proof</span>
              </h2>
              <div className="space-y-8">
                <div className="flex gap-6 p-8 glass-card">
                  <div className="w-14 h-14 bg-luxury-ruby/10 rounded-2xl flex items-center justify-center shrink-0">
                    <ShieldCheck className="w-7 h-7 text-luxury-ruby" />
                  </div>
                  <div>
                    <h4 className="text-white font-bold uppercase tracking-widest mb-2">Multilateral Verification</h4>
                    <p className="text-gray-400 text-sm leading-relaxed font-light">Every stone is verified by GIA, IGI, and GemAI's proprietary internal neural analysis before listing.</p>
                  </div>
                </div>
                <div className="flex gap-6 p-8 glass-card">
                  <div className="w-14 h-14 bg-luxury-gold/10 rounded-2xl flex items-center justify-center shrink-0">
                    <Globe className="w-7 h-7 text-luxury-gold" />
                  </div>
                  <div>
                    <h4 className="text-white font-bold uppercase tracking-widest mb-2">Immutable Provenance</h4>
                    <p className="text-gray-400 text-sm leading-relaxed font-light">Track the entire history from mine to market through our secure, blockchain-verified ledger system.</p>
                  </div>
                </div>
              </div>
            </motion.div>

            <motion.div
               initial={{ opacity: 0, scale: 0.9 }}
               whileInView={{ opacity: 1, scale: 1 }}
               viewport={{ once: true }}
               className="relative"
            >
              <div className="aspect-square glass-card p-1 items-center justify-center flex overflow-hidden group">
                 <img 
                    src="/luxury_sapphire_gemstone_1_1774331732593.png" 
                    alt="Authenticity Verification" 
                    className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110"
                 />
                 <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-60" />
                 <div className="absolute bottom-10 left-10 right-10 p-8 glass-card animate-float">
                    <div className="flex justify-between items-center mb-4">
                       <span className="text-[10px] font-black text-white uppercase tracking-[0.3em]">Certification Verified</span>
                       <Sparkles className="w-4 h-4 text-luxury-gold" />
                    </div>
                    <p className="text-white text-xl font-bold font-mono">ID: RE-2024-8842</p>
                    <p className="text-gray-400 text-[10px] uppercase font-bold tracking-widest mt-2">Verified by AI Intelligence Protocol</p>
                 </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Value Proposition */}
      <section className="py-24 bg-luxury-black">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-12">
          {[
            { icon: ShieldCheck, title: "100+ Years Heritage", subtitle: "Established 1924", color: "text-luxury-ruby", desc: "A century of gemstone expertise passed down through generations." },
            { icon: Gem, title: "Top 0.1% Quality", subtitle: "Investment Grade", color: "text-luxury-sapphire", desc: "We strictly trade in unheated, inclusion-free, top-tier natural stones." },
            { icon: Globe, title: "Global Compliance", subtitle: "Certified & Legal", color: "text-luxury-gold", desc: "Fully registered and compliant with international gemstone trading laws." }
          ].map((item, i) => (
            <motion.div 
               key={i}
               whileHover={{ y: -10 }}
               className="text-center p-12 glass-card group transition-all duration-500 hover:border-luxury-gold/30"
            >
              <div className={`w-20 h-20 bg-white/5 rounded-3xl flex items-center justify-center mx-auto mb-8 transition-all duration-500 group-hover:scale-110`}>
                <item.icon className={`w-10 h-10 ${item.color}`} />
              </div>
              <p className="text-luxury-ruby text-[10px] font-black uppercase tracking-[0.4em] mb-2">{item.subtitle}</p>
              <h3 className="text-white font-bold text-2xl mb-4 font-display uppercase tracking-tight">{item.title}</h3>
              <p className="text-gray-500 text-sm leading-relaxed font-light">{item.desc}</p>
            </motion.div>
          ))}
        </div>
      </section>

      <Testimonials />

      {/* Final Trust CTA */}
      <section className="py-32 relative overflow-hidden">
        <div className="absolute left-0 bottom-0 w-[500px] h-[500px] bg-luxury-gold/5 blur-[150px] -z-10" />
        <div className="max-w-5xl mx-auto px-6 text-center">
          <motion.div
             initial={{ opacity: 0, y: 20 }}
             whileInView={{ opacity: 1, y: 0 }}
             viewport={{ once: true }}
          >
            <Sparkles className="w-16 h-16 text-luxury-gold mx-auto mb-10 animate-spin-slow" />
            <h2 className="text-5xl md:text-7xl font-black text-white mb-8 tracking-tighter font-display uppercase">Secure Your <br />Financial <span className="text-gradient-gold italic">Legacy</span></h2>
            <p className="text-gray-400 mb-12 text-xl font-light max-w-2xl mx-auto leading-relaxed">Join our private network of elite gemstone collectors and institutional investors.</p>
            <div className="flex flex-col md:flex-row gap-6 justify-center">
               <button className="bg-white text-black px-14 py-6 rounded-full font-black text-xs tracking-[0.3em] uppercase hover:bg-luxury-gold hover:text-white transition-all shadow-xl">
                 Open Client Account
               </button>
               <button className="glass-button text-white px-14 py-6 rounded-full font-black text-xs tracking-[0.3em] uppercase">
                 Contact Concierge
               </button>
            </div>
          </motion.div>
        </div>
      </section>
    </main>
  );
}
