//require express library
const express = require('express');
//require appropriate controllers for middleware
const inventoryController = require('../controllers/inventoryController');
//begin new instance of a router
const router = express.Router();

router.get('/', inventoryController.controllerTest, (req,res) => {
    res.status(200).sendFile('index.html', {root: 'src/client'})
})

router.post('/', inventoryController.addInsulation , (req,res) => {
    res.status(200).send('Post request succesful')
})

router.put('/', (req,res) => {
    res.status(200).send(`Put/Update request to ${req.params.id} succesful`)
})

router.delete('/', (req,res) => {
    res.status(200).send(`Delete request to ${req.params.id} succesful`)
})



//export router
module.exports = router;