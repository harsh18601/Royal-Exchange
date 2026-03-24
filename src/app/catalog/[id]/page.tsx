"use client";

import { motion, AnimatePresence } from "framer-motion";
import { Sparkles, ShieldCheck, Globe, Gem, ArrowLeft, Heart, ShoppingCart, MessageSquare, Download } from "lucide-react";
import Link from "next/link";
import { useParams } from "next/navigation";
import { useState, useEffect } from "react";
import { getGemstoneById } from "@/lib/contentful";
import { Gemstone } from "@/lib/data"; 
import { useCurrency } from "@/context/CurrencyContext";
import { useWishlist } from "@/context/WishlistContext";

// Define a type for the Contentful entry structure if not already defined globally
// This is a simplified example, a real Contentful type would be more detailed.
interface ContentfulAsset {
  fields: {
    file: {
      url: string;
      details: {
        size: number;
        image?: {
          width: number;
          height: number;
        };
      };
      fileName: string;
      contentType: string;
    };
  };
}

export default function GemDetailsPage() {
  const params = useParams();
  const [gem, setGem] = useState<any | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      if (params.id) {
        const cmsGem = await getGemstoneById(params.id as string);
        if (cmsGem) {
          setGem({
            id: cmsGem.sys.id,
            ...cmsGem.fields,
            mainImage: (cmsGem.fields.mainImage as any)?.fields?.file?.url || "/luxury_ruby_gemstone_1774331709105.png"
          } as any);
        }
      }
    };
    fetchData();
  }, [params.id]);

  const [showInquiryModal, setShowInquiryModal] = useState(false);
  const [inquiryForm, setInquiryForm] = useState({
    name: "",
    email: "",
    phone: "",
    message: ""
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<"idle" | "success" | "error">("idle");

  useEffect(() => {
    if (gem) {
      setInquiryForm(prev => ({
        ...prev,
        message: `I am interested in ${gem.name}. Please provide more details.`
      }));
    }
  }, [gem]);

  const { formatPrice } = useCurrency();
  const { toggleWishlist, isInWishlist } = useWishlist();

  if (!gem) return <div className="min-h-screen bg-luxury-black flex items-center justify-center text-white uppercase tracking-[0.5em] text-[10px] font-black">Initializing AI Gem Intelligence...</div>;

  const handleInquirySubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus("idle");

    try {
      const response = await fetch("/api/inquiry", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          ...inquiryForm,
          stoneReference: gem.id
        })
      });

      if (response.ok) {
        setSubmitStatus("success");
        setTimeout(() => setShowInquiryModal(false), 2000);
      } else {
        setSubmitStatus("error");
      }
    } catch (error) {
      console.error("Inquiry error:", error);
      setSubmitStatus("error");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="pt-32 pb-24 bg-luxury-black min-h-screen">
      <div className="max-w-7xl mx-auto px-6">
        <Link href="/catalog" className="inline-flex items-center gap-2 text-gray-500 hover:text-white transition-colors mb-12 uppercase tracking-widest text-xs font-bold group">
          <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" /> Back to Collection
        </Link>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* Gallery Side */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="space-y-6"
          >
            <div className="relative aspect-square rounded-[3rem] overflow-hidden border border-white/5 bg-white/5 shadow-2xl">
              <img src={gem.mainImage} alt={gem.name} className="w-full h-full object-cover" />
              <div className="absolute top-8 left-8">
                <div className="bg-black/40 backdrop-blur-md px-4 py-2 rounded-full border border-white/10 flex items-center gap-2">
                  <ShieldCheck className="w-4 h-4 text-luxury-gold" />
                  <span className="text-xs font-bold text-white uppercase tracking-widest">{gem.certificateLab || "GIA"} Certified</span>
                </div>
              </div>

              {gem.availability && gem.availability !== "Available" && (
                <div className="absolute top-8 right-8">
                  <div className={`px-4 py-2 rounded-full border backdrop-blur-md text-xs font-black uppercase tracking-widest ${
                    gem.availability === "Sold" ? "bg-red-500/20 border-red-500 text-red-500" : "bg-amber-500/20 border-amber-500 text-amber-500"
                  }`}>
                    {gem.availability}
                  </div>
                </div>
              )}
            </div>
            
            <div className="grid grid-cols-4 gap-4">
              {[1, 2, 3, 4].map((i) => (
                <div key={i} className="aspect-square rounded-2xl border border-white/10 overflow-hidden opacity-40 hover:opacity-100 transition-opacity cursor-pointer">
                  <img src={gem.mainImage} alt="" className="w-full h-full object-cover" />
                </div>
              ))}
            </div>
          </motion.div>

          {/* Info Side */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
          >
            <p className="text-luxury-ruby font-black uppercase tracking-[0.5em] mb-4 text-sm">{gem.category} • {gem.origin}</p>
            <h1 className="text-4xl md:text-6xl font-black text-white mb-6 uppercase leading-tight">{gem.name}</h1>
            
            <div className="flex items-center gap-8 mb-10">
              <div className="text-3xl font-mono text-white">{formatPrice(gem.price)}</div>
              <div className="h-10 w-px bg-white/10" />
              <div className="text-gray-400 font-light italic">Immediate secure global delivery available</div>
            </div>

            <p className="text-gray-400 text-lg leading-relaxed mb-12 font-light">{gem.description}</p>

            <div className="grid grid-cols-2 gap-y-8 gap-x-12 mb-12">
              <div>
                <p className="text-[10px] text-gray-500 uppercase font-bold tracking-[0.2em] mb-2 text-center">Weight</p>
                <div className="glass-card py-4 text-center text-white font-bold">{gem.caratWeight} Carats</div>
              </div>
              <div>
                <p className="text-[10px] text-gray-500 uppercase font-bold tracking-[0.2em] mb-2 text-center">Dimensions</p>
                <div className="glass-card py-4 text-center text-white font-bold">{gem.dimensions}</div>
              </div>
              <div>
                <p className="text-[10px] text-gray-500 uppercase font-bold tracking-[0.2em] mb-2 text-center">Treatment</p>
                <div className="glass-card py-4 text-center text-white font-bold">{gem.treatment}</div>
              </div>
              <div>
                <p className="text-[10px] text-gray-500 uppercase font-bold tracking-[0.2em] mb-2 text-center">Certificate</p>
                <div className="glass-card py-4 text-center text-white font-bold">{gem.certificateNumber}</div>
              </div>
            </div>

            <div className="glass-card p-10 shadow-2xl mb-12">
              <div className="flex items-center gap-2 mb-6">
                <Sparkles className="w-5 h-5 text-luxury-gold" />
                <h3 className="text-white font-bold uppercase tracking-widest">AI Gem Intelligence Analysis</h3>
              </div>
              <div className="grid grid-cols-3 gap-6">
                 <div className="space-y-2">
                  <p className="text-[10px] text-gray-500 uppercase font-bold tracking-widest">Rarity</p>
                  <p className="text-2xl text-white font-bold">{gem.rarityScore || 0}%</p>
                  <div className="h-1 bg-white/10 rounded-full overflow-hidden">
                    <div className="h-full bg-luxury-ruby" style={{ width: `${gem.rarityScore || 0}%` }} />
                  </div>
                </div>
                <div className="space-y-2">
                  <p className="text-[10px] text-gray-500 uppercase font-bold tracking-widest">Investment</p>
                  <p className="text-2xl text-white font-bold">{gem.investmentScore || 0}%</p>
                  <div className="h-1 bg-white/10 rounded-full overflow-hidden">
                    <div className="h-full bg-luxury-sapphire" style={{ width: `${gem.investmentScore || 0}%` }} />
                  </div>
                </div>
                <div className="space-y-2">
                  <p className="text-[10px] text-gray-500 uppercase font-bold tracking-widest">Market</p>
                  <p className="text-2xl text-white font-bold">Stable</p>
                  <div className="h-1 bg-white/10 rounded-full overflow-hidden">
                    <div className="h-full bg-luxury-gold" style={{ width: `90%` }} />
                  </div>
                </div>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <button className="bg-luxury-ruby text-white font-bold py-5 rounded-full flex items-center justify-center gap-3 hover:bg-red-700 transition-all uppercase tracking-widest text-xs">
                <ShoppingCart className="w-4 h-4" /> Add to Cart
              </button>
              <button 
                onClick={() => toggleWishlist(gem.id)}
                className={`border font-bold py-5 rounded-full flex items-center justify-center gap-3 transition-all uppercase tracking-widest text-xs ${
                  isInWishlist(gem.id)
                    ? "bg-luxury-ruby border-luxury-ruby text-white"
                    : "bg-white/5 border-white/10 text-white hover:bg-white/10"
                }`}
              >
                <Heart className={`w-4 h-4 ${isInWishlist(gem.id) ? "fill-current" : ""}`} /> 
                {isInWishlist(gem.id) ? "In Wishlist" : "Add to Wishlist"}
              </button>
            </div>

            <button 
              onClick={() => setShowInquiryModal(true)}
              className="w-full mt-4 bg-white/5 border border-white/10 text-white font-bold py-5 rounded-full flex items-center justify-center gap-3 hover:bg-white/10 transition-all uppercase tracking-widest text-xs"
            >
              <MessageSquare className="w-4 h-4" /> Private Inquiry
            </button>
            {gem.labCertificatePdf?.fields?.file?.url && (
              <a 
                href={gem.labCertificatePdf.fields.file.url} 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-full mt-4 bg-white/5 border border-white/10 text-white font-bold py-5 rounded-full flex items-center justify-center gap-3 hover:bg-white/10 transition-all uppercase tracking-widest text-xs"
              >
                <Download className="w-4 h-4" /> Download Lab Certificate
              </a>
            )}
          </motion.div>
        </div>
      </div>

      {/* Inquiry Modal */}
      <AnimatePresence>
        {showInquiryModal && (
          <div className="fixed inset-0 z-50 flex items-center justify-center px-6">
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setShowInquiryModal(false)}
              className="absolute inset-0 bg-black/90 backdrop-blur-xl" 
            />
            <motion.div 
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: 20 }}
              className="relative w-full max-w-lg glass-card p-10 overflow-hidden shadow-[0_0_100px_rgba(185,28,28,0.2)]"
            >
              <div className="absolute top-0 right-0 w-32 h-32 bg-luxury-ruby/20 blur-[80px]" />
              
              <h2 className="text-3xl font-black text-white mb-2 uppercase tracking-tight">Private Inquiry</h2>
              <p className="text-gray-400 text-sm mb-8 font-light">Direct connection with our Gemstone Specialist regarding <span className="text-white font-bold">{gem.name}</span>.</p>

              {submitStatus === "success" ? (
                <div className="py-12 text-center space-y-4">
                  <div className="w-16 h-16 bg-green-500/20 rounded-full flex items-center justify-center mx-auto mb-6">
                    <ShieldCheck className="w-8 h-8 text-green-500" />
                  </div>
                  <h3 className="text-white font-bold text-xl uppercase tracking-widest">Inquiry Received</h3>
                  <p className="text-gray-400 text-sm">Our team will contact you shortly.</p>
                </div>
              ) : (
                <form onSubmit={handleInquirySubmit} className="space-y-4">
                  <div className="space-y-1">
                    <label className="text-[10px] text-gray-500 uppercase font-bold tracking-widest ml-4">Full Name</label>
                    <input 
                      required
                      type="text" 
                      placeholder="Your luxury identification"
                      className="w-full bg-white/5 border border-white/10 rounded-2xl px-6 py-4 text-white focus:outline-none focus:border-luxury-ruby transition-colors"
                      value={inquiryForm.name}
                      onChange={(e) => setInquiryForm({...inquiryForm, name: e.target.value})}
                    />
                  </div>
                  <div className="grid grid-cols-2 gap-4">
                    <div className="space-y-1">
                      <label className="text-[10px] text-gray-500 uppercase font-bold tracking-widest ml-4">Email Address</label>
                      <input 
                        required
                        type="email" 
                        placeholder="contact@luxury.com"
                        className="w-full bg-white/5 border border-white/10 rounded-2xl px-6 py-4 text-white focus:outline-none focus:border-luxury-ruby transition-colors"
                        value={inquiryForm.email}
                        onChange={(e) => setInquiryForm({...inquiryForm, email: e.target.value})}
                      />
                    </div>
                    <div className="space-y-1">
                      <label className="text-[10px] text-gray-500 uppercase font-bold tracking-widest ml-4">Phone Number</label>
                      <input 
                        required
                        type="tel" 
                        placeholder="+1 234 567 890"
                        className="w-full bg-white/5 border border-white/10 rounded-2xl px-6 py-4 text-white focus:outline-none focus:border-luxury-ruby transition-colors"
                        value={inquiryForm.phone}
                        onChange={(e) => setInquiryForm({...inquiryForm, phone: e.target.value})}
                      />
                    </div>
                  </div>
                  <div className="space-y-1">
                    <label className="text-[10px] text-gray-500 uppercase font-bold tracking-widest ml-4">Message</label>
                    <textarea 
                      required
                      rows={4}
                      className="w-full bg-white/5 border border-white/10 rounded-3xl px-6 py-4 text-white focus:outline-none focus:border-luxury-ruby transition-colors resize-none"
                      value={inquiryForm.message}
                      onChange={(e) => setInquiryForm({...inquiryForm, message: e.target.value})}
                    />
                  </div>
                  
                  <button 
                    disabled={isSubmitting}
                    className="w-full bg-luxury-ruby text-white font-black py-5 rounded-full mt-4 hover:bg-red-700 transition-all uppercase tracking-[0.2em] text-xs disabled:opacity-50"
                  >
                    {isSubmitting ? "Transmitting..." : "Send Secure Inquiry"}
                  </button>
                  {submitStatus === "error" && (
                    <p className="text-red-500 text-center text-xs mt-2 uppercase tracking-widest font-bold">Transmission failed. Please try again.</p>
                  )}
                </form>
              )}
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </div>
  );
}
