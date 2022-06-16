const express = require('express')
const router = express.Router();


router.use('/users', require('./userRouter'))
// router.use('/items', require('./itemRouter'))
// router.use('/orders', require('./orderRouter'))

module.exports = router;