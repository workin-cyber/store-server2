const userModel = require('../models/user')

async function create(data) {
    let res = await userModel.create(data)
    console.log(res);
}
async function read(filter) {
    let res = await userModel.find({...filter,isActive:true})
    console.log(res);
}

async function readOne(id) {
   return await userModel.findById(id)
}

async function update(filter, newData) {
    let res = await userModel.updateOne(filter, newData)
    console.log(res);
}
async function del(filter) {
    let res = await update(filter, { isActive: false })
    console.log(res);
}

module.exports = { create, read,readOne, update, del }
