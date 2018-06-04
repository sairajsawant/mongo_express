const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const InventorySchema = new Schema({

    name: {
        type: String,
        required: true
    },
    quantity: {
        type: Number,
        default: 0
    },
    price: {
        type: Number
    },
    category: [String],
    updated: { type: Date, default: Date.now }
    
});

const Inventory = mongoose.model('inventory', InventorySchema);

module.exports = Inventory;