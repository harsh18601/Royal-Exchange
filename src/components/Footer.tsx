"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { Sparkles, Mail, Phone, MapPin, Instagram, Facebook, Twitter } from "lucide-react";
import { getSiteConfig } from "@/lib/contentful";

const Footer = () => {
  const [siteConfig, setSiteConfig] = useState<any>(null);

  useEffect(() => {
    getSiteConfig().then(setSiteConfig);
  }, []);

  return (
    <footer className="bg-luxury-black border-t border-white/5 pt-32 pb-16">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-16 mb-24">
          <div className="lg:col-span-2">
            <Link href="/" className="flex items-center gap-4 mb-8 group">
              <div className="w-12 h-12 bg-luxury-ruby rounded-2xl flex items-center justify-center group-hover:rotate-12 transition-transform duration-500 shadow-xl shadow-red-900/20">
                <Sparkles className="text-white w-6 h-6" />
              </div>
              <div className="flex flex-col">
                <span className="text-2xl font-black tracking-tighter text-white uppercase font-display">
                  {siteConfig?.fields?.siteName ? (
                    <>
                      {siteConfig.fields.siteName.split(' ')[0]} <span className="text-luxury-gold">{siteConfig.fields.siteName.split(' ').slice(1).join(' ')}</span>
                    </>
                  ) : (
                    <>ROYAL <span className="text-luxury-gold">EXCHANGE</span></>
                  )}
                </span>
                <span className="text-[10px] font-bold tracking-[0.4em] text-gray-500 uppercase">Institutional Gemstone Trading</span>
              </div>
            </Link>
            <p className="text-gray-400 text-sm leading-relaxed mb-10 max-w-sm font-light">
              Establishing the global standard in loose Ruby and Sapphire gemstone trading. Excellence, trust, and technological innovation.
            </p>
            <div className="flex items-center gap-6">
              {[Instagram, Twitter, Facebook].map((Icon, i) => (
                <a key={i} href="#" className="text-gray-500 hover:text-luxury-ruby transition-colors group">
                  <Icon className="w-5 h-5 group-hover:scale-110 transition-transform" />
                </a>
              ))}
              <a href="https://t.me/royalexchange" className="flex items-center gap-2 text-[10px] font-black uppercase tracking-widest text-gray-500 hover:text-luxury-gold transition-colors">
                 <span className="p-1 bg-white/5 rounded">TG</span> Telegram Community
              </a>
            </div>
          </div>

          <div>
             <h4 className="text-white font-bold mb-8 text-xs uppercase tracking-[0.3em]">Corporate</h4>
             <ul className="space-y-4 text-sm font-medium">
               <li><Link href="/about" className="text-gray-500 hover:text-luxury-ruby transition-colors uppercase tracking-widest text-[10px]">About Us</Link></li>
               <li><Link href="/contact" className="text-gray-500 hover:text-luxury-ruby transition-colors uppercase tracking-widest text-[10px]">Contact Desk</Link></li>
               <li><Link href="/careers" className="text-gray-500 hover:text-luxury-ruby transition-colors uppercase tracking-widest text-[10px]">Careers</Link></li>
               <li><Link href="/partners" className="text-gray-500 hover:text-luxury-ruby transition-colors uppercase tracking-widest text-[10px]">Partner Network</Link></li>
             </ul>
          </div>

          <div>
            <h4 className="text-white font-bold mb-8 text-xs uppercase tracking-[0.3em]">Compliance</h4>
            <ul className="space-y-4 text-sm font-medium">
              <li><Link href="/privacy" className="text-gray-500 hover:text-luxury-ruby transition-colors uppercase tracking-widest text-[10px]">Privacy Policy</Link></li>
              <li><Link href="/terms" className="text-gray-500 hover:text-luxury-ruby transition-colors uppercase tracking-widest text-[10px]">Terms of Service</Link></li>
              <li><Link href="/aml" className="text-gray-500 hover:text-luxury-ruby transition-colors uppercase tracking-widest text-[10px]">AML Guidelines</Link></li>
              <li><Link href="/kyc" className="text-gray-500 hover:text-luxury-ruby transition-colors uppercase tracking-widest text-[10px]">KYC Requirements</Link></li>
            </ul>
          </div>

          <div>
             <h4 className="text-white font-bold mb-8 text-xs uppercase tracking-[0.3em]">Office HQ</h4>
             <div className="space-y-6">
                <div>
                   <p className="text-white text-[10px] font-black uppercase tracking-widest mb-2 flex items-center gap-2">
                     <MapPin className="w-3 h-3 text-luxury-ruby" /> Switzerland
                   </p>
                   <p className="text-gray-500 text-xs leading-relaxed font-light">
                     77 Diamond Tower, Quai du Seujet 24,<br />Geneva, Switzerland
                   </p>
                </div>
                <div>
                   <p className="text-white text-[10px] font-black uppercase tracking-widest mb-2 flex items-center gap-2">
                     <Mail className="w-3 h-3 text-luxury-gold" /> Inquiries
                   </p>
                   <p className="text-gray-500 text-xs font-light">
                     concierge@royal-exchange.com
                   </p>
                </div>
             </div>
          </div>
        </div>

        <div className="pt-12 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-8">
          <div className="flex flex-col md:flex-row items-center gap-8">
            <p className="text-gray-600 text-[10px] font-bold uppercase tracking-[0.4em]">© 2024 Royal Ruby & Sapphire Exchange</p>
            <div className="h-4 w-px bg-white/10 hidden md:block" />
            <div className="flex items-center gap-6">
               <span className="text-white/20 text-[8px] font-black tracking-[0.5em] uppercase border border-white/5 px-3 py-1 rounded">GIA Certified Vaults</span>
               <span className="text-white/20 text-[8px] font-black tracking-[0.5em] uppercase border border-white/5 px-3 py-1 rounded">IGI Approved</span>
            </div>
          </div>
          <p className="text-[9px] text-gray-700 font-bold uppercase tracking-widest italic text-center md:text-right">
            Trading in precious gemstones involves significant risk of loss. <br />Consult with a financial advisor before acquisition.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
