const artiCollection = require("../models/articales");
exports.deletePost=async (req, res) => {
    const id = await artiCollection.findOne({_id: req.params.id});
    if(!id){
        return res.status(208).json({
            message:'Id is not present to delete the record'
           });
    }
    else
    {
        try {
            console.log(req.params.id);
            const user = await artiCollection.findByIdAndRemove(req.params.id);
            res.send(user);
        } catch (err) {
            res.send('error');
        }
    }
}