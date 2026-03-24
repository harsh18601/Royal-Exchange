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

export interface OwnedStone extends Gemstone {
  purchaseDate: string;
  resaleValue: number;
}

export interface Order {
  id: string;
  stoneName: string;
  status: 'Processing' | 'Shipped' | 'Delivered' | 'Quoted';
  amount: number;
  date: string;
  paymentMethod: string;
}

// Set to empty to show zero state as requested by user
export const MOCK_OWNED_STONES: OwnedStone[] = [];

export const MOCK_ORDERS: Order[] = [];