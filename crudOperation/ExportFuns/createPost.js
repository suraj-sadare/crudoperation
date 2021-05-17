const artiCollection = require("../models/articales");
exports.createPost = (req, res) => {
    console.log(req.body);
    const user = new artiCollection(req.body);
    user.save().then(() => {
        res.status(201).send(user);
    }).catch((e) => {
        res.status(400).send(e)
    })
}