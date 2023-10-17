var express = require('express');
var router = express.Router()
const {getCarList,addcar,upcar}=require('../Controller/CarController')
// router.get('/list',getCarList)
// router.post('/add',addcar)
// router.post('/update/:id',upcar)
module.exports = router;