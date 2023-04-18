const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const cors = require("cors");
const dotenv = require("dotenv");
require("dotenv").config();

const app = express();

//App middleware

app.use(cors());
app.use(bodyParser.json());


//Create Database connection

const PORT = process.env.PORT || 8070;
const URL = process.env.DB_URL;
mongoose.connect(URL,{
    useNewUrlParser: true,
    useUnifiedTopology: true
})

const connection = mongoose.connection;
connection.once("open",() => {
    console.log("Mongodb connection success");
})

//define Item model and connect to Item table
const ItemRouter = require('./routes/StockItems');
const StudentRouter = require('./routes/studs');


app.use('/StockItems', ItemRouter);
app.use('/studs',StudentRouter);

app.listen(PORT, ()=>{
    console.log(`App is running on ${PORT}`);
});
