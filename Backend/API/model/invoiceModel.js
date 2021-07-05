
//User Invoice  Model
const mongoose = require("mongoose");
const invoiceSchema = new mongoose.Schema({
    cust_id: {
        type: Number
    },
    from_date: {
        type: String,

    },
    to_date: {
        type: String,

    },
    bill_from: {
        type: String,
    },
    bill_to:
    {
        type: String,

    },
    txtarea_from: {
        type: String
    },

    txtarea_to: {
        type: String
    },


    items: [
        {
            item_name: { type: String },
            description: { type: String },
            qty: { type: Number },
            rate: { type: Number },
            total: { type: Number },
        }
    ],

    discount: { type: Number },
    tax: { type: Number },
    total_price: { type: Number }

});

module.exports = mongoose.model('userInvoiceData', invoiceSchema);


