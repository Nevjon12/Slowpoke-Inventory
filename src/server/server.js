// require express
const express = require('express');
const app = express();
const cors = require('cors');
const PORT = 3000;
const path = require('path');


app.use(cors());
app.use(express.static(path.resolve(__dirname, '../dist')));
app.use(express.json());

//require routes:

const invRouter = require('./routes/inventory.js')

//SERVE FRONT END
// app.get('/', (req, res) => {
//   return res.status(200).sendFile('index.html', {root: 'src/client'});
// });

app.use('/inventory', invRouter);


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
