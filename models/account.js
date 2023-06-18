const mongoose = require('mongoose');
require('dotenv').config();

mongoose.connect(process.env.MONGODB_URL);

const Schema = mongoose.Schema;

const AccountSchema = new Schema({
    username: String,
    password: String,
    name: {
        type: String,
        default: ''
    },
    phone: {
        type: String,
        default: ''
    },
    address: {
        type: String,
        default: ''
    },
    role: {
        type: Number,
        default: 0
    }
}, {
    collection: 'account'
});

const AccountModel = mongoose.model('account', AccountSchema);

module.exports = AccountModel;

/* role
    0 : customer
    1 : seller
    3 : manager
*/
