"use client";

import Link from "next/link";
import { Mail, MapPin, Instagram, Facebook, Twitter } from "lucide-react";

const Footer = () => {
  return (
    <footer className="border-t border-white/5 bg-luxury-black pb-16 pt-32">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mb-24 grid grid-cols-1 gap-16 md:grid-cols-2 lg:grid-cols-5">
          <div className="lg:col-span-2">
            <Link href="/" className="group mb-8 flex items-center gap-4">
              <div className="flex h-12 w-12 items-center justify-center rounded-2xl border border-luxury-gold/25 bg-white/5 text-lg font-black tracking-[0.16em] text-luxury-gold shadow-xl shadow-red-900/20 transition-transform duration-500 group-hover:rotate-12">
                G
              </div>
              <div className="flex flex-col">
                <span className="font-display text-2xl font-black uppercase tracking-[0.22em] text-white">
                  GEM<span className="text-luxury-gold">ORA</span>
                </span>
                <span className="text-[10px] font-bold uppercase tracking-[0.4em] text-gray-500">Curated Natural Gemstones</span>
              </div>
            </Link>
            <p className="mb-10 max-w-sm text-sm font-light leading-relaxed text-gray-400">
              Establishing a refined standard in rare Ruby and Sapphire acquisition through heritage, trust, and modern intelligence.
            </p>
            <div className="flex items-center gap-6">
              {[Instagram, Twitter, Facebook].map((Icon, i) => (
                <a key={i} href="#" className="group text-gray-500 transition-colors hover:text-luxury-ruby">
                  <Icon className="h-5 w-5 transition-transform group-hover:scale-110" />
                </a>
              ))}
              <a href="https://t.me/gemora" className="flex items-center gap-2 text-[10px] font-black uppercase tracking-widest text-gray-500 transition-colors hover:text-luxury-gold">
                <span className="rounded bg-white/5 p-1">TG</span> Telegram Community
              </a>
            </div>
          </div>

          <div>
            <h4 className="mb-8 text-xs font-bold uppercase tracking-[0.3em] text-white">Corporate</h4>
            <ul className="space-y-4 text-sm font-medium">
              <li><Link href="/about" className="text-[10px] uppercase tracking-widest text-gray-500 transition-colors hover:text-luxury-ruby">About Us</Link></li>
              <li><Link href="/contact" className="text-[10px] uppercase tracking-widest text-gray-500 transition-colors hover:text-luxury-ruby">Contact Desk</Link></li>
              <li><Link href="/careers" className="text-[10px] uppercase tracking-widest text-gray-500 transition-colors hover:text-luxury-ruby">Careers</Link></li>
              <li><Link href="/partners" className="text-[10px] uppercase tracking-widest text-gray-500 transition-colors hover:text-luxury-ruby">Partner Network</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="mb-8 text-xs font-bold uppercase tracking-[0.3em] text-white">Compliance</h4>
            <ul className="space-y-4 text-sm font-medium">
              <li><Link href="/privacy" className="text-[10px] uppercase tracking-widest text-gray-500 transition-colors hover:text-luxury-ruby">Privacy Policy</Link></li>
              <li><Link href="/terms" className="text-[10px] uppercase tracking-widest text-gray-500 transition-colors hover:text-luxury-ruby">Terms of Service</Link></li>
              <li><Link href="/aml" className="text-[10px] uppercase tracking-widest text-gray-500 transition-colors hover:text-luxury-ruby">AML Guidelines</Link></li>
              <li><Link href="/kyc" className="text-[10px] uppercase tracking-widest text-gray-500 transition-colors hover:text-luxury-ruby">KYC Requirements</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="mb-8 text-xs font-bold uppercase tracking-[0.3em] text-white">Office HQ</h4>
            <div className="space-y-6">
              <div>
                <p className="mb-2 flex items-center gap-2 text-[10px] font-black uppercase tracking-widest text-white">
                  <MapPin className="h-3 w-3 text-luxury-ruby" /> Switzerland
                </p>
                <p className="text-xs font-light leading-relaxed text-gray-500">
                  77 Diamond Tower, Quai du Seujet 24,
                  <br />
                  Geneva, Switzerland
                </p>
              </div>
              <div>
                <p className="mb-2 flex items-center gap-2 text-[10px] font-black uppercase tracking-widest text-white">
                  <Mail className="h-3 w-3 text-luxury-gold" /> Inquiries
                </p>
                <p className="text-xs font-light text-gray-500">concierge@gemora.com</p>
              </div>
            </div>
          </div>
        </div>

        <div className="flex flex-col items-center justify-between gap-8 border-t border-white/5 pt-12 md:flex-row">
          <div className="flex flex-col items-center gap-8 md:flex-row">
            <p className="text-[10px] font-bold uppercase tracking-[0.4em] text-gray-600">(C) 2024 Gemora</p>
            <div className="hidden h-4 w-px bg-white/10 md:block" />
            <div className="flex items-center gap-6">
              <span className="rounded border border-white/5 px-3 py-1 text-[8px] font-black uppercase tracking-[0.5em] text-white/20">GIA Certified Vaults</span>
              <span className="rounded border border-white/5 px-3 py-1 text-[8px] font-black uppercase tracking-[0.5em] text-white/20">IGI Approved</span>
            </div>
          </div>
          <p className="text-center text-[9px] font-bold uppercase tracking-widest text-gray-700 italic md:text-right">
            Trading in precious gemstones involves significant risk of loss.
            <br />
            Consult with a financial advisor before acquisition.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
