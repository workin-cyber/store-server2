
const orderModel = require('../models/order')

async function create(data) {
    let res = await orderModel.create(data)
    console.log(res);
}
async function read(filter) {
    let res = await orderModel
    .find(filter)
    .populate('userId')
    .populate('items.itemId')
    console.log(res[0]);
}
async function update(filter, newData) {
    let res = await orderModel.updateOne(filter, newData)
    console.log(res);
}


module.exports = { create, read, update }