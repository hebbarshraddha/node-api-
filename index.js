const express = require('express');//older way to import package.... here importing doesnt work using import keyword
const app = express();//create our express app---instanciating the express class
const PORT = 5000;

 const Student = require("./models/StudentModel");
const Faculty=require("./models/FacultyModel.js");

app.use(express.json());                 //specifying in which format v r sending the data... .here json format
require('./db.js')
//app.listen(()=>{}); it accepts 2 parameter -- 1 is functionn.. and other is port name..... or
// app.listen(function(){},5000); hard coding the variable. or
//app.listen(function(){console.log('Server is running on localhost:${PORT}');},PORT); or

//get endpoint
// app.get("/", (req, res) => { res.send("Hello World!...... ") })// 1st parameter is the path and 2nd parameter is the function..
app.get("/students", (req, res) => { res.send("Hello from Students....:)") })
//app.get("/faculty", (req, res) => { res.send("Hello from faculty...") });
app.get("/student", async (req, res) => { 
    
    try { const studentLists = await Student.find();
         res.send(studentLists); } 
         catch (error) {
             console.log(error); } 
            });

app.get("/faculty", async (req, res) => { 
    
                try { const facultyLists= await Faculty.find();
                     res.send(facultyLists); } 
                     catch (error) {
                         console.log(error); } 
                        });

//create the student
app.post("/student", async (req, res) => { 
    try { const data = req.body; 
        const createdStudent = new Student(data);
         await createdStudent.save(); res.send("Student created"); }
          catch (error) { 
            console.log(data); }
         });          // data is encrypted when its sent in post method... it need to be decrypted in the backend..
app.post("/faculty", async(req,res)=>{ 
    try { const data = req.body; 
        const createdFaculty = new Faculty(data);
         await createdFaculty.save(); res.send("Faculty created successfully"); }
          catch (error) { 
            console.log(data); }
         });     
  
//update the student..   //here v r passing  the id   // here the endpoint is student with particular his id ......here ":id" indicates the value is dynamic .....
app.put("/student/:id",async(req,res)=>{
    try{
        const studentId=req.params.id;  // request parameter is sent to access the id ... 
        await Student.updateOne({id: studentId}, {$set: req.body}); //updateOne-method / inbuilt function to update particular document ...............  $set ---to update the particular set of document.....  not entirely replacing the document... by keeping other details as it is...
        res.send("Student updated successfully")
        await Student.updateOne({id:studentId},{$set:req.body});

    }
    catch(error){
        console.log(error);
    }
    //place the id of the student in the database and  
    
})         

app.put("/faculty/:id",async(req,res)=>{
    try{
        const facultyId=req.params.id;  // request parameter is sent to access the id ... 
        await Faculty.updateOne({id: facultyId}, {$set: req.body}); //updateOne-method / inbuilt function to update particular document ...............  $set ---to update the particular set of document.....  not entirely replacing the document... by keeping other details as it is...
        res.send("Faculty updated successfully")
        await Faculty.updateOne({id:facultyId},{$set:req.body});

    }
    catch(error){
        console.log(error);
    }
})

//deletion
app.delete("/student/:id",async (req,res)=>{
    try{
        await Student.deleteOne({id: req.params.id});
        res.send("Student deleted sucessfully");

    }
    catch(error){
        console.log(error);
    }
});

app.delete("/faculty/:id",async (req,res)=>{
    try{
        await Faculty.deleteOne({id:req.params.id});
        res.send("Faculty deleted successfully");
    }
    catch(error){
        console.log(error);
    }

});


//creating a resource...it accepts 2 parameters request+response and function
//app.post()
app.listen(PORT, function () { console.log(`Server is running on localhost:${PORT}`); });     // symbol used is backtick``` start creating a server so that it can be used..

//successfully created our own server




