require('dotenv').config();
//require express library
const express = require('express');
//require appropriate controllers for middleware
const insulationController = require('../controllers/insulationController');
//begin new instance of a router
const router = express.Router();




//Routes for Main Page

//Test insulation route
router.get('/test', (req,res)=>{
    
    console.log('router is functioning');
    res.sendStatus(200)
});

//Obtain inventory items
router.get('/ins', insulationController.obtainInventory, (req,res) => {
    console.log('Data gathered')
    res.status(200).send(res.locals.data)
});

//Create a new inventory item
router.post('/', insulationController.addInsulation , (req,res) => {

    res.status(200).redirect('/')
});

//Update an existing item
router.patch('/ins/update', insulationController.updateInsulation ,  (req,res) => {
    res.status(200).send(`Put/Update request to ${req.body.name} succesful`)
});

//Delete an existing item
router.delete('/ins/delete/:name-:rating-:type-:width-:length-:brand-:squareFootage',insulationController.deleteAllInsulationByType, (req,res) => {
    res.status(200).send(`Delete request for ${req.body.name} succesful`)
});

//Delete ENTIRE Inventory
router.delete('/clear', insulationController.clearInventory, (req, res)=>{
    res.status(200).end();
})

//export router
module.exports = router;