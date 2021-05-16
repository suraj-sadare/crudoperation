const userSignup = require("../models/signup");
const bcrypt = require("bcrypt");
exports.createUser = (req, res, next) => {
    userSignup.find({ email: req.body.email })
        .exec()
        .then(user => {
            if (user.length >= 1) {
                return res.status(409).json({
                    message: "mail exist"
                });
            }
            else {
                bcrypt.hash(req.body.password, 10, (err, hash) => {
                    if (err) {
                        return res.status(500).json({
                            erre: err
                        });
                    }
                    else {
                        const user = new userSignup(
                          {
                            email: req.body.email,
                            password:hash
                          });
                        user.save().then(() => {
                         res.status(201).send(user);  
                        // return res.status(409).json({
                        //     message: "mail created"
                        // });
                        }).catch((e) => {
                            res.status(400).send(e)
                        })
                    }
                });
            }
        });
}