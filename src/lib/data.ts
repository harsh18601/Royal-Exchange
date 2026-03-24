export interface Gemstone {
  id: string;
  name: string;
  category: string;
  caratWeight: number;
  color: string;
  origin: string;
  price: number;
  mainImage: string;
  rarityScore: number;
  investmentScore: number;
  description?: string;
  certificateLab?: string;
  certificateNumber?: string;
  dimensions?: string;
  treatment?: string;
  availability?: string;
  labCertificatePdf?: any;
}