const mongoose = require('mongoose');
require('dotenv').config();

mongoose.connect(process.env.MONGODB_URL);


const Schema = mongoose.Schema;

const ProductSchema = new Schema({
    name: String,
    seller: String,
    quantity: Number,
    price: Number
}, {
    collection: 'product'
});

const ProductModel = mongoose.model('product', ProductSchema);

module.exports = ProductModel;
