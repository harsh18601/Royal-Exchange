import Link from "next/link";
import { Sparkles, Mail, Phone, MapPin, Instagram, Facebook, Twitter } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-black border-t border-white/10 pt-20 pb-10">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
        <div className="col-span-1 md:col-span-1">
          <Link href="/" className="flex items-center gap-2 mb-6">
            <div className="w-8 h-8 bg-luxury-ruby rounded-full flex items-center justify-center">
              <Sparkles className="text-white w-5 h-5" />
            </div>
            <span className="text-lg font-bold tracking-tighter text-white">
              ROYAL <span className="text-luxury-ruby">EXCHANGE</span>
            </span>
          </Link>
          <p className="text-gray-400 text-sm leading-relaxed mb-6">
            Establishing the global standard in loose Ruby and Sapphire gemstone trading. Excellence, trust, and technological innovation.
          </p>
          <div className="flex items-center gap-4">
            <a href="#" className="p-2 bg-white/5 rounded-full hover:bg-luxury-ruby transition-colors group">
              <Instagram className="w-4 h-4 text-gray-400 group-hover:text-white" />
            </a>
            <a href="#" className="p-2 bg-white/5 rounded-full hover:bg-luxury-ruby transition-colors group">
              <Facebook className="w-4 h-4 text-gray-400 group-hover:text-white" />
            </a>
            <a href="#" className="p-2 bg-white/5 rounded-full hover:bg-luxury-ruby transition-colors group">
              <Twitter className="w-4 h-4 text-gray-400 group-hover:text-white" />
            </a>
          </div>
        </div>

        <div>
          <h4 className="text-white font-bold mb-6 text-sm uppercase tracking-widest">Company</h4>
          <ul className="space-y-4 text-sm text-gray-400">
            <li><Link href="/about" className="hover:text-luxury-ruby transition-colors">Our Story</Link></li>
            <li><Link href="/catalog" className="hover:text-luxury-ruby transition-colors">Collection</Link></li>
            <li><Link href="/ai-advisor" className="hover:text-luxury-ruby transition-colors">GemAI Advisor</Link></li>
            <li><Link href="/contact" className="hover:text-luxury-ruby transition-colors">Contact Us</Link></li>
          </ul>
        </div>

        <div>
          <h4 className="text-white font-bold mb-6 text-sm uppercase tracking-widest">Support</h4>
          <ul className="space-y-4 text-sm text-gray-400">
            <li><Link href="/faq" className="hover:text-luxury-ruby transition-colors">FAQ</Link></li>
            <li><Link href="/shipping" className="hover:text-luxury-ruby transition-colors">Shipping & Logistics</Link></li>
            <li><Link href="/privacy" className="hover:text-luxury-ruby transition-colors">Privacy Policy</Link></li>
            <li><Link href="/terms" className="hover:text-luxury-ruby transition-colors">Terms & Conditions</Link></li>
          </ul>
        </div>

        <div>
           <h4 className="text-white font-bold mb-6 text-sm uppercase tracking-widest">Newsletter</h4>
           <p className="text-gray-400 text-sm mb-4">Subscribe for exclusive insights into new stone arrivals.</p>
           <form className="relative">
             <input 
               type="email" 
               placeholder="Your Email" 
               className="w-full bg-white/5 border border-white/10 rounded-full px-4 py-3 text-sm focus:outline-none focus:border-luxury-ruby transition-colors"
             />
             <button className="absolute right-1 top-1 bottom-1 px-4 bg-luxury-ruby text-white text-xs font-bold rounded-full hover:bg-red-700 transition-colors uppercase tracking-widest">
               Join
             </button>
           </form>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-4 text-gray-500 text-xs tracking-widest uppercase">
        <p>© 2024 Royal Ruby & Sapphire Exchange. All Rights Reserved.</p>
        <div className="flex items-center gap-6">
          <span>GIA Certified</span>
          <span>IGI Approved</span>
          <span>Global Shipping</span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
