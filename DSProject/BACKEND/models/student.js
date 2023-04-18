const mongoose = require('mongoose');

const studSchema = new mongoose.Schema({
  name:
   { type: String,
     required: true },

  address:
   { type: String, 
    required: true },

});

const studs = mongoose.model('studs', studSchema);

module.exports = studs;
