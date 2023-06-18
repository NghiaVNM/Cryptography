const mongoose = require('mongoose');
require('dotenv').config();
mongoose.connect(process.env.MONGODB_URL);


const Schema = mongoose.Schema;

const InvoiceSchema = new Schema({
    customer: String,
    product: String,
    quantity: Number,
    ammout: Number
}, {
    collection: 'invoice'
});

const InvoiceModel = mongoose.model('invoice', InvoiceSchema);

module.exports = InvoiceModel;
