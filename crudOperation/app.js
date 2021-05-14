const express=require("express");
const app=express();
app.use(express.json());
require("./db/connection");
const artiCollection=require("./models/articales")
const port=process.env.PORT || 3000;
app.post("/articales",(req,res)=>{
    console.log(req.body);
    const user=new artiCollection(req.body);
    user.save().then(()=>{
        res.status(201).send(user);
    }).catch((e)=>{
        res.status(400).send(e)
    })

});
app.get("/articales", async(req,res)=>{
    try{
    const user= await artiCollection.find();
   res.json(user);
    }
    catch(err){
        res.status(400).send(err);
    }

});
app.patch("/:id",async(req,res)=>{
    try{
        const user=await artiCollection.findById(req.params.id);
        user.name=req.body.name;
        user.author=req.body.author;
        user.desc=req.body.desc;
        const update=await user.save();
        res.json(update);
    }catch(err){
        res.send('error');
    }
})
app.delete("/:id",async(req,res)=>{
    try{
        await artiCollection.findByIdAndRemove(req.params.id).then(()=>{
            const user= artiCollection.find();
            const update= user.save();
            res.json(update);
        })
     
        
    
    }catch(err){
        res.send('error');
    }
})

app.listen(port,()=>console.log(`sending to port ${port}`));