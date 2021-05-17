const artiCollection = require("../models/articales");
exports.getPost = async (req, res) => {
    try {
        const user = await artiCollection.find();
        res.json(user);
    }
    catch (err) {
        res.status(400).send(err);
    }
}