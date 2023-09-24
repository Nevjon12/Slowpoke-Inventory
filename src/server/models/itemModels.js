require('dotenv').config()
const mongoose = require('mongoose');
const { Schema } = mongoose;

mongoose.connect(process.env.MONGO_URI)

.then(console.log("Succesfully connected to our database!"))
.catch((err) => {console.log(err, 'connection to database failed')});

//Add Schemas for the different type of products
//Add typing and add required, thats wjhy you're getting 
insulationSchema = new Schema({
    name: String,
    rating: Number,
    type: String,
    width: Number,
    length: Number,
    brand: String,
    squareFootage: Number,
    bundleSize: Number
});



// Setup models for the different types of materials

const Insulation = mongoose.model('insulation', insulationSchema);


//export all our models


module.exports = {
    Insulation
}


