const artiCollection = require("../models/articales");
exports.deletePost=async (req, res) => {
    try {
        console.log(req.params.id);
        const user = await artiCollection.findByIdAndRemove(req.params.id);
        res.send(user);
    } catch (err) {
        res.send('error');
    }
}