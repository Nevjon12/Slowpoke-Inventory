//MIDDLEWARE LIVES HERE
//DONT FORGET TO ADD ASYNC FOR ALL FUNCTIONS THAT WILL PULL FROM THE DATABASE

//require our models
/*
Current models:
- Insulation
*/ 

const models = require('../models/itemModels');
const INS = models.Insulation;

const insulationController = {};

insulationController.obtainInventory = async (req, res, next) => {
    const items = await INS.find();
    res.locals.data = JSON.stringify(items);
    console.log(res.locals.data)
    next();
}



insulationController.addInsulation = async (req,res,next) => {
    try{
        console.log('form:',req.body)
        const newInsulation = INS;
        await newInsulation.create({
            name: req.body.name,
            rating: req.body.rating,
            type: req.body.type,
            width: req.body.width,
            length: req.body.length,
            brand: req.body.brand,
            squareFootage: req.body.squareFootage,
            bundleQuantity: req.body.bundleSize
        }).then(()=>{
            next()
        })
    
        
    }catch(err) {
        next({log: 'Error in addInsulation Middleware', message: {err: 'addnsulation: ERROR : You messed up'}});
    };
};


insulationController.filterInsulationByRating = (req, res, next) => {
    // req.body should contain the R-rating
    // this middleware should filter and show all 
    try{

        next();
    }catch(err) {
        next(err);
    };
};


insulationController.updateInsulation = async (req, res, next) => {
    try{
        console.log(JSON.stringify(req.body))
        await INS.findOneAndUpdate(
            {   
                name: req.body.name, 
                rating: req.body.rating,
                type: req.body.type,
                width : req.body.width,
                length: req.body.length,
                brand: req.body.brand,
                squareFootage: req.body.squareFootage,
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

insulationController.deleteAllInsulationByType = async (req, res, next) => {
    try{
        await INS.findOneAndDelete(
            {   
                name: req.body.name, 
                rating: req.body.rating,
                type: req.body.type,
                width : req.body.width,
                length: req.body.length,
                brand: req.body.brand,
                squareFootage: req.body.squareFootage
            },
        );
        return next();
    }catch(err){
        next(err);
    };
};

//Clear FUll Inventory
insulationController.clearInventory = async (req, res, next)=>{
    try {
        console.log('Clearing Inventory');
        next();
    } catch (err) {
        next(err)
    }

}


module.exports = insulationController;