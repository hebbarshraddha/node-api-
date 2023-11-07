const mongoose = require('mongoose');

const facultySchema = mongoose.Schema({id:Number, name:String, email:String});          // writing what type of data v r storing and what data.....---schema

module.exports = mongoose.model("Faculty",facultySchema);  