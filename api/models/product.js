const mongoose = require('mongoose'),
Schema = mongoose.Schema;

// Defining a new mongoDB Schema for products
let Product = new Schema({
    picture: String,
    description: String,
    cost: Number,
    addItem:String,
    removeItem:String,
    quantity:Number,
    totalAmount: Number,
    totalCost:Number
}, {collection: 'Product'});
module.exports = mongoose.model('Product', Product);