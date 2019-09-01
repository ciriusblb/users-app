const express = require('express');
const path = require('path');
const app = express();

const bodyParser = require('body-parser');
const morgan = require('morgan');
const mongoose = require('mongoose');


const apiRouter = require('./routes/api_v1');

mongoose.connect('mongodb://localhost/meandb',{
    // useMongoClient:true
})

//middlewares
app.use(morgan('dev'));
app.use(bodyParser.json());
//static files
app.use(express.static(path.join(__dirname+'/public/dist')));

//routes

app.use('/',apiRouter);


app.listen(3000,()=>{
    console.log("listen to port 3000");
})