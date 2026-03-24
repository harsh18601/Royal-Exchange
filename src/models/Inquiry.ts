import mongoose, { Schema, Document, Model } from 'mongoose';

export interface IInquiry extends Document {
  name: string;
  email: string;
  phone: string;
  message: string;
  stoneReference: string; // Contentful ID
  status: 'pending' | 'responded' | 'closed';
  createdAt: Date;
}

const InquirySchema: Schema = new Schema({
  name: { type: String, required: true },
  email: { type: String, required: true },
  phone: { type: String, required: true },
  message: { type: String, required: true },
  stoneReference: { type: String, required: true }, // Referencing the Contentful gemstone entry
  status: { type: String, enum: ['pending', 'responded', 'closed'], default: 'pending' },
  createdAt: { type: Date, default: Date.now },
});

const Inquiry: Model<IInquiry> = mongoose.models.Inquiry || mongoose.model<IInquiry>('Inquiry', InquirySchema);

export default Inquiry;
