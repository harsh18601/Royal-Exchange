"use client";

import Link from "next/link";
import { useState, useEffect } from "react";
import { 
  Search, 
  ShoppingCart, 
  Heart, 
  User, 
  Sparkles, 
  ChevronDown, 
  LogOut, 
  ShoppingBag, 
  FileText, 
  LayoutDashboard,
  ShieldCheck,
  Globe,
  Gem
} from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

import { useAuth } from "@/context/AuthContext";
import { useCurrency } from "@/context/CurrencyContext";
import { useWishlist } from "@/context/WishlistContext";

const Navbar = () => {
  const { user, isLoggedIn, logout } = useAuth();
  const { currency, setCurrency } = useCurrency();
  const { wishlistCount } = useWishlist();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [isCurrencyOpen, setIsCurrencyOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Gem Catalog", href: "/catalog", dropdown: ["Ruby", "Blue Sapphire", "Yellow Sapphire", "Emerald", "Investment Stones", "New Arrivals"] },
    { name: "AI Gem Advisor", href: "/ai-advisor", icon: true },
    { name: "About Us", href: "/about" },
    { name: "Contact Us", href: "/contact" },
  ];

  return (
    <>
      <div className="fixed top-0 w-full z-[60]">
        {/* Trust Indicator Strip */}
        <div className="overflow-hidden border-b border-white/5 bg-[#471019] py-1.5">
          <div className="mx-auto flex max-w-7xl items-center justify-center px-6 text-[7px] font-black uppercase tracking-[0.22em] text-white/90 md:text-[8px]">
             <div className="flex flex-wrap items-center justify-center gap-x-5 gap-y-1.5 md:gap-x-8">
                <span className="flex items-center gap-1.5"><ShieldCheck className="h-3 w-3 text-luxury-gold" /> Natural Stones</span>
                <span className="flex items-center gap-1.5"><Gem className="h-3 w-3 text-luxury-gold" /> GIA Certified</span>
                <span className="flex items-center gap-1.5"><Globe className="h-3 w-3 text-luxury-gold" /> Worldwide Shipping</span>
             </div>
          </div>
        </div>

        {/* Main Navigation */}
        <nav
          className={`w-full transition-all duration-500 ${
            isScrolled
              ? "bg-black/80 backdrop-blur-xl border-b border-luxury-gold/20 py-4 shadow-2xl"
              : "bg-transparent py-7"
          }`}
        >
          <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
            {/* Logo Area */}
            <Link href="/" className="flex items-center gap-5 group">
              <div className="relative w-12 h-12 flex items-center justify-center transition-transform duration-500 group-hover:scale-110">
                <div className="absolute inset-0 bg-luxury-gold/20 rounded-full blur-xl group-hover:bg-luxury-gold/40 transition-all duration-700" />
                <div className="relative flex h-full w-full items-center justify-center rounded-full border border-luxury-gold/35 bg-white/5 text-lg font-black tracking-[0.18em] text-luxury-gold">
                  G
                </div>
              </div>
              <div className="flex flex-col">
                <span className="text-xl font-black tracking-[0.28em] text-white leading-none uppercase flex items-center gap-2">
                  GEM<span className="text-luxury-gold">ORA</span>
                </span>
                <span className="text-[9px] font-bold tracking-[0.4em] text-gray-500 uppercase mt-1.5 group-hover:text-luxury-gold transition-colors duration-500">
                   Rare Natural Gemstones
                </span>
              </div>
            </Link>

            {/* Navigation Links */}
            <div className="hidden lg:flex items-center gap-10">
              {navLinks.map((link) => (
                <div 
                  key={link.name} 
                  className="relative group/nav"
                  onMouseEnter={() => setActiveDropdown(link.dropdown ? link.name : null)}
                  onMouseLeave={() => setActiveDropdown(null)}
                >
                  <Link 
                    href={link.href} 
                    className="text-[10px] font-black uppercase tracking-[0.2em] text-gray-400 hover:text-white transition-all flex items-center gap-1.5 py-2 group/link"
                  >
                    {link.icon && <Sparkles className="w-3 h-3 text-luxury-gold animate-pulse" />}
                    {link.name}
                    {link.dropdown && <ChevronDown className={`w-3 h-3 transition-transform duration-300 ${activeDropdown === link.name ? 'rotate-180' : ''}`} />}
                    <span className="absolute bottom-0 left-0 w-0 h-[1px] bg-luxury-gold transition-all duration-300 group-hover/link:w-full" />
                  </Link>

                  {/* Catalog Dropdown */}
                  <AnimatePresence>
                    {link.dropdown && activeDropdown === link.name && (
                      <motion.div
                        initial={{ opacity: 0, y: 10, scale: 0.95 }}
                        animate={{ opacity: 1, y: 0, scale: 1 }}
                        exit={{ opacity: 0, y: 10, scale: 0.95 }}
                        className="absolute top-full left-0 mt-4 w-56 bg-zinc-950/95 backdrop-blur-2xl border border-white/10 rounded-3xl py-6 shadow-2xl z-50 overflow-hidden"
                      >
                        {link.dropdown.map((item) => (
                          <Link
                            key={item}
                            href={`/catalog?category=${item.toLowerCase().replace(' ', '-')}`}
                            className="block px-8 py-3 text-[10px] font-bold uppercase tracking-widest text-gray-400 hover:text-white hover:bg-white/5 transition-all"
                          >
                            {item}
                          </Link>
                        ))}
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              ))}
            </div>

            {/* Action Group */}
            <div className="flex items-center gap-6">
              {/* Search Toggle */}
              <button 
                onClick={() => setIsSearchOpen(true)}
                className="text-gray-400 hover:text-white transition-all hover:scale-110"
              >
                <Search className="w-5 h-5" />
              </button>

              {/* Wishlist */}
              <Link href="/wishlist" className="text-gray-400 hover:text-white transition-all hover:scale-110 relative group/icon">
                <Heart className="w-5 h-5 group-hover/icon:fill-luxury-ruby group-hover/icon:text-luxury-ruby transition-colors" />
                {wishlistCount > 0 && (
                  <span className="absolute -top-2 -right-2 bg-luxury-ruby text-white text-[8px] font-black w-4 h-4 rounded-full flex items-center justify-center shadow-lg animate-bounce">
                    {wishlistCount}
                  </span>
                )}
              </Link>

              {/* Cart */}
              <Link href="/cart" className="text-gray-400 hover:text-white transition-all hover:scale-110 relative">
                <ShoppingBag className="w-5 h-5" />
                <span className="absolute -top-2 -right-2 bg-luxury-gold text-black text-[8px] font-black w-4 h-4 rounded-full flex items-center justify-center shadow-lg">0</span>
              </Link>

              {/* Currency Selector */}
              <div className="relative">
                <button 
                  onClick={() => setIsCurrencyOpen(!isCurrencyOpen)}
                  className="text-[9px] font-black uppercase tracking-widest text-white/80 bg-white/5 border border-white/10 px-4 py-2 rounded-full hover:bg-white/10 transition-all flex items-center gap-2"
                >
                  {currency} <ChevronDown className={`w-3 h-3 transition-transform ${isCurrencyOpen ? 'rotate-180' : ''}`} />
                </button>
                <AnimatePresence>
                  {isCurrencyOpen && (
                    <motion.div
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: 10 }}
                      className="absolute top-full mt-3 right-0 bg-zinc-950/95 backdrop-blur-2xl border border-white/10 rounded-2xl py-3 w-32 shadow-2xl z-50 overflow-hidden"
                    >
                      {["INR", "USD", "EUR", "GBP"].map((c) => (
                        <button
                          key={c}
                          onClick={() => {
                            setCurrency(c as any);
                            setIsCurrencyOpen(false);
                          }}
                          className={`w-full text-left px-6 py-2.5 text-[10px] font-bold uppercase tracking-widest transition-all ${
                            currency === c ? "text-luxury-gold bg-white/5" : "text-gray-400 hover:text-white hover:bg-white/5"
                          }`}
                        >
                          {c}
                        </button>
                      ))}
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>

              {/* User Account / Profile */}
              {isLoggedIn ? (
                <div 
                  className="relative group/user"
                  onMouseEnter={() => setActiveDropdown('user')}
                  onMouseLeave={() => setActiveDropdown(null)}
                >
                  <button className="flex items-center gap-3 pl-2 transition-all">
                    <div className="w-9 h-9 bg-luxury-ruby rounded-xl flex items-center justify-center text-[10px] font-black text-white shadow-lg shadow-red-900/30 group-hover/user:scale-110 transition-transform">
                      {user?.name?.substring(0, 1).toUpperCase()}
                    </div>
                    <div className="hidden lg:flex flex-col items-start leading-none gap-1">
                       <span className="text-[10px] font-black uppercase tracking-widest text-white">{user?.name?.split(' ')[0]}</span>
                       <ChevronDown className="w-3 h-3 text-gray-500" />
                    </div>
                  </button>

                  <AnimatePresence>
                    {activeDropdown === 'user' && (
                      <motion.div
                        initial={{ opacity: 0, y: 10, scale: 0.95 }}
                        animate={{ opacity: 1, y: 0, scale: 1 }}
                        exit={{ opacity: 0, y: 10, scale: 0.95 }}
                        className="absolute top-full right-0 mt-3 w-56 bg-zinc-950/95 backdrop-blur-2xl border border-white/10 rounded-3xl py-6 shadow-2xl z-50 overflow-hidden"
                      >
                        <div className="px-8 pb-4 mb-4 border-b border-white/5">
                           <p className="text-[9px] font-bold text-gray-500 uppercase tracking-[0.2em] mb-1">Portfolio Tier</p>
                           <p className="text-luxury-gold text-[10px] font-black uppercase tracking-widest flex items-center gap-2">
                             <Sparkles className="w-3 h-3" /> Elite Collector
                           </p>
                        </div>
                        {[
                          { name: "My Collection", icon: Gem, href: "/dashboard" },
                          { name: "Wishlist", icon: Heart, href: "/dashboard" },
                          { name: "My Orders", icon: ShoppingBag, href: "/dashboard" },
                          { name: "Certificates", icon: FileText, href: "/dashboard" },
                          { name: "Profile", icon: User, href: "/dashboard" },
                        ].map((item) => (
                          <Link
                            key={item.name}
                            href={item.href}
                            className="flex items-center gap-4 px-8 py-3 text-[10px] font-bold uppercase tracking-widest text-gray-400 hover:text-white hover:bg-white/5 transition-all"
                          >
                            <item.icon className="w-4 h-4 text-gray-600 group-hover:text-luxury-ruby" />
                            {item.name}
                          </Link>
                        ))}
                        <button 
                          onClick={logout}
                          className="w-full flex items-center gap-4 px-8 py-3 mt-4 text-[10px] font-black uppercase tracking-widest text-luxury-ruby hover:bg-luxury-ruby hover:text-white transition-all border-t border-white/5 pt-6"
                        >
                          <LogOut className="w-4 h-4" /> Sign Out
                        </button>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              ) : (
                <Link 
                  href="/auth/login"
                  className="bg-white/5 hover:bg-luxury-gold hover:text-black border border-white/10 px-8 py-3 rounded-full transition-all flex items-center gap-2 group shadow-xl shadow-black/20"
                >
                  <User className="w-4 h-4" />
                  <span className="text-[10px] font-black uppercase tracking-[0.2em]">Login</span>
                </Link>
              )}
            </div>
          </div>
        </nav>
      </div>

      {/* Search Overlay Expansion */}
      <AnimatePresence>
        {isSearchOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] bg-black/95 backdrop-blur-3xl flex flex-col items-center justify-center px-6"
          >
            <button 
              onClick={() => setIsSearchOpen(false)}
              className="absolute top-10 right-10 p-4 rounded-full bg-white/5 border border-white/10 text-white hover:bg-luxury-ruby hover:border-luxury-ruby transition-all group"
            >
              <LogOut className="w-6 h-6 rotate-180" />
            </button>
            
            <motion.div 
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              className="w-full max-w-4xl text-center"
            >
              <h2 className="text-luxury-gold text-[10px] font-black uppercase tracking-[0.5em] mb-12 animate-pulse">Intelligent Gemstone Search</h2>
              <input 
                autoFocus
                type="text"
                placeholder="Search gemstones, origin, carat..."
                className="w-full bg-transparent border-b-2 border-luxury-gold/30 py-10 text-4xl md:text-7xl font-light text-white text-center focus:outline-none focus:border-luxury-gold transition-all placeholder:text-zinc-900"
              />
              <div className="mt-16 flex flex-wrap justify-center gap-6">
                {["Burma Ruby", "Ceylon Sapphire", "GIA Certified", "Investment Grade", "Emerald Cut"].map((tag) => (
                  <button key={tag} className="px-8 py-3 bg-white/5 border border-white/5 rounded-full text-[10px] font-black uppercase tracking-widest text-gray-500 hover:text-white hover:border-luxury-gold/50 transition-all">
                    {tag}
                  </button>
                ))}
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;
