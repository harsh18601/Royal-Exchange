"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { useAuth } from "@/context/AuthContext";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { 
  Wallet, 
  Clock, 
  MessageSquare, 
  Settings, 
  LogOut, 
  ChevronRight, 
  TrendingUp, 
  ShieldCheck,
  CreditCard,
  ShoppingBag,
  Gem,
  Heart,
  FileText,
  User,
  Sparkles,
  Download,
  ExternalLink,
  Zap,
  Trash
} from "lucide-react";
import { useCurrency } from "@/context/CurrencyContext";
import { useWishlist } from "@/context/WishlistContext";
import { MOCK_OWNED_STONES, MOCK_ORDERS, OwnedStone, Order, Gemstone } from "@/lib/data";
import { getGemstones } from "@/lib/contentful";

export default function DashboardPage() {
  const { user, isLoggedIn, isLoading, logout } = useAuth();
  const { formatPrice } = useCurrency();
  const router = useRouter();
  const [activeTab, setActiveTab ] = useState("collection");
  const { wishlistCount, wishlist, toggleWishlist } = useWishlist();
  const [wishlistItems, setWishlistItems] = useState<Gemstone[]>([]);

  useEffect(() => {
    const fetchWishlist = async () => {
       if (wishlist.length > 0) {
          const cmsGems = await getGemstones();
          const mapped = cmsGems
            .map((item: any) => ({
              id: item.sys.id,
              ...item.fields,
              mainImage: item.fields.mainImage?.fields?.file?.url || "/luxury_ruby_gemstone_1774331709105.png"
            }))
            .filter((gem: Gemstone) => wishlist.includes(gem.id));
          setWishlistItems(mapped);
       } else {
          setWishlistItems([]);
       }
    };
    fetchWishlist();
  }, [wishlist]);

  useEffect(() => {
    if (!isLoading && !isLoggedIn) {
      router.push("/auth/login");
    }
  }, [isLoading, isLoggedIn, router]);

  if (isLoading || !isLoggedIn) {
     return (
      <div className="min-h-screen bg-luxury-black flex items-center justify-center">
        <div className="text-white uppercase tracking-[0.5em] text-[10px] font-black animate-pulse">
          Establishing Secure Connection...
        </div>
      </div>
    );
  }

  // Dynamic summary based on MOCK data (which is now empty)
  const portfolioSummary = {
    value: MOCK_OWNED_STONES.reduce((acc, s) => acc + s.resaleValue, 0),
    gemCount: MOCK_OWNED_STONES.length,
    tier: MOCK_OWNED_STONES.length >= 8 ? "Elite Collector" : MOCK_OWNED_STONES.length >= 3 ? "Gold Collector" : "Silver Collector",
    wishlistCount: wishlistCount
  };

  return (
    <div className="pt-32 pb-24 bg-luxury-black min-h-screen">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          {/* Sidebar */}
          <div className="lg:col-span-3">
             <div className="glass-card p-8 sticky top-32 border-white/5 bg-zinc-950/50">
                <div className="flex items-center gap-4 mb-10">
                   <div className="w-12 h-12 bg-luxury-ruby rounded-2xl flex items-center justify-center font-black text-white shadow-lg shadow-red-900/30">
                      {user?.name?.substring(0, 2).toUpperCase()}
                   </div>
                   <div>
                      <h4 className="text-white font-bold uppercase text-[10px] tracking-widest leading-tight">{user?.name}</h4>
                      <div className="flex items-center gap-1.5 mt-1">
                        <Zap className="w-2.5 h-2.5 text-luxury-gold" />
                        <p className="text-luxury-gold text-[8px] font-black uppercase tracking-widest">{portfolioSummary.tier}</p>
                      </div>
                   </div>
                </div>

                <nav className="space-y-1">
                   {[
                     { id: "collection", icon: Gem, label: "My Collection" },
                     { id: "wishlist", icon: Heart, label: "Wishlist" },
                     { id: "orders", icon: ShoppingBag, label: "My Orders" },
                     { id: "certificates", icon: FileText, label: "Certificates" },
                     { id: "inquiries", icon: MessageSquare, label: "Stone Requests" },
                     { id: "profile", icon: User, label: "Profile" },
                     { id: "settings", icon: Settings, label: "Account Settings" }
                   ].map((item) => (
                     <button
                        key={item.id}
                        onClick={() => setActiveTab(item.id)}
                        className={`w-full flex items-center justify-between p-4 rounded-2xl transition-all duration-300 ${
                          activeTab === item.id ? "bg-luxury-ruby text-white shadow-xl shadow-red-900/20" : "text-gray-500 hover:text-white hover:bg-white/5"
                        }`}
                     >
                        <div className="flex items-center gap-3">
                           <item.icon className={`w-4 h-4 ${activeTab === item.id ? "text-white" : "text-gray-600"}`} />
                           <span className="text-[9px] font-black uppercase tracking-widest">{item.label}</span>
                        </div>
                        <ChevronRight className={`w-3 h-3 ${activeTab === item.id ? "opacity-100" : "opacity-0"}`} />
                     </button>
                   ))}
                   <button 
                     onClick={logout}
                     className="w-full flex items-center gap-3 p-4 rounded-xl text-gray-700 hover:text-red-500 transition-all mt-8 border-t border-white/5 pt-8"
                   >
                      <LogOut className="w-4 h-4" />
                      <span className="text-[9px] font-black uppercase tracking-widest">Terminate Session</span>
                   </button>
                </nav>
             </div>
          </div>

          {/* Main Content */}
          <div className="lg:col-span-9 space-y-8">
             {/* Header Stat Cards */}
             <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                <div className="glass-card p-6 group hover:border-luxury-gold/30 transition-all">
                   <div className="flex justify-between items-start mb-4">
                      <div className="p-2 bg-luxury-gold/10 rounded-lg group-hover:bg-luxury-gold/20 transition-colors">
                         <Wallet className="text-luxury-gold w-4 h-4" />
                      </div>
                      <TrendingUp className="text-green-500 w-3 h-3" />
                   </div>
                   <p className="text-gray-500 text-[8px] font-black uppercase tracking-widest mb-1">Portfolio Value</p>
                   <h2 className="text-xl font-black text-white font-mono">{formatPrice(portfolioSummary.value)}</h2>
                </div>
                <div className="glass-card p-6 group hover:border-luxury-ruby/30 transition-all">
                   <div className="flex justify-between items-start mb-4">
                      <div className="p-2 bg-luxury-ruby/10 rounded-lg group-hover:bg-luxury-ruby/20 transition-colors">
                         <Gem className="text-luxury-ruby w-4 h-4" />
                      </div>
                      <ShieldCheck className="text-white w-3 h-3 opacity-50" />
                   </div>
                   <p className="text-gray-500 text-[8px] font-black uppercase tracking-widest mb-1">Gemstones Owned</p>
                   <h2 className="text-xl font-black text-white font-display uppercase">{portfolioSummary.gemCount} Certified</h2>
                </div>
                <div className="glass-card p-6 group hover:border-luxury-sapphire/30 transition-all">
                   <div className="flex justify-between items-start mb-4">
                      <div className="p-2 bg-luxury-sapphire/10 rounded-lg group-hover:bg-luxury-sapphire/20 transition-colors">
                         <Zap className="text-luxury-sapphire w-4 h-4" />
                      </div>
                   </div>
                   <p className="text-gray-500 text-[8px] font-black uppercase tracking-widest mb-1">Client Tier</p>
                   <h2 className="text-xl font-black text-white font-display uppercase">{portfolioSummary.tier}</h2>
                </div>
                <div className="glass-card p-6 group hover:border-white/20 transition-all">
                   <div className="flex justify-between items-start mb-4">
                      <div className="p-2 bg-white/5 rounded-lg group-hover:bg-white/10 transition-colors">
                         <Heart className="text-gray-400 w-4 h-4" />
                      </div>
                   </div>
                   <p className="text-gray-500 text-[8px] font-black uppercase tracking-widest mb-1">Watchlist</p>
                   <h2 className="text-xl font-black text-white font-display uppercase">{portfolioSummary.wishlistCount} Saved</h2>
                </div>
             </div>

             {/* Dynamic Content */}
             <motion.div
                key={activeTab}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                className="min-h-[600px] flex flex-col gap-8"
             >
                <div className="glass-card p-10 flex-1 border-white/5 bg-zinc-950/20">
                  {activeTab === "collection" && (
                    <div className="space-y-8">
                       <div className="flex justify-between items-end">
                          <div>
                             <h2 className="text-2xl font-black text-white uppercase tracking-tighter">Your Private Collection</h2>
                             <p className="text-gray-500 text-[10px] font-black uppercase tracking-[0.2em] mt-1">Investment-grade assets under management</p>
                          </div>
                          <Link href="/catalog" className="text-luxury-ruby font-black text-[9px] uppercase tracking-widest hover:text-white transition-colors">Acquire More +</Link>
                       </div>

                       {MOCK_OWNED_STONES.length > 0 ? (
                         <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            {MOCK_OWNED_STONES.map((stone) => (
                              <div key={stone.id} className="bg-zinc-900/50 border border-white/5 rounded-[2.5rem] p-6 group hover:border-luxury-ruby/30 transition-all duration-500">
                                 <div className="flex gap-6">
                                    <div className="w-32 h-32 rounded-3xl overflow-hidden shrink-0 border border-white/5">
                                       <img src={stone.mainImage} alt="" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
                                    </div>
                                    <div className="flex-1 flex flex-col justify-between py-1">
                                       <div>
                                          <div className="flex justify-between items-start">
                                             <p className="text-luxury-ruby text-[8px] font-black uppercase tracking-widest mb-1">{stone.category}</p>
                                             <div className="bg-green-500/10 px-2 py-0.5 rounded-full">
                                                <p className="text-green-500 text-[8px] font-black uppercase tracking-widest">+{((stone.resaleValue - stone.price)/stone.price * 100).toFixed(1)}%</p>
                                             </div>
                                          </div>
                                          <h4 className="text-white font-bold text-lg leading-tight mb-2">{stone.name}</h4>
                                          <div className="flex items-center gap-4 text-gray-500 text-[9px] font-bold uppercase tracking-widest">
                                             <span>{stone.caratWeight} ct</span>
                                             <div className="w-1 h-1 bg-gray-700 rounded-full" />
                                             <span>{stone.origin}</span>
                                          </div>
                                       </div>
                                       <div className="flex items-center justify-between mt-4">
                                          <div>
                                             <p className="text-[8px] text-gray-600 font-black uppercase tracking-widest mb-0.5">Current Value</p>
                                             <p className="text-white font-mono font-bold">{formatPrice(stone.resaleValue)}</p>
                                          </div>
                                          <Link href={`/catalog/${stone.id}`} className="p-3 bg-white/5 rounded-2xl hover:bg-luxury-ruby transition-colors group/link">
                                             <ExternalLink className="w-4 h-4 text-gray-400 group-hover/link:text-white" />
                                          </Link>
                                       </div>
                                    </div>
                                 </div>
                                 <div className="grid grid-cols-2 gap-3 mt-6 pt-6 border-t border-white/5">
                                    <button className="flex items-center justify-center gap-2 py-3 bg-white/5 rounded-2xl text-[9px] font-black uppercase tracking-widest text-gray-400 hover:bg-white/10 hover:text-white transition-all">
                                       <FileText className="w-3 h-3" /> Certificate
                                    </button>
                                    <button className="flex items-center justify-center gap-2 py-3 bg-white/5 rounded-2xl text-[9px] font-black uppercase tracking-widest text-gray-400 hover:bg-white/10 hover:text-white transition-all">
                                       <TrendingUp className="w-3 h-3" /> Market Analysis
                                    </button>
                                 </div>
                              </div>
                            ))}
                         </div>
                       ) : (
                        <div className="flex flex-col items-center justify-center py-20 text-center">
                          <div className="w-24 h-24 bg-zinc-950/50 rounded-full flex items-center justify-center mb-10 border border-white/5 shadow-inner">
                             <ShoppingBag className="w-10 h-10 text-gray-700" />
                          </div>
                          <h3 className="text-white font-black text-4xl uppercase tracking-tighter mb-6">Your Collection is Empty</h3>
                          <p className="text-gray-500 text-xs font-bold max-w-sm mb-12 leading-relaxed uppercase tracking-[0.2em]">Start building your gemstone collection with our certified rubies and sapphires. Investment-grade assets await.</p>
                          <Link 
                            href="/catalog"
                            className="px-12 py-5 bg-luxury-ruby text-white text-[10px] font-black uppercase tracking-[0.3em] rounded-full hover:bg-red-700 transition-all shadow-2xl shadow-red-900/40 transform hover:-translate-y-1"
                          >
                            Browse Collection
                          </Link>
                        </div>
                       )}
                    </div>
                  )}

                  {activeTab === "orders" && (
                    <div className="space-y-8">
                       <h2 className="text-2xl font-black text-white uppercase tracking-tighter">Purchase History</h2>
                       {MOCK_ORDERS.length > 0 ? (
                         <div className="overflow-hidden rounded-[2rem] border border-white/5">
                            <table className="w-full text-left border-collapse">
                               <thead>
                                  <tr className="bg-white/5">
                                     <th className="px-6 py-4 text-[9px] font-black uppercase tracking-widest text-gray-500">Order ID</th>
                                     <th className="px-6 py-4 text-[9px] font-black uppercase tracking-widest text-gray-500">Asset Name</th>
                                     <th className="px-6 py-4 text-[9px] font-black uppercase tracking-widest text-gray-500">Status</th>
                                     <th className="px-6 py-4 text-[9px] font-black uppercase tracking-widest text-gray-500">Amount</th>
                                     <th className="px-6 py-4 text-[9px] font-black uppercase tracking-widest text-gray-500">Date</th>
                                  </tr>
                               </thead>
                               <tbody className="divide-y divide-white/5">
                                  {MOCK_ORDERS.map((order) => (
                                     <tr key={order.id} className="hover:bg-white/5 transition-colors group">
                                        <td className="px-6 py-6 font-mono text-[10px] text-gray-400">{order.id}</td>
                                        <td className="px-6 py-6">
                                           <p className="text-white font-bold text-xs uppercase tracking-tight">{order.stoneName}</p>
                                        </td>
                                        <td className="px-6 py-6 text-center">
                                           <span className="px-3 py-1 bg-green-500/10 text-green-500 text-[8px] font-black uppercase tracking-widest rounded-full">{order.status}</span>
                                        </td>
                                        <td className="px-6 py-6">
                                           <p className="text-white font-mono text-xs font-bold">{formatPrice(order.amount)}</p>
                                        </td>
                                        <td className="px-6 py-6 text-gray-500 text-[10px] font-bold uppercase tracking-widest">{order.date}</td>
                                     </tr>
                                  ))}
                               </tbody>
                            </table>
                         </div>
                       ) : (
                        <div className="flex flex-col items-center justify-center py-20 text-center opacity-40">
                          <CreditCard className="w-12 h-12 text-gray-700 mb-6" />
                          <p className="text-white font-black text-[10px] uppercase tracking-[0.4em]">No Recorded Transactions</p>
                        </div>
                       )}
                    </div>
                  )}

                  {activeTab === "certificates" && (
                    <div className="space-y-8">
                       <h2 className="text-2xl font-black text-white uppercase tracking-tighter">Certification Vault</h2>
                       {MOCK_OWNED_STONES.length > 0 ? (
                         <div className="grid grid-cols-1 gap-4">
                            {MOCK_OWNED_STONES.map((stone) => (
                               <div key={stone.id} className="bg-zinc-900/40 border border-white/5 rounded-3xl p-6 flex items-center justify-between group hover:border-luxury-gold/30 transition-all">
                                  <div className="flex items-center gap-6">
                                     <div className="w-16 h-16 bg-zinc-800 rounded-2xl flex items-center justify-center">
                                        <FileText className="text-luxury-gold w-8 h-8 opacity-50" />
                                     </div>
                                     <div>
                                        <h4 className="text-white font-bold uppercase text-[10px] tracking-widest mb-1">{stone.name}</h4>
                                        <p className="text-gray-500 text-[9px] font-bold uppercase tracking-widest">{stone.certificateLab} Report • No. {stone.certificateNumber}</p>
                                     </div>
                                  </div>
                                  <button className="p-4 bg-white/5 rounded-2xl hover:bg-luxury-gold hover:text-black transition-all group/btn">
                                     <Download className="w-5 h-5 group-hover/btn:scale-110 transition-transform" />
                                  </button>
                               </div>
                            ))}
                         </div>
                       ) : (
                        <div className="flex flex-col items-center justify-center py-20 text-center opacity-40">
                          <FileText className="w-12 h-12 text-gray-700 mb-6" />
                          <p className="text-white font-black text-[10px] uppercase tracking-[0.4em]">No Laboratory Reports available</p>
                        </div>
                       )}
                    </div>
                  )}
                  
                  {activeTab === "wishlist" && (
                    <div className="space-y-8">
                       <h2 className="text-2xl font-black text-white uppercase tracking-tighter">Private Observation List</h2>
                       
                       {wishlistItems.length > 0 ? (
                         <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            {wishlistItems.map((stone) => (
                               <div key={stone.id} className="bg-zinc-900/50 border border-white/5 rounded-[2.5rem] p-6 group hover:border-luxury-ruby/30 transition-all duration-500">
                                  <div className="flex gap-6">
                                     <div className="w-32 h-32 rounded-3xl overflow-hidden shrink-0 border border-white/5">
                                        <img src={stone.mainImage} alt="" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
                                     </div>
                                     <div className="flex-1 flex flex-col justify-between py-1">
                                        <div>
                                           <p className="text-luxury-ruby text-[8px] font-black uppercase tracking-widest mb-1">{stone.category}</p>
                                           <h4 className="text-white font-bold text-lg leading-tight mb-2">{stone.name}</h4>
                                           <div className="flex items-center gap-4 text-gray-500 text-[9px] font-bold uppercase tracking-widest">
                                              <span>{stone.caratWeight} ct</span>
                                              <div className="w-1 h-1 bg-gray-700 rounded-full" />
                                              <span>{stone.origin}</span>
                                           </div>
                                        </div>
                                        <div className="flex items-center justify-between mt-4">
                                           <div>
                                              <p className="text-[8px] text-gray-600 font-black uppercase tracking-widest mb-0.5">Asset Value</p>
                                              <p className="text-white font-mono font-bold">{formatPrice(stone.price)}</p>
                                           </div>
                                           <button 
                                             onClick={() => toggleWishlist(stone.id)}
                                             className="p-3 bg-luxury-ruby text-white rounded-2xl hover:bg-red-700 transition-colors shadow-lg shadow-red-900/40"
                                           >
                                              <Trash className="w-4 h-4" />
                                           </button>
                                        </div>
                                     </div>
                                  </div>
                               </div>
                            ))}
                         </div>
                       ) : (
                        <div className="flex flex-col items-center justify-center py-20 text-center">
                           <Heart className="w-12 h-12 text-gray-800 mb-6" />
                           <p className="text-gray-500 text-[10px] font-black uppercase tracking-[0.3em] mb-8">You are not currently observing any assets.</p>
                           <Link href="/catalog" className="px-8 py-3 bg-white/5 border border-white/10 text-white text-[9px] font-black uppercase tracking-widest rounded-full hover:bg-white/10 transition-all">Explore Collection</Link>
                        </div>
                       )}
                    </div>
                  )}

                  {activeTab === "inquiries" && (
                    <div className="space-y-8">
                       <h2 className="text-2xl font-black text-white uppercase tracking-tighter">Stone Requests</h2>
                       <div className="space-y-4">
                          <div className="bg-zinc-900/40 border border-white/5 rounded-3xl p-6 flex items-center justify-between">
                             <div className="flex items-center gap-4">
                                <div className="w-10 h-10 bg-luxury-gold/10 rounded-xl flex items-center justify-center">
                                   <MessageSquare className="text-luxury-gold w-5 h-5" />
                                </div>
                                <div>
                                   <p className="text-white font-bold text-xs uppercase tracking-tight">Inquiry #REQ-2041</p>
                                   <p className="text-gray-500 text-[8px] font-black uppercase tracking-widest">Regarding: Unheated 4.5ct Burmese Ruby</p>
                                </div>
                             </div>
                             <span className="px-3 py-1 bg-luxury-ruby/10 text-luxury-ruby text-[8px] font-black uppercase tracking-widest rounded-full">Awaiting Specialist</span>
                          </div>
                       </div>
                    </div>
                  )}

                  {activeTab === "profile" && (
                     <div className="space-y-8">
                        <h2 className="text-2xl font-black text-white uppercase tracking-tighter">Client Profile</h2>
                        <div className="grid grid-cols-2 gap-8">
                           <div className="space-y-2">
                              <label className="text-[9px] text-gray-500 font-black uppercase tracking-widest ml-4">Full Name</label>
                              <div className="bg-white/5 border border-white/10 rounded-2xl px-6 py-4 text-white text-xs font-bold uppercase tracking-widest">{user?.name}</div>
                           </div>
                           <div className="space-y-2">
                              <label className="text-[9px] text-gray-500 font-black uppercase tracking-widest ml-4">Client Tier</label>
                              <div className="bg-white/5 border border-white/10 rounded-2xl px-6 py-4 text-luxury-gold text-xs font-black uppercase tracking-widest flex items-center gap-2">
                                 <Zap className="w-3 h-3" /> {portfolioSummary.tier}
                              </div>
                           </div>
                        </div>
                     </div>
                  )}

                  {activeTab === "settings" && (
                     <div className="space-y-8">
                        <h2 className="text-2xl font-black text-white uppercase tracking-tighter">Account Security</h2>
                        <div className="space-y-6">
                           <div className="p-6 bg-white/5 border border-white/5 rounded-3xl flex items-center justify-between">
                              <div className="flex items-center gap-4">
                                 <ShieldCheck className="text-luxury-sapphire w-6 h-6" />
                                 <div>
                                    <h4 className="text-white font-bold uppercase text-[10px] tracking-widest mb-1">Two-Factor Authentication</h4>
                                    <p className="text-gray-500 text-[9px] font-bold uppercase tracking-widest">Enabled via Secure Hardware Token</p>
                                 </div>
                              </div>
                              <button className="px-6 py-2 bg-white/5 border border-white/10 text-white text-[9px] font-black uppercase tracking-widest rounded-lg">Manage</button>
                           </div>
                        </div>
                     </div>
                  )}
                </div>

                {/* Recommended Stones Section (Always visible on dashboard bottom or as separate tab, user suggested as a section) */}
                <div className="glass-card p-10 bg-zinc-950/30 border-white/5">
                  <div className="flex items-center justify-between mb-10">
                    <div className="flex items-center gap-3">
                      <Sparkles className="text-luxury-gold w-5 h-5" />
                      <h3 className="text-white font-black uppercase tracking-widest text-sm">Recommended for you</h3>
                    </div>
                    <p className="text-[8px] text-gray-500 font-black uppercase tracking-widest">Based on Interest & Budget</p>
                  </div>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                     {[1, 2, 3].map((i) => (
                       <div key={i} className="bg-zinc-900/50 border border-white/5 rounded-3xl p-4 group cursor-pointer hover:border-luxury-gold/30 transition-all">
                          <div className="aspect-[4/5] rounded-2xl bg-zinc-800 mb-4 overflow-hidden relative">
                             <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent" />
                             <div className="absolute bottom-4 left-4">
                                <p className="text-luxury-gold text-[8px] font-black uppercase tracking-widest">Premium Choice</p>
                                <p className="text-white text-xs font-bold uppercase">View Analysis</p>
                             </div>
                          </div>
                          <div className="space-y-1 px-2">
                             <p className="text-luxury-ruby text-[8px] font-black uppercase tracking-widest">Untreated Ruby</p>
                             <h4 className="text-white font-bold text-sm">3.42ct Burma Star</h4>
                             <div className="flex items-center justify-between pt-2 border-t border-white/5 mt-2">
                                <p className="text-white font-mono text-xs font-bold">{formatPrice(125000)}</p>
                                <ChevronRight className="w-3 h-3 text-gray-600 group-hover:text-luxury-gold transition-colors" />
                             </div>
                          </div>
                       </div>
                     ))}
                  </div>
                </div>
             </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
}
