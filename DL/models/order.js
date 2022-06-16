const mongoose = require('mongoose')
require('./user')
require('./item')

const orderSchema = new mongoose.Schema({
    orderDate: {
        type: Date,
        default: Date.now
    },
    total: {
        type: Number
    },
    userId: {
        type: mongoose.SchemaTypes.ObjectId,
        ref: 'user'
    },
    items: [{
        itemId: {
            type: mongoose.SchemaTypes.ObjectId,
            ref: 'item'
        },
        qty: {
            type: Number
        }
    }]

})

let order = {
    total: 90,
    userId: 'askj329oisa0932oi',
    items: [{
        itemId: 'iquw98238uwq',
        qty: 3
    }]
}

const orderModel = mongoose.model('order', orderSchema);
module.exports = orderModel