"use client";

import { motion } from "framer-motion";
import { Sparkles, Award, Globe, History } from "lucide-react";

export default function AboutPage() {
  return (
    <div className="pt-40 pb-24 bg-luxury-black min-h-screen">
      <div className="max-w-7xl mx-auto px-6">
        <header className="mb-24 text-center max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
          >
             <p className="text-luxury-gold font-black uppercase tracking-[0.6em] text-[10px] mb-4">The Legacy of Excellence</p>
             <h1 className="text-6xl md:text-8xl font-black text-white uppercase font-display tracking-tight mb-8">A Century <br /><span className="text-gradient-gold italic">of Sovereignty</span></h1>
             <p className="text-gray-400 text-xl font-light leading-relaxed">
               Founded in 1924, Gemora has redefined the art of gemstone acquisition. From the mines of Mogok to the vaults of Geneva, our journey is etched in the world's most rare stones.
             </p>
          </motion.div>
        </header>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-24 mb-32 items-center">
          <motion.div
             initial={{ opacity: 0, x: -30 }}
             whileInView={{ opacity: 1, x: 0 }}
             viewport={{ once: true }}
          >
             <h2 className="text-3xl font-bold text-white uppercase tracking-tighter mb-8 font-display">Our Institutional <span className="text-luxury-ruby">Mission</span></h2>
             <p className="text-gray-400 font-light leading-relaxed mb-8">
               Our mission is to bridge the gap between primary gemstone markets and institutional-grade investors. By integrating advanced GemAI neural analysis with traditional century-old appraisal techniques, we provide a level of security and insight previously reserved for sovereign wealth funds.
             </p>
             <div className="grid grid-cols-2 gap-8">
                <div>
                   <h4 className="text-white font-bold text-4xl mb-1 font-display">100+</h4>
                   <p className="text-[10px] text-gray-500 uppercase tracking-widest font-black">Years of Heritage</p>
                </div>
                <div>
                   <h4 className="text-white font-bold text-4xl mb-1 font-display">14</h4>
                   <p className="text-[10px] text-gray-500 uppercase tracking-widest font-black">Global Offices</p>
                </div>
             </div>
          </motion.div>
          <motion.div
             initial={{ opacity: 0, scale: 0.9 }}
             whileInView={{ opacity: 1, scale: 1 }}
             viewport={{ once: true }}
             className="aspect-square glass-card overflow-hidden"
          >
             <img src="/luxury_ruby_gemstone_1774331709105.png" alt="Royal Heritage" className="w-full h-full object-cover opacity-60 grayscale hover:grayscale-0 transition-all duration-1000" />
          </motion.div>
        </div>

        <section className="py-24 border-y border-white/5 mb-32">
           <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
              {[
                { icon: History, title: "Heritage", color: "text-luxury-gold" },
                { icon: Award, title: "Quality", color: "text-luxury-ruby" },
                { icon: Globe, title: "Reach", color: "text-luxury-sapphire" },
                { icon: Sparkles, title: "Innovation", color: "text-white" }
              ].map((val, i) => (
                <div key={i} className="text-center group">
                   <val.icon className={`w-12 h-12 mx-auto mb-6 ${val.color} group-hover:scale-110 transition-transform`} />
                   <h4 className="text-white font-bold uppercase tracking-widest text-sm mb-2">{val.title}</h4>
                   <div className="w-8 h-1 bg-white/10 mx-auto group-hover:w-full transition-all" />
                </div>
              ))}
           </div>
        </section>
      </div>
    </div>
  );
}
