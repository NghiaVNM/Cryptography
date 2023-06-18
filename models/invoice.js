const mongoose = require('mongoose');

mongoose.connect(process.env.MONGODB_CONNECT_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true
});

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
