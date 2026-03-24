"use client";

import { motion } from "framer-motion";

export default function PrivacyPage() {
  return (
    <div className="pt-32 pb-24 bg-black min-h-screen">
      <div className="max-w-3xl mx-auto px-6 text-gray-400 prose prose-invert">
        <motion.h1 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-4xl md:text-5xl font-bold text-white mb-12"
        >
          Privacy Policy
        </motion.h1>
        
        <p className="text-lg mb-8">Effective Date: March 24, 2024</p>
        
        <h2 className="text-white font-bold text-2xl mt-8 mb-4">1. Information Collection</h2>
        <p>At Royal Ruby & Sapphire Exchange, we prioritize the privacy of our elite clientele. We collect limited data necessary to provide gemstone sourcing and verification services.</p>
        
        <h2 className="text-white font-bold text-2xl mt-8 mb-4">2. Data Usage</h2>
        <p>Your data is used exclusively for processing orders, communicating about stone inquiries, and enhancing the GemAI Advisor experience.</p>
        
        <h2 className="text-white font-bold text-2xl mt-8 mb-4">3. Security</h2>
        <p>We implement bank-grade encryption to protect your transaction history and personal identity.</p>
      </div>
    </div>
  );
}
