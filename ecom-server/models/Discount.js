const mongoose = require('mongoose');

const DiscountSchema = new mongoose.Schema({
    code: String,
    discountAmount: Number,
    discountPercentage: Number,
    validityPeriod: Date,
    conditions: String
});

const Discount = mongoose.model('Discount', DiscountSchema);

module.exports = Discount;
