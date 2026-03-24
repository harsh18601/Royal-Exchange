"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { ShieldCheck, Mail, Lock, Sparkles, ArrowRight } from "lucide-react";
import { useAuth } from "@/context/AuthContext";
import { useRouter } from "next/navigation";

export default function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const { login, isLoading } = useAuth();
  const router = useRouter();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");
    try {
      await login(email, password);
      router.push("/dashboard");
    } catch (err: any) {
      setError(err.message || "Invalid credentials");
    }
  };

  return (
    <div className="pt-40 pb-24 bg-luxury-black min-h-screen flex items-center justify-center px-6 overflow-hidden relative">
      {/* Decorative Orbs */}
      <div className="absolute top-1/4 -left-24 w-96 h-96 bg-luxury-ruby/10 blur-[120px] rounded-full" />
      <div className="absolute bottom-1/4 -right-24 w-96 h-96 bg-luxury-gold/5 blur-[120px] rounded-full" />

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        className="w-full max-w-lg relative z-10"
      >
        <div className="glass-card p-12 shadow-2xl overflow-hidden relative">
          <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-luxury-ruby via-luxury-gold to-luxury-sapphire" />
          
          <div className="text-center mb-10">
            <div className="w-16 h-16 bg-luxury-ruby/10 rounded-2xl flex items-center justify-center mx-auto mb-6">
              <ShieldCheck className="w-8 h-8 text-luxury-ruby" />
            </div>
            <h1 className="text-3xl font-black text-white uppercase font-display tracking-tight mb-2">Secure Access</h1>
            <p className="text-gray-500 text-[10px] font-bold uppercase tracking-[0.4em]">Client Authentication Portal</p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="space-y-1">
              <label className="text-[10px] text-gray-500 uppercase font-bold tracking-widest ml-4">Corporate Email</label>
              <div className="relative">
                <Mail className="absolute left-6 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-600 transition-colors group-focus-within:text-luxury-ruby" />
                <input 
                  required
                  type="email" 
                  placeholder="name@institution.com"
                  className="w-full bg-white/5 border border-white/10 rounded-2xl px-14 py-4 text-white focus:outline-none focus:border-luxury-ruby transition-all"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>
            </div>

            <div className="space-y-1">
               <div className="flex justify-between items-center px-4">
                 <label className="text-[10px] text-gray-500 uppercase font-bold tracking-widest">Master Password</label>
                 <Link href="#" className="text-[10px] text-luxury-gold uppercase font-bold tracking-widest hover:text-white transition-colors">Forgot?</Link>
               </div>
              <div className="relative">
                <Lock className="absolute left-6 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-600" />
                <input 
                  required
                  type="password" 
                  placeholder="••••••••••••"
                  className="w-full bg-white/5 border border-white/10 rounded-2xl px-14 py-4 text-white focus:outline-none focus:border-luxury-ruby transition-all"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
              </div>
            </div>

            {error && (
              <p className="text-red-500 text-[10px] text-center font-bold uppercase tracking-widest">{error}</p>
            )}

            <button 
              disabled={isLoading}
              className="w-full bg-white text-black font-black py-5 rounded-full mt-4 hover:bg-luxury-gold hover:text-white transition-all uppercase tracking-[0.3em] text-[10px] flex items-center justify-center gap-2 group disabled:opacity-50"
            >
              {isLoading ? "Verifying..." : (
                <>Establish Connection <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" /></>
              )}
            </button>
          </form>

          <div className="mt-10 pt-10 border-t border-white/5 text-center">
            <p className="text-gray-500 text-[10px] font-bold uppercase tracking-widest mb-4">New to the Exchange?</p>
            <Link 
              href="/auth/register" 
              className="text-white text-xs font-black uppercase tracking-[0.2em] border-b border-white/20 hover:border-luxury-ruby transition-all"
            >
              Request Access Credentials
            </Link>
          </div>
        </div>
        
        <div className="mt-8 flex items-center justify-center gap-8 grayscale opacity-40">
           <div className="flex items-center gap-1">
             <Sparkles className="w-3 h-3 text-luxury-gold" />
             <span className="text-[8px] font-bold text-white uppercase tracking-widest">Secure 256-bit AES</span>
           </div>
           <div className="flex items-center gap-1">
             <ShieldCheck className="w-3 h-3 text-luxury-gold" />
             <span className="text-[8px] font-bold text-white uppercase tracking-widest">Swiss Data Residency</span>
           </div>
        </div>
      </motion.div>
    </div>
  );
}
