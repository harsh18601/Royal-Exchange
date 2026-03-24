const mongoose = require('mongoose');

const inquirySchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true },
  phone: { type: String },
  message: { type: String, required: true },
  stoneReference: { type: mongoose.Schema.Types.ObjectId, ref: 'Gemstone' },
  status: { type: String, enum: ['Pending', 'Replied', 'Closed'], default: 'Pending' }
}, { timestamps: true });

module.exports = mongoose.model('Inquiry', inquirySchema);
