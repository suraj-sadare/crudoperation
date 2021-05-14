const mongoose =require("mongoose");
 mongoose.connect("mongodb+srv://user1:j9ZUoS8yPMl8icmK@cluster0.7b5mv.mongodb.net/articales?retryWrites=true&w=majority",{
 useCreateIndex:true,
 useNewUrlParser:true,
 useUnifiedTopology:true
 }).then(()=>{
    console.log("connection is established");
 }).catch((e)=>{
    console.log("no connection");
 });