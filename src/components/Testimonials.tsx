"use client";

import { motion } from "framer-motion";
import { Star, Quote } from "lucide-react";

import { useEffect, useState } from "react";
import { getEntriesByType } from "@/lib/contentful";

export default function Testimonials() {
  const [items, setItems] = useState<any[]>([]);

  useEffect(() => {
    getEntriesByType<any>("testimonial").then(setItems);
  }, []);

  return (
    <section className="py-24 bg-zinc-950 border-t border-white/5">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-black text-white uppercase tracking-tighter mb-4">Elite Testimonials</h2>
          <div className="w-20 h-1 bg-luxury-ruby mx-auto" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {items.map((item, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              viewport={{ once: true }}
              className="bg-black/40 border border-white/5 p-10 rounded-[2.5rem] hover:border-luxury-ruby/30 transition-all duration-500 group"
            >
              <div className="flex items-center gap-4 mb-8">
                <div className="w-12 h-12 rounded-full overflow-hidden border border-white/10">
                  <img src={item.fields.image?.fields?.file?.url || "/luxury_owner_placeholder.png"} className="w-full h-full object-cover" alt={item.fields.name} />
                </div>
                <div>
                  <h4 className="text-white font-bold uppercase text-xs tracking-widest">{item.fields.name}</h4>
                  <p className="text-luxury-ruby text-[10px] font-black uppercase tracking-tighter">{item.fields.role}</p>
                </div>
              </div>
              <p className="text-gray-400 font-light italic leading-relaxed group-hover:text-white transition-colors">
                "{item.fields.feedback}"
              </p>
            </motion.div>
          ))}
        </div>
        {items.length === 0 && <p className="text-center text-gray-500 italic py-12">Testimonials uploading from global network...</p>}
      </div>
    </section>
  );
}
