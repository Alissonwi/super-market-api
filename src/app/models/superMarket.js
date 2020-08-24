const mongoose = require("mongoose");

const SuperMarketSchema = new mongoose.Schema({
  superMarketName: {
    type: String,
    required: true
  },
  superMarketMainImage: {
    type: String,
    required: true
  },
  superMarketAdditionalImages: {
    type: [String],
    required: true
  },
  superMarketAddress: {
    street: { type: String },
    number: { type: Number },
    district: { type: String },
    zip: { type: String },
    country: { type: String },
    city: { type: String },
    state: { type: String },
  },
  superMarketDescription: {
    type: String,
    default: Date.now
  },
  superMarketPhone: {
    type: String,
    default: Date.now
  }
});

module.exports = mongoose.model("superMarket", SuperMarketSchema);
