const artiCollection = require("../models/articales");
exports.updatePost= async (req, res) => {
    try {
        const user = await artiCollection.findById(req.params.id);
        user.name = req.body.name;
        user.author = req.body.author;
        user.desc = req.body.desc;
        const update = await user.save();
        res.json(update);
    } catch (err) {
        res.send('error');
    }
}