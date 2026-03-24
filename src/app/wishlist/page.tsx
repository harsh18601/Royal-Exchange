"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Heart, ArrowRight, Trash, ShoppingCart, Sparkles } from "lucide-react";
import Link from "next/link";
import { useAuth } from "@/context/AuthContext";
import { useRouter } from "next/navigation";

export default function WishlistPage() {
  const { isLoggedIn, isLoading } = useAuth();
  const router = useRouter();
  const [items, setItems] = useState<any[]>([]); // Real wishlist items will be fetched from API

  useEffect(() => {
    if (!isLoading && !isLoggedIn) {
      router.push("/auth/login");
    }
  }, [isLoading, isLoggedIn, router]);

  const handleDelete = (id: string) => {
    setItems(items.filter((item) => item.id !== id));
  };

  if (isLoading || !isLoggedIn) {
    return (
      <div className="min-h-screen bg-luxury-black flex items-center justify-center">
        <div className="text-white uppercase tracking-[0.5em] text-[10px] font-black animate-pulse">
          Accessing Private Watchlist...
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

        {items.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {items.map((gem, i) => (
              <motion.div
                key={gem.id}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                className="group bg-zinc-900 border border-white/5 rounded-3xl overflow-hidden hover:border-luxury-ruby/30 transition-all"
              >
                <div className="relative aspect-square overflow-hidden">
                  <img src={gem.image} alt={gem.name} className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110" />
                  <div className="absolute top-4 right-4 flex flex-col gap-2">
                    <button 
                      onClick={() => handleDelete(gem.id)}
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
                    <p className="text-white font-mono text-lg">${gem.price.toLocaleString()}</p>
                    <button className="bg-luxury-ruby text-white px-6 py-2 rounded-full text-[10px] font-bold uppercase tracking-widest hover:bg-red-700 transition-all flex items-center gap-2">
                       Move to Cart <ArrowRight className="w-3 h-3" />
                    </button>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        ) : (
          <div className="text-center py-32 bg-zinc-900/30 rounded-[3rem] border border-dashed border-white/10">
            <Sparkles className="w-12 h-12 text-gray-700 mx-auto mb-6" />
            <h2 className="text-xl text-white font-bold uppercase mb-4">Your collection is empty</h2>
            <Link href="/catalog" className="text-luxury-ruby font-bold uppercase tracking-widest text-xs hover:text-white transition-all underline">Continue Exploring</Link>
          </div>
        )}
      </div>
    </div>
  );
}
