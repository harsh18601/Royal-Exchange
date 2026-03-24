"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { UserPlus, Mail, Lock, User, ShieldCheck, ArrowRight } from "lucide-react";
import { useAuth } from "@/context/AuthContext";
import { useRouter } from "next/navigation";

export default function RegisterPage() {
  const { register } = useAuth();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: ""
  });
  const [error, setError] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const router = useRouter();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (formData.password !== formData.confirmPassword) {
      setError("Passwords do not match");
      return;
    }
    
    setIsLoading(true);
    setError("");
    try {
      await register(formData.name, formData.email, formData.password);
      router.push("/auth/login");
    } catch (err: any) {
      setError(err.message || "Registration failed");
      setIsLoading(false);
    }
  };

  return (
    <div className="pt-40 pb-24 bg-luxury-black min-h-screen flex items-center justify-center px-6 relative overflow-hidden">
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-luxury-sapphire/5 blur-[150px]" />
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-luxury-ruby/5 blur-[150px]" />

      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        className="w-full max-w-xl relative z-10"
      >
        <div className="glass-card p-12 shadow-2xl border-white/5">
          <div className="text-center mb-12">
            <div className="w-16 h-16 bg-luxury-gold/10 rounded-2xl flex items-center justify-center mx-auto mb-6">
              <UserPlus className="w-8 h-8 text-luxury-gold" />
            </div>
            <h1 className="text-3xl font-black text-white uppercase font-display tracking-tight mb-2">Institutional <span className="text-luxury-gold italic">Boarding</span></h1>
            <p className="text-gray-500 text-[10px] font-bold uppercase tracking-[0.4em]">Establish your investment profile</p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
               <div className="space-y-1">
                 <label className="text-[10px] text-gray-500 uppercase font-bold tracking-widest ml-4">Legal Name</label>
                 <div className="relative">
                   <User className="absolute left-6 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-600" />
                   <input 
                     required
                     type="text" 
                     placeholder="John Doe"
                     className="w-full bg-white/5 border border-white/10 rounded-2xl px-14 py-4 text-white focus:outline-none focus:border-luxury-gold transition-all"
                     value={formData.name}
                     onChange={(e) => setFormData({...formData, name: e.target.value})}
                   />
                 </div>
               </div>
               <div className="space-y-1">
                 <label className="text-[10px] text-gray-500 uppercase font-bold tracking-widest ml-4">Corporate Email</label>
                 <div className="relative">
                   <Mail className="absolute left-6 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-600" />
                   <input 
                     required
                     type="email" 
                     placeholder="name@agency.com"
                     className="w-full bg-white/5 border border-white/10 rounded-2xl px-14 py-4 text-white focus:outline-none focus:border-luxury-gold transition-all"
                     value={formData.email}
                     onChange={(e) => setFormData({...formData, email: e.target.value})}
                   />
                 </div>
               </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
               <div className="space-y-1">
                 <label className="text-[10px] text-gray-500 uppercase font-bold tracking-widest ml-4">Master Password</label>
                 <div className="relative">
                   <Lock className="absolute left-6 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-600" />
                   <input 
                     required
                     type="password" 
                     placeholder="••••••••"
                     className="w-full bg-white/5 border border-white/10 rounded-2xl px-14 py-4 text-white focus:outline-none focus:border-luxury-gold transition-all"
                     value={formData.password}
                     onChange={(e) => setFormData({...formData, password: e.target.value})}
                   />
                 </div>
               </div>
               <div className="space-y-1">
                 <label className="text-[10px] text-gray-500 uppercase font-bold tracking-widest ml-4">Verification</label>
                 <div className="relative">
                   <ShieldCheck className="absolute left-6 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-600" />
                   <input 
                     required
                     type="password" 
                     placeholder="••••••••"
                     className="w-full bg-white/5 border border-white/10 rounded-2xl px-14 py-4 text-white focus:outline-none focus:border-luxury-gold transition-all"
                     value={formData.confirmPassword}
                     onChange={(e) => setFormData({...formData, confirmPassword: e.target.value})}
                   />
                 </div>
               </div>
            </div>

            <div className="flex items-center gap-3 px-4 py-2 bg-white/5 rounded-2xl border border-white/5 group hover:border-luxury-gold/30 transition-all cursor-pointer">
               <div className="w-5 h-5 border-2 border-white/10 rounded flex items-center justify-center group-hover:border-luxury-gold transition-colors">
                  <div className="w-2 h-2 bg-luxury-gold rounded-full opacity-0 group-hover:opacity-100 transition-opacity" />
               </div>
               <p className="text-[9px] text-gray-500 font-bold uppercase tracking-widest group-hover:text-white transition-colors">
                 I agree to the <Link href="/terms" className="text-luxury-gold">Terms of Service</Link> and <Link href="/aml" className="text-luxury-gold">Compliance Policies</Link>
               </p>
            </div>

            <button 
              disabled={isLoading}
              className="w-full bg-white text-black font-black py-5 rounded-full mt-6 hover:bg-luxury-gold hover:text-white transition-all uppercase tracking-[0.3em] text-[10px] flex items-center justify-center gap-2 group disabled:opacity-50"
            >
              {isLoading ? "Processing Application..." : (
                <>Submit Access Request <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" /></>
              )}
            </button>
          </form>

          <div className="mt-10 pt-10 border-t border-white/5 text-center">
            <p className="text-gray-500 text-[10px] font-bold uppercase tracking-widest mb-4">Already have an account?</p>
            <Link 
              href="/auth/login" 
              className="text-white text-xs font-black uppercase tracking-[0.2em] border-b border-white/20 hover:border-luxury-gold transition-all"
            >
              Sign In to Exchange
            </Link>
          </div>
        </div>
      </motion.div>
    </div>
  );
}
