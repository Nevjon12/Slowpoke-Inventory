// require express
const express = require('express');
const path = require('path');
const PORT = 3000


//instantiate an express server
const app = express();

app.use(express.static('client'));
app.use(express.json())

//require routes:

const invRouter = require('./routes/inventory.js')

//define routes

app.use('/', invRouter);

app.get('/', (req, res) => {
    return res.status(200).send('../client/index.html');
  });


//ADD catch all
app.use((req,res) => {res.sendStatus(404)});

//ADD Global Error Handler
app.use((err, req, res, next) => {
    const defaultErr = {
      log: 'Express error handler caught unknown middleware error',
      status: 400,
      message: { err: 'An error occurred' }, 
    };
    console.log('global error handle');
    const errorObj = Object.assign({}, defaultErr);
    errorObj.message = err.message;
    console.log(err);
    return res.status(errorObj.status).json(errorObj.message);
  });

//activate server by askign it to listen to our port. In this case 8080
app.listen(PORT, console.log('Server started on port 8080'));

module.exports = app;
