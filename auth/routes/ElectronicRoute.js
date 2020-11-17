var express = require("express");
var router = express.Router();

var controller = require('../controllers/electronic.controller.js')
    
router.get('/electronics', controller.findAll);
router.get('/electronics/:id', controller.findById);
router.post('/storeElectronic', controller.addElectronic);
router.put('/updateElectronic/:id', controller.updateById);
router.delete('/deleteElectronic/:id', controller.removeById);

module.exports = router;