//require express library
const express = require('express');
//require appropriate controllers for middleware
const inventoryController = require('../controllers/inventoryController');
//begin new instance of a router
const router = express.Router();

router.get('/', inventoryController.controllerTest, (req,res) => {
    res.status(200).send('Get request succesful')
})

router.post('/',inventoryController.addInsulation , (req,res) => {
    res.status(200).send('Post request succesful')
})

router.put('/:id', (req,res) => {
    res.status(200).send(`Put/Update request to ${req.params.id} succesful`)
})

router.delete('/:id', (req,res) => {
    res.status(200).send(`Delete request to ${req.params.id} succesful`)
})



//export router
module.exports = router;