const artiCollection = require("../models/articales");
exports.createPost = async(req, res) => {
    console.log(req.body);
    const user = new artiCollection(req.body);
    const existUsername = await artiCollection.findOne({name: req.body.name});
   if (existUsername) {
    return res.status(208).json({
        message:'Already had a content'
       });
   }
    else{
        user.save().then(() => {
            res.status(201).send(user);
        }).catch((e) => {
            res.status(400).send(e)
        })
    }
   
}