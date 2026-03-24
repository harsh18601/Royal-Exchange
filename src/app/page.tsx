"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import {
  ArrowRight,
  BadgeCheck,
  Bot,
  Gem,
  Globe,
  Landmark,
  Lock,
  Search,
  ShieldCheck,
  Sparkles,
} from "lucide-react";
import Testimonials from "@/components/Testimonials";

const quickStats = [
  { value: "500+", label: "Certified Stones" },
  { value: "30+", label: "Years Expertise" },
  { value: "12", label: "Countries Sourced" },
  { value: "10,000+", label: "Clients Served" },
];

const featuredStones = [
  {
    name: "Imperial Burma Ruby",
    category: "Ruby",
    carat: "5.21 ct",
    origin: "Mogok, Myanmar",
    certification: "GIA Certified",
    image: "/luxury_ruby_gemstone_1774331709105.png",
  },
  {
    name: "Ceylon Royal Sapphire",
    category: "Blue Sapphire",
    carat: "6.04 ct",
    origin: "Ratnapura, Sri Lanka",
    certification: "IGI Certified",
    image: "/luxury_sapphire_gemstone_1_1774331732593.png",
  },
];

const categoryPreviews = [
  {
    name: "Ruby Collection",
    description: "Vivid unheated rubies selected for rarity, depth, and long-term desirability.",
    image: "/luxury_ruby_gemstone_1774331709105.png",
  },
  {
    name: "Blue Sapphire",
    description: "Classic Ceylon and Kashmir blues with exceptional clarity and provenance.",
    image: "/luxury_sapphire_gemstone_1_1774331732593.png",
  },
  {
    name: "Investment Stones",
    description: "Museum-caliber gems evaluated for collectability, scarcity, and market resilience.",
    image: "/luxury_ruby_gemstone_1774331709105.png",
  },
];

const howItWorks = [
  {
    title: "Select Gemstone",
    description: "Browse curated stones chosen for rarity, beauty, and investment merit.",
    icon: Search,
  },
  {
    title: "Verify Certification",
    description: "Review origin, lab reports, and AI Gem Intelligence before you commit.",
    icon: BadgeCheck,
  },
  {
    title: "Secure Purchase",
    description: "Complete acquisition privately with white-glove support and insured logistics.",
    icon: Lock,
  },
  {
    title: "Vault Storage",
    description: "Store in certified vaults or arrange worldwide delivery through our network.",
    icon: Landmark,
  },
];

export default function Home() {
  return (
    <main className="min-h-screen bg-luxury-black overflow-x-hidden">
      <section className="relative flex min-h-screen items-center justify-center pt-24 md:pt-28">
        <div className="absolute inset-0 z-0 overflow-hidden">
          <div className="absolute inset-0 z-10 bg-gradient-to-b from-transparent via-luxury-black/45 to-luxury-black" />
          <motion.div
            initial={{ scale: 1.2, opacity: 0 }}
            animate={{ scale: 1.04, opacity: 0.55 }}
            transition={{ duration: 2 }}
            className="hero-gemstone h-full w-full bg-[url('/luxury_ruby_gemstone_1774331709105.png')] bg-cover bg-center"
          />
        </div>

        <div className="relative z-20 mx-auto max-w-7xl px-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="mx-auto max-w-4xl"
          >
            <p className="mb-5 text-[0.95rem] font-black uppercase tracking-[0.42em] text-white/78 md:text-[1.05rem]">
              The Sovereign
            </p>

            <h1 className="mb-6 font-display text-[4.2rem] font-black uppercase leading-[1.05] tracking-[-0.03em] text-white drop-shadow-[0_14px_40px_rgba(0,0,0,0.45)] md:text-[4.5rem] xl:text-[4.8rem]">
              <span className="text-gradient-gold glow-gold">Collection</span>
            </h1>

            <div className="mb-10 flex items-center justify-center gap-3">
              <span className="h-px w-10 bg-luxury-gold/40" />
              <span className="glow-gold font-display text-[0.84rem] font-bold uppercase tracking-[0.32em] text-luxury-gold md:text-[0.9rem]">
                Est. 1924 • Heritage & Trust
              </span>
              <span className="h-px w-10 bg-luxury-gold/40" />
            </div>

            <p className="mx-auto mb-14 max-w-[620px] text-[1.08rem] font-light leading-relaxed text-gray-300 md:text-[1.12rem]">
              Discover rare, investment-grade Rubies and Sapphires sourced from the world's most prestigious mines.
            </p>

            <div className="flex flex-col items-center justify-center gap-4 md:flex-row">
              <Link href="/catalog">
                <motion.button
                  whileHover={{ scale: 1.02, y: -2 }}
                  whileTap={{ scale: 0.98 }}
                  className="flex items-center gap-3 rounded-full bg-[linear-gradient(135deg,#c79b2b,#f4e18f)] px-7 py-3.5 text-[0.95rem] font-black tracking-[0.08em] text-black shadow-2xl shadow-[#b88923]/30 transition-all hover:shadow-[#f4e18f]/35"
                >
                  Browse Collection <ArrowRight className="h-4 w-4" />
                </motion.button>
              </Link>
              <Link href="/about">
                <motion.button
                  whileHover={{ scale: 1.02, y: -2 }}
                  whileTap={{ scale: 0.98 }}
                  className="glass-button rounded-full px-7 py-3.5 text-[0.95rem] font-black tracking-[0.08em] text-white"
                >
                  Our Story
                </motion.button>
              </Link>
            </div>

          </motion.div>
        </div>
      </section>

      <section className="border-y border-white/5 bg-[#0b0b0b] py-8">
        <div className="mx-auto max-w-6xl px-6">
          <div className="grid grid-cols-2 gap-4 lg:grid-cols-4">
            {quickStats.map((stat) => (
              <div key={stat.label} className="rounded-[1.75rem] border border-white/10 bg-white/[0.025] px-5 py-4 text-left">
                <p className="font-display text-2xl font-black text-white md:text-[1.9rem]">{stat.value}</p>
                <p className="mt-1.5 text-[10px] uppercase tracking-[0.28em] text-gray-400">{stat.label}</p>
              </div>
            ))}
          </div>

          <div className="mt-6 flex flex-wrap justify-center gap-3 md:gap-4">
            {[
              { icon: ShieldCheck, label: "Natural Stones" },
              { icon: Gem, label: "GIA Certified" },
              { icon: Globe, label: "Worldwide Shipping" },
              { icon: Bot, label: "AI Gem Intelligence" },
            ].map((item) => (
              <div
                key={item.label}
                className="flex items-center gap-2.5 rounded-full border border-white/10 bg-[#2f0f16]/55 px-4 py-2.5"
              >
                <item.icon className="h-4 w-4 text-luxury-gold" />
                <span className="text-[10px] font-bold uppercase tracking-[0.24em] text-white">{item.label}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-luxury-black py-24">
        <div className="mx-auto max-w-7xl px-6">
          <div className="mb-12 flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
            <div>
              <p className="mb-4 text-xs font-black uppercase tracking-[0.4em] text-luxury-ruby">Featured Gemstones</p>
              <h2 className="font-display text-4xl font-black uppercase leading-tight tracking-tighter text-white md:text-6xl">
                A selection of stones chosen for rarity and provenance.
              </h2>
            </div>
            <Link
              href="/catalog"
              className="inline-flex items-center gap-3 text-xs font-black uppercase tracking-[0.3em] text-luxury-gold transition-all hover:gap-4"
            >
              View Collection <ArrowRight className="h-4 w-4" />
            </Link>
          </div>

          <div className="grid grid-cols-1 gap-8 lg:grid-cols-2">
            {featuredStones.map((stone, index) => (
              <motion.div
                key={stone.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="glass-card group overflow-hidden"
              >
                <div className="grid md:grid-cols-[1.1fr_0.9fr]">
                  <div className="relative min-h-[360px] overflow-hidden">
                    <img
                      src={stone.image}
                      alt={stone.name}
                      className="h-full w-full object-cover transition-transform duration-1000 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent" />
                  </div>
                  <div className="flex flex-col justify-between p-8 md:p-10">
                    <div>
                      <p className="mb-3 text-[10px] font-black uppercase tracking-[0.35em] text-luxury-ruby">{stone.category}</p>
                      <h3 className="mb-5 font-display text-3xl font-black uppercase leading-tight text-white">{stone.name}</h3>
                      <div className="space-y-4 text-sm">
                        <div className="flex items-center justify-between border-b border-white/10 pb-3">
                          <span className="text-[10px] uppercase tracking-[0.25em] text-gray-400">Carat</span>
                          <span className="font-semibold text-white">{stone.carat}</span>
                        </div>
                        <div className="flex items-center justify-between border-b border-white/10 pb-3">
                          <span className="text-[10px] uppercase tracking-[0.25em] text-gray-400">Origin</span>
                          <span className="font-semibold text-white">{stone.origin}</span>
                        </div>
                        <div className="flex items-center justify-between pb-3">
                          <span className="text-[10px] uppercase tracking-[0.25em] text-gray-400">Certification</span>
                          <span className="font-semibold text-white">{stone.certification}</span>
                        </div>
                      </div>
                    </div>
                    <Link
                      href="/catalog"
                      className="mt-8 inline-flex items-center gap-3 text-xs font-black uppercase tracking-[0.3em] text-luxury-gold transition-all hover:gap-4"
                    >
                      Discover Stones <ArrowRight className="h-4 w-4" />
                    </Link>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[radial-gradient(circle_at_top,#3b1018_0%,#090909_48%)] py-24">
        <div className="mx-auto max-w-7xl px-6">
          <div className="mb-12">
            <p className="mb-4 text-xs font-black uppercase tracking-[0.4em] text-luxury-gold">Collections</p>
            <h2 className="max-w-4xl font-display text-4xl font-black uppercase tracking-tighter text-white md:text-5xl">
              Explore refined categories built for collectors and investors.
            </h2>
          </div>
          <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
            {categoryPreviews.map((category, index) => (
              <motion.div
                key={category.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="group relative min-h-[420px] overflow-hidden rounded-[2.5rem] border border-white/10"
              >
                <img
                  src={category.image}
                  alt={category.name}
                  className="absolute inset-0 h-full w-full object-cover transition-transform duration-1000 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/55 to-transparent" />
                <div className="relative flex h-full flex-col justify-end p-8">
                  <p className="mb-3 text-[10px] font-black uppercase tracking-[0.32em] text-luxury-gold">Curated Category</p>
                  <h3 className="mb-4 font-display text-3xl font-black uppercase text-white">{category.name}</h3>
                  <p className="max-w-sm text-sm leading-relaxed text-gray-300">{category.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="relative overflow-hidden border-y border-white/5 bg-luxury-black py-32">
        <div className="animate-pulse-slow absolute right-0 top-0 -z-10 h-96 w-96 bg-luxury-ruby/5 blur-[120px]" />

        <div className="mx-auto max-w-7xl px-6">
          <div className="grid grid-cols-1 items-center gap-20 lg:grid-cols-2">
            <motion.div initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
              <p className="mb-4 text-xs font-black uppercase tracking-[0.4em] text-luxury-ruby">Unmatched Credibility</p>
              <h2 className="mb-8 font-display text-4xl font-black uppercase leading-tight tracking-tighter text-white md:text-6xl">
                Beyond the
                <br />
                Standard <span className="italic text-luxury-gold">Proof</span>
              </h2>
              <div className="space-y-8">
                <div className="glass-card flex gap-6 p-8">
                  <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-luxury-ruby/10">
                    <ShieldCheck className="h-7 w-7 text-luxury-ruby" />
                  </div>
                  <div>
                    <h4 className="mb-2 font-bold uppercase tracking-widest text-white">Multilateral Verification</h4>
                    <p className="text-sm font-light leading-relaxed text-gray-400">
                      Every stone is verified by GIA, IGI, and our internal AI Gem Intelligence protocol before listing.
                    </p>
                  </div>
                </div>
                <div className="glass-card flex gap-6 p-8">
                  <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-luxury-gold/10">
                    <Globe className="h-7 w-7 text-luxury-gold" />
                  </div>
                  <div>
                    <h4 className="mb-2 font-bold uppercase tracking-widest text-white">Immutable Provenance</h4>
                    <p className="text-sm font-light leading-relaxed text-gray-400">
                      Track the entire history from mine to market through our secure, blockchain-verified ledger system.
                    </p>
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
              <div className="glass-card group flex aspect-square items-center justify-center overflow-hidden p-1">
                <img
                  src="/luxury_sapphire_gemstone_1_1774331732593.png"
                  alt="Authenticity Verification"
                  className="h-full w-full object-cover transition-transform duration-1000 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-60" />
                <div className="glass-card animate-float absolute bottom-10 left-10 right-10 p-8">
                  <div className="mb-4 flex items-center justify-between">
                    <span className="text-[10px] font-black uppercase tracking-[0.3em] text-white">Certification Verified</span>
                    <Sparkles className="h-4 w-4 text-luxury-gold" />
                  </div>
                  <p className="font-mono text-xl font-bold text-white">ID: RE-2024-8842</p>
                  <p className="mt-2 text-[10px] font-bold uppercase tracking-widest text-gray-400">
                    Verified by AI Gem Intelligence
                  </p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      <section className="bg-luxury-black py-24">
        <div className="mx-auto grid max-w-7xl grid-cols-1 gap-12 px-6 md:grid-cols-3">
          {[
            {
              icon: ShieldCheck,
              title: "100+ Years Heritage",
              subtitle: "Established 1924",
              color: "text-luxury-ruby",
              desc: "A century of gemstone expertise passed down through generations.",
            },
            {
              icon: Gem,
              title: "Top 0.1% Quality",
              subtitle: "Investment Grade",
              color: "text-luxury-sapphire",
              desc: "We strictly trade in unheated, inclusion-free, top-tier natural stones.",
            },
            {
              icon: Globe,
              title: "Global Compliance",
              subtitle: "Certified & Legal",
              color: "text-luxury-gold",
              desc: "Fully registered and compliant with international gemstone trading laws.",
            },
          ].map((item, i) => (
            <motion.div
              key={i}
              whileHover={{ y: -10 }}
              className="glass-card group p-12 text-center transition-all duration-500 hover:border-luxury-gold/30"
            >
              <div className="mx-auto mb-8 flex h-20 w-20 items-center justify-center rounded-3xl bg-white/5 transition-all duration-500 group-hover:scale-110">
                <item.icon className={`h-10 w-10 ${item.color}`} />
              </div>
              <p className="mb-2 text-[10px] font-black uppercase tracking-[0.4em] text-luxury-ruby">{item.subtitle}</p>
              <h3 className="mb-4 font-display text-2xl font-bold uppercase tracking-tight text-white">{item.title}</h3>
              <p className="text-sm font-light leading-relaxed text-gray-500">{item.desc}</p>
            </motion.div>
          ))}
        </div>
      </section>

      <section className="border-y border-white/5 bg-[#080808] py-24">
        <div className="mx-auto max-w-7xl px-6">
          <div className="mb-14 max-w-3xl">
            <p className="mb-4 text-xs font-black uppercase tracking-[0.4em] text-luxury-ruby">How It Works</p>
            <h2 className="mb-6 font-display text-4xl font-black uppercase tracking-tighter text-white md:text-5xl">
              A discreet acquisition journey designed for confidence.
            </h2>
          </div>
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2 xl:grid-cols-4">
            {howItWorks.map((step, index) => (
              <motion.div
                key={step.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.45, delay: index * 0.08 }}
                className="glass-card p-8"
              >
                <div className="mb-8 flex items-center justify-between">
                  <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-white/5">
                    <step.icon className="h-6 w-6 text-luxury-gold" />
                  </div>
                  <span className="font-display text-3xl font-black text-white/20">0{index + 1}</span>
                </div>
                <h3 className="mb-4 text-xl font-bold uppercase tracking-tight text-white">{step.title}</h3>
                <p className="text-sm leading-relaxed text-gray-400">{step.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <Testimonials />

      <section className="relative overflow-hidden py-32">
        <div className="absolute bottom-0 left-0 -z-10 h-[500px] w-[500px] bg-luxury-gold/5 blur-[150px]" />
        <div className="mx-auto max-w-5xl px-6 text-center">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
            <Sparkles className="animate-spin-slow mx-auto mb-10 h-16 w-16 text-luxury-gold" />
            <h2 className="mb-8 font-display text-5xl font-black uppercase tracking-tighter text-white md:text-7xl">
              Secure Your
              <br />
              Financial <span className="text-gradient-gold italic">Legacy</span>
            </h2>
            <p className="mx-auto mb-12 max-w-2xl text-xl font-light leading-relaxed text-gray-400">
              Join our private network of elite gemstone collectors and institutional investors.
            </p>
            <div className="flex flex-col justify-center gap-6 md:flex-row">
              <button className="rounded-full bg-white px-14 py-6 text-xs font-black uppercase tracking-[0.3em] text-black shadow-xl transition-all hover:bg-luxury-gold hover:text-white">
                Open Client Account
              </button>
              <button className="glass-button rounded-full px-14 py-6 text-xs font-black uppercase tracking-[0.3em] text-white">
                Contact Concierge
              </button>
            </div>
          </motion.div>
        </div>
      </section>
    </main>
  );
}
