"use client";

import { motion } from "framer-motion";
import { Star, Quote } from "lucide-react";

const testimonials = [
  {
    name: "Alexander Sterling",
    role: "Jewellery Manufacturer, London",
    text: "The Royal Exchange has transformed our sourcing. The AI insights provide a level of data transparency we've never seen in the loose gemstone market.",
    rating: 5
  },
  {
    name: "Isabella Rossi",
    role: "Gemstone Collector, Milan",
    text: "Exquisite stones, impeccable service. The GemAI Advisor helped me identify a high-investment grade sapphire that is now the crown jewel of my collection.",
    rating: 5
  },
  {
    name: "David Chen",
    role: "B2B Bulk Buyer, Hong Kong",
    text: "Reliable, fast, and high-quality. The certification process is seamless, and the digital platform is the most advanced in the industry.",
    rating: 5
  }
];

const Testimonials = () => {
  return (
    <section className="py-24 bg-zinc-950">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-4 tracking-tight">Voices of Trust</h2>
          <div className="w-24 h-1 bg-luxury-ruby mx-auto"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((t, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: i * 0.2 }}
              viewport={{ once: true, margin: "-100px" }}
              className="bg-zinc-900 border border-white/5 p-8 rounded-3xl relative group hover:border-luxury-ruby/30 transition-all duration-500"
            >
              <Quote className="absolute top-6 right-6 w-10 h-10 text-white/5 group-hover:text-luxury-ruby/10 transition-colors" />
              <div className="flex gap-1 mb-6">
                {[...Array(t.rating)].map((_, j) => (
                  <Star key={j} className="w-4 h-4 fill-luxury-gold text-luxury-gold" />
                ))}
              </div>
              <p className="text-gray-300 italic mb-8 relative z-10">"{t.text}"</p>
              <div>
                <h4 className="text-white font-bold text-lg">{t.name}</h4>
                <p className="text-luxury-ruby text-sm font-medium">{t.role}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
