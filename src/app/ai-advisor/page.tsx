"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Sparkles, Send, Bot, User, ArrowRight, TrendingUp, ShieldCheck, Zap } from "lucide-react";

export default function AIAdvisorPage() {
  const [messages, setMessages] = useState([
    { role: "assistant", content: "Welcome, Client. I am your AI Gem Advisor. How can I assist you with your loose gemstone acquisition today?" }
  ]);
  const [input, setInput] = useState("");

  const handleSend = () => {
    if (!input.trim()) return;
    setMessages([...messages, { role: "user", content: input }]);
    setInput("");
    
    // Simulate AI response
    setTimeout(() => {
      setMessages(prev => [...prev, { 
        role: "assistant", 
        content: "That is an excellent inquiry. Based on current market trends, natural unheated Burmese rubies over 3 carats are seeing a 12% year-over-year appreciation. Would you like me to filter our exchange for these specific investment criteria?" 
      }]);
    }, 1000);
  };

  return (
    <div className="pt-32 pb-24 bg-black min-h-screen">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-12 gap-12 h-[calc(100vh-14rem)]">
        {/* Sidebar Info */}
        <div className="lg:col-span-4 space-y-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="bg-zinc-900 border border-white/5 rounded-3xl p-8 h-full"
          >
            <div className="flex items-center gap-3 mb-8">
              <div className="w-12 h-12 bg-luxury-ruby rounded-2xl flex items-center justify-center">
                <Sparkles className="text-white w-6 h-6" />
              </div>
              <div>
                <h2 className="text-white font-bold text-xl uppercase tracking-tighter">AI GEM <span className="text-luxury-ruby">ADVISOR</span></h2>
                <p className="text-gray-500 text-xs font-bold uppercase tracking-widest">Active Intelligence</p>
              </div>
            </div>

            <div className="space-y-8">
              <div className="flex gap-4">
                <TrendingUp className="text-luxury-gold w-6 h-6 shrink-0" />
                <div>
                  <h4 className="text-white font-bold text-sm uppercase tracking-widest mb-1">Market Analysis</h4>
                  <p className="text-gray-400 text-xs leading-relaxed">Proactive price trend monitoring and investment grade scoring.</p>
                </div>
              </div>
              <div className="flex gap-4">
                <ShieldCheck className="text-luxury-sapphire w-6 h-6 shrink-0" />
                <div>
                  <h4 className="text-white font-bold text-sm uppercase tracking-widest mb-1">Fraud Detection</h4>
                  <p className="text-gray-400 text-xs leading-relaxed">Automated certificate verification and price consistency checks.</p>
                </div>
              </div>
              <div className="flex gap-4">
                <Zap className="text-luxury-ruby w-6 h-6 shrink-0" />
                <div>
                  <h4 className="text-white font-bold text-sm uppercase tracking-widest mb-1">Smart Search</h4>
                  <p className="text-gray-400 text-xs leading-relaxed">Describe your ideal stone in natural language and I will find it.</p>
                </div>
              </div>
            </div>

            <div className="mt-12 p-6 bg-black/40 rounded-2xl border border-white/5">
              <p className="text-luxury-gold text-xs font-bold mb-2 uppercase tracking-widest">Current Insight</p>
              <p className="text-white text-sm italic font-light leading-relaxed">"Royal Blue sapphires from Sri Lanka are currently undervalued relative to Burmese counterparts by approximately 18%."</p>
            </div>
          </motion.div>
        </div>

        {/* Chat Interface */}
        <div className="lg:col-span-8 flex flex-col h-full bg-zinc-950 border border-white/5 rounded-3xl overflow-hidden shadow-2xl">
          <div className="p-6 border-b border-white/5 flex items-center justify-between bg-zinc-950/50">
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
              <span className="text-xs font-bold text-gray-400 uppercase tracking-widest">System Online</span>
            </div>
            <p className="text-xs font-bold text-luxury-ruby uppercase tracking-widest">Neural Link Encrypted</p>
          </div>

          <div className="flex-1 overflow-y-auto p-8 space-y-8 scrollbar-hide">
            <AnimatePresence>
              {messages.map((msg, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className={`flex gap-4 ${msg.role === "user" ? "flex-row-reverse" : ""}`}
                >
                  <div className={`w-10 h-10 rounded-xl flex items-center justify-center shrink-0 ${
                    msg.role === "assistant" ? "bg-luxury-ruby" : "bg-white/10"
                  }`}>
                    {msg.role === "assistant" ? <Bot className="w-5 h-5 text-white" /> : <User className="w-5 h-5 text-white" />}
                  </div>
                  <div className={`max-w-[80%] p-5 rounded-2xl text-sm leading-relaxed ${
                    msg.role === "assistant" 
                      ? "bg-zinc-900 text-gray-300 rounded-tl-none border border-white/5" 
                      : "bg-luxury-ruby text-white rounded-tr-none font-medium"
                  }`}>
                    {msg.content}
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </div>

          <div className="p-8 bg-zinc-950/50 border-t border-white/5">
            <div className="relative group">
              <input
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyDown={(e) => e.key === "Enter" && handleSend()}
                placeholder="Ask about investment scores, market trends, or stone comparisons..."
                className="w-full bg-zinc-900 border border-white/10 rounded-2xl px-8 py-5 text-sm text-white focus:outline-none focus:border-luxury-ruby transition-all group-hover:border-white/20"
              />
              <button 
                onClick={handleSend}
                className="absolute right-3 top-1/2 -translate-y-1/2 p-3 bg-luxury-ruby text-white rounded-xl hover:bg-red-700 transition-all shadow-lg shadow-red-900/40"
              >
                <Send className="w-4 h-4" />
              </button>
            </div>
            <div className="flex gap-4 mt-6">
              {["Compare two rubies", "Latest sapphire trends", "Investment scores"].map((tag) => (
                <button 
                  key={tag}
                  className="text-[10px] uppercase tracking-widest font-black text-gray-500 hover:text-luxury-gold transition-colors"
                >
                  # {tag}
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
