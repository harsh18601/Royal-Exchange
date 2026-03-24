"use client";

import { motion } from "framer-motion";

export default function FAQPage() {
  const faqs = [
    { q: "Are all gemstones certified?", a: "Yes, every gemstone at Royal Exchange is certified by leading international laboratories such as GIA, IGI, or GRS." },
    { q: "Can I request a custom stone?", a: "Our GemAI Advisor can help you find specific stones, or you can contact our sourcing department directly." },
    { q: "What is your return policy?", a: "We offer a 7-day inspection period for all stones. Please see our Shipping & Returns section for details." },
    { q: "Where do you ship to?", a: "We provide secure, insured global shipping to over 120 countries." }
  ];

  return (
    <div className="pt-32 pb-24 bg-black min-h-screen">
      <div className="max-w-3xl mx-auto px-6">
        <motion.h1 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-4xl md:text-5xl font-bold text-white mb-12 text-center"
        >
          Frequently Asked Questions
        </motion.h1>

        <div className="space-y-6">
          {faqs.map((faq, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              className="bg-zinc-900/50 border border-white/5 rounded-2xl p-6 hover:border-luxury-ruby/30 transition-all"
            >
              <h3 className="text-xl font-bold text-white mb-2">{faq.q}</h3>
              <p className="text-gray-400">{faq.a}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
