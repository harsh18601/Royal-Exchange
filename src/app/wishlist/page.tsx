"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Heart, ArrowRight, Trash, ShoppingCart, Sparkles } from "lucide-react";
import Link from "next/link";
import { useAuth } from "@/context/AuthContext";
import { useRouter } from "next/navigation";
import { useCurrency } from "@/context/CurrencyContext";
import { useWishlist } from "@/context/WishlistContext";
import { getGemstones } from "@/lib/contentful";
import { Gemstone } from "@/lib/data";

export default function WishlistPage() {
  const { isLoggedIn, isLoading: authLoading } = useAuth();
  const { formatPrice } = useCurrency();
  const { wishlist, toggleWishlist } = useWishlist();
  const [items, setItems] = useState<Gemstone[]>([]);
  const [loading, setLoading ] = useState(true);

  useEffect(() => {
    const fetchWishlistItems = async () => {
       if (wishlist.length === 0) {
          setItems([]);
          setLoading(false);
          return;
       }
       
       setLoading(true);
       try {
          const cmsGems = await getGemstones();
          const mappedGems: Gemstone[] = cmsGems
            .map((item: any) => ({
              id: item.sys.id,
              ...item.fields,
              mainImage: item.fields.mainImage?.fields?.file?.url || "/luxury_ruby_gemstone_1774331709105.png"
            }))
            .filter((gem: Gemstone) => wishlist.includes(gem.id));
          
          setItems(mappedGems);
       } catch (error) {
          console.error("Error fetching wishlist gems:", error);
       } finally {
          setLoading(false);
       }
    };
    
    fetchWishlistItems();
  }, [wishlist]);

  if (authLoading || (loading && wishlist.length > 0)) {
    return (
      <div className="min-h-screen bg-luxury-black flex items-center justify-center">
        <div className="text-white uppercase tracking-[0.5em] text-[10px] font-black animate-pulse">
          Accessing Private Watchlist...
        </div>
      </div>
    );
  }

  if (!isLoggedIn || items.length === 0) {
    return (
      <div className="pt-40 pb-24 bg-luxury-black min-h-screen">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <div className="w-24 h-24 bg-white/5 rounded-full flex items-center justify-center mx-auto mb-10 border border-white/10">
            <Heart className="w-10 h-10 text-gray-600" />
          </div>
          <h1 className="text-4xl font-black text-white uppercase tracking-tighter mb-6">
            {!isLoggedIn ? "Collection Restricted" : "Your Collection is Empty"}
          </h1>
          <p className="text-gray-500 text-xs font-bold uppercase tracking-[0.4em] max-w-md mx-auto mb-12 leading-relaxed">
            {!isLoggedIn 
              ? "Establish a secure connection to view and manage your private gemstone watchlist."
              : "Your watchlist is currently empty. Start observing investment-grade assets to build your portfolio."}
          </p>
          <Link 
            href={!isLoggedIn ? "/auth/login" : "/catalog"}
            className="inline-flex items-center gap-3 bg-luxury-ruby text-white px-12 py-5 rounded-full font-black uppercase tracking-[0.2em] text-[10px] hover:bg-red-700 transition-all font-display"
          >
            {!isLoggedIn ? "Secure Login" : "Continue Exploring"} <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="pt-32 pb-24 bg-black min-h-screen">
      <div className="max-w-7xl mx-auto px-6">
        <div className="mb-12">
          <h1 className="text-3xl font-black text-white uppercase tracking-tighter flex items-center gap-3">
             <Heart className="text-luxury-ruby w-8 h-8" /> Saved Collection
          </h1>
          <p className="text-gray-500 text-xs font-bold uppercase tracking-widest mt-1">Items currently under observation</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {items.map((gem, i) => (
            <motion.div
              key={gem.id}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              className="group bg-zinc-900 border border-white/5 rounded-3xl overflow-hidden hover:border-luxury-ruby/30 transition-all"
            >
              <div className="relative aspect-square overflow-hidden">
                <img src={gem.mainImage} alt={gem.name} className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110" />
                <div className="absolute top-4 right-4 flex flex-col gap-2">
                  <button 
                    onClick={() => toggleWishlist(gem.id)}
                    className="p-3 bg-black/40 backdrop-blur-md rounded-full text-white hover:bg-luxury-ruby transition-colors"
                  >
                    <Trash className="w-4 h-4" />
                  </button>
                </div>
              </div>
              <div className="p-6">
                <p className="text-luxury-ruby text-[10px] font-black uppercase tracking-widest mb-1">{gem.category} • {gem.origin}</p>
                <h3 className="text-white font-bold text-lg mb-4">{gem.name}</h3>
                <div className="flex items-center justify-between border-t border-white/5 pt-4">
                  <p className="text-white font-mono text-lg">{formatPrice(gem.price)}</p>
                  <button className="bg-luxury-ruby text-white px-6 py-2 rounded-full text-[10px] font-bold uppercase tracking-widest hover:bg-red-700 transition-all flex items-center gap-2">
                      Move to Cart <ArrowRight className="w-3 h-3" />
                  </button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
