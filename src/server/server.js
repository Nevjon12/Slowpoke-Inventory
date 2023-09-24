// require express
const express = require('express');
const app = express();
const cors = require('cors');
const PORT = 3000;
const path = require('path');
const bodyParser = require('body-parser');



//App dependencies
app.use(cors());
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json())
app.use(bodyParser.text())

app.use(express.static(path.resolve(__dirname, '../dist')));
app.use(express.json());

//Set Router:

const invRouter = require('./routes/inventoryRouter.js');

//Route
app.use('/', invRouter);


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
app.listen(PORT, console.log(`Server started on port ${PORT}`));

module.exports = app;
