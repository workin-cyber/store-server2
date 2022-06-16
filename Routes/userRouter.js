const express = require('express')
const router = express.Router()

const userLogic = require('../BL/orderLogic')

router.get('/', async (req, res) => {
    try {
        console.log(req);
        res.send("hello world")
    }
    catch {
        res.status(400).json()
    }
})

router.get('/abc', async (req, res) => {
    console.log(req);
    res.send("sadasd")
})

// router.post('/',async (req, res)=>{
//     req.body
// })


module.exports = router

