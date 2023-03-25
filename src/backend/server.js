console.log('Server file is now running');

// require express
const express = require('express');
const path = require('path');

//instantiate an express server
const app = express();

//add listeners:

//GET
app.get( '/', (req,res)=>{
    res.status(200).sendFile(path.join(__dirname, '../frontend/index.html'))
})


//activate server by askign it to listen to our port. In this case 8080
app.listen(8080);
