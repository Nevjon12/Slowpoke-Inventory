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
    try{
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
        });
        next();
    }catch(err) {
        next(err);
    };
};


inventoryController.filterInsulationByRating = (req, res, next) => {
    // req.body should contain the R-rating
    // this middleware should filter and show all 
    try{//find insulation by the rating and return them

        next();
    }catch(err) {
        next(err);
    };
};


inventoryController.updateInsulation = async (req, res, next) => {
    try{
        // await models.Insulation.findOneAndUpdate({ name:})
        next();
    }catch(err){
        next(err);
    };
};


module.exports = inventoryController;