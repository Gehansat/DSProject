require('dotenv').config();

const mongoose = require('mongoose');

const connectionStr = "mongodb+srv://breezehna18:1234@cluster0.ocaj5um.mongodb.net/?retryWrites=true&w=majority";

mongoose.connect(connectionStr, {useNewUrlparser: true})
.then(() => console.log('connected to mongodb'))
.catch(err => console.log(err))

mongoose.connection.on('error', err => {
  console.log(err)
})