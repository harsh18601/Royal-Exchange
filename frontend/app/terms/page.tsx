"use client";

import { motion } from "framer-motion";

export default function TermsPage() {
  return (
    <div className="pt-32 pb-24 bg-black min-h-screen">
      <div className="max-w-3xl mx-auto px-6 text-gray-400 prose prose-invert">
        <motion.h1 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-4xl md:text-5xl font-bold text-white mb-12"
        >
          Terms & Conditions
        </motion.h1>
        
        <p className="text-lg mb-8">Welcome to the Royal Ruby & Sapphire Exchange.</p>
        
        <h2 className="text-white font-bold text-2xl mt-8 mb-4">1. Acceptance of Terms</h2>
        <p>By accessing this platform, you agree to abide by the international standards of gemstone trading and local regulations regarding luxury asset acquisition.</p>
        
        <h2 className="text-white font-bold text-2xl mt-8 mb-4">2. Certification Authenticity</h2>
        <p>All stones listed are guaranteed to match their accompanying laboratory certificates (GIA, IGI, etc.).</p>
        
        <h2 className="text-white font-bold text-2xl mt-8 mb-4">3. Sales & Returns</h2>
        <p>Due to the unique nature of loose gemstones, all sales are final upon completion of the inspection period.</p>
      </div>
    </div>
  );
}
