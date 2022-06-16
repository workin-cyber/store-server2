const mongoose = require('mongoose');
const userSchema = new mongoose.Schema({
    firstName: {
        type: String,
        required: true
    },
    lastName: {
        type: String
    },
    password: {
        type: String,
        required: true,
        select: false
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    address: {
        street: { type: String },
        city: { type: String },
        houseNum: { type: String }
    },
    gender: {
        type: String,
        enum: ["female", "male"]
    },
    permission: {
        type: String,
        enum: ["admin", "editor", "viewer"],
        default: "viewer"
    },
    isActive: {
        type: Boolean,
        default: true
    },
    createDate: {
        type: Date,
        default: Date.now
    },
    //TODO: token 

})

const userModel = mongoose.model('user', userSchema);
module.exports = userModel