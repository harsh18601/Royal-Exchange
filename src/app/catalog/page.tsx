"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Filter, ChevronDown, Sparkles, ArrowRight, Heart, ShoppingCart } from "lucide-react";
import Link from "next/link";
import { getGemstones } from "@/lib/contentful";
import { Gemstone } from "@/lib/data";
import { useCurrency } from "@/context/CurrencyContext";
import { useWishlist } from "@/context/WishlistContext";

export default function CatalogPage() {
  const [filter, setFilter] = useState("All Gemstones");
  const [gems, setGems] = useState<Gemstone[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      try {
        const cmsGems = await getGemstones();
        if (cmsGems && cmsGems.length > 0) {
          const mappedGems: Gemstone[] = cmsGems.map((item: any) => ({
            id: item.sys.id,
            ...item.fields,
            mainImage: item.fields.mainImage?.fields?.file?.url || "/luxury_ruby_gemstone_1774331709105.png"
          }));
          setGems(mappedGems);
        }
      } catch (error) {
        console.error("Fetch error:", error);
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, []);

  return (
    <div className="pt-32 pb-24 bg-luxury-black min-h-screen">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-8">
          <div>
            <h1 className="text-4xl md:text-6xl font-black text-white mb-4 tracking-tighter uppercase">Gemora Collection</h1>
            <div className="w-20 h-1 bg-luxury-ruby mb-6" />
            <p className="text-gray-400 font-light max-w-md">Browse our curated collection of ethically sourced, investment-grade loose gemstones.</p>
          </div>

          <div className="flex items-center gap-4">
            <div className="relative group">
              <select 
                className="appearance-none bg-white/5 border border-white/10 rounded-full px-8 py-4 text-[10px] font-black uppercase tracking-widest text-white pr-12 focus:outline-none focus:border-luxury-ruby transition-all cursor-pointer backdrop-blur-md"
                onChange={(e) => setFilter(e.target.value)}
              >
                <option>All Gemstones</option>
                <option>Rubies Only</option>
                <option>Sapphires Only</option>
                <option>Investment Grade</option>
              </select>
              <ChevronDown className="absolute right-4 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-500 pointer-events-none group-hover:text-white transition-colors" />
            </div>
            
            <button className="p-4 bg-white/5 border border-white/10 rounded-full hover:bg-luxury-ruby transition-all group backdrop-blur-md">
              <Filter className="w-4 h-4 text-gray-400 group-hover:text-white" />
            </button>
          </div>
        </div>

        {loading ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[1, 2, 3, 4, 5, 6].map((i) => (
              <div key={i} className="aspect-[4/5] bg-white/5 rounded-[2.5rem] animate-pulse" />
            ))}
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <AnimatePresence mode="popLayout">
              {gems.map((gem, i) => (
                <GemstoneCard key={gem.id} gem={gem} index={i} />
              ))}
            </AnimatePresence>
          </div>
        )}
      </div>
    </div>
  );
}

function GemstoneCard({ gem, index }: { gem: any; index: number }) {
  const { toggleWishlist, isInWishlist } = useWishlist();
  const isWishlisted = isInWishlist(gem.id);
  const { formatPrice } = useCurrency();

  return (
    <motion.div
      layout
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.9 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="group relative glass-card overflow-hidden transition-all duration-700 hover:border-luxury-ruby/50 shadow-2xl shadow-black"
    >
      <Link href={`/catalog/${gem.id}`}>
        <div className="relative aspect-[4/5] overflow-hidden">
          <img 
            src={gem.mainImage} 
            alt={gem.name}
            className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-60" />
          
          <div className="absolute top-6 right-6 flex flex-col gap-2 z-10">
            <button 
              onClick={(e) => {
                e.preventDefault();
                e.stopPropagation();
                toggleWishlist(gem.id);
              }}
              className={`p-3 backdrop-blur-md rounded-full transition-all duration-300 translate-x-4 group-hover:translate-x-0 ${
                isWishlisted 
                  ? "bg-luxury-ruby text-white" 
                  : "bg-black/40 text-white hover:bg-luxury-ruby opacity-0 group-hover:opacity-100"
              }`}
            >
              <Heart className={`w-4 h-4 ${isWishlisted ? "fill-current" : ""}`} />
            </button>
            <button 
              onClick={(e) => {
                e.preventDefault();
                e.stopPropagation();
              }}
              className="p-3 bg-black/40 backdrop-blur-md rounded-full text-white hover:bg-luxury-ruby transition-colors opacity-0 group-hover:opacity-100 translate-x-4 group-hover:translate-x-0 transition-all duration-300 delay-75 shadow-xl"
            >
              <ShoppingCart className="w-4 h-4" />
            </button>
          </div>
          
          <div className="absolute top-6 left-6">
            <div className="flex items-center gap-2 bg-black/40 backdrop-blur-md px-3 py-1.5 rounded-full border border-white/10">
              <Sparkles className="w-3 h-3 text-luxury-gold" />
              <span className="text-[10px] font-bold text-white uppercase tracking-widest">Score {gem.investmentScore}%</span>
            </div>
          </div>
        </div>

        <div className="p-8">
          <div className="flex justify-between items-start mb-4">
            <div>
              <p className="text-luxury-ruby text-[10px] font-black uppercase tracking-[0.3em] mb-1">{gem.category} • {gem.origin}</p>
              <h3 className="text-white font-bold text-xl group-hover:text-luxury-ruby transition-colors">{gem.name}</h3>
            </div>
            <p className="text-white font-mono text-lg">{formatPrice(gem.price)}</p>
          </div>

          <div className="flex items-center justify-between pt-6 border-t border-white/5">
            <div className="flex gap-4">
              <div className="text-center">
                <p className="text-[10px] text-gray-500 uppercase font-bold tracking-widest mb-1">Carat</p>
                <p className="text-white text-sm font-bold">{gem.caratWeight}</p>
              </div>
              <div className="text-center">
                <p className="text-[10px] text-gray-500 uppercase font-bold tracking-widest mb-1">Color</p>
                <p className="text-white text-sm font-bold">{gem.color}</p>
              </div>
            </div>
            <div className="flex items-center gap-2 text-luxury-gold text-xs font-bold tracking-widest uppercase group/link">
              Details <ArrowRight className="w-3 h-3 group-hover/link:translate-x-1 transition-transform" />
            </div>
          </div>
        </div>
      </Link>
    </motion.div>
  );
}
