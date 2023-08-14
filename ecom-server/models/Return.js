const mongoose = require('mongoose');

const ReturnSchema = new mongoose.Schema({
    order: { type: mongoose.Schema.Types.ObjectId, ref: 'Order' },
    returnReason: String,
    returnStatus: {
        type: String,
        enum: ['Pending', 'Accepted', 'Rejected'],
        default: 'Pending'
    },
    refundAmount: Number,
    refundStatus: {
        type: String,
        enum: ['Pending', 'Processed'],
        default: 'Pending'
    }
});

const Return = mongoose.model('Return', ReturnSchema);

module.exports = Return;
