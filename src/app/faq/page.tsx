"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown } from "lucide-react";
import { getEntriesByType } from "@/lib/contentful";

export default function FAQPage() {
  const [faqs, setFaqs] = useState<any[]>([]);
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  useEffect(() => {
    getEntriesByType<any>("faq").then((items) => {
      const sorted = items.sort((a, b) => Number(a.fields.order || 0) - Number(b.fields.order || 0));
      setFaqs(sorted);
    });
  }, []);

  return (
    <div className="pt-40 pb-24 bg-black min-h-screen text-white">
      <div className="max-w-4xl mx-auto px-6">
        <h1 className="text-5xl font-black uppercase mb-4">Support & FAQ</h1>
        <p className="text-gray-400 mb-16 max-w-md">Everything you need to know about discovering rubies and sapphires through Gemora.</p>
        
        <div className="space-y-4">
          {faqs.map((faq, i) => (
            <div key={i} className="border-b border-white/10">
              <button 
                onClick={() => setOpenIndex(openIndex === i ? null : i)}
                className="w-full py-8 flex items-center justify-between group"
              >
                <span className="text-xl font-bold uppercase tracking-tight group-hover:text-luxury-ruby transition-colors">{faq.fields.question}</span>
                <ChevronDown className={`w-5 h-5 text-gray-500 transition-transform ${openIndex === i ? "rotate-180" : ""}`} />
              </button>
              <AnimatePresence>
                {openIndex === i && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    className="overflow-hidden"
                  >
                    <div className="pb-8 text-gray-400 font-light leading-relaxed">
                      {faq.fields.answer}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
          {faqs.length === 0 && <p className="text-gray-500 italic py-12">Fetching FAQs from luxury vault...</p>}
        </div>
      </div>
    </div>
  );
}
