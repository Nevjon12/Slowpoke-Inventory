//MIDDLEWARE LIVES HERE
//DONT FORGET TO ADD ASYNC FOR ALL FUNCTIONS THAT WILL PULL FROM THE DATABASE

//require our models
const models = require('../models/itemModels');

const inventoryController = {};

inventoryController.controllerTest = (req, res, next) => {
    console.log('controller is working!!');
    next();
}

inventoryController.addInsulation = (req,res,next) => {
    console.log(req.body)
    const newInsulation = models.Insulation;
    newInsulation.create({
        name: req.body.name,
        rating: req.body.rating,
        type: req.body.type,
        width: req.body.width,
        length: req.body.length,
        brand: req.body.brand,
        squareFootage: req.body.squareFootage,
    }
    );
    next();
}


module.exports = inventoryController;