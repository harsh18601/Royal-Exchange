"use client";

import { motion } from "framer-motion";
import { Sparkles, ShieldCheck, Globe, Gem, ArrowLeft, Heart, ShoppingCart, MessageSquare, Download } from "lucide-react";
import Link from "next/link";
import { useParams } from "next/navigation";

const gemData = {
  "1": {
    name: "Imperial Pigeon Blood Ruby",
    category: "Ruby",
    carat: 3.42,
    color: "Vivid Red",
    origin: "Burma (Myanmar)",
    treatment: "None (Unheated)",
    price: 85000,
    image: "/luxury_ruby_gemstone_1774331709105.png",
    description: "A breathtaking example of the highest grade of Burmese ruby. This stone exhibits the legendary 'Pigeon Blood' hue with secondary purple undertones that glow even in low light.",
    lab: "GIA",
    certNo: "GIA-2024-8832",
    dimensions: "8.4 x 6.2 x 4.1 mm",
    rarity: 98,
    investment: 95,
    value: 92
  },
  "2": {
    name: "Royal Velvet Blue Sapphire",
    category: "Sapphire",
    carat: 5.12,
    color: "Royal Blue",
    origin: "Sri Lanka (Ceylon)",
    treatment: "None (Unheated)",
    price: 120000,
    image: "/luxury_sapphire_gemstone_1_1774331732593.png",
    description: "An exceptional Royal Blue sapphire from the historic mines of Ceylon. Incredible saturation and velvet-like appearance make it a true investment masterpiece.",
    lab: "IGI",
    certNo: "IGI-SAP-9921",
    dimensions: "10.2 x 8.4 x 5.8 mm",
    rarity: 94,
    investment: 97,
    value: 90
  }
};

export default function GemDetailsPage() {
  const params = useParams();
  const gem = gemData[params.id as keyof typeof gemData] || gemData["1"];

  return (
    <div className="pt-32 pb-24 bg-black min-h-screen">
      <div className="max-w-7xl mx-auto px-6">
        <Link href="/catalog" className="inline-flex items-center gap-2 text-gray-500 hover:text-white transition-colors mb-12 uppercase tracking-widest text-xs font-bold group">
          <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" /> Back to Exchange
        </Link>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* Gallery Side */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="space-y-6"
          >
            <div className="relative aspect-square rounded-[3rem] overflow-hidden border border-white/5 bg-zinc-950">
              <img src={gem.image} alt={gem.name} className="w-full h-full object-cover" />
              <div className="absolute top-8 left-8">
                <div className="bg-black/40 backdrop-blur-md px-4 py-2 rounded-full border border-white/10 flex items-center gap-2">
                  <ShieldCheck className="w-4 h-4 text-luxury-gold" />
                  <span className="text-xs font-bold text-white uppercase tracking-widest">{gem.lab} Certified</span>
                </div>
              </div>
            </div>
            
            <div className="grid grid-cols-4 gap-4">
              {[1, 2, 3, 4].map((i) => (
                <div key={i} className="aspect-square rounded-2xl border border-white/10 overflow-hidden opacity-40 hover:opacity-100 transition-opacity cursor-pointer">
                  <img src={gem.image} alt="" className="w-full h-full object-cover" />
                </div>
              ))}
            </div>
          </motion.div>

          {/* Info Side */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
          >
            <p className="text-luxury-ruby font-black uppercase tracking-[0.5em] mb-4 text-sm">{gem.category} • {gem.origin}</p>
            <h1 className="text-4xl md:text-6xl font-black text-white mb-6 uppercase leading-tight">{gem.name}</h1>
            
            <div className="flex items-center gap-8 mb-10">
              <div className="text-3xl font-mono text-white">${gem.price.toLocaleString()}</div>
              <div className="h-10 w-px bg-white/10" />
              <div className="text-gray-400 font-light italic">Immediate secure global delivery available</div>
            </div>

            <p className="text-gray-400 text-lg leading-relaxed mb-12 font-light">{gem.description}</p>

            <div className="grid grid-cols-2 gap-y-8 gap-x-12 mb-12">
              <div>
                <p className="text-[10px] text-gray-500 uppercase font-bold tracking-[0.2em] mb-2 text-center">Weight</p>
                <div className="bg-zinc-900 border border-white/5 py-3 rounded-xl text-center text-white font-bold">{gem.carat} Carats</div>
              </div>
              <div>
                <p className="text-[10px] text-gray-500 uppercase font-bold tracking-[0.2em] mb-2 text-center">Dimensions</p>
                <div className="bg-zinc-900 border border-white/5 py-3 rounded-xl text-center text-white font-bold">{gem.dimensions}</div>
              </div>
              <div>
                <p className="text-[10px] text-gray-500 uppercase font-bold tracking-[0.2em] mb-2 text-center">Treatment</p>
                <div className="bg-zinc-900 border border-white/5 py-3 rounded-xl text-center text-white font-bold">{gem.treatment}</div>
              </div>
              <div>
                <p className="text-[10px] text-gray-500 uppercase font-bold tracking-[0.2em] mb-2 text-center">Certificate</p>
                <div className="bg-zinc-900 border border-white/5 py-3 rounded-xl text-center text-white font-bold">{gem.certNo}</div>
              </div>
            </div>

            <div className="bg-zinc-900/50 rounded-3xl p-8 border border-white/5 mb-12">
              <div className="flex items-center gap-2 mb-6">
                <Sparkles className="w-5 h-5 text-luxury-gold" />
                <h3 className="text-white font-bold uppercase tracking-widest">GemAI Intelligence Analysis</h3>
              </div>
              <div className="grid grid-cols-3 gap-6">
                <div className="space-y-2">
                  <p className="text-[10px] text-gray-500 uppercase font-bold tracking-widest">Rarity</p>
                  <p className="text-2xl text-white font-bold">{gem.rarity}%</p>
                  <div className="h-1 bg-white/10 rounded-full overflow-hidden">
                    <div className="h-full bg-luxury-ruby" style={{ width: `${gem.rarity}%` }} />
                  </div>
                </div>
                <div className="space-y-2">
                  <p className="text-[10px] text-gray-500 uppercase font-bold tracking-widest">Investment</p>
                  <p className="text-2xl text-white font-bold">{gem.investment}%</p>
                  <div className="h-1 bg-white/10 rounded-full overflow-hidden">
                    <div className="h-full bg-luxury-sapphire" style={{ width: `${gem.investment}%` }} />
                  </div>
                </div>
                <div className="space-y-2">
                  <p className="text-[10px] text-gray-500 uppercase font-bold tracking-widest">Value</p>
                  <p className="text-2xl text-white font-bold">{gem.value}%</p>
                  <div className="h-1 bg-white/10 rounded-full overflow-hidden">
                    <div className="h-full bg-luxury-gold" style={{ width: `${gem.value}%` }} />
                  </div>
                </div>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <button className="bg-luxury-ruby text-white font-bold py-5 rounded-full flex items-center justify-center gap-3 hover:bg-red-700 transition-all uppercase tracking-widest text-xs">
                <ShoppingCart className="w-4 h-4" /> Add to Cart
              </button>
              <button className="bg-white/5 border border-white/10 text-white font-bold py-5 rounded-full flex items-center justify-center gap-3 hover:bg-white/10 transition-all uppercase tracking-widest text-xs">
                <MessageSquare className="w-4 h-4" /> Private Inquiry
              </button>
            </div>
            <button className="w-full mt-4 bg-white/5 border border-white/10 text-white font-bold py-5 rounded-full flex items-center justify-center gap-3 hover:bg-white/10 transition-all uppercase tracking-widest text-xs">
              <Download className="w-4 h-4" /> Download Lab Certificate
            </button>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
