//require express library
const express = require('express');
//require appropriate controllers for middleware
const inventoryController = require('../controllers/inventoryController');
//begin new instance of a router
const router = express.Router();

router.get('/data', inventoryController.controllerTest, (req,res) => {
    res.status(200).json({Inventory: res.locals.data})
})

router.post('/create', inventoryController.addInsulation , (req,res) => {
    res.status(200).send('Post request succesful')
})

router.patch('/update/:name-:rating-:type-:width-:length-:brand-:squareFootage', inventoryController.updateInsulation ,  (req,res) => {
    res.status(200).send(`Put/Update request to ${req.params.name} succesful`)
})

router.delete('/delete/:name-:rating-:type-:width-:length-:brand-:squareFootage',inventoryController.deleteAllInsulationByType, (req,res) => {
    res.status(200).send(`Delete request for ${req.params.name} succesful`)
})



//export router
module.exports = router;