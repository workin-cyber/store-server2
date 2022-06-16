
const orderController = require('../DL/controllers/orderController')
const userController = require('../DL/controllers/userController')
const itemController = require('../DL/controllers/itemController')

async function makeOrder(order) {

    // check if user exist
    const user = await userController.read({_id : order.user })
    if(!user) throw "user does not exist"

    // for on items...
    for(i of order.cart){
        // if exist
        const item = await itemController.readOne(i.item)
        // check stock <<>> qty
        // if(item)
    }
        // 

    //calc total
    // save order to db
    // update to stock
}



module.exports = {makeOrder}


// let order = {
//     total: 100,
//     user: '62a5cf1cfcde91e9eda89e54',
//     cart: [{
//         item: '62a83c0f126ef05e4abc3396',
//         qty: 3
//     }]
// }

// makeOrder(order)