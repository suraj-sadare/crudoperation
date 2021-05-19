const userSignup = require("../models/signup");
exports.deleteUser = async (req, res, next) => {
    const id = await userSignup.findOne({ _id: req.params.id });
    if (!id) {
        return res.status(208).json({
            message: 'Id is not present to delete the user'
        });
    }
    else {
        try {
            console.log(req.params.id);
            const user = await userSignup.findByIdAndRemove(req.params.id);
            res.send(user);
            console.log(user);
        } catch (err) {
            res.send('error');
        }
    }
}