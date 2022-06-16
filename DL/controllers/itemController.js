const itemModel = require('../models/item')

async function create(data) {
    let res = await itemModel.create(data)
    console.log(res);
}
async function read(filter) {
    let res = await itemModel.find({...filter,isActive:true})
    console.log(res);
}
async function readOne(id) {
    return await userModel.findById(id)
 }
async function update(filter, newData) {
    let res = await itemModel.updateOne(filter, newData)
    console.log(res);
}
async function del(filter) {
    let res = await update(filter, { isActive: false })
    console.log(res);
}

module.exports = { create, read,readOne, update, del }


let item = {
    name: 'KumKum 22Px1',
    title: 'bla bla bla',
    qty: 13,
    price: 100,
    cost: 45,
    expDate: new Date(2025, 06, 04),
    category: 'electronics'
}

// create(item)

// update({_id : '62a1fce5add23673343da8a1'}, {
//     title: 'lalalalala',
//     price: 150
// })

// read({
//     category:"electronasdsadsadics"
//     })

// del({_id:'62aada6e7b41876aa81320ad'})