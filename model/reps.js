//model/reps.js
'use strict';
//import dependency
var mongoose = require('mongoose');
var Schema = mongoose.Schema;
//create new instance of the mongoose.schema. the schema takes an 
//object that shows the shape of your database entries.
var RepsSchema = new Schema({
 name: String,
 age: Number,
 gender: String,
 situps: Number,
 pushups: Number
});
//export our module to use in server.js
module.exports = mongoose.model('Reps', RepsSchema);