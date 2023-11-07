const mongoose = require('mongoose');

const studentSchema = mongoose.Schema({id:Number, name:String, email:String, sem:Number, branch:String, phnum:String});          // writing what type of data v r storing and what data.....---schema

module.exports = mongoose.model("Student",studentSchema);  //exporting....in nodejs,........
//now v have successfully created the schema.