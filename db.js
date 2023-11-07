const mongoose=require('mongoose'); //importing the mongoose package

mongoose.connect('mongodb+srv://shrad30:15367322X@cluster0.tzy67ux.mongodb.net/?retryWrites=true&w=majority',{useUnifiedTopology:true,useNewUrlParser:true,}).then((response)=>{console.log('Connected to database');}) .catch((error)=>{console.log(error);}); //place the url in the mongo db site and put ur username and password 
                       


