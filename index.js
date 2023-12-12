const express = require('express');
const app = express();
const port = 1000;
const dotenv = require('dotenv');
dotenv.config();

const db = require('./config/mongoose');

app.use(express.urlencoded());


app.use('/', require('./routes'));

app.listen(port, function(err){
    if(err){
        console.log(err);
    }

    console.log(`Server listening on port: ${port}`);
});