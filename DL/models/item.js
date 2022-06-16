
const mongoose = require('mongoose')

const itemSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    barcode: {
        type: String,
        required: true,
        unique: true
    },
    img: {
        type: String,
    },
    description: {
        type: String,
        // required: true
    },
    inStock: {
        type: Number,
        default: 0
    },
    price: {
        type: Number,
        required: true
    },
    invDate: {
        type: Date,
        default: Date.now
    },
    category: {
        type: String,
        enum: ['garden', 'jewelery', 'home style', 'electronics']
    },
    isActive: {
        type: Boolean,
        default: true
    }

})


const itemModel = mongoose.model('item', itemSchema);
module.exports = itemModel
// exports.itemModel = itemModel

