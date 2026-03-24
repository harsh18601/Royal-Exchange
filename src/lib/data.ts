export interface Gemstone {
  id: string;
  name: string;
  category: string;
  carat: number;
  color: string;
  origin: string;
  price: number;
  image: string;
  rarity: number;
  investment: number;
  description?: string;
  lab?: string;
  certNo?: string;
  dimensions?: string;
  treatment?: string;
  value?: number;
}

export const hardcodedGems: Gemstone[] = [
  {
    id: "1",
    name: "Imperial Pigeon Blood Ruby",
    category: "Ruby",
    carat: 3.42,
    color: "Vivid Red",
    origin: "Burma (Myanmar)",
    treatment: "None (Unheated)",
    price: 85000,
    image: "/luxury_ruby_gemstone_1774331709105.png",
    description: "A breathtaking example of the highest grade of Burmese ruby. This stone exhibits the legendary 'Pigeon Blood' hue with secondary purple undertones that glow even in low light.",
    lab: "GIA",
    certNo: "GIA-2024-8832",
    dimensions: "8.4 x 6.2 x 4.1 mm",
    rarity: 98,
    investment: 95,
    value: 92
  },
  {
    id: "2",
    name: "Royal Velvet Blue Sapphire",
    category: "Sapphire",
    carat: 5.12,
    color: "Royal Blue",
    origin: "Sri Lanka (Ceylon)",
    treatment: "None (Unheated)",
    price: 120000,
    image: "/luxury_sapphire_gemstone_1_1774331732593.png",
    description: "An exceptional Royal Blue sapphire from the historic mines of Ceylon. Incredible saturation and velvet-like appearance make it a true investment masterpiece.",
    lab: "IGI",
    certNo: "IGI-SAP-9921",
    dimensions: "10.2 x 8.4 x 5.8 mm",
    rarity: 94,
    investment: 97,
    value: 90
  },
  {
    id: "3",
    name: "Midnight Azure Sapphire",
    category: "Sapphire",
    carat: 4.85,
    color: "Deep Blue",
    origin: "Madagascar",
    treatment: "None (Unheated)",
    price: 65000,
    image: "/luxury_sapphire_gemstone_2_1774331749919.png",
    description: "A deep, mysterious midnight azure sapphire. Its profound color depth and excellent clarity make it a unique piece for serious collectors.",
    lab: "GRS",
    certNo: "GRS-2024-5541",
    dimensions: "9.2 x 7.1 x 4.8 mm",
    rarity: 89,
    investment: 91,
    value: 88
  }
];
