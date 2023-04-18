const mongoose = require('mongoose');

const stockItemSchema = new mongoose.Schema({
  itemCode:
   { type: String,
     required: true },

  itemName:
   { type: String, 
    required: true },

  quantity:
   { type: Number,
     required: true },

  cost:
   { type: Number,
     required: true },

  sellingPrice:
   { type: Number,
     required: true },

  supplier: 
  { type: String, 
    required: true },

    manCountry:
   { type: String,
     required: true }
});

const StockItems = mongoose.model('StockItems', stockItemSchema);

module.exports = StockItems;
