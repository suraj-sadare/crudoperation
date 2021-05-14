const express = require("express");
const app = express();
app.use(express.json());
require("./db/connection");
const userSignup = require("./models/signup");
const bcrypt = require("bcrypt");
const artiCollection = require("./models/articales");
const { Mongoose } = require("mongoose");
const port = process.env.PORT || 3000;
app.post("/articales", (req, res) => {
    console.log(req.body);
    const user = new artiCollection(req.body);
    user.save().then(() => {
        res.status(201).send(user);
    }).catch((e) => {
        res.status(400).send(e)
    })
});
app.get("/articales", async (req, res) => {
    try {
        const user = await artiCollection.find();
        res.json(user);
    }
    catch (err) {
        res.status(400).send(err);
    }
});
app.patch("/:id", async (req, res) => {
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
})
app.delete("/:id", async (req, res) => {
    try {
        console.log(req.params.id);
        const user = await artiCollection.findByIdAndRemove(req.params.id);
        res.send(user);

    } catch (err) {
        res.send('error');
    }
})

// app.post("/signup", (req, res, next) => {
//     console.log(req.body);
//     const user = new userSignup(req.body);
//     user.save().then(() => {
//         res.status(201).send(user);
//     }).catch((e) => {
//         res.status(400).send(e)
//     })
// });
app.post("/signup", (req, res, next) => {
    userSignup.find({ email: req.body.email})
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
                        const user = new userSignup(req.body);
                        user.save().then(() => {
                            res.status(201).send(user);
                            message:"user created"
                        }).catch((e) => {
                            res.status(400).send(e)
                        })
                    }
                });
            }
     });
 });
app.listen(port, () => console.log(`sending to port ${port}`));