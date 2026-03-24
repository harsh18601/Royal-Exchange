"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { Sparkles, ArrowRight, ShieldCheck, Gem, Globe } from "lucide-react";
import Testimonials from "@/components/Testimonials";

export default function Home() {
  return (
    <main className="min-h-screen bg-black overflow-x-hidden">
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center pt-20">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-black/50 to-black z-10" />
          <div className="w-full h-full bg-[url('/luxury_ruby_gemstone_1774331709105.png')] bg-cover bg-center opacity-40 scale-110 blur-sm animate-pulse-slow" />
        </div>

        <div className="relative z-20 text-center px-6 max-w-5xl">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="flex items-center justify-center gap-2 mb-6">
              <span className="h-px w-8 bg-luxury-gold" />
              <span className="text-luxury-gold tracking-[0.4em] text-xs font-bold uppercase">Heritage & Trust</span>
              <span className="h-px w-8 bg-luxury-gold" />
            </div>
            <h1 className="text-5xl md:text-8xl font-black text-white mb-8 tracking-tighter leading-tight">
              RARE <span className="text-luxury-ruby border-b-4 border-luxury-ruby/20">RUBIES</span> & <br />
              TIMELESS <span className="text-luxury-sapphire border-b-4 border-luxury-sapphire/20">SAPPHIRES</span>
            </h1>
            <p className="text-gray-400 text-lg md:text-xl max-w-2xl mx-auto mb-10 leading-relaxed font-light">
              Access the world's most exclusive collection of investment-grade, certified loose gemstones. Powered by GemAI intuition.
            </p>
            <div className="flex flex-col md:flex-row items-center justify-center gap-6">
              <Link href="/catalog">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="bg-luxury-ruby text-white px-10 py-5 rounded-full font-bold text-sm tracking-widest uppercase hover:bg-red-700 transition-all shadow-2xl shadow-red-900/20 flex items-center gap-2"
                >
                  Explore Collection <ArrowRight className="w-4 h-4" />
                </motion.button>
              </Link>
              <Link href="/ai-advisor">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="bg-white/5 backdrop-blur-md border border-white/10 text-white px-10 py-5 rounded-full font-bold text-sm tracking-widest uppercase hover:bg-white/10 transition-all"
                >
                  Consult GemAI Advisor
                </motion.button>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Value Proposition */}
      <section className="py-24 border-y border-white/5 bg-zinc-950">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-12">
          <div className="text-center group">
            <div className="w-16 h-16 bg-white/5 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:bg-luxury-ruby transition-all duration-500">
              <ShieldCheck className="w-8 h-8 text-luxury-ruby group-hover:text-white transition-colors" />
            </div>
            <h3 className="text-white font-bold text-xl mb-3">Guaranteed Authenticity</h3>
            <p className="text-gray-500 text-sm leading-relaxed">Every stone is accompanied by world-renowned laboratory certification (GIA, IGI, GRS).</p>
          </div>
          <div className="text-center group">
            <div className="w-16 h-16 bg-white/5 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:bg-luxury-sapphire transition-all duration-500">
              <Gem className="w-8 h-8 text-luxury-sapphire group-hover:text-white transition-colors" />
            </div>
            <h3 className="text-white font-bold text-xl mb-3">Investment Grade</h3>
            <p className="text-gray-500 text-sm leading-relaxed">Specializing only in natural, unheated, and top-tier color saturation gemstones.</p>
          </div>
          <div className="text-center group">
            <div className="w-16 h-16 bg-white/5 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:bg-luxury-gold transition-all duration-500">
              <Globe className="w-8 h-8 text-luxury-gold group-hover:text-white transition-colors" />
            </div>
            <h3 className="text-white font-bold text-xl mb-3">Global Sourcing</h3>
            <p className="text-gray-500 text-sm leading-relaxed">Direct access to primary markets in Burma, Mozambique, Sri Lanka, and Madagascar.</p>
          </div>
        </div>
      </section>

      {/* Featured Slabs - Dynamic UI */}
      <section className="py-24 bg-black">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-col md:flex-row items-end justify-between mb-16 gap-4">
            <div>
              <h2 className="text-4xl md:text-6xl font-black text-white mb-4">THE CURATED<br />GALLERY</h2>
              <div className="w-24 h-2 bg-luxury-ruby" />
            </div>
            <p className="text-gray-400 max-w-sm font-light text-right">
              A selection of our most rare and scientifically significant stones currently available.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <motion.div 
              whileHover={{ scale: 0.98 }}
              className="relative h-[600px] rounded-3xl overflow-hidden group cursor-pointer"
            >
              <div className="absolute inset-0 bg-[url('/luxury_ruby_gemstone_1774331709105.png')] bg-cover bg-center transition-transform duration-1000 group-hover:scale-110" />
              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent p-12 flex flex-col justify-end">
                <span className="text-luxury-ruby font-bold tracking-widest text-xs uppercase mb-2">Exclusive</span>
                <h3 className="text-4xl font-bold text-white mb-4">Imperial Rubies</h3>
                <button className="text-white flex items-center gap-2 group/btn font-bold text-sm tracking-widest uppercase">
                  Discover <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-2 transition-transform" />
                </button>
              </div>
            </motion.div>

            <motion.div 
              whileHover={{ scale: 0.98 }}
              className="relative h-[600px] rounded-3xl overflow-hidden group cursor-pointer"
            >
              <div className="absolute inset-0 bg-[url('/luxury_sapphire_gemstone_1_1774331732593.png')] bg-cover bg-center transition-transform duration-1000 group-hover:scale-110" />
              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent p-12 flex flex-col justify-end">
                <span className="text-luxury-sapphire font-bold tracking-widest text-xs uppercase mb-2">Reserved</span>
                <h3 className="text-4xl font-bold text-white mb-4">Royal Blue Sapphires</h3>
                <button className="text-white flex items-center gap-2 group/btn font-bold text-sm tracking-widest uppercase">
                  Discover <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-2 transition-transform" />
                </button>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      <Testimonials />

      {/* Call to Action */}
      <section className="py-32 relative overflow-hidden">
        <div className="absolute inset-0 bg-luxury-ruby/10 blur-[120px] -z-10" />
        <div className="max-w-4xl mx-auto px-6 text-center">
          <Sparkles className="w-12 h-12 text-luxury-gold mx-auto mb-8 animate-spin-slow" />
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-8">Ready to acquire a masterpiece?</h2>
          <p className="text-gray-400 mb-12 text-lg font-light">Join our invitation-only platform for gemstone collectors and professional traders.</p>
          <button className="bg-white text-black px-12 py-5 rounded-full font-bold text-sm tracking-[0.3em] uppercase hover:bg-luxury-gold hover:text-white transition-all">
            Get Started Now
          </button>
        </div>
      </section>
    </main>
  );
}
