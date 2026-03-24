const mongoose = require('mongoose');

const gemstoneSchema = new mongoose.Schema({
  name: { type: String, required: true },
  category: { type: String, required: true, enum: ['Ruby', 'Sapphire'] },
  carat: { type: Number, required: true },
  color: { type: String, required: true },
  origin: { type: String, required: true },
  treatment: { type: String, required: true },
  certification: { type: String, required: true },
  certificateNumber: { type: String, required: true, unique: true },
  price: { type: Number, required: true },
  description: { type: String },
  images: [{ type: String }], // URLs from Cloudinary/S3
  certificatePDF: { type: String },
  availability: { type: String, enum: ['Available', 'Reserved', 'Sold'], default: 'Available' },
  aiScore: {
    value: { type: Number, default: 0 },
    rarity: { type: Number, default: 0 },
    investment: { type: Number, default: 0 }
  }
}, { timestamps: true });

module.exports = mongoose.model('Gemstone', gemstoneSchema);
