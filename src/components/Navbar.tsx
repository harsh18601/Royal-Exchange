"use client";

import Link from "next/link";
import { useState, useEffect } from "react";
import { Search, ShoppingCart, Heart, User, Sparkles } from "lucide-react";
import { motion } from "framer-motion";

import { getSiteConfig } from "@/lib/contentful";
import { useAuth } from "@/context/AuthContext";

const Navbar = () => {
  const { user, isLoggedIn, logout } = useAuth();
  const [isScrolled, setIsScrolled] = useState(false);
  const [siteConfig, setSiteConfig] = useState<any>(null);
  const [isSearchOpen, setIsSearchOpen] = useState(false);

  useEffect(() => {
    getSiteConfig().then(setSiteConfig);
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <nav
        className={`fixed top-0 w-full z-50 transition-all duration-300 ${
          isScrolled
            ? "bg-black/80 backdrop-blur-md border-b border-white/10 py-3"
            : "bg-transparent py-5"
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
          <Link href="/" className="flex items-center gap-4 group">
            <div className="relative w-12 h-12 flex items-center justify-center">
              <div className="absolute inset-0 bg-luxury-gold/20 rounded-full blur-lg group-hover:bg-luxury-gold/40 transition-all duration-500" />
              <img 
                src="/logo.png" 
                alt="Royal Exchange Logo" 
                className="relative w-full h-full object-contain filter brightness-110 group-hover:scale-110 transition-transform duration-500"
              />
            </div>
            <div className="flex flex-col">
              <span className="text-xl font-black tracking-tighter text-white leading-none uppercase">
                {siteConfig?.fields?.siteName ? (
                  <>
                    {siteConfig.fields.siteName.split(' ')[0]} <span className="text-luxury-gold">{siteConfig.fields.siteName.split(' ').slice(1).join(' ')}</span>
                  </>
                ) : (
                  <>ROYAL <span className="text-luxury-gold">EXCHANGE</span></>
                )}
              </span>
              <span className="text-[8px] font-bold tracking-[0.4em] text-gray-500 uppercase mt-1">Heritage & Trust</span>
            </div>
          </Link>

          <div className="hidden md:flex items-center gap-8 text-sm font-medium text-gray-300">
            <Link href="/catalog" className="hover:text-luxury-ruby transition-colors">CATALOG</Link>
            <Link href="/ai-advisor" className="hover:text-luxury-ruby transition-colors flex items-center gap-1">
              <Sparkles className="w-4 h-4 text-luxury-gold" /> GEMAI ADVISOR
            </Link>
            <Link href="/about" className="hover:text-luxury-ruby transition-colors">OUR STORY</Link>
            <Link href="/contact" className="hover:text-luxury-ruby transition-colors">CONTACT</Link>
          </div>

          <div className="flex items-center gap-5 text-gray-300">
            <button 
              onClick={() => setIsSearchOpen(true)}
              className="hover:text-white transition-colors"
            >
              <Search className="w-5 h-5" />
            </button>
            {isLoggedIn && (
              <>
                <Link href="/wishlist" className="hover:text-white transition-colors relative">
                  <Heart className="w-5 h-5" />
                </Link>
                <Link href="/cart" className="hover:text-white transition-colors relative">
                  <ShoppingCart className="w-5 h-5" />
                </Link>
              </>
            )}
            
            {isLoggedIn ? (
              <div className="flex items-center gap-6">
                <Link href="/dashboard" className="text-[10px] font-black uppercase tracking-[0.3em] hover:text-luxury-gold transition-colors flex items-center gap-2">
                  <div className="w-7 h-7 bg-luxury-ruby rounded-lg flex items-center justify-center text-[10px] text-white">
                    {user?.name?.substring(0, 1)}
                  </div>
                  <span className="hidden lg:block">Account</span>
                </Link>
                <button 
                  onClick={logout}
                  className="text-gray-500 hover:text-white text-[10px] font-black uppercase tracking-widest transition-colors"
                >
                  Close Session
                </button>
              </div>
            ) : (
              <Link 
                href="/auth/login"
                className="bg-white/5 hover:bg-white/10 border border-white/10 px-6 py-3 rounded-full transition-all flex items-center gap-2 group"
              >
                <User className="w-4 h-4 group-hover:text-luxury-gold transition-colors" />
                <span className="text-[10px] font-black uppercase tracking-[0.2em]">Client Login</span>
              </Link>
            )}
          </div>
        </div>
      </nav>

      {/* Search Overlay */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: isSearchOpen ? 1 : 0 }}
        className={`fixed inset-0 z-[100] bg-black/95 backdrop-blur-xl flex flex-col items-center justify-center px-6 ${
          isSearchOpen ? "pointer-events-auto" : "pointer-events-none"
        }`}
      >
        <button 
          onClick={() => setIsSearchOpen(false)}
          className="absolute top-10 right-10 text-gray-500 hover:text-white transition-colors uppercase tracking-[0.3em] text-xs font-bold"
        >
          Close [Esc]
        </button>
        
        <div className="w-full max-w-3xl">
          <input 
            autoFocus={isSearchOpen}
            type="text"
            placeholder="Search by origin, carat, or gemstone type..."
            className="w-full bg-transparent border-b-2 border-white/10 py-8 text-3xl md:text-5xl font-light text-white focus:outline-none focus:border-luxury-ruby transition-all placeholder:text-zinc-800"
          />
          <div className="mt-12 flex flex-wrap gap-4">
            <span className="text-gray-500 text-[10px] uppercase font-bold tracking-widest mr-4 py-2">Suggested:</span>
            {["Burma Ruby", "Ceylon Sapphire", "Investment Grade", "3+ Carat"].map((tag) => (
              <button key={tag} className="px-6 py-2 bg-white/5 border border-white/5 rounded-full text-xs text-gray-400 hover:text-white hover:border-white/20 transition-all font-medium">
                {tag}
              </button>
            ))}
          </div>
        </div>
      </motion.div>
    </>
  );
};

export default Navbar;
