//MIDDLEWARE LIVES HERE
//DONT FORGET TO ADD ASYNC FOR ALL FUNCTIONS THAT WILL PULL FROM THE DATABASE

//require our models
const models = require('../models/itemModels');

const inventoryController = {};

inventoryController.controllerTest = async (req, res, next) => {
    const items = await models.Insulation.find();
    res.locals.data = items;
    console.log('Data gathered');
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
            bundleQuantity: req.body.bundleQuantity
        });
        next();
    }catch(err) {
        next({log: 'Error in addInsulation Middleware', message: {err: 'addnsulation: ERROR : You messed up'}});
    };
};


inventoryController.filterInsulationByRating = (req, res, next) => {
    // req.body should contain the R-rating
    // this middleware should filter and show all 
    try{

        next();
    }catch(err) {
        next(err);
    };
};


inventoryController.updateInsulation = async (req, res, next) => {
    try{
        console.log(JSON.stringify(req.params));
        console.log(JSON.stringify(req.body))
        await models.Insulation.findOneAndUpdate(
            {   
                name: req.params.name, 
                rating: req.params.rating,
                type: req.params.type,
                width : req.params.width,
                length: req.params.length,
                brand: req.params.brand,
                squareFootage: req.params.squareFootage,
            },
            {   
                name: req.body.name, 
                rating: req.body.rating,
                type: req.body.type,
                width : req.body.width,
                length: req.body.length,
                brand: req.body.brand,
                squareFootage: req.body.squareFootage,
            },
            {new: true},
            );
        return next();
    }catch(err){
        next(err);
    };
};

inventoryController.deleteAllInsulationByType = async (req, res, next) => {
    try{
        await models.Insulation.findOneAndDelete(
            {   
                name: req.params.name, 
                rating: req.params.rating,
                type: req.params.type,
                width : req.params.width,
                length: req.params.length,
                brand: req.params.brand,
                squareFootage: req.params.squareFootage
            },
        );
        return next();
    }catch(err){
        next(err);
    };
}


module.exports = inventoryController;