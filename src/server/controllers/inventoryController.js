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
    const newInsulation = models.Insulation;
    newInsulation.create({
        name: 'R11 16 UNF KNAUF',
        rating: 11,
        type: 'UNFACED',
        width: 16,
        length: 96,
        brand: 'KNAUF',
        squareFootage: 256,
    }
    );
    next();
}


module.exports = inventoryController;