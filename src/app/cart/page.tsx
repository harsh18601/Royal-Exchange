"use client";

import { motion } from "framer-motion";
import { ShoppingCart, ArrowRight, ShieldCheck, Mail, Phone, Trash } from "lucide-react";
import Link from "next/link";

const cartItems = [
  {
    id: "2",
    name: "Royal Velvet Blue Sapphire",
    category: "Sapphire",
    carat: 5.12,
    origin: "Sri Lanka",
    price: 120000,
    image: "/luxury_sapphire_gemstone_1_1774331732593.png"
  }
];

export default function CartPage() {
  const subtotal = cartItems.reduce((acc, item) => acc + item.price, 0);

  return (
    <div className="pt-32 pb-24 bg-black min-h-screen">
      <div className="max-w-7xl mx-auto px-6">
        <div className="mb-12">
          <h1 className="text-3xl font-black text-white uppercase tracking-tighter flex items-center gap-3">
             <ShoppingCart className="text-luxury-sapphire w-8 h-8" /> Acquisition Portfolio
          </h1>
          <p className="text-gray-500 text-xs font-bold uppercase tracking-widest mt-1">Confirm your selection for private consultation</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          <div className="lg:col-span-8 space-y-4">
             {cartItems.map((item) => (
                <motion.div 
                  key={item.id}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  className="bg-zinc-900/50 border border-white/10 p-6 rounded-[2rem] flex items-center gap-6"
                >
                  <div className="w-24 h-24 bg-zinc-800 rounded-2xl overflow-hidden shrink-0">
                    <img src={item.image} alt="" className="w-full h-full object-cover" />
                  </div>
                  <div className="flex-1">
                    <div className="flex justify-between items-start mb-2">
                       <div>
                         <p className="text-luxury-sapphire text-[10px] font-black uppercase tracking-widest mb-1">{item.category}</p>
                         <h4 className="text-white font-bold">{item.name}</h4>
                       </div>
                       <button className="text-gray-600 hover:text-luxury-ruby transition-colors"><Trash className="w-4 h-4" /></button>
                    </div>
                    <div className="flex items-center justify-between mt-4">
                      <p className="text-xs text-gray-400">{item.carat} Carats • {item.origin}</p>
                      <p className="text-white font-mono font-bold">${item.price.toLocaleString()}</p>
                    </div>
                  </div>
                </motion.div>
             ))}
          </div>

          <div className="lg:col-span-4 translate-y-0">
            <div className="bg-zinc-900 border border-white/10 rounded-[2.5rem] p-8 space-y-8 sticky top-32">
              <h3 className="text-white font-bold uppercase tracking-widest text-sm border-b border-white/5 pb-4">Secured Quotation</h3>
              
              <div className="space-y-4">
                <div className="flex justify-between text-sm">
                  <span className="text-gray-500">Asset Subtotal</span>
                  <span className="text-white font-mono">${subtotal.toLocaleString()}</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-gray-500">Insured Shipping</span>
                  <span className="text-green-500 font-bold uppercase text-[10px] tracking-widest">Complimentary</span>
                </div>
                <div className="pt-4 border-t border-white/5 flex justify-between">
                  <span className="text-white font-black uppercase tracking-widest">Grand Total</span>
                  <span className="text-luxury-sapphire text-xl font-mono">${subtotal.toLocaleString()}</span>
                </div>
              </div>

              <div className="space-y-3">
                <button className="w-full bg-luxury-sapphire text-white font-bold py-5 rounded-2xl hover:bg-blue-800 transition-all uppercase tracking-widest text-xs flex items-center justify-center gap-2">
                  Proceed to Checkout <ArrowRight className="w-4 h-4" />
                </button>
                <button className="w-full bg-white/5 border border-white/10 text-white font-bold py-5 rounded-2xl hover:bg-white/10 transition-all uppercase tracking-widest text-xs">
                  Request Private Viewing
                </button>
              </div>

              <div className="flex items-center gap-4 pt-4 text-gray-500">
                <ShieldCheck className="w-5 h-5 text-luxury-gold" />
                <p className="text-[10px] font-bold uppercase tracking-widest leading-relaxed">Transactions are protected by end-to-end luxury asset encryption protocols.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
