const mongoose =require("mongoose");
const validator=require("validator");
const articleSchema=new mongoose.Schema({
    name:{
        type:String,
        required:true,
        minlength:3
    },

        desc:{
            type:String,
            required:true,
            minlength:3
        },
        author:{
            type:String,
            required:true,
            minlength:3
        }
    


});
const artiCollection= new mongoose.model('Mongodb1',articleSchema);
module.exports=artiCollection;