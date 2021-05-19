const artiCollection = require("../models/articales");
exports.updatePost= async (req, res) => {
    const user = await artiCollection.findById(req.params.id);
    if(user.name ===req.body.name&&user.author===req.body.author&&user.desc===req.body.desc){
        return res.status(200).json({
            message:'This info is already present,edit to update'
           });
    }
    else{
        try {
           // const user = await artiCollection.findById(req.params.id);
            user.name = req.body.name;
            user.author = req.body.author;
            user.desc = req.body.desc;
            const update = await user.save();
            res.json(update);
        } catch (err) {
            res.send('error');
        }
    } 
}